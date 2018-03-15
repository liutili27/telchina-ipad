        <style scoped>
.circle {
    width: 50px;
    height: 50px;
    background-color: white;
    /* Can be set to transparent */
    border: 1px #1296db solid;
    -webkit-border-radius: 100px;
}

.stlyle-i {
    color: #1296db;
    font-size: 28px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    top: 50%;
}
</style>
<template>
    <!-- -->
    <div>
        <div id="container-04" style="height: 340px;width:100%;"></div>

        <div class="circle" style="position: relative;top: -115px;left:7px;">
            <i class="fa fa-cny stlyle-i "></i>
        </div>
        <div class="circle" style="position: relative;top: -167px;left:85px;">
            <i class="fa fa-cny stlyle-i "></i>
        </div>
        <div class="circle" style="position: relative;top: -217px;left:260px;">
            <i class="fa fa-cny stlyle-i "></i>
        </div>
        <div class="circle" style="position: relative;top: -267px;left:337px;">
            <i class="fa fa-cny stlyle-i "></i>
        </div>
        <div class="circle" style="position: relative;top: -320px;left:512px;">
            <i class="fa fa-cny stlyle-i "></i>
        </div>
        <div class="circle" style="position: relative;top: -370px;left:588px;">
            <i class="fa fa-cny stlyle-i "></i>
        </div>
        <div class="circle" style="position: relative;top: -423px;left:764px;">
            <i class="fa fa-cny stlyle-i "></i>
        </div>
        <div class="circle" style="position: relative;top: -475px;left:840px;">
            <i class="fa fa-cny stlyle-i "></i>
        </div>

        <div style="font-size:15px;position: relative;top: -640px;left:20px;height:26px;width:50px;">
            <i class="fa fa-long-arrow-up" style="color: #e0620d; font-size: 15px;"></i>
            8.0
        </div>

        <div style="font-size:15px;position: relative;top: -635px;left:95px;height:26px;width:50px;">
            <i class="fa fa-long-arrow-up" style="color: #e0620d; font-size: 15px;"></i>
            6.0
        </div>

        <div style="font-size:15px;position:relative;top: -725px;left:270px;height:26px;width:50px;">
            <i class="fa fa-long-arrow-up" style="color: #e0620d; font-size: 15px;"></i>
            8.65
        </div>

        <div style="font-size:15px;position: relative;top: -675px;left:350px;height:26px;width:50px;">
            <i class="fa fa-long-arrow-up" style="color: #e0620d; font-size: 15px;"></i>
            6.0
        </div>

        <div style="font-size:15px;position: relative;top: -710px;left:523px;height:26px;width:50px;">
            <i class="fa fa-long-arrow-up" style="color: #e0620d; font-size: 15px;"></i>
            7.23
        </div>

        <div style="font-size:15px;position: relative;top: -715px;left:600px;height:26px;width:50px;">
            <i class="fa fa-long-arrow-up" style="color: #e0620d; font-size: 15px;"></i>
            5.02
        </div>

        <div style="font-size:15px;position: relative;top: -800px;left:775px;height:26px;width:50px;">
            <i class="fa fa-long-arrow-up" style="color: #e0620d; font-size: 15px;"></i>
            5.02
        </div>
        <div style="font-size:15px;position: relative;top: -850px;left:850px;height:26px;width:50px;">
            <i class="fa fa-long-arrow-up" style="color: #e0620d; font-size: 15px;"></i>
            5.02
        </div>

    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return {};
    },
    methods: {
        do(id, option) {
            var echarts = this.$echarts;
            var echar = echarts.init(document.getElementById(id));
            echar.setOption(option);
        },
        getoption() {
            var option = {
                color: ['#3398DB'],
                tooltip: {
                },
                legend: {
                    data: ['制糖', '烟草'],
                    x: 'left',
                    textStyle: {
                        fontSize: 13
                    },
                    itemGap: 15,
                    selectedMode:false
                },
                grid: {
                    show: false,
                    top: '60px',
                    left: '-120px',
                    right: '-1px',
                    bottom: '30px',
                    borderColor: 'white',
                    y: 0,
                    y2: 0,
                    containLabel: true
                },
                xAxis: [
                    {
                        show: true,
                        type: 'category',
                        data: ['行业产值', '行业投资', '行业利润', '行业销售收入'],
                        axisTick: {
                            alignWithLabel: true
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#ccc',
                                width: 10,
                                type: 'solid'
                            }
                        },
                        axisLabel: {
                            show: true,
                            formatter: '{value}',
                            textStyle: {
                                color: '#1296db',
                                fontSize: 18,
                                fontWeight: 'bold'
                            },
                            margin: 40
                        }
                    }
                ],
                yAxis: [
                    {
                        show: false,
                        type: 'value',
                        min: 0,
                        max: 9000,
                        axisLabel: {
                            formatter: '{value} 亿元'
                        }
                    }
                ],
                series: [
                    {
                        type: 'bar',
                        barWidth: '8%',
                        name: '制糖',
                        data: [5241, 6848, 3568, 5498],
                        label: {
                            normal: {
                                show: true,
                                position: 'top',
                                formatter: '       {c}{per|亿元}\n\n',
                                rich: {
                                    per: {
                                        fontSize: '15',
                                        fontWeight: 'bold',
                                        color: '#e0620d',
                                        fontFamily: 'Arial, Verdana, sans-serif',
                                    }
                                },
                                textStyle: {
                                    fontSize: '15',
                                    fontWeight: 'bold',
                                    color: '#333333',
                                    fontFamily: 'Arial, Verdana, sans-serif',
                                }
                            }
                        }
                    },
                    {
                        type: 'bar',
                        barWidth: '8%',
                        name: '烟草',
                        barGap: '280%',
                        data: [3848, 3088, 2688, 6526],
                        itemStyle: {
                            normal: {
                                color: '#0056c0'
                            }
                        },
                        label: {
                            normal: {
                                show: true,
                                position: 'top',
                                formatter: '       {c}{per|亿元}\n\n',
                                rich: {
                                    per: {
                                        fontSize: '15',
                                        fontWeight: 'bold',
                                        color: '#e0620d',
                                        fontFamily: 'Arial, Verdana, sans-serif',
                                    }
                                },
                                textStyle: {
                                    fontSize: '15',
                                    fontWeight: 'bold',
                                    color: '#333333',
                                    fontFamily: 'Arial, Verdana, sans-serif',
                                }
                            }
                        }
                    }
                ]
            };
            return option;
        }
    },
    mounted() {
        this.do("container-04", this.getoption());
    }
};
</script>

       