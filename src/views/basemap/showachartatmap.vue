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
			myChart:null,
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
		    /*
	    	{     
	    	  width : 30,  
              height : 40,
              left:100,
              top:100  
            }
		     */
		    xAxis : [],
		    /*
		    xAxis数据结构
		    {
	        	gridIndex:0,
	            type : 'category',
	            show:true,
	            data : ['Mon', 'Tue']
		          
		      }
		     */
		    yAxis : [],
		    /*
		    {
	        	gridIndex:0,
	            type : 'value',
	            show:false,
	        }
		     */
		    series:[],
		    /*
		      {
	    	   		xAxisIndex:0,
	    	   		yAxisIndex:0,
		            name:'直接访问',
		            type:'bar',
		            barWidth: '60%',
		            data:[50, 52]
		        },
		     */
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
		      // this.handleData();
		      this.option={
				    geo: {
				    	show: true,
				        map: 'gxcity'
				    },
		      };
		      this.myChart.setOption(this.option);
		      this.handleData();
		      this.option=this.myChart.getOption();
		      this.option.grid=this.grid;
		      this.option.xAxis=this.xAxis;
		      this.option.yAxis=this.yAxis;
		      this.option.series=this.series;
		      this.myChart.setOption(this.option);
		},
		handleData(){
			for (var i = 0; i < this.barData.length; i++) {
				var bar=this.barData[i];
				var p = this.myChart.convertToPixel('geo',bar.pvalue);
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
		            data:bar.value,
		            itemStyle: {   
		                normal:{  
		                    color: function (params){
		                        var colorList = ['red','blue','rgb(25,46,94)','rgb(195,229,235)'];
		                        return colorList[params.dataIndex];
		                    }
		                }
		            }

		        });//放入柱状图
			}
		}
	}
}
</script>
<style>
	
</style>