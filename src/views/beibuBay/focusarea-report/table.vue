<template>
	<div style="padding: 2vw;">
		<div style="height: 14vh;">
			<span style="position: absolute;" class="span">
				<span class="leftSpan">
					工业产值<p>{{output}}亿元<span>&nbsp;&nbsp;↑{{outputpercent}}%</span></p>
			</span>
			<span class="rightSpan">
					完成固定资产投资总额<p>{{all}}亿元<span>&nbsp;&nbsp;↑{{allpercent}}%</span></p>
			</span>
			</span>
			<span style="position: absolute;left: 34%;" class="span">
				<span class="leftSpan">
					重点企业数量<p>&nbsp;&nbsp;{{companyNum}}个</p>
				</span>
			<span class="rightSpan">
					重点企业投资额<p>&nbsp;&nbsp;{{companyValue}}亿元</p>
				</span>
			</span>
			<span style="position: absolute;left: 66.9%;" class="span">
				<span class="leftSpan">
					重大项目数量<p>{{project}}个</p>
				</span>
			<span class="rightSpan">
					重大项目投资额<p>{{projectValue}}亿元</p>
				</span>
			</span>
		</div>
		<h3>工业产值及完成固定资产投资总额</h3>
		<div style="background-color: white;">
			<div id="echartTable" style="width: 94vw; height: 70vh"></div>
		</div>
		<div style="height: 250px;">
			<h3 style="float: left;width: 47vw;">重点企业</h3>
			<h3 style="float: right;width: 47vw;">重大项目</h3>
			<div style="width: 48%;float: left;background-color: white">
				<tab :data="data1"></tab>
			</div>
			<div style="width: 48%;float: right;background-color: white">
				<tab2 :data="data2"></tab2>
			</div>
		</div>
	</div>
</template>

