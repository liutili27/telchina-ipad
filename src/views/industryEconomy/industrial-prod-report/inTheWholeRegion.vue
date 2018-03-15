<!-- 全区各产生产总产值 -->
<template>
    <div class="box">
        <swiper :options="swiperOption">
            <swiper-slide>
                <div>
                    <reportTitle class="tableTit" title="2017年三次产业生产总值占比"></reportTitle>
                    <div id="yuan"></div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div>
                    <reportTitle class="tableTit" title="2017年三大产业生产总值详细信息"></reportTitle>
                    <table class="tab" align="center">
                        <tr class="tabTitle">
                            <td border:none v-for="(item, index) in titleArray">{{item}}</td>
                        </tr>
                        <template v-for="(v,i) in this.theData.contentArr">
                            <tr>
                                <td >{{v.name}}</td>
                                <td >{{v.ylj}}</td>
                                <td >{{v.tbzz}}</td>
                                <td >{{v.ldzz}}</td>
                                <td >{{v.gxl}}</td>
                            </tr>
                            <template  v-if="v.sonArr" >
                                <tr v-for="(n,k) in v.sonArr" class="sonTab">
                                    <td>{{n.name}}</td>
                                    <td>{{n.ylj}}</td>
                                    <td>{{n.tbzz}}</td>
                                    <td>{{n.ldzz}}</td>
                                    <td>{{n.gxl}}</td>
                                </tr>
                            </template>
                        </template>
                    </table>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import {inTheWholeRegionData} from './inTheWholeRegionData';
import reportTitle from '@/components/report-title.vue';
import {swiper, swiperSlide} from 'vue-awesome-swiper'; // 滑动视图
import util from '@/libs/util';
export default {
    name: 'name',
    components: {
        reportTitle,
        swiper,
        swiperSlide
    },
    data: function() {	
        return {
            titleArray: ['指 标', '1-12月累计 (亿元)', '同比增长%', '拉动GDP增 长(百分点)', '拉动GDP增长的贡献率 (%)'],
            theData: inTheWholeRegionData,
            myChart: null,
            testArr: [],
            clientHeight: 0,
            clientWidth: 0,
            swiperOption: {
                direction: 'vertical' // 竖屏滑动
            }
        }
    },
    mounted() {
        console.log("ssss")
        this.witdhHeight();
        this.$nextTick(()=>{
            this.drawChart();
        })
    },
    methods: {
        // 科学计数法
        formatNumber(num) {
            return util.formatNumber(num);
        },
        drawChart() {
            // 基于准备好的dom，初始化echarts实例
            if (this.myChart == null) {
                this.myChart = this.$echarts.init(document.getElementById('yuan'));
            }
            // 绘制图表
            this.myChart.setOption({
                series: [{
                    name: '',
                    startAngle: 180, // 旋转角度
                    type: 'pie',
                    radius: '70%',
                    center: ['50%', '50%'],
                    data: [
                        {value: this.theData.contentArr[1].ylj,
                            name: this.theData.contentArr[1].name},
                        {value: this.theData.contentArr[2].ylj,
                            name: this.theData.contentArr[2].name},
                        {value: this.theData.contentArr[3].ylj,
                            name: this.theData.contentArr[3].name}
                    ],
                    color: [
                        '#4d98a0',
                        '#f66605',
                        '#3296db'
                    ],
                    label: {
                        normal: {
                            color: '#fff',
                            position: 'outside',
                            fontSize: 14,
                            formatter: (p) => {
                                let i = p.dataIndex + 1;
                                let array = this.theData.contentArr[i].sonArr;
                                let string = p.name + ' 占比: ' + p.percent + '%\n 1-12月累计:' + p.value + '亿元';
                                if (array.length) {
                                    string += '\n';
                                    let addStr = '( 其中: ';
                                    for (var j = 0; j < array.length; j++) {
                                        // console.log(array[j].ylj.type);
                                        if (typeof array[j].ylj == 'number') {
                                            let num = array[j].ylj / this.theData.contentArr[0].ylj * 100;
                                            // 保留两位小数
                                            num = num.toFixed(2);
                                            addStr = addStr + array[j].name + num + '%, 1-12月累计: ' + array[j].ylj + '亿元 )';
                                            // console.log(addStr + array[j].name + num);
                                            string += addStr + '\n';
                                        }
                                    }
                                }
                                return string;
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: true
                        }
                    }
                }]
            });
        },
        witdhHeight () {
            this.clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            this.clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        }
    },
    destroyed () {
        this.myChart.dispose();
    }
}
</script>

<style scoped>

.swiper-container{
    height: 100vh;
}

.swiper-slide {
    height: 100vh;
}

.tableTit{
    text-align: left;
}

.tab{
    text-align: center;
    border-collapse: collapse;
    border-spacing: 0;
    width: 96%;
}

.tab tr{
    height: 50px;
}

.tab td{
    height: 30px;
    border-bottom: solid 1px #ccc;
    background-color: #fff;
    border-left: solid 1px #ccc;
    border-right: solid 1px #ccc;
    font-size: 14px;
}

.tabTitle td{
    background-color: #3296db;
    border-left: solid 1px #3296db;
    border-right: solid 1px #3296db;
    color: #fff;
    font-weight: bold;
}

.sonTab td:nth-of-type(1){
    padding-left: 150px;
    text-align: left;
    width: 10vw;
}

#yuan{
    width: 100vw;
    height: 65vh;
}

</style>