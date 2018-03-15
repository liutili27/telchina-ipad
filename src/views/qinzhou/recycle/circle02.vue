<template>
<div style="position:relative;">

    <div style="position: absolute;height:26.042vh;width:19.53125vw" id="circle02">
    </div>
    <div style="position:absolute;width:0;height:0;" :style="{top:calHeightSize(95)+'px',left:calWidthSize(87)+'px'}">
        <i v-if="rate >= 0" style="color:#d31e08;font-size:3.0vh" class="iconfont icon-tubiaoshangshengqushi"></i>
        <i v-else style="color:#1afa29;font-size:3.0vh" class="iconfont icon-tubiaoxiajiangqushi"></i>
    </div>
</div>

</template>

<script>
export default {
    props: ['region', 'circleTwo'],
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
                    text: '2017年' + this.region + '生产总值指数',
                    x: 'center',
                    textStyle: {
                        color: 'white',
                        fontSize: this.calHeightSize(16)
                        // fontFamily: 'bold'
                    }
                },
                animation: false,
                series: [
                    {
                        type: 'pie',
                        radius: ['52%', '62%'],
                        avoidLabelOverlap: false,
                        startAngle: 20,
                        center: ['60%', '50%'],
                        label: {
                            normal: {
                                text: this.rate,
                                formatter: "去年同比增长\n      " + this.rate + "%",
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
                        data: [
                            {value: 65, name: ''}
                        ],
                        color: ['#1296db']
                    },
                    {
                        type: "pie",
                        radius: ["0", "52%"],
                        startAngle: 150,
                        center: ['60%', '50%'],
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
        calRadius(val) {
            var w = window.screen.availWidth;
            var h = window.screen.availHeight;
            return val * (w * 0.57 / 1024 + h * 0.43 / 768);
        }
    },
    computed: {
        rate: function() {
            return this.circleTwo;
        }
    },
    watch: {
        region: function() {
            this.do(this.getoption());
        }
    },
    mounted() {
        this.$nextTick(function() {
            this.echarInit('circle02');
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