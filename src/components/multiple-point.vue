<!-- 地图上打点组件 -->
<template>
<div>
    <div v-if="datahadhandel==true" v-for="(array,index) in mydata" :key="index">
        <div v-for="item in array">
            <infowindow v-if="item.pvalue!=null" :show="item.divshow==true" :pointLeft="item.pvalue[0]" :pointTop="item.pvalue[1]" @close="hiddenAllInfoWindow" :colorConfig="colorConfig" :infowindowWidth="infowindowWidth">
                <slot name="infoContent" :data="item"></slot>
            </infowindow>
            <div class="point-lable" v-if="item.pvalue!=null&&showPointLable==true" :style="{'pointer-events':'none',color:'#fff',position:'absolute',left:(item.pvalue[0]-pointLableOffset.left)+'px',top:(item.pvalue[1]+pointLableOffset.top)+'px'}">
                <slot name="pointLable" :data="item"></slot>
            </div>
        </div>
    </div>
    <div v-if="legendShow!=false" style="position:absolute;color:#fff;" :style="legendPosition">
        <!-- 等于true，使用默认的图例 -->
        <div v-if="legendShow==true" v-for="(item,index) in defaultProps" class="legend" :key="index">
            <i v-if="item.icon==null||item.icon==''" class="fa fa-circle" :style="{color:item.color}" />
            <img else :src="item.icon" style="height:60%">
            <div class="legend-label">{{item.label}}</div>
        </div>
        <div v-if="legendShow=='custom'">
            <!-- 使用卡槽自定义图例 -->
            <slot name="legendContent"></slot>
        </div>
    </div>
    <!-- 高亮点 -->
    <div :style="{position:'absolute','pointer-events':'none',left:'0px',top:'0px',height:'100%',width:'100%',border:'2px'}">
        <svg style="opacity:0.3" width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<circle :cx="hightLightPoint[0]" :cy="hightLightPoint[1]" r="15" stroke="#12C4B3" stroke-width="12" fill="none"/>
		</svg>
    </div>
