<!-- 工业经济-首页 -->
<template>
	<div style="width: 100%; height: 100%; position:relative">
		<basemap @ready="mapReady" :mapType="'gx'" :showText="false">
            <page-title></page-title>
			<!--<div style="position: absolute;top: 20vh;right: 3vw;">
				<right :datas="data" :showId="showId"></right>
			</div>-->
			<vertical-bar :showShadow='true' :position="{top:'16vh',right:'1vw'}" :data="verticalBarData" :width="'20vw'" :height="'60vh'">
				<div slot="title">
					<center>{{title}}</center>
				</div>
			</vertical-bar>
			<div v-if="myChart!=null">
				<mapBar :myChart="myChart" :data="barData" :color="['#00FFCC', '#FF0000']" :pointValueKey="'pvalue'" :yAxisKey="'value'" :xAxis="infos" :legendPosition="{bottom: '18vh',left: '10vw'}" :showLabel="true" :onlyShowLine="onlyShowLine" :legendShow="true"></mapBar>
			</div>
			<!--<div style="position: absolute;top: 68vh;left: 12vw;">
				<info :datas="infos"></info>
			</div>-->
		</basemap>
		<!--<popup v-model="showRightPopup" position="right" width="100%">
			<div style="position: relative; height: 100%; overflow: auto;">
				<indicator v-if="i==2"></indicator>
				<enterprise-record v-if="i==1"></enterprise-record>
				<industry-number v-if="i==3"></industry-number>
				<i class="fa fa-close right-pop-close" @click="showRightPopup = false"></i>
			</div>
		</popup>-->
	</div>
