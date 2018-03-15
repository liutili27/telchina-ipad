<template>

  <div id="container5" style="height: 39.0625vh;width: 43.902vw"></div>

</template>

<script>
export default {
    props: ['region', 'zhuxingOne'],
    name: "HelloWorld",
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
                    text: '图 2012-2016年' + this.region + '生产总值',
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
                },
                xAxis: [
                    {
                        type: "category",
                        data: ["2012年", "2013年", "2014年", "2015年", "2016年"],
                        axisPointer: {
                            type: "shadow"
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "#2596d2",
                                width: this.calWidthSize(1),
                                type: "solid"
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        spiltLine: {
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
                        type: "value",
                        name: "生产总值(亿元)",
                        min: 0,
                        // max: 20000,
                        nameTextStyle: {
                            fontSize: this.calHeightSize(14)
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "white",
                                fontSize: this.calHeightSize(14),
                                width: this.calWidthSize(1),
                                type: "solid"
                            }
                        },
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: "white",
                                fontSize: this.calHeightSize(14)
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        splitLine: {
                            show: false
                        }
                    },
                    {
                        type: "value",
                        name: "同比增长（%）",
                        nameTextStyle: {
                            // fontSize: this.calHeightSize(14)
                        },
                        // min: 0,
                        // max: 12.5,
                        // interval: 2.5,
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "white",
                                fontSize: this.calHeightSize(14),
                                width: this.calWidthSize(1),
                                type: "solid"
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        splitLine: {
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
                series: [
                    {
                        name: "GDP生产总值(亿元)",
                        type: "bar",
                        data: this.barData,
                        // data: [2500, 2800, 3200, 3600, 3800],
                        barWidth: "33",
                        clickable:false,
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
                        },
                        itemStyle: {
                            normal: {
                                color: "#1790cf",
                                textStyle: {
                                    fontSize: this.calHeightSize(14)
                                }
                            }
                        }
                    },
                    {
                        name: "增速(%)",
                        type: "line",
                        clickable:false,
                        yAxisIndex: 1,
                        data: this.lineData,
                        // data: [12, 10.5, 8.5, 8.5, 7.0],
                        label: {
                            normal: {
                                show: false,
                                position: "top",
                                formatter: "{c}",
                                textStyle: {
                                    fontSize: this.calHeightSize(14),
                                    fontFamily: "bold",
                                    color: "white"
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: "#49c0de",
                                textStyle: {
                                    fontSize: this.calHeightSize(14)
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
        },
        moneyFormatter(s) {
            s = s.toString();
            s = s.replace(/^(\d*)$/, "$1.");
            s = (s + "00").replace(/(\d*\.\d\d)\d*/, "$1");
            s = s.replace(".", ",");
            var re = /(\d)(\d{3},)/;
            while (re.test(s)) {
                s = s.replace(re, "$1,$2");
            }
            s = s.replace(/,(\d\d)$/, ".$1");
            return s.replace(/^\./, "0.");
        }
    },
    computed: {
        barData: function() {
            return this.zhuxingOne.value;
        },
        lineData: function() {
            var l = [];
            for (var i = 0; i < this.zhuxingOne.increase.length; i++) {
                var num = this.zhuxingOne.increase[i] - 100;
                num = num.toFixed(1);
                l.push(num);
            }
            return l;
        }
    },
    watch: {
        region: function() {
            this.do(this.getoption());
        }
    },
    mounted() {
        this.$nextTick(function() {
            this.echarInit('container5');
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