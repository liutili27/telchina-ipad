<template>
	<div>
		<div v-for="(item,index) in datas" style="display: flex;flex-direction: row;padding-top:7px ;">
			<div :style="{height: '2vh',width: '2.2vw',backgroundColor:'rgba('+(27+index*228)+','+(234-234*index)+','+(193-index*193)+',0.4)'}"></div>
			<p style="color: white;font-size: 2vh;margin: -2px 0 0 3px;padding: 0;">
				{{item}}
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			"datas": {
				type: Array
			}
		},
		data: function() {
			return {

			}
		},
		mounted(){
			
		}
	}
</script>

<style scoped="scoped">
p{
	font-family: "微软雅黑";
}
</style>