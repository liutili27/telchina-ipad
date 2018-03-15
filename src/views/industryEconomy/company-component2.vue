<template>
	<div>
		<div style="color: white;font-size: 2vh;font-family: '微软雅黑';">{{Title}}</div>
		<div style="height: 35vh;width: 17.5vw;margin-top:-40px ;" id="com-container"></div>
	</div>
	
</template>

<script>
	export default {
		props: {
			"titleList": {
				type: Array
			},
			barColor: {
				type: Number,
				default: 0
			},
			"dataList": {
				type: Array
			},
			BorderRadius: {
				type: Number,
				default: 0
			},
			showLable:{
				type: Boolean,
				default:true
			}
		},
		data: function() {
			return {
				Color: '',
				Title: '各区市重点企业个数',
				myChart:null
			}
		},
		mounted() {
			this.$nextTick(function(){
			if(this.barColor == 1) {
				this.Color = "#04EBC0",
				this.Title = this.titleList[0]+"排行"
			} else {
				this.Color = "yellow"
			}
			var echarts = this.$echarts;
			this.myChart = echarts.init(document.getElementById("com-container")); //传入页面容器的id
			this.addEcharts(this.setoption())
			})
		},
		methods: {
			setoption() {
				var option = {
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
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
								color: "white",
							}
						},
						axisTick: {
							show: false
						},
						data: []
					},
					series: [{
						barWidth: '6px',
						itemStyle: {
							normal: {
//								if(this.barColor == 1){
//									var colorArr;
//									for(var i=0;i<dataList.length;i++){
//										if(i<=2){
//											colorArr.push("red")
//										}else{
//											colorArr.push("#04EBC0")
//										}
//									}
//									color:colorArr
//								}else{
									color: this.Color,
								//}	
								barBorderRadius: [this.BorderRadius, this.BorderRadius, this.BorderRadius, this.BorderRadius]
							}
						},
						label: {
							normal: {
								show: this.showLable,
								position: 'right',
								color: 'white'
							}
						},
						type: 'bar',
						data: []
					}]
				}
				this.dataList.sort(function(a, b) {
					if(a.value < b.value) {
						return -1;
					} else if(a.value > b.value) {
						return 1;
					} else {
						return 0;
					}
				});
				for(var i = 0; i < this.dataList.length; i++) {
					option.yAxis.data.push(this.dataList[i].name)
					option.series[0].data.push(this.dataList[i].value)
				}
				return option;
			},
			addEcharts(option) { //用来给页面容器添加可视化图表
				this.myChart.setOption(option); //传入需要渲染的数据
			},
			change(index){
				this.Title = this.titleList[index]+"排行";
				this.myChart.clear();
				this.addEcharts(this.setoption());
			}
		},
		destroyed(){
			this.myChart.dispose()
		}
	}
</script>

<style>

</style>