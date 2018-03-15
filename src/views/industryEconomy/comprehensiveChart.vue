<template>
    <div id="container-comprehensiveChart" style="height: 550px;width:850px;padding-top:80px;margin:0 auto;">

    </div>
</template>
 <!-- -->
<script>

export default {
    name: 'HelloWorld',
    data() {
        return {
            data: [
                {
                    data1: 38000,
                    data2: 45000,
                    data3: 3000,
                    data4: 23000,
                    data5: 2.0,
                    data6: 4.2,
                    data7: 4.4,
                    data8: 4.8
                },
                {
                    data1: 39000,
                    data2: 36000,
                    data3: 3000,
                    data4: 26000,
                    data5: 2.3,
                    data6: 4.5,
                    data7: 6.3,
                    data8: 6.3
                },
                {
                    data1: 40000,
                    data2: 49000,
                    data3: 3000,
                    data4: 26000,
                    data5: 3.3,
                    data6: 6.8,
                    data7: 6.4,
                    data8: 7.4
                }
            ]
        };
    },
    methods: {
        do(id, option) {
            var echarts = this.$echarts;
            var echar = echarts.init(document.getElementById(id));
            echar.setOption(option);
        },
        getoption() {
            var option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                    }
                },
                legend: {
                    data: ['行业产值', '行业投资', '行业利润', '行业销售收入', '行内产值增速', '行内投资增速', '行内利润增速', '行业销售收入增速'],
                    textStyle: {
                        fontSize: 9
                    },
                    itemGap: -10
                },
                toolbox: {
                    feature: {
                        magicType: { show: true, type: ['line', 'bar'] },
                        saveAsImage: { show: true }
                    },
                },
                grid: {
                    x: 75,
                    backgroundColor: 'red',
                },
                xAxis: {
                    type: 'category',
                    data: ['2015', '2016', '2017'],
                    axisPointer: {
                        type: 'shadow'
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#2596d2',
                            width: 2,
                            type: 'solid'
                        }
                    }
                },
                axis: {
                    splitArea: {
                        show: true,
                        onGap: true
                    }
                },
                yAxis: [
                    {
                        type: 'value',
                        name: '金额',
                        min: 0,
                        max: 60000,
                        axisLabel: {
                            formatter: '{value} 亿元'
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#2596d2',
                                width: 2,
                                type: 'solid'
                            }
                        }
                    },
                    {
                        type: 'value',
                        name: '增速',
                        min: 0,
                        max: 8,
                        axisLabel: {
                            formatter: '{value}'
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#2596d2',
                                width: 2,
                                type: 'solid'
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: '行业产值',
                        data: [],
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                color: '#1790cf'
                            },
                            label: {
                                show: true,
                                position: 'top',
                                formatter: '{b}\n{c}'
                            }
                        }
                    },
                    {
                        name: '行业投资',
                        data: [],
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                color: '#1bb2d8'
                            },
                            label: {
                                show: true,
                                position: 'top',
                                formatter: '{b}\n{c}'
                            }
                        }
                    },
                    {
                        name: '行业利润',
                        data: [],
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                color: '#99d2dd'
                            },
                            label: {
                                show: true,
                                position: 'top',
                                formatter: '{b}\n{c}'
                            }
                        }
                    },
                    {
                        name: '行业销售收入',
                        data: [],
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                color: '#88b0bb'
                            },
                            label: {
                                show: true,
                                position: 'top',
                                formatter: '{b}\n{c}'
                            }
                        }
                    },
                    {
                        name: '行内产值增速',
                        type: 'line',
                        yAxisIndex: 1,
                        symbol: 'circle',
                        symbolSize: 10,
                        lineStyle: {
                            normal: {
                                width: 2
                            }
                        },
                        data: [],
                        itemStyle: {
                            normal: {
                                color: '#1c7099'
                            },
                        }
                    },
                    {
                        name: '行内利润增速',
                        type: 'line',
                        yAxisIndex: 1,
                        symbol: 'triangle',
                        symbolSize: 10,
                        lineStyle: {
                            normal: {
                                width: 2
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: ' #b0d6dd'
                            },
                        },
                        data: []
                    },
                    {
                        name: '行内投资增速',
                        type: 'line',
                        yAxisIndex: 1,
                        symbol: 'square',
                        symbolSize: 10,
                        lineStyle: {
                            normal: {
                                width: 2
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: ' #038cc4'
                            },
                        },
                        data: []
                    },
                    {
                        name: '行业销售收入增速',
                        type: 'line',
                        yAxisIndex: 1,
                        symbol: 'diamond',
                        symbolSize: 10,
                        lineStyle: {
                            normal: {
                                width: 2
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: ' #afd6dd'
                            },
                        },
                        data: []
                    }

                ]
            };
            for (var i = 0; i < this.data.length; i++) {
                option.series[0].data.push(this.data[i].data1);
                option.series[1].data.push(this.data[i].data2);
                option.series[2].data.push(this.data[i].data3);
                option.series[3].data.push(this.data[i].data4);
                option.series[4].data.push(this.data[i].data5);
                option.series[5].data.push(this.data[i].data6);
                option.series[6].data.push(this.data[i].data7);
                option.series[7].data.push(this.data[i].data8);
            }

            return option;
        }
    },
    mounted() {
        this.do("container-comprehensiveChart", this.getoption());
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>