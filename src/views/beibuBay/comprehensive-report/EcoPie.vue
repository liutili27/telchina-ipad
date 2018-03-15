<template>
    <div v-if="pieData">
        <div id="pie" :style="{width:calWidthSize(460)+'px',height:calHeightSize(355)+'px'}"></div>
    </div>
</template>

<script>
export default {
    props: ["pieData"],
    data() {
        return {
            charts: '',
            option: [],
            opinionData: []
        };
    },
    components: {
    },
    methods: {
        calWidthSize(val) {
            return val * window.screen.availWidth / 1024;
        },
        calHeightSize(val) {
            return val * window.screen.availHeight / 768;
        },
        // 画图
        drawPie() {
            this.charts.setOption({
                tooltip: {
                },
                legend: {
                },
                series: [
                    {
                        name: '占比',
                        type: 'pie',
                        radius: ['35%', '50%'],
                        avoidLabelOverlap: true,
                        itemStyle: {
                            normal: {
                                textStyle: {
                                    fontSize: this.calHeightSize(12)
                                }
                            }
                        },
                        label: {
                            normal: {
                                show: true,
                                formatter: "{b}\n{d}%",
                                textStyle: {
                                    fontSize: this.calHeightSize(12)
                                }
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '20',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: true
                            }
                        },
                        color: ['#AFD6DD', '#1790CF', '#1BB2D8', '#99D2DD', '#88B0BB', '#1C7099', '#038CC4', '#75ABD0'],
                        data: this.option
                    }
                ]
            });
        },
        /**
         * 圆环数据设置
         */
        changeOption() {
            for (var i = 0; i < this.pieData.length; i++) {
                if (this.pieData[i].region != '全区') {
                    var item = {
                        value: 0,
                        name: ''
                    };
                    item.value = this.pieData[i].proportion;
                    item.name = this.pieData[i].region;
                    this.option.push(item);
                }
            }
        },
        chartInit(id) {
            this.charts = this.$echarts.init(document.getElementById(id));
        }
    },
    mounted() {
        this.$nextTick(function() {
            this.chartInit('pie');
            this.changeOption();
            this.drawPie('pie');
        });
    },
    watch: {
        pieData: function() {
            this.option = [];
            // 排除空数据
            if (typeof (this.pieData) !== 'undefined') {
                this.changeOption();
            }
            this.$nextTick(function() {
                this.drawPie('pie');
            });
        }
    },
    destroyed() {
        this.charts.dispose();
    }
};
</script>

<style scoped="scoped">
#pie {
     height:355px;
     width:460px;
}
</style>
