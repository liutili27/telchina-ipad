<template>
    <div v-if="barData">
        <div id="bar" :style="{width:calWidthSize(460)+'px',height: calHeightSize(355)+'px'}">
            <!-- {{barData}} -->
        </div>
    </div>
</template>

<script>
export default {
    props: ["barData"],
    data() {
        return {
            charts: '',
            opinion: [],
            opinionData: []
        };
    },
    methods: {
        // 画图
        drawBar() {
            this.charts.setOption({
                title: {
                },
                tooltip: {},
                legend: {
                },
                xAxis: {
                    axisTick: false,
                    data: this.opinion,
                    axisLabel: {
                        interval: 0,
                        rotate: -30,
                        textStyle: {
                            fontSize: this.calHeightSize(12)
                        }
                    }
                },
                yAxis: {
                    axisTick: false,
                    axisLabel: {
                        show: true,
                        interval: 'auto',
                        formatter: '{value}.00',
                        textStyle: {
                            fontSize: this.calHeightSize(12)
                        }
                    },
                    splitLine: {
                        show: false
                    }
                },
                series: [{
                    name: '增速',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: '#3197DB'
                        }
                    },
                    barWidth: '60%',
                    data: this.opinionData
                }]
            });
        },
        chartInit(id) {
            this.charts = this.$echarts.init(document.getElementById(id));
        },
        changeOption() {
            for (var i = 0; i < this.barData.length; i++) {
                this.opinion.push(this.barData[i].region);
                this.opinionData.push(this.barData[i].rate);
            }
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
            this.chartInit('bar');
            this.changeOption();
            this.drawBar();
        });
    },
    watch: {
        barData: function() {
            this.opinion = [];
            this.opinionData = [];
            // 排除空数据
            if (typeof (this.barData) !== 'undefined') {
                this.changeOption();
            }
            this.$nextTick(function() {
                this.drawBar();
            });
        }
    },
    destroyed() {
        this.charts.dispose();
    }
};
</script>

<style scoped="scoped">
#bar {
     height:355px;
     width:460px;
}
</style>
