<template>

  <div id="container6" style="height: 39.0625vh;width: 43.902vw"></div>

</template>

<script>
export default {
    props: ['region', 'zhuxingTwo'],
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
        calWidthSize(val) {
            return val * window.screen.availWidth / 1024;
        },
        calHeightSize(val) {
            return val * window.screen.availHeight / 768;
        },
        getoption() {
            var option = {
                title: {
                    show: false,
                    text: '图 2012-2016年' + this.region + '人均GDP',
                    textStyle: {
                        color: 'white',
                        fontSize: this.calHeightSize(14),
                        fontFamily: "bold"
                    },
                    // y: 'bottom',
                    x: 'center'
                },
                animation: false,
                tooltip: {
                    trigger: "axis",
                    show:false,
                    axisPointer: {
                        type: "cross",
                        crossStyle: {
                            color: "#999"
                        }
                    },
                    selectedMode:false,
                },
                xAxis: [
                    {
                        type: "category",
                        data: ["2013年", "2014年", "2015年", "2016年", "2017年"],
                        axisPointer: {
                            type: "shadow"
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "#dadada",
                                width: 1,
                                type: "solid"
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: "white",
                                fontSize: this.calHeightSize(14)
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        name: "人均GDP（元）",
                        nameTextStyle: {
                            // fontSize: this.calHeightSize(14)
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "white",
                                width: this.calWidthSize(1),
                                type: "solid"
                            }
                        },
                        type: "value",
                        min: 0,
                        // max: 4000,
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            show: true,
                            textStyle: {
                                fontSize: this.calHeightSize(14),
                                color: "white"
                            }
                        },
                        splitLine: {
                            show: false
                        }
                    }
                ],
                series: [
                    {
                        name: "全区人均GDP",
                        type: "bar",
                        data: this.serData,
                        clickable:false,
                        // data: [2500, 2800, 3200, 3600, 3800],
                        barWidth: "33",
                        itemStyle: {
                            normal: {
                                color: "#1790cf"
                            }
                        },
                        label: {
                            normal: {
                                show: true,
                                position: "top",
                                formatter: function(params) {
                                    var v;
                                    v = params.value.toString();
                                    v = v.replace(/^(\d*)$/, "$1.");
                                    v = (v + "00").replace(/(\d*\.\d\d)\d*/, "$1");
                                    v = v.replace(".", ",");
                                    var re = /(\d)(\d{3},)/;
                                    while (re.test(v)) {
                                        v = v.replace(re, "$1,$2");
                                    }
                                    v = v.replace(/,(\d\d)$/, ".$1");
                                    return v.replace(/^\./, "0.");
                                },
                                textStyle: {
                                    fontSize: this.calHeightSize(14),
                                    fontFamily: "bold",
                                    color: "white"
                                }
                            }
                        }
                    }
                ]
            };
            return option;
        }
    },
    computed: {
        serData: function() {
            return this.zhuxingTwo.value;
        }
    },
    watch: {
        region: function() {
            this.do(this.getoption());
        }
    },
    mounted() {
        this.$nextTick(function() {
            this.echarInit('container6');
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