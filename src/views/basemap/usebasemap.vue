<template>
	<div>
		<basemap>
			<!-- <div style="position:absolute;left:110px;top:120px;">alfkajdlf</div> -->
		</basemap>
	</div>
</template>
<script>
import basemap from './basemap'

import {geoData} from './geoJSON'
export default{
	components:{basemap},
	data(){
		return {
			myChart:null
		}
	},
	methods:{
		mapReady(myChart){
			this.myChart=myChart;
			var option=this.myChart.getOption();
			option.series=[{
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
					}]
			this.myChart.setOption(option);
			this.myChart.on('click', function (params) {
			    console.log(params);
			});
		}
	}
}

</script>
<style>
	
</style>