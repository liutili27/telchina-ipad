<template>
<div id="circle01" style="height:26.042vh;width:24.4141vw">
</div>
</template>

<script>
export default {
    props: ["circleOne"],
    data() {
        return {
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
                    text: "2017年" + this.region + "生产总值（亿元）",
                    x: "center",
                    y: "top",
                    textStyle: {
                        color: "white",
                        fontSize: this.calHeightSize(16),
                        fontFamily: "bold",
                        marginTop: 10
                    }
                },
                animation: false,
                series: [
                    {
                        type: "pie",
                        avoidLabelOverlap: false,
                        // radius: ["42%", "47%"],
                        radius: ["48.5%", "62%"],
                        startAngle: 120,
                        label: {
                            normal: {
                                text: this.GDPValue,
                                formatter: "{b}生产总值\n" + this.moneyFormatter(this.GDPValue),
                                show: true,
                                position: "center",
                                textStyle: {
                                    fontSize: this.calHeightSize(16),
                                    fontFamily: "bold",
                                    // fontFamily: "Arial, Verdana, sans-serif",
                                    color: "black"
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: [{
                            value: 10,
                            name: ""
                        }, {
                            value: 990,
                            name: ""
                        }],
                        color: ["#1296db"]
                    },
                    {
                        type: "pie",
                        radius: ["0", "48.5%"],
                        startAngle: 150,
                        data: [{
                            value: 240,
                            name: ""
                        }],
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        color: ["#e4e4e4", "#e4e4e4"]
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
    watch: {
        region: function() {
            this.do(this.getoption());
        }
    },
    computed: {
        region: function() {
            return this.circleOne.name;
        },
        GDPValue: function() {
            return this.circleOne.value;
        }
    },
    mounted() {
        this.$nextTick(function() {
            this.echarInit("circle01");
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