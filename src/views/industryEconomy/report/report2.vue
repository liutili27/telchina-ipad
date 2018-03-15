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
			<!--<bar-line :data="barLineData" v-if="indexActive!=0" :title="tabs[indexActive]" :totalShow="showTotalData" :totalData="totalData"></bar-line>-->
			<ta-re :totalData="totalData" :tabledata="tabledata" :title="tabs[indexActive]" :tabletitle="tabletitle"></ta-re>
		</div>
	</div>
</template>

<script>
	import lineRe from './reportLine.vue';
	import barRe from './reportBar.vue';
	import taRe from './reportTable.vue';
	//	import barLine from './reportBarLine.vue';
	import util from '@/libs/util';
	import data from './industryEconomyData.json';

	export default {
		components: {
			//			barLine,
			taRe,
			lineRe,
			barRe
		},
		data() {
			return {
				showTotalData: false,
				totalTitle: '',
				myChart: null,
				indexActive: 0,
				tabledata: [],
				tabletitle: [],
				barLineData: [],
				totalData: [],
				swiperOption: {
					direction: 'vertical',
				},
				tabs: [
					"全区工业经济效益",
					"各市工业利润总额",
					"主要工业行业利润总额"
				]
			}
		},
		methods: {
			reportReady() {
				this.indexActive = 0;
				this.change(this.indexActive);
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
				this.totalData = datas.totalData;
				this.barLineData = datas.data;
				this.tabletitle = datas.tableTitle;
			}
		},
		mounted() {
			this.$nextTick(function() {
				this.change(this.indexActive);
			})
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
		background-color: #F2F2F2;
	}
	
	.map-back {
		background: url('../../../assets/map-background.jpg') no-repeat;
		background-size: cover;
		width: 100%;
		height: 100%;
	}
	
	.sonTab td:nth-of-type(1) {
		padding-left: 15vw;
		text-align: left;
		width: 16vw;
	}
	
	.right {
		padding-right: 6vw;
		text-align: right;
	}
	
	.swiper-container {
		height: 80vh;
	}
	
	.swiper-slide {
		height: 100vh;
	}
</style>