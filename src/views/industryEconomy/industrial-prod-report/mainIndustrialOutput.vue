<!-- 主要工业行业总产值 -->
<template>
    <div :style="{overflow:'scroll',width:clientWidth+'px',height:clientHeight+'px'}">
        <reportTitle :title="'2017年主要工业行业总产值'"></reportTitle>

        <!-- <center><div class="chart-title">图-2017年主要工业行业总产值</div></center> -->
        <div id="barChart" :style="{width:clientWidth+'px',height:'450px'}"></div>
        
        
        <reportTitle :title="'2017年主要工业行业总产值同比增长值'"></reportTitle>
        <div id="lineChart" :style="{width:clientWidth+'px',height:'450px'}"></div>
    
        <reportTitle :title="'2017年主要工业行业总产值'"></reportTitle>
        <!-- <center><div class="chart-title">表-2017年主要工业行业总产值</div></center> -->
        <reportTable :column="column" :data="tableData"></reportTable>
        <div style="height:200px"></div>
    </div>
</template>
<script>
import reportTable from '@/components/report-table.vue';
import {ouputData} from './mainIndustrialOutputData';
import reportTitle from '@/components/report-title.vue';
export default {
    components: {
        reportTable,
        reportTitle
    },
    data() {
        return {
            myChart: null,
            clientHeight: 0,
            clientWidth: 0,
            column: [
                {
                    title: '行业',
                    key: 'industryName'
                },
                {
                    title: '12月止累计（亿元）',
                    key: 'decAsOfThisYear'
                },
                {
                    title: '同比±%',
                    key: 'increase'
                },
                {
                    title: '2016年累计（亿元）',
                    key: 'totalLastYear'
                }
            ],
            data: ouputData.barData,
            tableData: ouputData.tableData
        };
    },
    mounted() {
        this.getWitdhHeight();
        this.$nextTick(() => {
            this.init();
        });
    },
    methods: {
        init() {
            if (this.myChart == null) {
                this.myChart = this.$echarts.init(document.getElementById('barChart'));
            }
            this.myChart.setOption(this.getBarOption());
            if (this.lineChart == null) {
                this.lineChart = this.$echarts.init(document.getElementById('lineChart'));
            }
            this.lineChart.setOption(this.getLineOption());
        },
        getBarOption() {
            var barData = []; // 条形图数据，根据表格的数据来生成
            var xAxisData = []; // x轴数据，地市名字
            var lineData = []; // 线图数据，根据表格的数据来生成
            for (let i = 0; i < this.data.length; i++) {
                // 把千分符变回来
                let ddd = this.data[i].decAsOfThisYear.replace(/,/g, "");
                barData.push(ddd);
                xAxisData.push(this.data[i].industryName);
                let lll = this.data[i].increase.replace(/,/g, "");
                lineData.push(lll);
            }
            var option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                // title: {
                //     left: 'center',
                //     text: '图-2017年主要工业行业总产值',
                //     textStyle: {
                //         color: '#fff'
                //     }
                // },
                grid: {
                    left: '4%',
                    right: '4%',
                    bottom: '5%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: xAxisData,
                        boundaryGap: true,
                        show: true,
                        axisLabel: {
                            interval: 0,
                            color: '#fff',
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
                            lineStyle: {
                                color: '#fff'
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '亿元',
                        axisLabel: {
                            formatter: '{value}',
                            color: '#fff'
                        },
                        splitLine: {
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#fff'
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: '',
                        type: 'bar',
                        barWidth: '60%',
                        data: barData,
                        itemStyle: {
                            normal: {
                                color: '#3398DB'
                            }
                        },
                        label: {
                            normal: {
                                show: true,
                                position: 'top',
                                color: '#fff',
                                formatter: (v) => {
                                    var ss = this.toThousands(v.value);
                                    return ss;
                                }
                            }
                        }
                    }
                ]
            };
            return option;
        },
        getLineOption() {
            var barData = []; // 条形图数据，根据表格的数据来生成
            var xAxisData = []; // x轴数据，地市名字
            var lineData = []; // 线图数据，根据表格的数据来生成
            for (let i = 0; i < this.data.length; i++) {
                // 把千分符变回来
                let ddd = this.data[i].decAsOfThisYear.replace(/,/g, "");
                barData.push(ddd);
                xAxisData.push(this.data[i].industryName);
                let lll = this.data[i].increase.replace(/,/g, "");
                lineData.push(lll);
            }
            var option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                // title: {
                //     left: 'center',
                //     text: '图-2017年主要工业行业总产值同比增长值',
                //     textStyle: {
                //         color: '#fff'
                //     }
                // },
                grid: {
                    left: '4%',
                    right: '4%',
                    bottom: '5%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: xAxisData,
                        boundaryGap: true,
                        show: true,
                        axisLabel: {
                            interval: 0,
                            color: '#fff',
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
                            lineStyle: {
                                color: '#fff'
                            },
                            onZero: false
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '同比增长%',
                        axisLabel: {
                            formatter: '{value}',
                            color: '#fff'
                        },
                        splitLine: {
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#fff'
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: '',
                        type: 'line',
                        // yAxisIndex: 1,
                        data: lineData,
                        symbol: 'circle',
                        symbolSize: 10,
                        itemStyle: {
                            normal: {
                                color: '#4D98A0'
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
                                color: '#fff',
                                formatter: (v) => {
                                    return v.value + "%";
                                }
                            }
                        }
                    }
                ]
            };
            return option;
        },
        getWitdhHeight() {
            this.clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            this.clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        },
        toThousands(num) {
            return num && num.toString().replace(/^\d+/g, (m) => m.replace(/(?=(?!^)(\d{3})+$)/g, ','));
        }
    },
    destroyed() {
        this.myChart.dispose();
        this.lineChart.dispose();
    }
};
</script>
<style scoped>
.chart-title {
    font-weight: 700;
    font-size: 1.8vw;
    color: #fff;
} 
</style>