<template>
	<div>
		<div style="margin-top:3vh;display:flex;justify-content:flex-start;align-items:baseline;">
			<div style="width:6px;height:20px;background-color:#FFFFFF">
			</div>
			<div style="position:relative;" :style="{top:-3+'px'}">
				<p :style="{fontSize:14+'px'}" style="margin-left:1vw;font-family:'微软雅黑 Bold','微软雅黑';font-weight:700;color:#F2F2F2">2017年{{title}}增长</p>
			</div>
		</div>
		<div class="statistics-class" v-show="totalShow">
			<div class="statistics-class-item" v-for="(item,index) in totalData" :key="index">
				<span class="item-title">{{item.name}}</span>
				<div class="inner-item">
					<div class="inner-item-left">同比增长</div>
					<div class="inner-item-right">{{formatNumber(item.value1)}}%</div>
				</div>
			</div>
		</div>
		<div style="height: 4vh;" v-show="!totalShow"></div>
		<div style="height: 65vh;width: 92vw;" id="line"></div>
		<div style="height: 6vh;" v-show="!totalShow"></div>
	</div>
</template>

<script>
	import util from '@/libs/util';
	export default {
		props: {
			"data": {
				type: Array
			},
			"title": {
				type: String
			},
			"totalShow": {
				type: Boolean,
				default: false
			},
			"totalData": {
				type: Array
			}
		},
		methods: {
			formatNumber(num) {
				var num = util.formatNumber(num);
				if(num.indexOf(".") == -1) {
					return num = num + ".00";
				} else if(num.indexOf(".") == num.length - 2) {
					return num = num + "0";
				} else {
					return num;
				}
			},
			getoption(data) {
				var option = {

					xAxis: [{
						type: "category",
						data: [],
						axisPointer: {
							type: "shadow"
						},
						axisTick: {
							show: false
						},
						axisLine: {
							show: true,
							lineStyle: {
								color: "#999999",
								width: 2,
								type: "solid"
							},
							onZero: false
						},
						axisLabel: {
							interval: 0,
							textStyle: {
								color: "white",
								fontSize: 14
							},
							formatter: (value) => {
								var ss = value.split("");
								var result = "";
								for(var i = 0; i < ss.length; i++) {
									result += ss[i];
									if((i + 1) % 3 == 0) {
										result += "\n";
									}
								}
								return result;
							}
						}
					}],
					yAxis: [{
						type: "value",
						name: "增幅(%)",
						nameTextStyle: {
							color: "white",
							fontSize: 14
						},
						axisLabel: {
							show: true,
							interval: 'auto',
							formatter: '{value}',
							textStyle: {
								color: "white",
								fontSize: 14
							}
						},
						axisLine: {
							show: true,
							lineStyle: {
								color: "#999999",
								width: 2,
								type: "solid"
							}
						},

						splitLine: {
							show: false
						},
						axisTick: {
							show: false
						}
					}],
					series: [{
						type: "line",
						yAxisIndex: 0,
						symbol: 'circle',
						symbolSize: 8,
						data: [],
						label: {
							normal: {
								show: true,
								position: "top",
								textStyle: {
									fontSize: 14,
									color: "white"
								}
							}
						},
						itemStyle: {
							normal: {
								color: "#5381b0",
								lineStyle: {
									width: 3
								}
							}
						}
					}]
				};
				for(var i = 0; i < data.length; i++) {
					if(!data[i].istotal) {
						option.xAxis[0].data.push(data[i].name);
						option.series[0].data.push(data[i].value1);
					}
				}
				return option;
			},
			addEcharts(option) {
				this.myChart.setOption(option);
			},
			setData() {
				this.addEcharts(this.getoption(this.data));
			}
		},
		mounted() {
			this.$nextTick(function() {
				var echarts = this.$echarts;
				this.myChart = echarts.init(document.getElementById("line"));
				this.setData();
			});
		},
		destroyed() {
			this.myChart.dispose();
		},
		watch: {
			data() {
				this.myChart.clear();
				this.setData();
			}
		}
	}
</script>

<style scoped="scoped">
	.statistics-class {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 10px;
		margin-bottom: -2vh;
	}
	
	.statistics-class-item {
		width: 25%;
		text-align: center
	}
	
	.item-title {
		color: #FFFFFF;
		font-size: 2.4vh;
		font-weight: 600;
	}
	
	.inner-item {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-top: 15px;
	}
	
	.inner-item-left {
		height: 2.6vh;
		width: 50%;
		background: #1296DB;
		padding: 1.3vh 0;
		color: #fff;
		font-size: 1.8vh;
	}
	
	.inner-item-right {
		height: 2.6vh;
		font-weight: bold;
		width: 45%;
		background: #F2F2F2;
		padding: 1.3vh 0;
		color: #000;
		font-size: 2vh;
	}
	
	.swiper-container {
		height: 80vh;
	}
	
	.swiper-slide {
		height: 80vh;
	}
</style>