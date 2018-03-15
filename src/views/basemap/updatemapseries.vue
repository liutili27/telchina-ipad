<template>
 	<div style="position:relative">
		<div id="echartBaseMap" :style="{width: '100%', height: '700px'}">
			
		</div>
		<div style="position:absolute;top:100px;left:150px">
			<Button @click="changeData">点击更新数据</Button>
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
		      };
		      this.myChart.setOption(this.option);
		},
		changeData(){
			if(!this.myChart){
		          return;
		     }
		     
		     //更新数据
		     var option = this.myChart.getOption();
		     option.series[0].data = [
									{name:"南宁市",value:[108,23.2]},
									{name:"南宁市",value:[108.3,22.2]},
									{name:"南宁市",value:[108.4,23.1]},
									{name:"南宁市",value:[109.1,23.5]}
								];   
		     this.myChart.setOption(option);    


		}
	}
}
</script>
<style>
	
</style>