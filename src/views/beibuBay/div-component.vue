<template>
	<div>
		<div :class="{colorRed: item.speedUp > 0}" v-for="item in datas" :key="item.id" class="divclass" :style="{left:item.position[0]-width/21.78+'px',top:item.position[1]-height/10.6+'px',width:getRealSize(width/9.8)+'px',height:getRealSize(height/14)+'px',fontSize:height/51.2+'px',border:getRealSize(height/280)+'px solid #04EBC0'}">
			<span name="triangle" :style="{position:'absolute',top:getRealSize(height/13.3)+'px'}"></span>
			<p>
                <span>{{formatNumber(item.total)}}</span><span>{{cityData.unit}}</span>
            </p>
			<p>
				<i class="iconfont icon-tubiaoshangshengqushi" v-if="item.speedUp > 0"></i>
				<i class="iconfont icon-tubiaoxiajiangqushi" v-else></i> 增长{{getSpeedUp(item.speedUp)}}%
			</p>
			<div class="info" :style="{position:'absolute',top:height/10+'px'}">
				<p>{{item.name}}</p>
				<!--<p>地市排名：{{item.totalRank}}</p>-->
				<p>全区增速排名：{{item.SpeedUpRank}}</p>
				<!--<p class="percent">六市占比:{{sixCityPercent(item.total)}}%</p>-->
			</div>
		</div>
	</div>
</template>

<script>
	import util from '@/libs/util';
	export default {
		props: {
			"datas": Array,
			"cityData": Object,
            "unit": String
		},
		data: function() {
			return {
				height: window.screen.availHeight,
				width: window.screen.availWidth
			};
		},
		methods: {
			getRank() {
				this.$nextTick(() => {
					this.datas.sort(function(a, b) {
						if(a.total > b.total) {
							return -1;
						} else if(a.total < b.total) {
							return 1;
						} else {
							return 0;
						}
					});
					this.setRank("totalRank");
					this.datas.sort(function(a, b) {
						if(a.speedUp > b.speedUp) {
							return -1;
						} else if(a.speedUp < b.speedUp) {
							return 1;
						} else {
							return 0;
						}
					});
					this.setRank("SpeedUpRank");
				})
			},
			setRank(keyName) {
				// console.log(this.datas.length);
				// console.log(keyName);
				for(var i = 0; i < this.datas.length; i++) {
					this.$set(this.datas[i], keyName, i + 1);
				}
				// console.log(this.datas)
			},
			getSpeedUp(speedUp) {
				return speedUp.toFixed(1);
			},
			getRealSize(Height) {
				return Height.toFixed(0);
			},
			sixCityPercent(total) {
				return Math.round(total / this.cityData.sixCitytotal * 100);
			},
			formatNumber(num) {
				return util.formatNumber(num);
			}
		},
		mounted() {
			this.$nextTick(function() {
				this.getRank();
				var list = document.getElementsByName("triangle");
				for(var i = 0; i < list.length; i++) {
					list[i].style.borderLeft = (this.width / 19.6).toFixed(0) + "px solid transparent";
					list[i].style.borderRight = (this.width / 19.6).toFixed(0) + "px solid transparent";
					list[i].style.borderTop = (this.height / 44).toFixed(0) + "px solid #04EBC0";
				}
			});
		},
	};
</script>

<style scoped="scoped">
	.divclass {
		background: white;
		position: absolute;
		border-radius: 5px;
		color: #00CC00;
		font-weight: bold;
	}
	
	.divclass p {
		text-align: center;
		padding: 0.4vh 0 0 0;
		margin: 0;
	}
	
	.divclass p span {
		font-weight: bold;
		font-size: 2vh;
	}
	
	.info {
		font-size: 2vh;
		font-weight: 300;
		font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
		color: white;
        text-align: center;
	}
	
	.percent {
		font-weight: bold;
	}
	
	.colorRed {
		color: #c23531;
	}
</style>