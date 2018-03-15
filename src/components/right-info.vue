<template>
	<div>
		<div class="divSty" :style="{width:width/5.6+'px',height:getHeight(height)+'px',marginBottom:5+'px'}">
			<img src="../assets/component-bgimg.png" :width="width/10.5" />
			<p :style="{fontSize:height/58.2+'px',color:'white',marginLeft:-width/13+'px',marginTop:height/200+'px'}">标题</p>
			<p :style="{fontSize:height/58.2+'px',marginLeft:width/18+'px',marginTop:height/200+'px',fontWeight:'bold',color:'#00CC00'}">数据</p>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			"dataList": {
				type: Array
			}
		},
		data: function() {
			return {
				height: window.screen.availHeight,
				width: window.screen.availWidth
			}
		},
		methods: {
			getHeight(height) {
				if(height / 28.4 < 22) {
					return 22
				} else {
					return height / 28.4
				}
			}
		},
		mounted() {

		}
	}
</script>
<!-- 最小高度为28px -->
<style scoped="scoped">
	.divSty {
		background-color: white;
		display: flex;
		flex-direction: row;
	}
	
	p {
		margin: 0;
		padding: 0;
		font-family: "微软雅黑";
	}
</style>