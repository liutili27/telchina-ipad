<!-- 工业行业增加值增速 -->
<template>
    <div class="box" :style="{height:(clientHeight - 110)+'px'}">
        <reportTitle :title="title"></reportTitle>
        <!-- 折线图 -->
        <div id="myLine" :style="{width:(clientWidth)+'px'}"></div>
        <!-- 表格 -->
        <reportTitle :title="tableName"></reportTitle>
        <div align="center">
            <table class="tab">
                <tr class="tabTitle">
                    <td border:none v-for="(item, index) in tabTitle" :key="index">{{item}}</td>
                </tr>
                <template v-for="(v,i) in this.theData.contentArr">
                    <tr v-if="v.name == '七个重点产业合计'" style="font-weight: bold;" >
                        <td>{{v.name}}</td>
                        <td >{{v.yzs}}</td>
                        <td >{{v.ljzs}}</td>
                    </tr>
                    <tr v-else>
                        <td>{{v.name}}</td>
                        <td >{{v.yzs}}</td>
                        <td >{{v.ljzs}}</td>
                    </tr>
                    <template  v-if="v.sonArr" >
                        <tr v-for="(n,k) in v.sonArr" class="sonTab">
                            <td>{{n.name}}</td>
                            <td>{{n.yzs}}</td>
                            <td>{{n.ljzs}}</td>
                        </tr>
                    </template>
                </template>
            </table>
        </div>
        <div style="height:100px"></div>
    </div>
</template>

<script>
import reportTitle from '@/components/report-title.vue';
import {growthOfIndustrialIndustryData} from './growthOfIndustrialIndustryData';
export default {
    name: 'name',
    components: {
        reportTitle
    },
    data: function() {	
        return {
            theData: growthOfIndustrialIndustryData,
            myChart: null,
            tableName: '2017年主要工业行业增加值增速详情',
            title: '2017年主要工业行业增加值增速',
            lineTitle: [],
            lineData_one: [],
            lineData_two: [],
            clientHeight: 0,
            clientWidth: 0,
            tabTitle: ['行业', '12月增速%', '12月止累计增速']
        }
    },
     mounted() {
        this.witdhHeight();
        // 获取数据
        this.getLineData();
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
            for(var i = 0; i < this.theData.contentArr.length - 1; i++){
                let name = this.theData.contentArr[i].name;
                if (name.indexOf("合计") == -1) {
                    this.lineTitle.push(name);
                    let data_one = this.theData.contentArr[i].yzs;
                    this.lineData_one.push(data_one);
                    let data_two = this.theData.contentArr[i].ljzs;
                    this.lineData_two.push(data_two);
                }
            }
        }
    },
    destroyed() {
        this.myChart.dispose();
    }
}
</script>

<style scoped>
.box{
    width: 100%;
    flex-direction: row-reverse;
    overflow: scroll;
    padding-bottom: 110px;
}

#myLine{
    height: 400px;
    margin-bottom: 70px;
}

.tableP{
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 1.8vw;
    color: #fff;
}

table{
    width: 94%;
    text-align: center;
    border-collapse: collapse;
    border-spacing: 0;
    background-color: #fff;
    margin-bottom: 100px;
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

.sonTab td:nth-of-type(1){
    padding-left: 20vw;
    text-align: left;
    width: 10vw;
}

</style>