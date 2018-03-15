<template>
	<div>
		<div style="margin-top:3vh;display:flex;justify-content:flex-start;align-items:baseline;">
			<div style="width:6px;height:20px;background-color:#FFFFFF">
			</div>
			<div style="position:relative;" :style="{top:-3+'px'}">
				<p :style="{fontSize:14+'px'}" style="margin:0 0 4vh 1vw;font-family:'微软雅黑 Bold','微软雅黑';font-weight:700;color:#F2F2F2">2017年{{title}}信息</p>
			</div>
		</div>
		<table style="width: 92vw;border-collapse:collapse;">
			<thead>
				<tr style="font-size: 2.5vh;color: white;background: #30A3DD;height: 5vh;">
					<th v-for="titleItem in tabletitle">{{titleItem}}</th>
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
</template>

<script>
	import util from '@/libs/util';
	export default {
		props: {
			"title": {
				type: String
			},
			"tabletitle": {
				type: Array
			},
			//			"totalData": {
			//				type: Array
			//			},
			"tabledata": {
				type: Array
			}
		},
		methods: {
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
		}
	}
</script>

<style scoped="scoped">
	td {
		border: 1px solid silver;
		background-color: #F2F2F2;
	}
	
	.sonTab td:nth-of-type(1) {
		padding-left: 15vw;
		text-align: left;
		width: 16vw;
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