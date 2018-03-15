<template>
	<div>
		<basemap @ready="mapReady">
			<div v-if="datahadhandel==true" v-for="item in data">
				<infowindow v-if="item.pvalue!=null" :pointLeft="item.pvalue[0]" :pointTop="item.pvalue[1]" >{{item.name}}
				</infowindow>
			</div>
		</basemap>
	</div>
</template>
<script>
import basemap from './basemap'
import infowindow from '@/components/infowindow-fixed'
import {geoData} from './geoJSON'
export default{
	components:{basemap,infowindow},
	data(){
		return {
			myChart:null,
			data:[
					{name:"1",value:[108.348346,21.718795]},
					// {name:"2",value:[108.694225,21.727641]},
					// {name:"3",value:[109.443996,21.548205]}
					
				 ],
			datahadhandel:true,
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
						symbolSize:15,
						itemStyle: {
							normal: {
								color:"#36FAFF"
							}
						},
						data: this.data,
					},
					{//这个的目的就是为了转换坐标
							type: 'custom',
							coordinateSystem: 'geo',
							renderItem: (params, api) => {
								//在渲染的时候转换坐标，也可以在外部先转换，但是在外部转换后比较死
								var p = api.coord(this.data[params.dataIndex].value);
								this.$set(this.data[params.dataIndex], "pvalue", p);
								// console.log(params)
							},
							data: this.data,
					}]
			this.myChart.setOption(option);
		
		}
	}

}

</script>
<style>

</style>