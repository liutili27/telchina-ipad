<!-- 坚条形图组件 -->
<template>
    <div :style="position" style="position:absolute;">
        <div style="color: white;font-size: 1.6vw; margin:1vh;">
            <slot name="title"></slot>
        </div>
        <div :style="{height:height,width:width}" style="background:#fff;padding:0px;" id="com-container2"></div>
    </div>
    
</template>

<script>
    export default {
        props: {
            data: { // [{name:'xx',value:Number}]
                type: Array
            },
            height: {
                type: String,
                default: '20vh'
            },
            width: {
                type: String,
                default: '17.5vw'
            },
            position: {
                type: Object,
                default: function() {
                    return {
                        top: '16vh',
                        right: '1vw'
                    };
                }
            },
            showShadow: {
                type: Boolean,
                default: false
            }
        },
        data: function() {
            return {
                myChart: null
            };
        },
        mounted() {
            this.$nextTick(function() {
                this.init();
            });
        },
        watch: {
            data() {
                this.init();
            }
        },
        methods: {
            init() {
                if (this.myChart == null) {
                    var echarts = this.$echarts;
                    this.myChart = echarts.init(document.getElementById("com-container2")); // 传入页面容器的id
                }
                this.addEcharts(this.setoption());
            },
            setoption() {
                var data = JSON.parse(JSON.stringify(this.data));
                data.sort(function(a, b) {
                    if (a.value < b.value) {
                        return -1;
                    } else if (a.value > b.value) {
                        return 1;
                    } else {
                        return 0;
                    }
                });
                var yAxisData = [];
                var seriesData = [];
                var shadowData = [];
                var isMinus = {}; // 结果是不是一个负数，如果是负数显示另一个颜色
                for (var i = 0; i < data.length; i++) {
                    yAxisData.push(data[i].name);
                    if (data[i].value < 0) { // 负数放0，不要负数
                        seriesData.push(0);
                    } else {
                        seriesData.push(data[i].value);
                    }
                    if (data[i].value < 0) {
                        isMinus[data[i].name] = true;
                    }
                    shadowData.push(data[data.length - 1].value); // 阴影层
                }
                var option = {
                    grid: {
                        left: '0%',
                        right: '0%',
                        bottom: '0%',
                        top: '0%',
                        containLabel: true
                    },
                    xAxis: {
                        show: false,
                        type: 'value',
                        boundaryGap: [0, 0.01]
                    },
                    yAxis: {
                        type: 'category',
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: "white"
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        data: yAxisData
                    },
                    series: [{
                        barWidth: '10px',
                        itemStyle: {
                            normal: {
                                color: function(p) {
                                    // if (isMinus[p.name]) {
                                    //     return "#FFEA3D";
                                    // } else {
                                    //     return "#04EBC0";
                                    // }
                                    return "#04EBC0";
                                },
                                barBorderRadius: [4, 4, 4, 4]
                            }
                        },
                        z: 10,
                        label: {
                            normal: {
                                show: false,
                                position: 'right',
                                color: 'white'
                            }
                        },
                        type: 'bar',
                        data: seriesData
                    }]
                };
                if (this.showShadow) {
                    var shadowSeries = {
                        barWidth: '10px',
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                color: '#04EBC0',
                                barBorderRadius: [4, 4, 4, 4],
                                opacity: 0.05
                            }
                        },
                        barGap: '-100%',
                        data: shadowData,
                        animation: false
                    };
                    option.series.push(shadowSeries);
                };
                return option;
            },
            addEcharts(option) { // 用来给页面容器添加可视化图表
                this.myChart.setOption(option); // 传入需要渲染的数据
            }
        },
        destroyed() {
            if (this.myChart) {
                this.myChart.dispose();
            }
        }
    };
</script>

<style scoped>

</style>