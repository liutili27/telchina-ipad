<template>
	<div>
		<div v-for="item in datas" key="item" v-show="showId!=0">
			<div style="color: white;font-size: 2vh;">{{item.name}}</div>
			<legend-item>
				<div slot="left">工业生产总值</div>
				<div slot="right" class="fontStyle" style="color: #00CC00;">{{item.value1}}</div>
			</legend-item>
			<legend-item>
				<div slot="left">增速</div>
				<div slot="right" class="fontStyle"><i class="iconfont" name="setItem"> {{item.value2}}</i></div>
			</legend-item>
		</div>
		<div v-show="showId==0">
			<div style="color: white;font-size: 2vh;">地区工业增加值增速</div>
			<legend-item>
				<div slot="left">自治区</div>
				<div slot="right" class="fontStyle"><i class="iconfont" name="setItem2"> 7.1</i></div>
			</legend-item>
			<legend-item>
				<div slot="left">北部湾经济区</div>
				<div slot="right" class="fontStyle"><i class="iconfont" name="setItem2"> 10.4</i></div>
			</legend-item>
			<legend-item>
				<div slot="left">桂西资源富集区</div>
				<div slot="right" class="fontStyle"><i class="iconfont" name="setItem2"> 10.2</i></div>
			</legend-item>
			<legend-item>
				<div slot="left">西江经济带</div>
				<div slot="right" class="fontStyle"><i class="iconfont" name="setItem2"> 7.8</i></div>
			</legend-item>
		</div>
	</div>
</template>

<script>
	import legendItem from '@/components/legend-item.vue';
	export default {
		components: {
			legendItem
		},
		props: {
			"datas": {
				type: Array
			},
			"showId": {
				type: Number,
				default: 0
			}
		},
		mounted() {
			this.$nextTick(function() {
				this.setColor();
			})
		},
		methods: {
			setColor() {
				var list = document.getElementsByName("setItem2");
				var list1 = document.getElementsByName("setItem");
				for(var j = 0; j < list1.length; j++) {
					list1[j].classList.remove("icon-tubiaoshangshengqushi", "icon-tubiaoxiajiangqushi");
				}
				for(var i = 0; i < list.length; i++) {
					if(true) {
						list[i].style.color = "#00CC00";
						list[i].classList.add("icon-tubiaoshangshengqushi");
					} else {
						list[j].style.color = "#C23531";
						list[i].classList.add("icon-tubiaoxiajiangqushi");
					}
				};
				this.$nextTick(function() {
					this.setIcon()
				})
			},
			setIcon() {

				var list1 = document.getElementsByName("setItem");
				for(var j = 0; j < this.datas.length; j++) {
					if(this.datas[j].value2 > 0) {
						list1[j].style.color = "#00CC00";
						list1[j].classList.add("icon-tubiaoshangshengqushi");
					} else {
						list1[j].style.color = "#C23531";
						list1[j].classList.add("icon-tubiaoxiajiangqushi");
					}
				}
			}
		}

	}
</script>

<style scoped="scoped">
	.fontStyle {
		font-weight: bold;
	}
</style>