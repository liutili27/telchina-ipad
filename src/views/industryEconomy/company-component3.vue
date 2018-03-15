<template>
	<div style="color: white;width: 16vw;font-size: 12px;">
		<table cellspacing="0" style="text-align: center;width: 100%;background-color: rgba(0,40,200,0.1);line-height: 23px;">
				<tr>
					<th style="width: 35%;border: 1px solid rgba(0,0,95,0.2);">排名</th>
					<th style="width: 65%;border: 1px solid rgba(0,0,95,0.2);">地市</th>
				</tr>
			<tbody v-for="(item,index) in tablelist" :key="index">
				<tr>
					<td style="width: 35%;border: 1px solid rgba(0,0,85,0.05);">{{index+1}}</td>
					<td style="width: 65%;border: 1px solid rgba(0,0,85,0.05);">{{item.name}}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	import { XTable } from 'vux'

	export default {
		props: {
			"dataList": {
				type: Array,
				required: true,
				default: function() {
					return {};
				}
			}
		},
		components: {
			XTable
		},
		data: function() {
			return {
				tablelist:[]
			}
		},
		methods: {
		
		},
		mounted() {
			for(var i=0;i<this.dataList.length;i++){
				this.tablelist.push(this.dataList[i]);
			}
			this.$nextTick(function(){
			})
			
		}
	}
</script>

<style>

</style>