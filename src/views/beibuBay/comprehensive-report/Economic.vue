

<template>
	<div style="border:1px red solid;">
		<div>菜单索引值{{leftIndex()}}</div>
		<div style="border:1px green solid;padding:0px 3vh 0px 3vh">

			<div style="border:1px pink solid;display:flex;font-size:1.3vw;line-height:4vh">
				<div style="border:1px blue solid;width:76.09px;height:32px">{{tab.year.header}}</div>
				<div style="border:1px blue solid;flex-grow:1;" v-for="(t,index) in tab.year.title" :key="index" :class="{isActive:index===yearindexActive}" @click="changeInfo1(index)">{{t}}</div>
			</div>
		</div>
		<div style="border:1px green solid;">
			<div id="container1" style="height: 65vh;width:90vw"></div>
		</div>
		<div style="border:1px green solid;">
			<EconomyLine :lineDatas="ll" :yerarIndex="this.yearindexActive" v-if="this.yearindexActive==0||this.yearindexActive==1"></EconomyLine>
			<Economybar3 :barDatas="ll3" v-if="this.yearindexActive==2"></Economybar3>
		</div>
	</div>
</template>

<script>


import projectData from './proData.json';
import EconomyLine from './EconomyLine.vue';
import Economybar3 from './Economybar3.vue';

