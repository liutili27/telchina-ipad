<template>
	<div class="map-back">
		<div style="height: 2vh;"></div>
		<div class="tab-div">
			<div class="tab-item" v-for="(region,index) in tabs" :key="index" @click="change(index)" :class="{isActive : indexActive === index}">
				<nobr><span>{{region}}</span></nobr>
			</div>
		</div>
		<div style="width: 92vw;height:85vh;margin: 0 auto;overflow:scroll;">
			<bar-re v-if="indexActive!=0" :data="barLineData" :title="tabs[indexActive]" :totalShow="showTotalData" :totalData="totalData"></bar-re>
			<line-re v-if="indexActive!=0" :data="barLineData" :title="tabs[indexActive]" :totalShow="showTotalData" :totalData="totalData"></line-re>
			<bar-line v-if="indexActive==2" :data="barLineData" :title="'各市更新改造投资'" :totalShow="showTotalData" :totalData="totalData"></bar-line>-->
			<div>
				<div style="margin-top:3vh;display:flex;justify-content:flex-start;align-items:baseline;">
					<div style="width:6px;height:20px;background-color:white">
					</div>
					<div style="position:relative;" :style="{top:-3+'px'}">
						<p :style="{fontSize:14+'px'}" style="margin-left:1vw;font-family:'微软雅黑 Bold','微软雅黑';font-weight:700;color:#F2F2F2">2017年{{tabs[indexActive]}}信息</p>
					</div>
				</div>
				<table style="width: 92vw;border-collapse:collapse;">
					<thead v-if="indexActive!=2">
						<tr style="font-size: 2vh;color: white;background: #30A3DD;height: 5vh;">
							<th v-for="titleItem in tabletitle">{{titleItem}}</th>
						</tr>
					</thead>
					<thead v-if="indexActive==2">
						<tr style="font-size: 2vh;color: white;background: #30A3DD;height: 5vh;">
							<th rowspan="2" style="border: 1px solid silver;">地 市</th>
							<th colspan="4" style="border: 1px solid silver;">12月止累计</th>
						</tr>
						<tr style="font-size: 2vh;color: white;background: #30A3DD;height: 5vh;">
							<th>工业固定资产投资（亿元）</th>
							<th>增长%</th>
							<th>更新改造投资（亿元）</th>
							<th style="border-right: 1px solid silver;">增长%</th>
						</tr>
					</thead>
					<tbody>
						<template v-for="(item,index) in tabledata">
							<tr name="trName" style="font-size: 2.5vh;color: black;height: 5vh;" :class="{isTotal : tabledata[index].istotal}">
								<td v-for="(items,index) in item" key="index" v-if="isNaN(items) && !Array.isArray(items)" style="text-align: center;">{{items}}</td>
								<td class="right" v-else-if="typeof items == 'number'">{{formatNumber(items)}}</td>
							</tr>
							<template v-for="chiItem in item.chi">
								<tr name="trName" style="font-size: 2.5vh;color: black;height: 5vh;" class="sonTab">
									<td v-for="(items,index) in chiItem" key="index" v-if="isNaN(items)">{{items}}</td>
									<td class="right" v-else>{{formatNumber(items)}}</td>
								</tr>
							</template>
						</template>
						<!--<tr v-for="(item,index) in totalData" :key="index" name="trName" style="font-size: 2.5vh;color: black;text-align: center;height: 5vh;">
							<td style="font-weight: bold;" v-for="(items,index) in item" key="index" v-if="isNaN(items)">{{items}}</td>
							<td style="font-weight: bold;background-color: white;" v-else class="right">{{formatNumber(items)}}</td>
						</tr>-->
					</tbody>
				</table>
				<div style="height:12vh"></div>
			</div>
		</div>

	</div>
</template>

<script>
	import lineRe from './reportLine.vue';
	import barRe from './reportBar.vue';
	import barLine from './reportBarLine.vue';
	import util from '@/libs/util';
	import data from './industryEconomyData.json';
	export default {
		components: {
			lineRe,
			barRe,
			barLine
		},
		data() {
			return {
				myChart: null,
				showTotalData: false,
				totalTitle: '',
				indexActive: 0,
				tabledata: [],
				barLineData: [],
				totalData: [],
				tabletitle: [],
				tabs: [
					"全区城镇固定生产投资",
					"主要工业行业固定资产投资",
					"各市工业固定资产投资"
				]
			}
		},
		methods: {
			reportReady() {
				this.indexActive = 0;
				this.change(this.indexActive);
			},
			formatNumber(num) {
				var num = util.formatNumber(num);
				if(num.indexOf(".") == -1) {
					return num = num + ".00";
				} else if(num.indexOf(".") == num.length - 2) {
					return num = num + "0";
				} else {
					return num;
				}
			},
			change(index) {
				this.showTotalData = false;
				this.indexActive = index;
				var a = this.tabs[index];
				if(a.indexOf('各市') >= 0) {
					this.showTotalData = true;
					this.totalTitle = a.substring(2);
				}
				var datas = data[a];
				this.tabledata = datas.data;
				this.barLineData = datas.data;
				this.totalData = datas.totalData;
				this.tabletitle = datas.tableTitle;
			},
		},
		mounted() {
			this.change(this.indexActive);
		}
	}
</script>

<style scoped="scoped">
	.tab-div {
		background-color: #fff;
		margin: 0 auto;
		width: 92vw;
		display: flex;
		flex-direction: row;
	}
	
	.isActive {
		background-color: #30A3DD;
		font-weight: bold;
		color: white;
	}
	
	.tab-item {
		text-align: center;
		line-height: 6vh;
		height: 6vh;
		flex: 1 0 auto;
		display: block;
		margin: 0;
		padding: 0;
		cursor: pointer;
		font-size: 2.5vh;
	}
	
	td {
		border: 1px solid silver;
		background: #F2F2F2;
	}
	
	.map-back {
		background: url('../../../assets/map-background.jpg') no-repeat;
		background-size: cover;
		width: 100%;
		height: 100%;
	}
	
	.sonTab td:nth-of-type(1) {
		padding-left: 150px;
		text-align: left;
		width: 15vw;
	}
	
	.isTotal {
		font-weight: bold;
	}
	
	.right {
		background-color: white;
		text-align: right;
		padding-right: 2vw;
	}
</style>