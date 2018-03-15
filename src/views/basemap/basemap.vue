<template>
	<div>
           
        <div style="position:relative">
			<div id="echartBaseMap" :style="{width: '100%', height: '900px'}">
				
			</div>
			<slot></slot>
		</div>
	</div>
</template>
<script>
import {geoData} from './geoJSON'
export default {
	data(){
		return{
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
		      
		      this.myChart.setOption({
			    geo: {
			    	show: true,
			        map: 'gxcity',
			        itemStyle: {
			        	normal: {
							areaColor: '#2A3B55',
							borderColor: '#1F5EB4',
							borderWidth: 3,
							borderType: 'solid'
						},
						emphasis:{
							areaColor: '#2A3B55',
						},
					},
					label:{
						normal:{
							color:'#fff',
							show:true,
							fontSize:16
						},
						emphasis:{
							color:'#fff',
						},
					}
			    }
		      });
		      this.$emit("ready",this.myChart);
	
		}
	}
}
</script>
<style>
.divclass{
	background: #fff;
	position:absolute;
	width:100px;
}
</style>