export default {
	components: {
		EconomyLine,
		Economybar3
	},
	data() {
		return {
			echar: null,
			indexActive: 0,
			yearindexActive: 0,
			barData: [],
			lineDatas: [],

			lineDatas111: {
				line1:{
					value:[]
				}
			},

			barDatas: {
				bar1: {
					value: [5000, 500, 500, 500, 500, 500]
				},
				bar2: {
					value: [500, 500, 500, 500, 500, 500]
				},
				bar3: {
					value: [500, 500, 500, 500, 500, 500]
				},
				bar4: {
					value: []
				},
				bar5: {
					value: []
				}
			},
			proData: projectData,
			tab: {
				indicator: {
					header: "指标：",
					title1: [
						"地区生产总值",
						"财政收入",
						"一般公共预算",
						"规模以上工业增加值",
						"全社会固定资产投资总额",
						"社会消费品零售总额"

					],
					title2: [
						"房地产投资总额",
						"外贸进出口总额",
						"出口总额",
						"外商直接投资额"
					]
				},
				city: {
					header: "地区：",
					title: [
						"全部",
						"南宁市",
						"北海市",
						"防城港市",
						"钦州市",
						"玉林市",
						"崇左市"
					]
				},
				year: {
					header: "年份：",
					title: [
						"2017年",
						"2016年",
						"近三年",
						"近五年",
						"近十年"
					]
				}
			}
		};
	},
	methods: {
		changeInfo1(index) {
			this.yearindexActive = index;
		},
		leftIndex() {
			this.indexActive = this.$store.state.app.leftIndex;
			return this.indexActive;
		},
		do(option) {
			this.echar.setOption(option);
		},
		getData() {
			return this.ll = [3, 3, 3, 3];
		},

		changeInfo2() {
			alert(3333);
			//为的是监听barData重新影响装配图表
			this.barData = [];
			this.barDatas = {};

			var barDatasTeam = {
				bar1: {
					value: []
				},
				bar2: {
					value: []
				},
				bar3: {
					value: []
				},
				bar4: {
					value: []
				},
				bar5: {
					value: []
				},
				bar6: {
					value: []
				},
				bar7: {
					value: []
				},
				bar8: {
					value: []
				},
				bar9: {
					value: []
				},
				bar10: {
					value: []
				}
			};

			this.indexActive = this.$store.state.app.leftIndex;
			alert(this.indexActive);
			alert(this.yearindexActive);
			var years = [];




			//装配三年的数据		
			for (var i = 0; i < 9; i++) {
				for (var j = 0; j < 6; j++) {
					//控制城市个数
					if (this.indexActive == 0) {
						if (this.yearindexActive >= 2) {
							barDatasTeam.bar1.value[j] = this.proData[0].year2017[j].value[0].localProduction;
							barDatasTeam.bar2.value[j] = this.proData[1].year2016[j].value[0].localProduction;
							barDatasTeam.bar3.value[j] = this.proData[2].year2015[j].value[0].localProduction;
							if (this.yearindexActive >= 3) {
								barDatasTeam.bar4.value[j] = this.proData[3].year2014[j].value[0].localProduction;
								barDatasTeam.bar5.value[j] = this.proData[4].year2013[j].value[0].localProduction;
								if (this.yearindexActive >= 4) {
									barDatasTeam.bar6.value[j] = this.proData[5].year2012[j].value[0].localProduction;
									barDatasTeam.bar7.value[j] = this.proData[6].year2011[j].value[0].localProduction;
									barDatasTeam.bar8.value[j] = this.proData[7].year2010[j].value[0].localProduction;
									barDatasTeam.bar9.value[j] = this.proData[8].year2009[j].value[0].localProduction;
									barDatasTeam.bar10.value[j] = this.proData[9].year2008[j].value[0].localProduction;
								}
							}
						}
					} else if (this.indexActive == 1) {
						barDatasTeam.bar1.value[j] = this.proData[0].year2017[j].value[1].financial;
						barDatasTeam.bar2.value[j] = this.proData[1].year2016[j].value[1].financial;
						barDatasTeam.bar3.value[j] = this.proData[2].year2015[j].value[1].financial;
					}
					else if (this.indexActive == 2) {
						barDatasTeam.bar1.value[j] = this.proData[0].year2017[j].value[2].public;
						barDatasTeam.bar2.value[j] = this.proData[1].year2016[j].value[2].public;
						barDatasTeam.bar3.value[j] = this.proData[2].year2015[j].value[2].public;
					}
					else if (this.indexActive == 3) {
					}
					else if (this.indexActive == 4) {
						barDatasTeam.bar1.value[j] = this.proData[0].year2017[j].value[4].assets;
						barDatasTeam.bar2.value[j] = this.proData[1].year2016[j].value[4].assets;
						barDatasTeam.bar3.value[j] = this.proData[2].year2015[j].value[4].assets;
					}
					else if (this.indexActive == 5) {
						barDatasTeam.bar1.value[j] = this.proData[0].year2017[j].value[5].consume;
						barDatasTeam.bar2.value[j] = this.proData[1].year2016[j].value[5].consume;
						barDatasTeam.bar3.value[j] = this.proData[2].year2015[j].value[5].consume;
					}
					else if (this.indexActive == 6) {
						barDatasTeam.bar1.value[j] = this.proData[0].year2017[j].value[6].foreignTrade;
						barDatasTeam.bar2.value[j] = this.proData[1].year2016[j].value[6].foreignTrade;
						barDatasTeam.bar3.value[j] = this.proData[2].year2015[j].value[6].foreignTrade;
					}
					else if (this.indexActive == 7) {
						barDatasTeam.bar1.value[j] = this.proData[0].year2017[j].value[7].foreignTrade;
						barDatasTeam.bar2.value[j] = this.proData[1].year2016[j].value[7].foreignTrade;
						barDatasTeam.bar3.value[j] = this.proData[2].year2015[j].value[7].foreignTrade;
					}
				}
			}
			alert();
			this.barDatas = barDatasTeam;

		},

		changeInfo() {
			this.barData = [];
			this.lineDatas = [];
			this.indexActive = this.$store.state.app.leftIndex;
			var year = [];
			alert(555);
			if (this.yearindexActive == 1) {
				year = this.proData[1].year2016;
			} else if (this.yearindexActive == 0) {
				year = this.proData[0].year2017;
			}

			for (var i = 0; i < year.length; i++) {
				if (this.indexActive == 0) {
					this.barData.push(year[i].value[0].localProduction);
				} else if (this.indexActive == 1) {
					this.barData.push(year[i].value[1].financial);
				}
				else if (this.indexActive == 2) {
					this.barData.push(year[i].value[2].public);
				}
				else if (this.indexActive == 3) {
					this.lineData.push(year[i].value[3].scale);
				}
				else if (this.indexActive == 4) {
					this.barData.push(year[i].value[4].assets);
				}
				else if (this.indexActive == 5) {
					this.barData.push(year[i].value[5].consume);
				}
				else if (this.indexActive == 6) {
					this.barData.push(year[i].value[6].foreignTrade);
				}
				else if (this.indexActive == 7) {
					this.barData.push(year[i].value[7].export);
				}
				if (this.indexActive != 3) {
					this.lineDatas.push(year[i].value[this.indexActive].rate);
					this.lineDatas111.line1.value = this.lineDatas;
				}
			}
		},


		


		getoption2() {
			var option = {
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'cross',
						crossStyle: {
							color: '#999'
						}
					}
				},
				xAxis: [
					{
						type: 'category',
						data: ["南宁市", "北海市", "防城港市", "钦州市", "玉林市", "崇左市"],
						axisPointer: {
							type: 'shadow'
						}
					}
				],
				yAxis: [
					{
						type: 'value',
						name: '比上年同期增长',
						min: -30,
						max: 100,

						axisLabel: {
							formatter: '{value} (%)'
						}
					}
				],
				series: [
					{
						type: 'line',
						data: []
					},
				]
			};
			
			option.series[0].data = this.lineDatas;
			
			return option;
		},

		getoption() {
			var option = {
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'cross',
						crossStyle: {
							color: '#999'
						}
					}
				},
				xAxis: [
					{
						type: 'category',
						data: ["南宁市",
							"北海市",
							"防城港市",
							"钦州市",
							"玉林市",
							"崇左市"],
						axisPointer: {
							type: 'shadow'
						}
					}
				],
				yAxis: [
					{
						type: 'value',
						name: '亿元',
						min: 0,
						max: 4800,
						interval: 400,
					}
				],
				series: [
					{
						type: 'bar',
						data: []
					},
				]
			};

			if (this.yearindexActive >= 2) {
				option.series[0].data = this.barDatas.bar1.value;
				var o2 = {
					type: 'bar',
					data: this.barDatas.bar2.value
				};
				var o3 = {
					type: 'bar',
					data: this.barDatas.bar3.value
				};
				option.series.push(o2);
				option.series.push(o3);
				if (this.yearindexActive >= 3) {
					var o4 = {
						type: 'bar',
						data: this.barDatas.bar4.value
					};
					option.series.push(o4);
					var o5 = {
						type: 'bar',
						data: this.barDatas.bar5.value
					};
					option.series.push(o5);
					if (this.yearindexActive >= 4) {
						var o6 = {
							type: 'bar',
							data: this.barDatas.bar6.value
						};
						option.series.push(o6);
						var o7 = {
							type: 'bar',
							data: this.barDatas.bar7.value
						};
						option.series.push(o7);
						var o8 = {
							type: 'bar',
							data: this.barDatas.bar8.value
						};
						option.series.push(o8);
						var o9 = {
							type: 'bar',
							data: this.barDatas.bar9.value
						};
						option.series.push(o9);
						var o10 = {
							type: 'bar',
							data: this.barDatas.bar10.value
						};
						option.series.push(o10);
					}
				}
			}
			else {
				option.series[0].data = this.barData;
			}
			return option;
		}
	},
	//计算属性
	computed: {
		ll: function() {
			this.changeInfo();
			return this.lineDatas111;
		},

		ll3: function() {
			this.changeInfo();
			return this.barDatas;
		},
	},
	mounted() {
		this.leftIndex();
		var echarts = this.$echarts;
		this.echar = echarts.init(document.getElementById("container1"));
		this.do(this.getoption());
	},
	watch: {
		indexActive() {
			alert(222);
			this.changeInfo1(0);
		},
		yearindexActive() {
			this.changeInfo();
		},
		barData() {
			this.echar.clear();
			this.do(this.getoption());
		}
	}
};
</script>

<style scoped>
.isActive {
	background-color: #04cdb1;
}

</style>