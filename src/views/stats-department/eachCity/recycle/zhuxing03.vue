<template>
  <div id="container7" style="height: 52.083vh;width: 83vw"></div>
</template>

<script>
export default {
    props: ['region', 'zhuxingThree'],
    data() {
        return {
            echar: null
        };
    },
    methods: {
        comRegion() {
            if (this.region == '全区') {
                return '广西';
            } else {
                return '';
            }
        },
        calWidthSize(val) {
            return val * window.screen.availWidth / 1024;
        },
        calHeightSize(val) {
            return val * window.screen.availHeight / 768;
        },
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
                    text: '图 2012-2016财政收入',
                    x: 'center',
                    // y: 'bottom',
                    textStyle: {
                        color: 'white',
                        fontSize: this.calHeightSize(16),
                        fontFamily: 'bold'
                    }
                },
                tooltip: {
                    trigger: "axis",
                    show:false,
                    axisPointer: {
                        type: "cross",
                        crossStyle: {
                            color: "#999"
                        }
                    }
                },
                animation: false,
                legend: {
                    selectedMode:false,
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
                                color: "#d6d6d6",
                                width: 2,
                                type: "solid"
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            show: true,
                            textStyle: {
                                fontSize: this.calHeightSize(16),
                                color: "white"
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        show: false,
                        type: "value",

                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "#2596d2",
                                width: 3,
                                type: "solid"
                            }
                        }
                    }
                ],
                series: [
                    {
                        type: "bar",
                        barCategoryGap: "50%",
                        clickable:false,
                        data: this.zhuxingThree.value,
                        // data: [1810.14, 2001.26, 2162.54, 2333.03, 2454.05],
                        barWidth: this.calWidthSize(40),
                        itemStyle: {
                            normal: {
                                color: "#1296db"
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
                                    return v.replace(/^\./, "0.") + "亿元";
                                },
                                textStyle: {
                                    fontSize: this.calHeightSize(16),
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

    },
    watch: {
        zhuxingThree: function() {
            this.do(this.getoption());
        }
    },
    mounted() {
        this.$nextTick(function() {
            this.echarInit('container7');
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