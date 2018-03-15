<template>
	<div id="echartBaseMap" :style="{width: '100%', height: '700px'}"></div>
</template>
<script>
import {geoData} from './geoJSON'
export default {

	mounted(){

		 this.drawChart();
	},
	methods:{
		 drawChart() {
		      // 基于准备好的dom，初始化echarts实例
		      var echarts = this.$echarts;
		      let myChart = echarts.init(document.getElementById('echartBaseMap'))
		      echarts.registerMap('gxcity',geoData);
		      myChart.setOption({
			    geo: {
			    	show: true,
			        map: 'gxcity'
			    },
			    series:[
			    	
			    	{
						type: 'scatter',
						coordinateSystem: 'geo',
						zlevel: 2,
						rippleEffect: {
							brushType: 'stroke'
						},
						symbolSize:20,
						itemStyle: {
							normal: {
								color:"#36FAFF"
							}
						},
						data: [
							{name:"南宁市",value:[108,23]},
							{name:"南宁市",value:[108.23,22.8]}],
					}
			    ]
		      });
		}
	}
}
</script>
<style>
	
</style>