<!-- 首页 -->
<template>
	<div class="background">
        <div v-for="(citem, cindex) in classify" :key="cindex">
            <div class="classify-text pdl5v" :class="{pdt20: cindex == 0, pdt10: cindex == 1}">{{citem}}</div>            
            <div class="flex-row flex-fluid" :class="{center: cindex == 0, pdl6v: cindex == 1}">
                <div v-for="(item, index) in mainMenu" :key="index" v-if="item.classify == citem && item.url" @click="jumpToPage(item.url, index)"
                    class="grid mt10 flex-column" :class="{ml20: index % 3 != 0, mr20: index != 2 && index != 5}">
                    <!--
                    <div class="title pdl20 pdb20" style="padding-top: 36px;" v-if="item.subTitle">{{item.subTitle}}</div>
                    <div class="title pdl20 pdb20" style="padding-top: 36px;" v-else>{{item.name}}</div>

                    <div class="description span1 pdl20 pdr20">{{item.description}}</div>-->

                    <div class="title pdb20" style="padding-top: 24px; margin-left: 20px;">{{item.name}}</div>
                    <div class="description span1 pdl20 pdr20">{{item.subTitle}}</div> 
                </div>
            </div>
        </div>
        <div class="bottom-text flex-column center">
            <div class="flex-row">
                <div>
                    <div>统筹推进：</div>
                    <div class="pdt5">技术支撑：</div>
                    <div class="pdt5">参与单位：</div>
                </div>
                <div>
                    <div>广西壮族自治区人民政府办公厅 广西壮族自治区发展和改革委员会</div>
                    <div class="pdt5">广西电子政务外网管理中心 泰华智慧产业（广西）有限公司</div>
                    <div class="pdt5">钦州市人民政府</div>
                    <div class="pdt5">自治区发展改革委 自治区工业和信息化委 自治区科技厅 自治区统计局 自治区扶贫办 自治区北部湾办</div>
                </div>
            </div>
        </div>
	</div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    data() {
        return {
            classify: ['专题应用', '地市应用']
        };
    },
    computed: {
        ...mapState({
            mainMenu: state => state.app.mainMenu
        })
    },
    methods: {
        jumpToPage(path, index) {
            this.$store.commit('updateMainMenu', index);
            if (path) {
                this.$store.commit('updateLoadingStatus', { isLoading: true });
                setTimeout(() => {
                    this.$store.commit('updateLoadingStatus', { isLoading: false });
                    this.$router.replace({path: '/' + path});
                }, 30);
            }
        }
    }
};
</script>

<style scoped>
    div {
        padding: 0;
        margin: 0;
    }
    .subitem-text {
        padding-right: 5px;
        color: rgb(51, 51, 51);
        font-size: 1.5vw;
        font-family: 'Arial Normal', 'Arial';
        font-weight: 400;
        line-height: 28px;
    }
    .subItemBorder {
        border-right: 1px solid #000;
    }
    .subitem-text-box {
        height: 50px;
        overflow : hidden;
        text-overflow: ellipsis;
    }
	.background {
		width: 100%;
		height: 100%;
		background: url(../../assets/index-bg3.jpg) no-repeat;
		background-size: cover;
		background-position: center center;
	}
    .ml20 {
        margin-left: 20px;
    }
    .mr20 {
        margin-right: 20px;
    }
    .mt10 {
        margin-top: 10px;
    }
    .mt20 {
        margin-top: 20px;
    }
    .pdl5 {
        padding-left: 5px;
    }
    .pdt5 {
        padding-top: 5px;
    }
    .pdt10 {
        padding-top: 10px;
    }
    .pdt20 {
        padding-top: 20px;
    }
    .pdt40 {
        padding-top: 40px;
    }
    .pdl20 {
        padding-left: 20px;
    }
    .pdl5v {
        padding-left: 5vw;
    }
    .pdl6v {
        padding-left: 6.5vw;
    }
    .pdr20 {
        padding-right: 20px;
    }
    .pdb20 {
        padding-bottom: 20px;
    }
    .flex-row {
        display: flex;
        flex-direction: row;
    }
    .flex-column {
        display: flex;
        flex-direction: column;
    }
    .flex-fluid {
        flex-wrap: wrap;
    }
    .center {
        justify-content: center;
        align-items: center;
    }
    .span1 {
        flex: 1;
    }
    .grid {
        width: 26.5vw; 
        height: 19vh; 
        background-color: rgba(255, 255, 255, 0.9);
		/*box-shadow: 3px 3px 15px 1px darkgrey;*/
        border-radius: 6px;
    }
    .title {
        color: #3B7DEA;
        font-family: 'Arial Normal', 'Arial';
		font-size: 1.8vw;
        font-weight: bold;
    }
    .description {
        color: #1e1e1e;
        font-family: 'Arial Normal', 'Arial';
		font-size: 1.5vw;
    }
    .classify-text {
        color: #ffffff;
        font-family: 'Arial Normal', 'Arial';
        font-size: 1.8vw;
        font-weight: bold;
    }
    /*
    .bottom-text {
        position: absolute; 
        bottom: 0; 
        padding-bottom: 20px; 
        padding-top: 20px; 
        width: 100vw;
        text-align: center;
        background-color: rgba(78, 138, 236, 0.75);
    }
    .bottom-text p {
        padding: 0;
		margin: 0;
        line-height: 18px;
        height: 18px;
        color: #ffffff;
        font-size: 1.2vw;
    }*/
    .bottom-text {
        position: absolute;
        bottom: 10px;
        font-size: 12px;
        color: white;
        font-family: 'Arial';
        width: 100vw;
    }
</style>