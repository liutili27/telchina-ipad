<template>
	<div class="background">
		<div style="width: 100%;height: 100vh;background: white;opacity: 0.3;"></div>
		<ul>
            <router-link v-for="(item, index) in mainMenu" :key="index" v-if="index < 6" :to="item.url" tag="li">
				<div class="font">
					<span class="title">
						{{ item.name }}<br>
					</span>
                    <p>
                        <span v-for="(sitem, sindex) in item.children" :key="sindex">{{sitem.name}} |</span>
                    </p>
				</div>
			</router-link>
            <!--
			<router-link to="/table" tag="li">
				<div class="font">
					<span>
						自治区发改委<br>
					</span>
					<p>基础设施项目 | 产品项目 | 社会民生项目 | 生态环保项目 | 社会管理项目</p>
				</div>
			</router-link>
			<router-link to="/" tag="li">
				<div class="font">
					<span>
						自治区发改委<br>
					</span>
					<p>基础设施项目 | 产品项目 | 社会民生项目 | 生态环保项目 | 社会管理项目</p>
				</div>
			</router-link>
			<router-link to="/home" tag="li">
				<div class="font">
					<span>
						自治区发改委<br>
					</span>
					<p>基础设施项目 | 产品项目 | 社会民生项目 | 生态环保项目 | 社会管理项目</p>
				</div>
			</router-link>
			<router-link to="/home" tag="li">
				<div class="font">
					<span>
						自治区发改委<br>
					</span>
					<p>基础设施项目 | 产品项目 | 社会民生项目 | 生态环保项目 | 社会管理项目</p>
				</div>
			</router-link>
			<router-link to="/home" tag="li">
				<div class="font">
					<span>
						自治区发改委<br>
					</span>
					<p>基础设施项目 | 产品项目 | 社会民生项目 | 生态环保项目 | 社会管理项目</p>
				</div>
			</router-link>
			<router-link to="/home" tag="li">
				<div class="font">
					<span>
						自治区发改委<br>
					</span>
					<p>基础设施项目 | 产品项目 | 社会民生项目 | 生态环保项目 | 社会管理项目</p>
				</div>
			</router-link>
            -->
		</ul>
		<div class="bottom">
			<p>统筹推进：广西壮族自治区人民政府办公厅 广西壮族自治区发展和改革委员会</p>
			<p>技术支撑：广西外网管理中心 泰华智慧产业（广西）有限公司</p>
			<p>参与单位：自治区发改委、北部湾办、工信委、科技厅、自治区扶贫办、自治区统计局</p>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';
	export default{
		data:function(){
			return{

			}
		},
        computed: {
            ...mapState({
                mainMenu: state => state.app.mainMenu
            })
        },
		methods:{
			do(){
				alert()
			}
		}
	}
</script>

<style scoped="scoped">
	.background {
		width: 100%;
		height: 100vh;
		background: url(../../assets/background.png) no-repeat;
		background-size: cover;
		background-position: center center;
	}	
	ul{
		padding: 0;
		margin: 0;
		position: absolute;
		top: 16vh;
		left: 0;
	}	
	li {
		list-style: none;
		margin-top: 5%;
		margin-left: 5%;
		width: 26.5%;
		height: 20vh;
		background: white;
		float: left;
		border-radius: 10px;
		background-color:rgba(255,255,255,0.5);
		box-shadow: 3px 3px 15px 1px darkgrey;

	}
	.bottom{
		position: absolute;
		bottom: 2%;
		left: 30%;
		text-align: center;
		width: 40%;
		color: white;
		font-size: 12px;
		
	}
	.bottom p{
		padding: 0;
		margin: 0;
	}
	.font .title{
		color: #3B7DEA;
		font-size: 18px;
	}
	.font{
		padding: 25px 10px;
		font-size: 14px;
	}
	.font p{
		line-height: 28px;
	}
</style>