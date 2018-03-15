<template>
	<div>
		<div v-for="(item,index) in datas" class="divclass" :key="index" :style="{left:item.position[0]-width/29.2+'px',top:item.position[1]-height/10.3-(item.comList.length-1)*16+'px',display:'none',width:width/7.8+'px',height:height/15.8+(item.comList.length-1)*16+'px'}" name="infoDiv">
			<span class="triangle" name="triangle0" :style="{top:height / 15.8 + (item.comList.length-1)*16+'px',left:width / 51.2+'px'}"></span>
			<p><span name="setItem" :style="{fontSize: height/65+'px'}" v-for="i in item.comList" :key="i.id">{{i}}<br></span></p>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			"datas": {
				type: Array
			},
		},
		data: function() {
			return {
				height: window.screen.availHeight,
				width: window.screen.availWidth
			}
		},
		methods: {
			infoWindowShow(dataIndex) {
				var list = document.getElementsByName("infoDiv");
				for(var i = 0; i < list.length; i++) {
					if(i == dataIndex) {
						list[i].style.display = "block";
					} else {
						list[i].style.display = "none";
					}
				}
			},
			allhidden() {
				var list = document.getElementsByName("infoDiv");
				for(var i = 0; i < list.length; i++) {
					list[i].style.display = "none";
				}
			}
		},
		mounted() {
			this.$nextTick(function() {
				var list = document.getElementsByName("triangle0")
				for(var i = 0; i < list.length; i++) {
					list[i].style.borderLeft = this.width / 68.2 + "px solid transparent";
					list[i].style.borderRight = this.width / 68.2 + "px solid transparent";
					list[i].style.borderTop = this.height / 59 + "px solid #04EBC0";
					list[i].style.position = "absolute";
				}
			})
		}
	}
</script>

<style scoped="scoped">
	.divclass {
		position: absolute;
		border-radius: 5px;
		background-color: rgba(4, 235, 192, 0.4);
		color: white;
		font-family: "微软雅黑";
	}
	
	.divclass p {
		text-align: center;
		padding: 0.5vh 0 0 0;
		margin: 0;
	}
	
	.triangle {
		width: 0;
		height: 0;
		opacity: 0.4;
	}
</style>