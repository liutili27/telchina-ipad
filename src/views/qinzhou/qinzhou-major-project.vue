<!-- 钦州 - 重大项目 -->
<template>
	<div class="map-back">
		<div class="div-box1">
			<div class="tab-item">
				<div v-for="(n,index) in navigation" :key="index" class="tab-value" :class="{isActive:index===indexActive}" @click="changeInfo(index)">{{n}}</div>
			</div>
			<div class="div-box2">
				<div class="div-box3">

				</div>
				<div>
					<table border="1px" cellspacing="0px" cellpadding="0px" class="tab">
						<tr>
							<th v-for="(t,index) in table.title" :key="index" class="tab-th">{{t}}</th>
						</tr>
						<tr v-for="(p,index) in table.proData" :key="index" class="tab-tr">
							
							<td>{{p.name}}</td>
							<td>{{checkData(p.num)}}</td>
							<td >{{getData(p.per1)}}%</td>
							<td style="text-align:right;padding-right:24px">{{checkData(p.total)}}</td>
							<td>{{getData(p.per2)}}%</td>
							<td style="text-align:right;padding-right:67px">{{checkData(p.planTotal)}}</td>
							<td>{{getData(p.per3)}}%</td>
							<td style="text-align:right;padding-right:90px">{{checkData(p.achievement)}}</td>
							<td>{{getData(p.per4)}}%</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import projectData from './qinzhou-major-project-data.json';
import util from '@/libs/util';

export default {
	data() {
		return {
			indexActive: 0,
			navigation: ['新开项目', '续建项目', '竣工项目'],
			table: {
				title: projectData.title,
				proData: projectData.table.proData1
			}
		}
	},
	methods: {
		changeInfo(index) {
			this.indexActive = index;
			if (index == 0) {
				this.table.proData = projectData.table.proData1;
			} else if (index == 1) {
				this.table.proData = projectData.table.proData2;
			} else {
				this.table.proData = projectData.table.proData3;
			}
		},
		getData(num) {
			return parseFloat(num).toFixed(2);
		},
		checkData(number) {
			return util.formatNumber(number);
		}
	}
};
</script>



<style scoped>
.div-box1 {
	padding-top: 2vh;
}

.div-box2 {
	overflow-y: scroll;
	height: 95vh;
}

.div-box3 {
	padding: 3vw 3vw 0px 3vw;
	height: 3.5vh;
}

.map-back {
	background: url('../../assets/map-background.jpg') no-repeat;
	background-size: cover;
	width: 100%;
	height: 100%;
	text-align: center;
}


.tab-item {

	display: flex;
	justify-content: space-between;
	margin: 0px 3vw 0px 3vw;
	height: 5vh;
	background: #fff;
}

.tab-value {
	
	flex-grow: 1;
	line-height: 5vh;
}

.isActive {
	background-color: #3799FF;
	color: #fff;
}

.tab-th {
	background: #1296db;
	border: none;
}

.tab {
	width: 94vw;
	margin: 0 auto;
	font-size: 1.3vw;
	line-height: 5.8vh;
	color: white;
}

.tab-tr {
	border-color: white;
}
</style>