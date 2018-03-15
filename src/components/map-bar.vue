<!-- 地图上显示条形图的组件 -->
<template>
    <div>
        <div style="position:absolute" :style="legendPosition">
            <div v-for="(item,index) in xAxis" style="margin-top:1.5vw">
                <div style="display:flex;flex-direction:row;margin:10px;height:1.5vh;">
                    <div v-if='color[index]!=null' :style="{width:'1.5vw', background:color[index],opacity:0.8}">
                        
                    </div>
                    <div style="line-height:1.5vh;color:#fff;font-size:1.5vw">
                        &nbsp;{{item}}
                    </div>
                </div>
            </div>
        </div>
        <div v-if="showLabel" v-for="(item,index) in barLabel" :style="{position:'absolute',top:item.point[1]+'px',left:item.point[0]+'px','margin-top':'2.5vw'}">
                <div style="color:#fff;font-size:1.0vw">{{item.label}}</div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        myChart: null,
        data: {
            type: Array,
            default: function() {
                return [];
            }
        },
        color: {
            type: Array,
            default: function() {
                return [];
            }
        },
        pointValueKey: {
            type: String,
            default: "value"
        },
        yAxisKey: {
            type: String,
            default: "yvalue"
        },
        xAxis: {
            type: Array,
            default: function() {
                return [];
            }
        },
        legendPosition: {
            type: Object,
            default: function() {
                return {
                    bottom: '18vh',
                    left: '25vw'
                };
            }
        },
        showLabel: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            barLabel: [] // {lable:xx,point:[]}
        };
    },
    mounted() {
        this.$nextTick(() => {
            this.init();
        });
    },
    watch: {
        data() {
            this.init();
        }
    },
    methods: {
        init() {
            if (this.myChart == null) {
                console.log("myChart is null.");
                return null;
            }
            var option = this.handleData(this.myChart.getOption(), this.data, this.myChart, this.xAxis, this.color, this.yAxisKey);
            this.myChart.setOption(option);
        },
        toThousands(num) {
            return num && num.toString().replace(/^\d+/g, (m) => m.replace(/(?=(?!^)(\d{3})+$)/g, ','));
        },
        // 旧option,地图数据，echarts实例，x轴的数组，y轴的数组值在地图数据中是什么key索引的。返回一个新的Option
        handleData(oldOption, mapData, myChart, xAxisArray, color, yAxisKey) {
            // 计算mapData中value的最大值，以便条形图标示y轴的最大刻度值，以让它长短不一
            var maxValue = 0;
            for (let i = 0; i < mapData.length; i++) {
                var sss = mapData[i][yAxisKey];
                for (let a = 0; a < sss.length; a++) {
                    if (sss[a] > maxValue) {
                        maxValue = sss[a];
                    }
                }
            }
            var grid = [];
            var xAxis = [];
            var yAxis = [];
            var series = [];
            for (var i = 0; i < mapData.length; i++) {
                var bar = mapData[i];
                var p = myChart.convertToPixel('geo', bar[this.pointValueKey]);
                this.barLabel.push({label: bar.name, point: [p[0] - 20, p[1]]});
                grid.push({
                    width: xAxisArray.length * 2 + "%",
                    height: "7%",
                    left: p[0] - 20,
                    top: p[1] - 30
                }); // 先将地理坐标转换成网格
                xAxis.push({
                    gridIndex: i, // 代表显示在那个位置
                    type: 'category',
                    show: false,
                    data: xAxisArray
                }); // x轴
                yAxis.push({
                    gridIndex: i,
                    type: 'value',
                    show: false,
                    max: maxValue
                }); // x轴
                for (var a = 0; a < bar[yAxisKey].length; a++) {
                    series.push({
                        xAxisIndex: i,
                        yAxisIndex: i,
                        name: '',
                        type: 'bar',
                        barWidth: '70%',
                        data: [bar[yAxisKey][a]],
                        barMinHeight: 0,
                        label: {
                            normal: {
                                show: true,
                                position: 'top',
                                color: 'rgba(255, 255, 255, 1)',
                                fontSize: 10,
                                formatter: (a) => {
                                    // 分隔千分符
                                    var ss = this.toThousands(a.value);
                                    if (ss.toString().length > 3 && a.seriesIndex % 2 == 0) {
                                        ss += '\n';
                                    }
                                    return ss;
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: 'rgba(' + parseInt("0x" + color[a].substring(1, 3)) + ',' + parseInt("0x" + color[a].substring(3, 5)) + ',' + parseInt("0x" + color[a].substring(5, 8)) + ',0.5)',
                                borderWidth: 1,
                                borderColor: color[a]
                                // opacity: 0.5
                            }
                        }

                    });
                };
            };
            oldOption.xAxis = xAxis;
            oldOption.yAxis = yAxis;
            oldOption.series = series;
            oldOption.grid = grid;
            myChart.clear();
            return oldOption;
        }
    }
};
</script>
<style scoped>
    
</style>