</div>
</template>
<script>
import infowindow from '@/components/infowindow';
export default {
    components: {
        infowindow
    },
    props: {
        myChart: null, // echarts地图实例
        data: {
            type: null, // 可以是个Object或者是一个array
            default: function() {
                return {};
            }
        },
        defaultProps: { // {icon:xx,label:xx,key:xx},在data有多个不一样的点时，每个Key对应的
            type: Array,
            default: function() {
                return [];
            }
        },
        showPointLable: { // 是否显示点下的label
            type: Boolean,
            default: false
        },
        pointLableOffset: {
            type: Object,
            default: function() {
                return {
                    left: 15,
                    top: 20
                };
            }
        },
        legendShow: { // 是否显示图例
            type: null, // 可以传入boolean或者字符串，传入custom代表自定义图例
            default: false
        },
        legendPosition: { // 图例的位置样式
            type: Object,
            default: function() {
                return {
                    left: 25 + 'vw',
                    top: 35 + 'vw'
                };
            }
        },
        showInfoWindow: { // 那一个窗口弹窗
            type: Object,
            default: function() {
                return {
                    key: null,
                    index: null
                };
            }
        },
        colorConfig: { // 弹出窗口的颜色
            type: Object,
            default: function() {
                return {
                    connectLine: '#00FFCC', // 连接线
                    border: '#00FFCC', // 两边边框
                    background: 'rgba(12, 147, 158, 0.9)' // 底部
                };
            }
        },
        infowindowWidth: {
            type: null,
            default: -1
        }
    },
    data() {
        return {
            datahadhandel: false,
            mydata: [],
            hightLightPoint: [-100, -100] // 高亮点
        };
    },
    computed: {

    },
    watch: {
        defaultProps() {
            this.init();
        },
        data() {
            this.init();
        },
        showInfoWindow() {
            var key = this.showInfoWindow.key;
            var index = this.showInfoWindow.index;
            if (key !== null && index !== null) {
                this.infoWindowShow(key, index);
            }
        }
    },
    mounted() {
        setTimeout(() => { // 有延时函数可以防止卡顿，可能是页面还没渲染完成就
            this.init();
            // 点击事件只绑定一次
            this.myChart.on('mouseover', (params) => {
                //  console.log(params);
                this.scatterClick(params);
            });
        }, 20);
    },
    methods: {
        init() {
            this.hightLightPoint = [-100, -100]; // 初始化
            this.mydata = JSON.parse(JSON.stringify(this.data));
            if (this.myChart === null) {
                console.log("myChart cant not be null");
                return;
            }
            var series = [];
            for (var i = 0; i < this.defaultProps.length; i++) {
                var key = this.defaultProps[i].key;
                if (this.mydata[key] !== null) {
                    var data = this.mydata[key];
                    if (this.defaultProps[i].color == null) {
                        this.defaultProps[i].color = this.getRandomColor();
                    }
                    var symbolImg = '';
                    if (this.defaultProps[i].icon != null && this.defaultProps[i].icon != '') {
                        symbolImg = this.defaultProps[i].icon;
                        this.defaultProps[i].color = 'none';
                    }

                    series.push({
                        name: key,
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        zlevel: i, // 如果还需要在外面放图层的话可能需要判断一下zlevel
                        symbolSize: symbolImg == '' ? 15 : 25,
                        symbol: symbolImg == '' ? '' : 'image:// ' + symbolImg,
                        itemStyle: {
                            normal: {
                                color: symbolImg == '' ? this.defaultProps[i].color : '',
                                borderWidth: 50,
                                borderColor: 'rgba(128, 128, 128, 0)'
                            }
                            //  emphasis:{
                            //      scolor:symbolImg==''?this.defaultProps[i].color:'',
                            //      sborderWidth:20,
                            //      sborderColor:symbolImg==''?this.defaultProps[i].color:'',
                            //      sopacity:0.6
                            //  }
                        },
                        data: data
                    });
                    series.push({ // 这个的目的就是为了转换坐标
                        name: key,
                        type: 'custom',
                        coordinateSystem: 'geo',
                        renderItem: (params, api) => {
                            // 在渲染的时候转换坐标，也可以在外部先转换，但是在外部转换后比较死
                            var p = api.coord(this.mydata[params.seriesName][params.dataIndex].value);
                            this.$set(this.mydata[params.seriesName][params.dataIndex], "pvalue", p);
                            //  console.log(params)
                        },
                        data: data
                    });
                };
            }
            var option = this.myChart.getOption();
            option.series = series;
            this.myChart.clear();
            this.myChart.setOption(option);
            // console.log(this.myChart.getOption())
            this.datahadhandel = true;
            // 点击事件不能放在Init里面，这样会使this.myChart这个实例重复执行很多次点击事件
            // this.myChart.on('click',  (params)=> {
            //      // console.log(params);
            //     this.scatterClick(params);
            // });
        },
        getRandomColor() {
            return '#' + Math.floor(Math.random() * 16777215).toString(16);
        },
        scatterClick(params) {
            if (params.componentSubType != 'scatter') { // 其点击的是地图的点
                return;
            }
            this.infoWindowShow(params.seriesName, params.dataIndex);
        },
        addHightLight(key, dataIndex) {
            if (key === null) {
                this.hightLightPoint = [-100, -100];
                return;
            }
            this.hightLightPoint = this.mydata[key][dataIndex].pvalue;
        },
        infoWindowShow(key, dataIndex) {
            this.hiddenAllInfoWindow();
            this.$set(this.mydata[key][dataIndex], 'divshow', true);
            this.addHightLight(key, dataIndex);
        },
        hiddenAllInfoWindow() {
            this.addHightLight(null);
            for (var key in this.mydata) {
                var array = this.mydata[key];
                for (var i = 0; i < array.length; i++) {
                    this.$set(array[i], 'divshow', false);
                }
            }
        }
    }
};
</script>
<style scoped>
.legend {
    color: #fff;
    margin-top: 0.6vw;
    font-size: 1.5vw;
    height: 3vw;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.legend-label {
    margin-left: 3px;
    font-size: 1.4vw;
}

.point-lable {
    font-size: 1.2vw;
}
</style>