</template>
<script>
	import basemap from '@/components/common-map.vue';
	//	import { Popup } from 'vux';
	//	import indicator from './indicator.vue'; //行业指标报表页

	import jsondata from './com-data.json';

	//	import right from './c-right.vue';
	//	import info from '@/views/stats-department/info-component.vue';
	import verticalBar from '@/components/vertical-bar.vue';
	import mapBar from '@/components/map-bar-image.vue';

	//	import enterpriseRecord from './enterpriseRecord.vue';
	//	import industryNumber from './industryNumber.vue';
    import pageTitle from '@/components/page-title.vue';
	export default {
		components: {
			basemap,
			//			Popup,
			//			indicator,
			//			right,
			//			info,
			verticalBar,
			mapBar,
			//			enterpriseRecord,
			//			industryNumber,
            pageTitle
		},
		data() {
			return {
				showRightPopup: false,
				myChart: null,
				barData: [],
				infos: [],
				//data: [],

				verticalBarData: [],
				title: '',
				//i: 0,

				grid: [],
				xAxis: [],
				yAxis: [],
				series: [],
				//showId: 0,
				
				onlyShowLine: false,
				mapPoint: {
					"南宁市": [108.53, 23.24],
                    "桂林市": [110.48, 25.29],
                    "柳州市": [109.5, 24.73],
                    "玉林市": [110.24, 22.54],
                    "钦州市": [108.79, 22.36],
                    "百色市": [106.62, 23.91],
                    "河池市": [107.66, 24.7],
                    "北海市": [109.42, 21.69],
                    "梧州市": [111.04, 23.51],
                    "贺州市": [111.51, 24.62],
                    "崇左市": [107.17, 22.62],
                    "贵港市": [110.0, 23.3],
                    "来宾市": [109.24, 23.86],
                    "防城港市": [108.05, 21.78]
				},

			}
		},
		mounted() {
			this.$nextTick(function() {
				this.changeMenu(0, 0);
				//				this.data = jsondata[1].summary;
			})
		},
		methods: {
			mapReady(myChart) {
				this.myChart = myChart;
				//				this.grid = [],
				//					this.xAxis = [],
				//					this.yAxis = [],
				//					this.series = [],
				//					this.myChart = myChart;
				//				var option = this.myChart.getOption();
				//				for(var i = 0; i < this.barData.length; i++) {
				//					var bar = this.barData[i];
				//					var p = this.myChart.convertToPixel('geo', bar.pvalue);
				//					this.xAxis.push({
				//						gridIndex: i, //代表显示在那个位置
				//						type: 'category',
				//						show: false,
				//						data: []
				//					}); //x轴
				//					this.yAxis.push({
				//						gridIndex: i,
				//						type: 'value',
				//						show: false,
				//						max: bar.maxValue
				//					}); //x轴
				//					if(Array.isArray(bar.value)) {
				//						this.grid.push({
				//							width: 25,
				//							height: 40,
				//							left: p[0],
				//							top: p[1]
				//						}); //先将地理坐标转换成网格
				//						for(var j = 0; j < bar.value.length; j++) {
				//							var color1 = "255,255,255"
				//							if(bar.value[j] < 0) {
				//								color1 = "255,0,0"
				//							}
				//							this.series.push({
				//								xAxisIndex: i,
				//								yAxisIndex: i,
				//								name: '',
				//								type: 'bar',
				//								barWidth: '60%',
				//								label: {
				//									normal: {
				//										show: true,
				//										position: 'top',
				//										color: 'rgba(' + color1 + ', 1)'
				//									}
				//								},
				//								data: [bar.value[j]],
				//								itemStyle: {
				//									normal: {
				//										color: 'rgba(' + (27 + j * 228) + ',' + (234 - 234 * j) + ',' + (193 - j * 193) + ', 0.4)',
				//										//这里修改了柱子的颜色以及透明度，注意如果要修改透明度，一定要配置在itemStyle里面，直接写在外面不起作用。
				//										borderWidth: 0.8,
				//										borderColor: 'rgba(' + (27 + j * 228) + ',' + (234 - 234 * j) + ',' + (193 - j * 193) + ', 1)',
				//									}
				//								},
				//							})
				//						}
				//					} else {
				//						this.grid.push({
				//							width: 25,
				//							height: bar.value * 3.8,
				//							left: p[0],
				//							top: p[1]
				//						}); //先将地理坐标转换成网格
				//						var color = "27,234,193"
				//						if(bar.value < 0) {
				//							color = "255,0,0"
				//						}
				//						this.series.push({
				//							xAxisIndex: i,
				//							yAxisIndex: i,
				//							name: '',
				//							type: 'bar',
				//							barWidth: '60%',
				//							label: {
				//								normal: {
				//									show: true,
				//									position: 'top',
				//									color: 'rgba(' + color + ', 1)'
				//								}
				//							},
				//							data: [bar.value],
				//							itemStyle: {
				//								normal: {
				//									color: 'rgba(' + color + ', 0.4)',
				//									//这里修改了柱子的颜色以及透明度，注意如果要修改透明度，一定要配置在itemStyle里面，直接写在外面不起作用。
				//									borderWidth: 0.8,
				//									borderColor: 'rgba(' + color + ', 1)',
				//								}
				//							},
				//						})
				//					}
				//				}
				//				option.grid = this.grid;
				//				option.xAxis = this.xAxis;
				//				option.yAxis = this.yAxis;
				//				option.series = this.series;
				//				this.myChart.clear();
				//				this.myChart.setOption(option);
			},
			changeMenu(item, index) {
				this.onlyShowLine = false;
				if (index == 0) {
					this.onlyShowLine = true;
				}
				this.barData = [];
				this.verticalBarData = [];
				var mapData = JSON.parse(JSON.stringify(jsondata[index]));
				for(var i = 0; i < mapData.mapData.length; i++) {
					mapData.mapData[i].pvalue = this.mapPoint[mapData.mapData[i].name];
					this.barData.push(mapData.mapData[i]);
					var data = {
						name: mapData.mapData[i].name,
						value: mapData.mapData[i].value[0]
					};
					this.verticalBarData.push(data);
				}
				this.infos = mapData.valueTitle;
				this.data = mapData.summary;
				this.title = mapData.name + '排行';
			}
		},
		destroyed() {
			//this.myChart.dispose()
		}
	}
</script>
<style scoped>
	.right-pop-close {
		position: absolute;
		right: 20px;
		top: 20px;
		font-size: 28px;
	}
	
	.fontColor {
		font-weight: bold;
		color: #00CC00;
	}
</style>