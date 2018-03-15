<template>
  <div id="container4" style="height: 52.083vh;width: 78.125vw"></div>
</template>

<script>
export default {
    data() {
        return {
            echar: null
        };
    },
    methods: {
        echarInit(id) {
            this.echar = this.$echarts.init(document.getElementById(id));
        },
        do(option) {
            this.echar.setOption(option);
        },
        getoption() {
            var option = {
                title: {
                    show: false,
                    text: '图 2012-2016年全区居民消费价格涨跌幅度',
                    textStyle: {
                        color: 'white',
                        fontSize: this.calHeightSize(16)
                    },
                    // y: 'bottom',
                    x: 'center'
                },
                animation: false,
                tooltip: {
                    trigger: "axis",
                    show: false,
                    axisPointer: {
                        type: "cross",
                        crossStyle: {
                            color: "#999"
                        }
                    }
                },
                xAxis: [
                    {
                        type: "category",
                        data: ["2012年", "2013年", "2014年", "2015年", "2016年"],
                        axisPointer: {
                            type: "shadow"
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "#999999",
                                width: 2,
                                type: "solid"
                            },
                            onZero: false
                        },
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: "white",
                                fontSize: this.calHeightSize(16)
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: "value",
                        name: "单位: %",
                        nameTextStyle: {
                            color: "white",
                            fontSize: this.calHeightSize(16)
                        },
                        min: -2.0,
                        max: 10.0,
                        axisLabel: {
                            show: true,
                            interval: 'auto',
                            formatter: '{value}.00',
                            textStyle: {
                                color: "white",
                                fontSize: this.calHeightSize(16)
                            }
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "#999999",
                                width: 2,
                                type: "solid"
                            }
                        },
                        splitLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        splitArea: {

                        }
                    }
                ],
                series: [
                    {
                        name: "全区居民消费价格涨跌幅度",
                        type: "line",
                        yAxisIndex: 0,
                        // symbol: 'diamond',
                        // symbolSize: 20,
                        data: [2.9, 2.1, 1.6, 1.9, 1.4],
                        label: {
                            normal: {
                                show: true,
                                position: "top",
                                textStyle: {
                                    fontSize: this.calHeightSize(16),
                                    fontWeight: "bold",
                                    color: "white"
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: "#00cccc",
                                lineStyle: {
                                    width: this.calHeightSize(4)
                                }
                            }
                        }
                    }
                ]
            };
            return option;
        },
        calWidthSize(val) {
            return val * window.screen.availWidth / 1024;
        },
        calHeightSize(val) {
            return val * window.screen.availHeight / 768;
        }
    },
    mounted() {
        this.$nextTick(function() {
            this.echarInit('container4');
            this.do(this.getoption());
        });
    },
    destroyed() {
        this.echar.dispose();
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>