<template>
  <div id="circle03" style="height:26.042vh;width:54.199vw"></div>
</template>

<script>
export default {
    props: ['region', 'circleThree'],
    data() {
        return {
            echar: ''
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
                    text: '2016年三次产业结构生产总值占比',
                    x: 'center',
                    textStyle: {
                        color: 'white',
                        fontSize: this.calHeightSize(16),
                        fontFamily: 'bold'
                    }
                },
                animation: false,
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: ['52%', '62%'],
                        startAngle: 20,
                        label: {
                            normal: {
                                formatter: function(param) {
                                    var s = "";
                                    s = s + param.data.name + " " + param.data.value.toFixed(2) + "%";
                                    if (param.data.child != undefined) {
                                        s = s + "\n  " + "(其中:" + param.data.child.name + param.data.child.value.toFixed(2) + "%)";
                                    }
                                    return s;
                                },
                                textStyle: {
                                    fontSize: this.calHeightSize(16),
                                    fontFamily: 'bold',
                                    // fontFamily:'Arial, Verdana, sans-serif',
                                    color: 'white'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                length: 5,
                                lineStyle: {
                                    width: 1
                                }
                            }
                        },
                        data: this.serData,
                        // data: [
                        //     {value: 50.62, name: '第三产业'},
                        //     {value: 10.84, name: '第一产业'},
                        //     {value: 38.54, name: '第二产业'}
                        // ],
                        color: ['#1296db', '#66cccc', '#e0620d']
                    },
                    {
                        type: "pie",
                        radius: ["0", "52%"],
                        startAngle: 150,
                        data: [{
                            value: 240,
                            name: ""
                        }],
                        label: {
                            normal: {
                                formatter: " 三次产业占比",
                                show: true,
                                position: 'center',
                                textStyle: {
                                    fontSize: this.calHeightSize(16),
                                    fontFamily: 'bold',
                                    // fontFamily: 'Arial, Verdana, sans-serif',
                                    color: 'black'
                                }
                            }
                        },
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
        }
    },
    computed: {
        serData: function() {
            var ser1 = [];
            var sum = this.circleThree[0].value + this.circleThree[1].value + this.circleThree[2].value;
            for (var i = 0; i < this.circleThree.length; i++) {
                var ser2 = {};
                this.$set(ser2, "value", this.circleThree[i].value * 100 / sum);
                this.$set(ser2, "name", this.circleThree[i].name);
                if (i == 1) {
                    var ser3 = {};
                    this.$set(ser3, "value", this.circleThree[i].item.value * 100 / sum);
                    this.$set(ser3, "name", this.circleThree[i].item.name);
                    this.$set(ser2, "child", ser3);
                }
                ser1.push(ser2);
            }
            return ser1;
        }
    },
    watch: {
        region: function() {
            this.do(this.getoption());
        }
    },
    mounted() {
        this.$nextTick(function() {
            this.echarInit('circle03');
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