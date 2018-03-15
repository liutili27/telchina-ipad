        <style scoped>
body {
    text-align: center;
}

.circle {
    width: 65px;
    height: 65px;
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
    <div>
        <div id="container3" style="height: 300px;width:953px;"></div>

        <div class="circle" style="position: relative;top: -120px;left:38px;">
            <i class="fa fa-cny stlyle-i"></i>
        </div>

        <div class="circle" style="position: relative;top: -187px;left:291px;">
            <i class="fa fa-cny stlyle-i"></i>
        </div>

        <div class="circle" style="position: relative;top: -256px;left:544px;">
            <i class="fa fa-cny stlyle-i"></i>
        </div>
        <div class="circle" style="position: relative;top: -323px;left:795px;">
            <i class="fa fa-cny stlyle-i"></i>
        </div>

        <div style="font-size:22px;position: relative;top: -480px;left:100px;height:26px;width:50px">
            <i class="fa fa-long-arrow-up" style="color: #e0620d; font-size: 22px;"></i>
            8.0
        </div>
        <div style="font-size:22px;position: relative;top: -555px;left:350px;height:26px;width:50px">
            <i class="fa fa-long-arrow-up" style="color: #e0620d; font-size: 22px;"></i>
            8.0
        </div>
        <div style="font-size:22px;position: relative;top: -485px;left:605px;height:26px;width:50px">
            <i class="fa fa-long-arrow-up" style="color: #e0620d; font-size: 22px;"></i>
            8.0
        </div>
        <div style="font-size:22px;position: relative;top: -565px;left:855px;height:26px;width:50px">
            <i class="fa fa-long-arrow-up" style="color: #e0620d; font-size: 22px;"></i>
            8.0
        </div>

    </div>
</template>
 <!-- -->
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
                grid: {
                    show: true,
                    top: '-50px',
                    left: '-120px',
                    right: '-1px',
                    bottom: '30px',
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
                            // formatter: "{a} <br/>{b}: {c} ({d}%)"
                            //<i class="fa fa-anchor" style="color: red; font-size: 28px;"></i>
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
                        data: [5241, 6848, 3568, 5498],
                        label: {
                            normal: {
                                show: true,
                                position: 'right-top',
                                formatter: '       {c}{per|亿元}',
                                rich: {
                                    per: {
                                        fontSize: '18',
                                        fontWeight: 'bold',
                                        color: '#e0620d',
                                        fontFamily: 'Arial, Verdana, sans-serif'
                                    }
                                },
                                textStyle: {
                                    fontSize: '18',
                                    fontWeight: 'bold',
                                    color: '#333333',
                                    fontFamily: 'Arial, Verdana, sans-serif'
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
        this.do("container3", this.getoption());
    }
};
</script>

       