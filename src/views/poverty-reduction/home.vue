<!-- 扶贫办首页 -->
<template>
    <div>
        <common-map @ready="mapReady" :mapType="'gx'">
            <div style="position: absolute; bottom: 9vh; right: 1.5vw;">
                <div class="mb20">
                    <center><div class="legend-title">全区扶贫工作统计</div></center>
                    <legend-item>
                        <div slot="left" class="legend-label">全国排名</div>
                        <div slot="right" class="legend-value">{{data.total.nationalRankings}}</div>
                    </legend-item>
                    <legend-item>
                        <div slot="left" class="legend-label">扶贫项目数</div>
                        <div slot="right" class="legend-value">{{data.total.projectNum}}个</div>
                    </legend-item>
                    <legend-item>
                        <div slot="left" class="legend-label">扶贫财政投入</div>
                        <div slot="right" class="legend-value">{{data.total.investment}}亿元</div>
                    </legend-item>
                    <legend-item>
                        <div slot="left" class="legend-label">贫困户数</div>
                        <div slot="right" class="legend-value">{{data.total.poorHouseholds}}户</div>
                    </legend-item>
                     <legend-item>
                        <div slot="left" class="legend-label">脱贫户数</div>
                        <div slot="right" class="legend-value">{{data.total.povertyAlleviation}}户</div>
                    </legend-item>
                </div>
                
            </div>
            <div v-if="myChart!=null">
                <multiple-point  :legendShow="'custom'"  :legendPosition="legendPosition" :myChart="myChart" :data="data" :defaultProps="defaultProps">
                    <template slot-scope="props" slot="infoContent">
                      <div style="font-size:1.2vw">
                      	    <center><div>{{props.data.name}}扶贫工作统计</div></center>
	                        <div class="info-content-item">
	                       		<div class="item-key">扶贫项目数</div>
	                       		<div class="item-value">{{props.data.data.projectAccount}}个</div>
	                        </div>
	                        <div class="info-content-item">
	                       		<div class="item-key">扶贫财政投入</div>
	                       		<div class="item-value">{{props.data.data.totalInvest}}亿元</div>
	                        </div>
	                        <div class="info-content-item">
	                       		<div class="item-key">贫困户数</div>
	                       		<div class="item-value">{{props.data.data.poorHouseholds}}户</div>
	                        </div>
	                        <div class="info-content-item">
	                       		<div class="item-key">脱贫户数</div>
	                       		<div class="item-value">{{props.data.data.povertyAlleviation}}户</div>
	                        </div>
                      </div>
                    </template>
                </multiple-point>
            </div>
            <div style="position: absolute;color:#fff;left:35vw;bottom:15vh;font-size:1.5vw">点击
                 <img src="../../assets/map-point.png" height="20" style="vertical-align:middle; " /> 
                展示各市扶贫工作统计</div>
        </common-map>
    </div>
</template>
<script>
import commonMap from '@/components/common-map.vue';
import multiplePoint from '@/components/multiple-point.vue';
import {povertyData} from './povertyData';
import legendItem from '@/components/legend-item.vue';
import mapPointImg from '@/assets/map-point.png';
import util from '@/libs/util';
export default{
    components: {commonMap, multiplePoint, legendItem},
    data() {
        return {
            myChart: null,
            legendPosition: {
                left: '5vw',
                bottom: '15vh'
            },
            data: povertyData,
            defaultProps: [
                {
                    name: '全部',
                    key: 'all',
                    icon: mapPointImg
                }
            ]
        };
    },
    methods: {
        mapReady(myChart) {
            this.myChart = myChart;
        },
        formatNumber(num) {
            return util.formatNumber(num);
        }
    }
};
</script>

<style scoped>
.legend-value {
    color: #31CC00;
    font-weight: 700;
    width: 11vw;
    color: #000;
}
.legend-label {
    width: 11vw;
    color: #fff;
}
.legend-title {
	color: #fff;
	font-size: 1.5vw;
}
.info-content-item {
	display:flex;
	flex-direction:row;
	align-items: center;
}
.item-key {
	width: 40%;
	text-align: right;
}
.item-value {
	width: 40%;
	text-align: right;
}
</style>