<script>
	import tab from './table-components';
	import tab2 from './table-components2';
	export default {
    components: {
        tab,
        tab2
    },
    data: function() {
        return {
            myChart: null,
            echartsData: [],
            output: 0,
            all: 0,
            outputpercent: 0,
            allpercent: 0,
            companyNum: 0,
            companyValue: 0,
            project: 0,
            projectValue: 0,
            data1: [{
	                name: '南宁青秀万达广场',
	                value: 1.8
	            },
            {
                name: '南宁—东盟经济开发区',
                value: 1.8
            },
            {
                name: '南宁五象广场',
                value: 1.6
            },
            {
                name: '南宁-东盟企业总部基地',
                value: 1.5
            },
            {
                name: '电子科技园',
                value: 1.2
            },
            {
                name: '东盟国际·企业领袖基地',
                value: 1.1
            },
            {
                name: '五象绿地中心',
                value: 0.9
            },
            {
                name: '金湖CBD',
                value: 0.6
            },
            {
                name: '南宁软件园',
                value: 0.6
            }
            ],
            data2: [{
                name: '南宁高新项目1',
                value: 1.8,
                earnings: 1.8,
                state: '建成项目'
            },
            {
                name: '南宁高新项目2',
                value: 2.8,
                earnings: 0,
                state: '筹建项目'
            },
            {
                name: '南宁高新项目3',
                value: 1.8,
                earnings: 1.8,
                state: '建成项目'
            },
            {
                name: '南宁高新项目4',
                value: 1.4,
                earnings: 1.4,
                state: '建成项目'
            },
            {
                name: '南宁高新项目5',
                value: 3.2,
                earnings: 0.8,
                state: '建成项目'
            },
            {
                name: '南宁高新项目6',
                value: 1.5,
                earnings: 0,
                state: '立项项目'
            },
            {
                name: '南宁高新项目7',
                value: 2.9,
                earnings: 0,
                state: '立项项目'
            }
            ],
            data: [{
                year: 2010,
                output: 2.0,
                all: 2.6
            },
            {
                year: 2011,
                output: 4.9,
                all: 6.6
            },
            {
                year: 2012,
                output: 8.1,
                all: 9.3
            },
            {
                year: 2013,
                output: 6.4,
                all: 7.1
            },
            {
                year: 2014,
                output: 13.3,
                all: 12.6
            },
            {
                year: 2015,
                output: 12.0,
                all: 15.4
            },
            {
                year: 2016,
                output: 9.9,
                all: 8.1
            },
            {
                year: 2017,
                output: 9.7,
                all: 8.6
            }]
        };
    },
    mounted() {
        for (var i = 0; i < this.data.length; i++) {
            if (i == 0) {
                this.data[i].line1 = 0;
                this.data[i].line2 = 0;
            } else {
                this.data[i].line1 = (((this.data[i].output - this.data[i - 1].output) / this.data[i - 1].output) * 100).toFixed(2);
                this.data[i].line2 = (((this.data[i].all - this.data[i - 1].all) / this.data[i - 1].all) * 100).toFixed(2);
            }
            this.echartsData.push(this.data[i]);
        }
        this.output = this.data[this.data.length - 1].output;
        this.all = this.data[this.data.length - 1].all;
        this.outputpercent = this.data[this.data.length - 1].line1;
        this.allpercent = this.data[this.data.length - 1].line2;
        for (var j = 0; j < this.data1.length; j++) {
            this.companyValue = this.companyValue + this.data1[j].value;
        }
        for (var d = 0; d < this.data2.length; d++) {
            this.projectValue = this.projectValue + this.data2[d].value;
        }
        this.companyNum = this.data1.length;
        this.project = this.data2.length;
        this.$nextTick(function() {
            var echarts = this.$echarts;
            this.myChart = echarts.init(document.getElementById("echartTable"));
            this.addEcharts(this.getoption(this.echartsData));
        });
    },
    methods: {
        addEcharts(option) {
            this.myChart.setOption(option);
        },
        getoption(data) {
            var option = {
                tooltip: {
                    trigger: 'axis'
                },
                toolbox: {
                    feature: {
                        magicType: {
                            show: true,
                            type: ['line', 'bar']
                        },
                        saveAsImage: {
                            show: true
                        }
                    }
                },
                legend: {
                    data: ['工业产值', '完成固定资产投资总额', '工业产值增速', '完成固定资产投资总额增速']
                },
                xAxis: [{
                    type: 'category',
                    data: [],
                    axisPointer: {
                        type: 'shadow'
                    },
                    axisLine: {
                        lineStyle: {
                            color: "#008ACD"
                        }
                    }
                }],
                yAxis: [{
                    type: 'value',
                    name: '金额',
                    axisLabel: {
                        formatter: '{value} 亿元'
                    },
                    axisLine: {
                        lineStyle: {
                            color: "#008ACD",
                            width: 2
                        }
                    }
                },
                {
                    type: 'value',
                    name: '增速',
                    axisLabel: {
                        formatter: '{value} %'
                    },
                    axisLine: {
                        lineStyle: {
                            color: "#008ACD",
                            width: 2
                        }
                    }
                }
                ],
                series: [{
                    name: '工业产值',
                    type: 'bar',
                    data: [],
                    itemStyle: {
                        normal: {
                            color: '#2EC7C9',
                            barBorderRadius: [5, 5, 5, 5]
                        }
                    }
                },
                {
                    name: '完成固定资产投资总额',
                    type: 'bar',
                    data: [],
                    itemStyle: {
                        normal: {
                            color: '#B6A2DE',
                            barBorderRadius: [5, 5, 5, 5]
                        }
                    }
                },
                {
                    name: '工业产值增速',
                    type: 'line',
                    smooth: true,
                    yAxisIndex: 1,
                    data: [],
                    itemStyle: {
                        normal: {
                            color: '#FFB981'
                        }
                    }
                },
                {
                    name: '完成固定资产投资总额增速',
                    type: 'line',
                    smooth: true,
                    yAxisIndex: 1,
                    data: [],
                    itemStyle: {
                        normal: {
                            color: '#5AB1EF'
                        }
                    }
                }
                ]
            };
            for (var i = 0; i < data.length; i++) {
                option.xAxis[0].data.push(data[i].year);
                option.series[0].data.push(data[i].output);
                option.series[1].data.push(data[i].all);
                option.series[2].data.push(data[i].line1);
                option.series[3].data.push(data[i].line2);
            }
            return option;
        }
    },
    destroyed() {
        this.myChart.dispose();
    }
};
</script>

<style scoped="scoped">
	.span {
		opacity: 0.7;
		width: 30.8%;
		height: 12vh;
		text-align: center;
		background-color: white;
		margin-top: -4px;
		padding-top: 2vh;
		box-shadow: 2px 2px 15px 2px #9DE6F9;
		font-size: 2vh;
		font-family: "微软雅黑";
	}

	.leftSpan {
		width: 50%;
		float: left;
	}

	.rightSpan {
		width: 50%;
		float: right;
	}

	span p {
		color: #00CCFF;
		font-size: 2vh;
		font-family: "微软雅黑";
	}

	p span {
		color: #F4EA29;
		font-weight: bolder;
	}

	h3 {
		margin: 10px 0;
	}
</style>
