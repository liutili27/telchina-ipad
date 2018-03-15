<template>
	<div>
		<ul v-for="item in radioList" class="radio">
			<li><x-button @click.native="change(item)" :gradients="['#3A2883', '#3A2883']">{{item}}</x-button></li>
		</ul>
	</div>
</template>

<script>
	import { XButton } from 'vux'
	export default {
		components: {
			XButton
		},
		data: function() {
			return {
				radioList: ['地区生产总值', '财政收入', '规模以上工业增加值', 'item4', 'item5']
			}
		},
		methods: {
			change(value) {
				alert(value)
			}
		}
	}
</script>

<style scoped>
	.radio {
		opacity: 0.5;
		font-size: 17px;
		color: aquamarine;
		list-style: none;
		padding: 0;
		margin: 0;
	}
	.active {
		background-color:;
	}
</style>