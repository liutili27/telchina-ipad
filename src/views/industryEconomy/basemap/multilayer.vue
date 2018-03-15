<template>
 	<div style="position:relative">
		<div id="echartBaseMap" :style="{width: '100%', height: '700px'}">
			
		</div>
		
	</div>
</template>
<script>
import {geoData} from './geoJSON'
export default {
	data(){
		return {
			option:[],
			myChart:null
		}
	},
	mounted(){

		 this.drawChart();
	},
	methods:{
		 drawChart() {
		      // 基于准备好的dom，初始化echarts实例
		      var echarts = this.$echarts;
		      this.myChart = echarts.init(document.getElementById('echartBaseMap'))
		      echarts.registerMap('gxcity',geoData);
		      this.option={
				    geo: {
				    	show: true,
				        map: 'gxcity'
				    },
				    series:[
				    	{
							type: 'scatter',
							coordinateSystem: 'geo',
							zlevel: 1,
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
						},
						 {
				            type: 'effectScatter',
				            coordinateSystem: 'geo',
				            data: [
								{name:"南宁市",value:[108.5,23.1]},
								{name:"南宁市",value:[108.8,22.1]}],
				            symbolSize: 30,
				            showEffectOn: 'render',
				            rippleEffect: {
				                brushType: 'stroke'
				            },
				            hoverAnimation: true,
				            itemStyle: {
				                normal: {
				                    color: '#f4e925',
				                    shadowBlur: 10,
				                    shadowColor: '#333'
				                }
				            },
				            zlevel: 2
				        },
				        {
							type: 'custom',
							coordinateSystem: 'geo',
							renderItem: (params, api)=> {
								 var p=api.coord([108,22]);
								 return {
								    type: 'rect',
								    shape: {
								        x: p[0], y: p[1], width: 20, height: 20
								    },
								    style: api.style()
								}
					        },
							data: [0],
							zlevel: 4
						}
				    ]
		      };
		      this.myChart.setOption(this.option);
		}
	}
}
</script>
<style>
	
</style>