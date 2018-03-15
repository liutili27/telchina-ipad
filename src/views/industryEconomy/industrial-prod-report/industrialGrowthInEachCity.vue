<!-- 各市工业增加值增速 -->
<template>
    <div class="box" :style="{height:(clientHeight - 100)+'px'}">
        <reportTitle :title="title"></reportTitle>
        <!-- 增速 -->
        <div class="speed">
            <div class="aSped" v-for="(item, index) in speedData">
                <p>{{item.name}}</p>
                <div class="line">
                    <p class="yzs">{{speedYzs}}</p>
                    <p class="num">{{item.yzs}}%</p>
                </div>
                <div class="line">
                    <p class="yzs">{{speedLjzs}}</p>
                    <p class="num">{{item.ljzs}}%</p>
                </div>
            </div>
        </div>
        <!-- 折线图 -->
        <div id="myLine" :style="{width:(clientWidth)+'px'}"></div>
        <!-- 表格 -->
        <reportTitle title="2017年各市工业增加值增速详情"></reportTitle>
        <div align="center">
            <table :style="{height:(clientHeight - 700)+'px'}">
                <tr class="tabTitle">
                   <td v-for="(item, index) in tabTitle">{{item}}</td>
                </tr>
                <tr v-for="(item, index) in this.theData.contentArr">
                    <td>{{item.name}}</td>
                    <td>{{item.yzs}}</td>
                    <td>{{item.ljzs}}</td>
                    <td>{{item.zspx}}</td>
                </tr>
            </table>
        </div>
        <div style="height:100px"></div>
    </div>
</template>

<script>
import reportTitle from '@/components/report-title.vue';
import {industrialGrowthInEachCityData} from './industrialGrowthInEachCityData';
export default {
    name: 'name',
    components: {
        reportTitle
    },
    data: function() {	
        return {
            theData: industrialGrowthInEachCityData,
            clientHeight: 0,
            clientWidth: 0,
            title: '2017年各市工业增加值增速',
            myChart: null,
            lineTitle: [],
            lineData_one: [],
            lineData_two: [],
            tabTitle: ['城市', '12月增速%', '12月止累计增速', '累计增速排序'],
            tableName: '表-2017年各市工业增加值增速',
            speedData:[],
            speedYzs: '2017年12月增速',
            speedLjzs: '2017年累计增速'
        }
    },
    mounted() {
        this.witdhHeight();
        // 获取数据
        this.getLineData();
        this.getSpeedData();
        this.$nextTick(()=>{
            this.drawChart();
        })
    },
    methods: {
        witdhHeight () {
            this.clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            this.clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        },
        drawChart() {
            if (this.myChart == null) {
                this.myChart = this.$echarts.init(document.getElementById('myLine'));
            }
            // 绘制图表
            this.myChart.setOption({
                grid: {
                    left: '2%',
                    right: '2%',
                    bottom: '5%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: true,
                    show: true,
                    data: this.lineTitle,
                    axisLabel: {
                        interval: 0,
                        formatter: (value) => {
                            var ss = value.split("");
                            var result = "";
                            for (var i = 0; i < ss.length; i++) {
                                    result += ss[i];
                                if ((i + 1) % 3 == 0) {
                                    result += "\n";
                                }
                            }
                            return result;
                        }
                    },
                    axisLine: {
                        onZero: false,
                        lineStyle: {
                            color: '#fff'
                        }
                    }
                },
                yAxis: {
                    type: 'value',
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        onZero: false,
                        lineStyle: {
                            color: '#fff'
                        }
                    }
                },
                textStyle: {
                    fontWeight: 'bold'
                },
                legend: {
                    right: 70,
                    align: 'left',
                    data:[
                        '2017年12月增速(%)',
                        '2017年累计增速(%)'
                    ],
                    textStyle: {
                        fontWeight: 'bold',
                        color: '#fff',
                        fontSize: 15,
                        padding: [0, 30, 0, 0]
                    }
                },
                series: [{
                    name: '2017年12月增速(%)',
                    symbol: 'circle',
                    symbolSize: 10,
                    data: this.lineData_one,
                    type: 'line',
                    itemStyle: {
                        normal: {
                            color: '#4D98A0',
                            fontWeight: 'bold'
                        }
                    },
                    lineStyle: {
                        normal: {
                            width: 3
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            fontWeight: 'bold'
                        }
                    }
                },
                {
                    name:'2017年累计增速(%)',
                    symbol: 'circle',
                    symbolSize: 10,
                    data: this.lineData_two,
                    type: 'line',
                    itemStyle: {
                        normal: {
                            color: '#cc6633',
                            fontWeight: 'bold'
                        }
                    },
                    lineStyle: {
                        normal: {
                            width: 3
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    }
                }
                ]
            });
        },
        // 获取折线图数据
        getLineData () {
            for (var i = 1; i < this.theData.contentArr.length - 3; i++) {
                let name = this.theData.contentArr[i].name;
                this.lineTitle.push(name);
                let data_one = this.theData.contentArr[i].yzs;
                this.lineData_one.push(data_one);
                let data_two = this.theData.contentArr[i].ljzs;
                this.lineData_two.push(data_two);
            }
        },
        // 获取增速数据
        getSpeedData () {
            for (var i = 0; i < this.theData.contentArr.length; i++) {
                let str = this.theData.contentArr[i].zspx;
                if (typeof str == 'string') {
                    let name = this.theData.contentArr[i].name;
                    let yzs = this.theData.contentArr[i].yzs;
                    let ljzs = this.theData.contentArr[i].ljzs;
                    let data = {
                        name: name,
                        yzs: yzs,
                        ljzs: ljzs
                    }
                    this.speedData.push(data);
                }
            }
        }
    },
    destroyed () {
        this.myChart.dispose();
    }
}
</script>

<style scoped>
.box{
    width: 100%;
    flex-direction: row-reverse;
    overflow: scroll;
}

.speed{
    display: flex;
    text-align: center;
    width: 100%;
    font-size: 13px;
    margin-bottom: 10px;
    margin-top: -20px;
}

.aSped{
    width: 20vw;
    margin-left: 2.5vw;
    color: #fff;
    font-size: 1.4vw;
    font-weight: bold;
}

.line{
    font-weight: bold;
    display: flex;
    margin-top: -15px;
}

.line .yzs{
    color: #fff;
    width: 12vw;
    background-color: #3296db;
    line-height: 25px;
    text-align: left;
    padding-left: 10px;
}

.line .num{
    background-color: #f2f2f2;
    width: 8vw;
    color: #000;
    line-height: 25px;
}

#myLine{
    height: 350px;
}

table{
    width: 94%;
    text-align: center;
    border-collapse: collapse;
    border-spacing: 0;
    background-color: #fff;
}

table td{
    width: 31vw;
    height: 40px;
    border-bottom: solid 1px #e8e8e8;
    border-right: solid 1px #e8e8e8;
    border-left: solid 1px #e8e8e8;
}

.tabTitle td{
    background-color: #3296db;
    border-left: solid 1px #3296db;
    border-right: solid 1px #3296db;
    border-bottom: none;
    color: #fff;
    font-weight: bold;
}

</style>