<template>
	<div>
           
        <div style="position:relative">
			<div id="echartBaseMap" :style="{width: '100%', height: '700px'}">
				
			</div>
			<div v-if="positionhadinit">
				<div v-for="item in data" class="divclass" :style="{left:item.position[0]+'px',top:item.position[1]+'px'}">
						<p>{{item.name}}</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import {geoData} from './geoJSON'
export default {
	data(){
		return{
			data:[
			      {name:"南宁市",value:[108.3,23]},
			      {name:"南宁市",value:[108.6,22.2]}
			     ],
			positionhadinit:false,
		}
	},
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
			        map: 'gxcity',
			        roam: true,
			    },
			    series:[
			    	{
						type: 'custom',
						coordinateSystem: 'geo',
						renderItem: (params, api)=> {
							
							var lat=this.data[params.dataIndex].value[0];
							var lng=this.data[params.dataIndex].value[1];
							var p=api.coord([lat,lng]);

							this.$set(this.data[params.dataIndex],"position",p);

				        },
						data:this.data,
					}
			    ]
		      });
		      this.positionhadinit=true;
		}
	}
}
</script>
<style>
.divclass{
	background: #fff;
	position:absolute;
	width:100px;
	/*height:20px;*/
}
</style>