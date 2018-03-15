<template>
	<div class="map-back" style="overflow-y: scroll;overflow-x:hidden;">
		<div class="tab-div">
			<div class="tab-item" v-for="(region,index) in tabs" :key="index" @click="indexActive=index" :class="{isActive : indexActive === index}">
				<nobr><span>{{region}}</span></nobr>
			</div>
		</div>
		<div v-show="indexActive==0" style="width: 94vw;margin: 0 auto;">
			<div style="margin-top:3vh;display:flex;justify-content:flex-start;align-items:baseline;">
				<div style="width:6px;height:20px;background-color:#0062db">
				</div>
				<div style="position:relative;" :style="{top:-3+'px'}">
					<p :style="{fontSize:1+'vw'}" style="margin-left:1vw;font-family:'微软雅黑 Bold','微软雅黑';font-weight:700;color:#0062DB">2017年全区各产业增长情况</p>
				</div>
			</div>
			<div>
				<table style="width: 94vw;border-collapse:collapse;">
					<thead>
						<tr style="font-size: 1vh;color: white;background: #30A3DD;height: 5vh;">
							<th>指 标</th>
							<th>1-12月累计（亿元)</th>
							<th>同比增长%</th>
							<th>拉动GDP增 长(百分点)</th>
							<th>对GDP增长的贡献率（%）</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(item,index) in tableData" :key="index" name="trName" style="font-size: 1vh;color: black;text-align: center;height: 5vh;">
							<td style="background: #F2F2F2;">{{item.name}}</td>
							<td style="background: white;">{{formatNumber(item.gdp)}}</td>
							<td style="background: white;">{{formatNumber(item.up)}}</td>
							<td style="background: white;">{{formatNumber(item.gdpUp)}}</td>
							<td style="background: white;">{{formatNumber(item.gdpContribution)}}</td>
						</tr>
					</tbody>
				</table>
				<div style="height: 45vh;width: 65vw;margin-left:15vw ;" id="pie"></div>
			</div>
		</div>

		<div v-if="indexActive==1" style="width: 94vw;margin: 0 auto;">
			<div style="margin-top:3vh;display:flex;justify-content:flex-start;align-items:baseline;">
				<div style="width:6px;height:20px;background-color:#0062db">
				</div>
				<div style="position:relative;" :style="{top:-3+'px'}">
					<p :style="{fontSize:1+'vw'}" style="margin-left:1vw;font-family:'微软雅黑 Bold','微软雅黑';font-weight:700;color:#0062DB">2017年各市工业增加值增速</p>
				</div>
			</div>
			<cline :data="lineData"></cline>
			<div>
				<table style="width: 94vw;border-collapse:collapse;">
					<thead>
						<tr style="font-size: 1vh;color: white;background: #30A3DD;height: 5vh;">
							<th>地 市</th>
							<th>12月增速%</th>
							<th>12月止累计增速%</th>
							<th>累计增速排序</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(item,index) in lineData" :key="index" name="trName" style="font-size: 1vh;color: black;text-align: center;height: 5vh;">
							<td style="background: #F2F2F2;">{{item.name}}</td>
							<td style="background: white;">{{formatNumber(item.up)}}</td>
							<td style="background: white;">{{formatNumber(item.allUp)}}</td>
							<td style="background: white;">{{formatNumber(item.rank)}}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<div v-if="indexActive==2" style="width: 94vw;margin: 0 auto;">
			<div style="margin-top:3vh;display:flex;justify-content:flex-start;align-items:baseline;">
				<div style="width:6px;height:20px;background-color:#0062db">
				</div>
				<div style="position:relative;" :style="{top:-3+'px'}">
					<p :style="{fontSize:1+'vw'}" style="margin-left:1vw;font-family:'微软雅黑 Bold','微软雅黑';font-weight:700;color:#0062DB">2017年主要工业行业增加值增速</p>
				</div>
			</div>
			<cline :data="lineData1"></cline>
			<div>
				<table style="width: 94vw;border-collapse:collapse;">
					<thead>
						<tr style="font-size: 1vh;color: white;background: #30A3DD;height: 5vh;">
							<th>行 业</th>
							<th>12月增速%</th>
							<th>12月止累计增速%</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(item,index) in lineData1" :key="index" name="trName" style="font-size: 1vh;color: black;text-align: center;height: 5vh;">
							<td style="background: #F2F2F2;">{{item.name}}</td>
							<td style="background: white;">{{formatNumber(item.up)}}</td>
							<td style="background: white;">{{formatNumber(item.allUp)}}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<div v-if="indexActive==3" style="width: 94vw;margin: 0 auto;">
			<div style="margin-top:3vh;display:flex;justify-content:flex-start;align-items:baseline;">
				<div style="width:6px;height:20px;background-color:#0062db">
				</div>
				<div style="position:relative;" :style="{top:-3+'px'}">
					<p :style="{fontSize:1+'vw'}" style="margin-left:1vw;font-family:'微软雅黑 Bold','微软雅黑';font-weight:700;color:#0062DB">2017年主要工业行业增加值增速</p>
				</div>
			</div>
			<bar-line :data="lineData2"></bar-line>
			<div>
				<table style="width: 94vw;border-collapse:collapse;">
					<thead>
						<tr style="font-size: 1vh;color: white;background: #30A3DD;height: 5vh;">
							<th>地 市</th>
							<th>12月止累计（亿元）</th>
							<th>比上年同期±%</th>
							<th>2016年累计（亿元）</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(item,index) in lineData2" :key="index" name="trName" style="font-size: 1vh;color: black;text-align: center;height: 5vh;">
							<td style="background: #F2F2F2;">{{item.name}}</td>
							<td style="background: white;">{{formatNumber(item.up)}}</td>
							<td style="background: white;">{{formatNumber(item.allUp)}}</td>
							<td style="background: white;">{{formatNumber(item.rank)}}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<div v-if="indexActive==4" style="width: 94vw;margin: 0 auto;">
			<div style="margin-top:3vh;display:flex;justify-content:flex-start;align-items:baseline;">
				<div style="width:6px;height:20px;background-color:#0062db">
				</div>
				<div style="position:relative;" :style="{top:-3+'px'}">
					<p :style="{fontSize:1+'vw'}" style="margin-left:1vw;font-family:'微软雅黑 Bold','微软雅黑';font-weight:700;color:#0062DB">2017年主要工业行业增加值增速</p>
				</div>
			</div>
			<bar-line :data="lineData3"></bar-line>
			<div>
				<table style="width: 94vw;border-collapse:collapse;">
					<thead>
						<tr style="font-size: 1vh;color: white;background: #30A3DD;height: 5vh;">
							<th>行 业</th>
							<th>12月止累计（亿元）</th>
							<th>同比±%</th>
							<th>2016年累计（亿元）</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(item,index) in lineData3" :key="index" name="trName" style="font-size: 1vh;color: black;text-align: center;height: 5vh;">
							<td style="background: #F2F2F2;">{{item.name}}</td>
							<td style="background: white;">{{formatNumber(item.up)}}</td>
							<td style="background: white;">{{formatNumber(item.allUp)}}</td>
							<td style="background: white;">{{formatNumber(item.rank)}}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<div v-if="indexActive==5" style="width: 94vw;margin: 0 auto;">
			<div style="margin-top:3vh;display:flex;justify-content:flex-start;align-items:baseline;">
				<div style="width:6px;height:20px;background-color:#0062db">
				</div>
				<div style="position:relative;" :style="{top:-3+'px'}">
					<p :style="{fontSize:1+'vw'}" style="margin-left:1vw;font-family:'微软雅黑 Bold','微软雅黑';font-weight:700;color:#0062DB">2017主要工业产品产量</p>
				</div>
			</div>
			<div>
				<table style="width: 94vw;border-collapse:collapse;">
					<thead>
						<tr style="font-size: 1vh;color: white;background: #30A3DD;height: 5vh;">
							<th>行 业</th>
							<th>12月止累计（亿元）</th>
							<th>同比±%</th>
							<th>2016年累计（亿元）</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(item,index) in lineData4" :key="index" name="trName" style="font-size: 1vh;color: black;text-align: center;height: 5vh;">
							<td style="background: #F2F2F2;">{{item.name}}</td>
							<td style="background: white;">{{formatNumber(item.up)}}</td>
							<td style="background: white;">{{formatNumber(item.allUp)}}</td>
							<td style="background: white;">{{formatNumber(item.rank)}}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
	import cline from './reportLine.vue';
	import barLine from './reportBarLine.vue';
	import util from '@/libs/util';
	export default {
		components: {
			cline,
			barLine
		},
		data() {
			return {
				myChart: null,
				tabs: [
					"各区各产业生产总值",
					"各市工业增加值增速",
					"工业行业增加值增速",
					"各市工业总产值",
					"主要工业行业总产值",
					"主要工业产品产量"
				],
				indexActive: 0,
				tableData: [{
						name: "广西生产总值(亿元)",
						gdp: 20396.25,
						up: 7.3,
						gdpUp: "-",
						gdpContribution: "-"
					},
					{
						name: "第一产业",
						gdp: 2906.87,
						up: 4.1,
						gdpUp: 0.6,
						gdpContribution: 8.3
					},
					{
						name: "第二产业",
						gdp: 9297.84,
						up: 6.6,
						gdpUp: 3.0,
						gdpContribution: 41.9,
						chidrens: [{
							name: "工业",
							gdp: 7663.71,
							up: 6.8,
							gdpUp: 2.6,
							gdpContribution: 35.6,
						}]
					},
					{
						name: "第三产业",
						gdp: 8191.54,
						up: 9.2,
						gdpUp: 2.6,
						gdpContribution: 49.8
					}
				],
				echartsData: [{
						name: '第一产业',
						value: 14.25
					},
					{
						name: '第二产业',
						value: 45.6
					},
					{
						name: '第三产业',
						value: 40.16
					}
				],
				lineData: [{
					name: '全自治区',
					up: 7.5,
					allUp: 7.1,
					rank: '-'
				}, {
					name: '南宁市',
					up: 7.3,
					allUp: 9.9,
					rank: 6
				}, {
					name: '柳州市',
					up: 9.6,
					allUp: 4.7,
					rank: 12
				}, {
					name: '桂林市',
					up: -11.2,
					allUp: -1.5,
					rank: 13
				}, {
					name: '梧州市',
					up: -5.0,
					allUp: 5.8,
					rank: 11
				}, {
					name: '北海市',
					up: 10.4,
					allUp: 11.9,
					rank: 3
				}, {
					name: '防城港市',
					up: 1.2,
					allUp: 6.5,
					rank: 9
				}, {
					name: '钦州市',
					up: 32.0,
					allUp: 12.8,
					rank: 1
				}, {
					name: '贵港市',
					up: 18.8,
					allUp: 12.2,
					rank: 2
				}, {
					name: '玉林市',
					up: 5.0,
					allUp: 8.3,
					rank: 8
				}, {
					name: '百色市',
					up: 17.1,
					allUp: 10.1,
					rank: 5
				}, {
					name: '贺州市',
					up: -10.0,
					allUp: -3.8,
					rank: 14
				}, {
					name: '河池市',
					up: 26.0,
					allUp: 9.2,
					rank: 7
				}, {
					name: '来宾市',
					up: 6.2,
					allUp: 5.9,
					rank: 10
				}, {
					name: '崇左市',
					up: 23.6,
					allUp: 10.8,
					rank: 4
				}, {
					name: '北部湾经济区',
					up: 10.6,
					allUp: 10.4,
					rank: '-'
				}, {
					name: '桂西资源富集区',
					up: 20.9,
					allUp: 10.2,
					rank: '-'
				}, {
					name: '西江经济带',
					up: 10.1,
					allUp: 7.8,
					rank: '-'
				}],
				lineData1: [{
					name: '有色金属',
					up: 10.01,
					allUp: 11.78
				}, {
					name: '汽车工业',
					up: 13.20,
					allUp: 5.10
				}, {
					name: '食品工业',
					up: 6.86,
					allUp: 5.85
				}, {
					name: '石油化工',
					up: 18.89,
					allUp: 9.47
				}, {
					name: '机械工业',
					up: 3.09,
					allUp: 7.92
				}, {
					name: '医药工业',
					up: -1.80,
					allUp: 7.80
				}, {
					name: '电子工业',
					up: 26.70,
					allUp: 19.70
				}, {
					name: '七个重点产业合计',
					up: 10.44,
					allUp: 8.64
				}, {
					name: '冶金工业',
					up: -16.61,
					allUp: -16.70
				}, {
					name: '电力工业',
					up: 6.50,
					allUp: 11.40
				}, {
					name: '建材工业',
					up: 6.83,
					allUp: 7.31
				}, {
					name: '造纸与木材加工',
					up: 9.19,
					allUp: 12.80
				}, {
					name: '纺织服装与皮革',
					up: 5.11,
					allUp: 6.29
				}, {
					name: '煤炭工业',
					up: 72.20,
					allUp: 3.20
				}, {
					name: '其他工业',
					up: 19.78,
					allUp: 32.40
				}, {
					name: '共计',
					up: 7.50,
					allUp: 7.10
				}],
				lineData2: [{
					name: '全自治区',
					up: 27138.43,
					allUp: 13.86,
					rank: 24524.33
				}, {
					name: '崇左市',
					up: 938.86,
					allUp: 25.70,
					rank: 747.06
				}, {
					name: '钦州市',
					up: 1846.31,
					allUp: 24.75,
					rank: 1524.14
				}, {
					name: '百色市',
					up: 1824.91,
					allUp: 23.51,
					rank: 1480.63
				}, {
					name: '河池市',
					up: 403.05,
					allUp: 20.39,
					rank: 340.80
				}, {
					name: '防城港市',
					up: 1770.10,
					allUp: 20.06,
					rank: 1501.24
				}, {
					name: '贵港市',
					up: 1182.25,
					allUp: 19.48,
					rank: 985.66
				}, {
					name: '来宾市',
					up: 611.11,
					allUp: 17.03,
					rank: 526.81
				}, {
					name: '北海市',
					up: 2537.29,
					allUp: 16.43,
					rank: 2180.74
				}, {
					name: '梧州市',
					up: 2659.65,
					allUp: 14.92,
					rank: 2310.03
				}, {
					name: '南宁市',
					up: 3989.82,
					allUp: 13.89,
					rank: 3537.05
				}, {
					name: '玉林市',
					up: 1901.38,
					allUp: 13.56,
					rank: 1675.97
				}, {
					name: '柳州市',
					up: 5025.22,
					allUp: 7.53,
					rank: 4685.11
				}, {
					name: '桂林市',
					up: 1980.39,
					allUp: 0.24,
					rank: 2521.04
				}, {
					name: '贺州市',
					up: 431.64,
					allUp: -11.09,
					rank: 483.60
				}, {
					name: '北部湾经济区',
					up: 10143.51,
					allUp: 17.44,
					rank: 8743.18
				}, {
					name: '桂西资源富集区',
					up: 3166.82,
					allUp: 23.74,
					rank: 2568.50
				}, {
					name: '西江经济带',
					up: 16231.82,
					allUp: 14.09,
					rank: 14272.36
				}],
				lineData3: [{
					name: '有色金属',
					up: 2199.40,
					allUp: 33.57,
					rank: 1731.39
				}, {
					name: '汽车工业',
					up: 2841.99,
					allUp: 7.33,
					rank: 2661.85
				}, {
					name: '食品工业',
					up: 4150.47,
					allUp: 10.24,
					rank: 3821.71
				}, {
					name: '石油化工',
					up: 2708.47,
					allUp: 19.45,
					rank: 2325.22
				}, {
					name: '机械工业',
					up: 2805.49,
					allUp: 12.95,
					rank: 2704.00
				}, {
					name: '医药工业',
					up: 491.28,
					allUp: 12.37,
					rank: 478.07
				}, {
					name: '电子工业',
					up: 1838.54,
					allUp: 16.28,
					rank: 1546.38
				}, {
					name: '七个重点产业合计',
					up: 17035.64,
					allUp: 18.35,
					rank: 15268.61
				}, {
					name: '冶金工业',
					up: 2859.50,
					allUp: -1.37,
					rank: 2880.45
				}, {
					name: '电力工业',
					up: 1122.15,
					allUp: 15.42,
					rank: 1127.58
				}, {
					name: '建材工业',
					up: 2476.83,
					allUp: 16.18,
					rank: 2173.81
				}, {
					name: '造纸与木材加工',
					up: 2072.71,
					allUp: 18.99,
					rank: 1746.36
				}, {
					name: '纺织服装与皮革',
					up: 656.83,
					allUp: 15.00,
					rank: 576.83
				}, {
					name: '煤炭工业',
					up: 72.81,
					allUp: 24.74,
					rank: 576.83
				}, {
					name: '其他工业',
					up: 841.97,
					allUp: 18.79,
					rank: 692.83
				}, {
					name: '共计',
					up: 27138.43,
					allUp: 13.86,
					rank: 24524.33
				}],
				lineData4: [{
						name: '成品糖（万吨）',
						up: 935.96,
						allUp: 4.42,
						rank: 914.29
					},
					{
						name: '机制纸（万吨）',
						up: 300.89,
						allUp: 4.14,
						rank: 288.71
					},
					{
						name: '发酵酒精（万千升）',
						up: 79.25,
						allUp: 7.11,
						rank: 73.99
					},
					{
						name: '卷烟（万箱）',
						up: 144.26,
						allUp: -2.35,
						rank: 147.73
					},
					{
						name: '发电量（亿千瓦时）',
						up: 1342.01,
						allUp: 5.20,
						rank: 1275.80
					},
					{
						name: '全社会用电量（亿千瓦时）',
						up: 1442.34,
						allUp: 6.08,
						rank: 1358.06
					},
					{
						name: '工业用电量（亿千瓦时）',
						up: 917.88,
						allUp: 4.20,
						rank: 880.88
					},
					{
						name: '原油加工量（万吨）',
						up: 1562.50,
						allUp: 16.61,
						rank: 1339.90
					},
					{
						name: '化肥（万吨）',
						up: 84.90,
						allUp: -11.59,
						rank: 85.60
					},
					{
						name: '钢铁（万吨）',
						up: 3270.73,
						allUp: -9.00,
						rank: 3644.70
					},
					{
						name: '铁合金（万吨）',
						up: 521.15,
						allUp: 0.53,
						rank: 521.08
					},
					{
						name: '十种有色金属（万吨）',
						up: 230.0,
						allUp: 27.35,
						rank: 180.26
					},
					{
						name: '电解铝（万吨）',
						up: 120.55,
						allUp: 53.85,
						rank: 78.36
					},
					{
						name: '氧化铝（万吨）',
						up: 1045.80,
						allUp: 15.43,
						rank: 906.00
					},
					{
						name: '水泥（万吨）',
						up: 12179.38,
						allUp: 2.01,
						rank: 11970.65
					},
					{
						name: '发动机（万千瓦）',
						up: 20585.59,
						allUp: 4.72,
						rank: 19657.61
					},
					{
						name: '汽车（万辆）',
						up: 248.61,
						allUp: 1.28,
						rank: 245.45
					}
				]
			}
		},
		methods: {
			getoption(data) {
				var option = {
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b} : {c}%"
					},
					series: [{
						name: '占比',
						type: 'pie',
						data: [],
						label: {
							normal: {
								formatter: '{b} {d}%',
								textStyle: {
									fontSize: 12,
									color: 'white'
								}
							}
						},
						color: ["#1BB2D8", "#ff6600", "#1296DB"]
					}]
				};
				for(var i = 0; i < data.length; i++) {
					option.series[0].data.push(data[i])
				}
				return option;
			},
			addEcharts(option) {
				this.myChart.setOption(option);
			},
			formatNumber(num) {
				return util.formatNumber(num);
			}
		},
		mounted() {
			this.$nextTick(function() {
				var echarts = this.$echarts;
				this.myChart = echarts.init(document.getElementById("pie"));
				this.addEcharts(this.getoption(this.echartsData));
			});
		},
		destroyed() {
			this.myChart.dispose();
		}
	}
</script>

<style scoped="scoped">
	.tab-div {
		padding-top: 3vh;
		margin: 0 auto;
		width: 94vw;
		display: flex;
		flex-direction: row;
		border-bottom: 1px solid #30A3DD;
	}
	
	.isActive {
		background-color: #30A3DD;
		font-weight: bold;
	}
	
	.tab-item {
		text-align: center;
		line-height: 5vh;
		height: 5vh;
		flex: 0 0 auto;
		display: block;
		margin: 0;
		padding: 0;
		width: 15vw;
		cursor: pointer;
		font-size: 1vh;
		color: white;
	}
	
	td {
		border: 1px solid silver;
	}
	
	.map-back {
		background: url('../../../assets/map-background.jpg') no-repeat;
		background-size: cover;
		width: 100%;
		height: 100%;
	}
</style>