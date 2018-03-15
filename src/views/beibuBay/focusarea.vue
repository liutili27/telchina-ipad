<template>
	<div>
		<basemap @ready="mapReady">
			<div v-if="myChart!=null">
				<multiple-point :legendShow="'custom'" :showPointLable="true" :legendPosition="legendPosition" :myChart="myChart" :data="data" :defaultProps="defaultProps" :showInfoWindow="showInfoWindow">
					<template slot-scope="props" slot="infoContent">
						<div class="window-inner-content">
							<center>
								<div>{{props.data.name}}</div>
							</center>
							<table cellpadding="0" style="border-collapse:collapse;">
								<tr>
									<td class="key" style="padding-bottom:3vh ;">主要产业</td>
									<td style="padding-bottom:3vh ;"><span v-for="(item,index) in props.data.data.indust" :key="index" style="margin: 0;padding: 0;">{{item}}<span v-if="index!=(props.data.data.indust.length-1)">、</span></span>
									</td>
								</tr>
								<tr>
									<td class="key">产值(贸易值)</td>
									<td>{{formatNumber(props.data.data.industProd)}}亿元</td>
									<!--<td style="color:#ff9900;font-weight: 700"  v-if="typeof(props.data.data.industProdPer)=='number'">{{(props.data.data.industProdPer*100).toFixed(1)}}%</td>-->
								</tr>
								<!--<tr>
										<td>完成固定资产<br>投资总额</td>
										<td>{{props.data.data.industProdPer}}亿元</td>
										<td style="color:#ff9900;font-weight: 700" v-if="typeof(props.data.data.fixedAssetsInvestmentTotalAmountPer)=='number'">{{(props.data.data.fixedAssetsInvestmentTotalAmountPer*100).toFixed(1)}}%</td>
									</tr>
									<tr>
										<td>重点企业数量</td>
										<td>{{props.data.data.keyCompanyNumber}}个</td>
									</tr>
									<tr>
										<td>重点企业投资额</td>
										<td>{{props.data.data.keyCompanyInvestmentAmount}}亿元</td>
									</tr>
									<tr>
										<td>重大项目数量</td>
										<td>{{props.data.data.majorProjectNumber}}个</td>
									</tr>
									<tr>
										<td>重大项目投资额</td>
										<td>{{props.data.data.majorProjectInvestmentAmount}}亿元</td>
									</tr>-->
							</table>
						</div>
						<!--<div style="text-align: center;"><button @click="go">园区报表</button><button @click="go">园区发展史</button></div>-->
					</template>
					<!-- 自定义格式的图例 -->
					<template slot-scope="props" slot="legendContent">
						<div style="margin-top:-85vh;font-size:1.4vw;">
							<div>北部湾经济区重点产业园区产值</div>
							<legend-item style="display: flex;">
								<div slot="left">产值</div>
								<div slot="right" style="font-weight: bold;width: 12vw;">8,527.48亿元</div>
							</legend-item>
							<legend-item>
								<div slot="left">贸易额</div>
								<div slot="right" style="font-weight: bold;width: 12vw;">2,213.15亿元</div>
							</legend-item>
						</div>
					</template>
				</multiple-point>
				<div style="position: absolute;color:#fff;left:35vw;bottom:18.5vh;font-size:1.5vw">点击
					<img src="../../assets/map-point.png" height="20" style="vertical-align:middle;" /> 显示园区详情
				</div>
			</div>
		</basemap>
	</div>
</template>
<script>
	import basemap from '@/components/common-map.vue';
	import multiplePoint from '@/components/multiple-point.vue';
	import legendItem from '@/components/legend-item.vue';
	import { focusAreaData } from './focusareadata';
	import mapPointImg from '@/assets/map-point.png';
	import util from '@/libs/util';
	export default {
		components: {
			basemap,
			multiplePoint,
			legendItem
		},
		data() {
			return {
				myChart: null,
				data: {
					focusarea: focusAreaData
				},
				defaultProps: [{
					name: '重点区域',
					key: 'focusarea',
					//color: '#12C4B3',
					icon: mapPointImg,
				}],
				datahadhandel: false,
				legendPosition: {
					right: '3vw',
					bottom: '10vh'
				},
				showInfoWindow: {
					key: null,
					index: null
				}
			};
		},
		methods: {
			changeMenu(item, index) {
				this.showInfoWindow = {
					key: "focusarea",
					index: index
				};
			},
			mapReady(myChart) {
				this.myChart = myChart;
			},
			formatNumber(num) {
				return util.formatNumber(num);
			},
		}
	};
</script>
<style scoped>
	button {
		border: 0;
		border-radius: 5px;
		height: 4vh;
		width: 10vw;
		color: white;
		font-weight: bold;
		background: #04EBC0;
		margin-right: 1.5vw;
	}
	
	.key {
		padding-left: 1vw;
		width: 8.5vw;
		font-weight: bold;
	}
	
</style>