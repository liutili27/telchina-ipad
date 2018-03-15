<!-- 使用common-map组件示例2 -->
<template>
    <div style="width: 100%; height: 100%;">
        <common-map ref="myMap"></common-map>
    </div>
</template>
<script>
import commonMap from '@/components/common-map.vue';

export default {
    components: {
        commonMap
    },
	data(){
		return {
			barData:[
				{
					name:'钦州市',
					pvalue:[108.76089,22.407108],//地理位置,
					xAxis:["男","女"],//x轴显示的数据
					value:[24,21]//y轴数据，对应x轴
				},
				{
					name:'北海市',
					pvalue:[109.276092,21.835915],//地理位置,
					xAxis:["男","女"],//x轴显示的数据
					value:[24,21]//y轴数据，对应x轴
				},
				{
					name:'南宁市',
					pvalue:[108.353804,22.999839],//地理位置,
					xAxis:["男","女"],//x轴显示的数据
					value:[24,21]//y轴数据，对应x轴
				}

			],
		    grid:[],
		    xAxis : [],
		    yAxis : [],
		    series:[],
		}
	},
	mounted(){
        let chart = this.$refs.myMap.chart;
        let obj = {};
        this.handleData(chart);
        obj.grid = this.grid;
        obj.xAxis = this.xAxis;
        obj.yAxis = this.yAxis;
        obj.series = this.series;
        this.$refs.myMap.setOption(obj);
	},
	methods:{
		handleData(chart){
			for (var i = 0; i < this.barData.length; i++) {
				var bar=this.barData[i];
				var p = chart.convertToPixel('geo',bar.pvalue);
				this.grid.push({     
			    	  width : 40,  
		              height : 40,
		              left:p[0],
		              top:p[1]  
  				});//先将地理坐标转换成网格
				this.xAxis.push( {
		        	gridIndex:i,//代表显示在那个位置
		            type : 'category',
		            show:true,
		            data : bar.xAxis
		            
		      	});//x轴
				this.yAxis.push( {
		        	gridIndex:i,
		            type : 'value',
		            show:false,
		      	});//x轴
		      	this.series.push({
	    	   		xAxisIndex:i,
	    	   		yAxisIndex:i,
		            name:'',
		            type:'bar',
		            barWidth: '60%',
		            data:bar.value
		        });//放入柱状图
			}
		}
	}
}
</script>
<style>
	
</style>