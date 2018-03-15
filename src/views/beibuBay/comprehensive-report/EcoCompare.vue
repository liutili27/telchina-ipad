<template>
    <div id="com-main">
        <div id="compare" :style="{width:calWidthSize(900)+'px',height: calHeightSize(500)+'px'}">
            
        </div>
    </div>
</template>

<script>
export default {
    props: {
    	"data":{
    		type:Array
    	}
    },
    data() {
        return {
            charts: '',
            option: [],
            screenWidth: window.screen.availWidth,
            screenHeight: window.screen.availHeight,
            legend: [
                '四市生产总值占比',
                '六市生产总值占比',
                '南宁生产总值占比',
                '北海生产总值占比',
                '钦州生产总值占比',
                '防城港生产总值占比',
                '玉林生产总值占比',
                '崇左生产总值占比'
            ],
            xData: [
                '2017年',
                '2016年',
                '2015年',
                '2014年',
                '2013年'
            ],
            seriiesData: [
                {
                    name: '四市生产总值占比',
                    data: []
                },
                {
                    name: '六市生产总值占比',
                    data: []
                },
                {
                    name: '南宁生产总值占比',
                    data: []
                },
                {
                    name: '北海生产总值占比',
                    data: []
                },
                {
                    name: '防城港生产总值占比',
                    data: []
                },
                {
                    name: '钦州生产总值占比',
                    data: []
                },
                {
                    name: '玉林生产总值占比',
                    data: []
                },
                {
                    name: '崇左生产总值占比',
                    data: []
                }
            ],
            regionList: []
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
        // 设置折线图数据
        getOption() {
            var option = {
                title: {
                    text: '经济区历年生产总值占比',
                    x: 'center',
                    textStyle: {
                        fontSize: this.calHeightSize(14),
                        fontWeight: '900',
                        color: '#038CC4'
                    }
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    show: true,
                    y: 'bottom',
                    x: 'center',
                    data: []
                },
                grid: {

                },
                xAxis: {
                    type: 'category',
                    splitLine: {
                        show: true,
                        lineStyle: {
                            type: 'dotted'
                        }
                    },
                    data: []
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        show: true,
                        interval: 'auto',
                        formatter: '{value} %'
                    },
                    splitLine: {
                        lineStyle: {
                            type: 'solid'
                        }
                    }
                },
                series: []
            };
            option.legend.data = this.legend;
            option.xAxis.data = this.xData;
            for (var i = 0; i < this.seriiesData.length; i++) {
                var ser = {
                    name: '',
                    type: 'line',
                    data: [],
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                position: 'top',
                                formatter: '{c}%'
                            }
                        }
                    }
                };
                ser.name = this.seriiesData[i].name;
                ser.data = this.seriiesData[i].data;
                option.series.push(ser);
            }
            return option;
        },
        chartInit(id) {
            this.charts = this.$echarts.init(document.getElementById(id));
        },
        drawCompare(option) {
            this.charts.setOption(option);
        }
    },
    mounted() {
    	for(var i = 0;i<this.seriiesData.length;i++){
    		for(var j = 0;j<this.xData.length;j++){
    			this.seriiesData[i].data.push(this.data[j][i]);
    		}
    	}
        this.$nextTick(function() {
            this.chartInit('compare');
            this.drawCompare(this.getOption());
        });
    },
    destroyed() {
        this.charts.dispose();
    }
};
</script>

<style scoped="scoped">
#com-main{
    width: 100%;
}
#compare {
     width: 900px;
     height:500px;
     margin-left:2%
}
</style>
