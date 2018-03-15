<!-- 钦州 - 港口园区 -->
<template>
	<div style="width: 100%; height: 100%; position: relative;">
		<common-map @ready="mapReady" :mapType="'qinzhou'">
            <div v-if="myChart!=null">
                <multiple-point :legendShow="true" :legendPosition="legendPosition" :myChart="myChart" 
                    :data="data" :defaultProps="defaultProps" :showInfoWindow="showInfoWindow" :infowindowWidth="'33%'">
                    <template slot-scope="props" slot="infoContent">
                        <div v-if="props.data.type == 'harbour'" class="info-text">
                            <div class="tc">{{props.data.name}}</div>
                            <div class="flex-row">
                                <div class="span2">货物吞吐量</div>
                                <div class="span2">{{props.data.data.harbourThroughput}}万吨</div>
                                <div class="span1" v-if="props.data.data.harbourThroughputSpeedUp">
                                    <i class="iconfont icon-jiantoushangsheng" :class="{'icon-jiantouxiajiang': props.data.data.harbourThroughputSpeedUp < 0}"></i>
                                    <span class="colorYellow" :class="{colorRed: props.data.data.harbourThroughputSpeedUp < 0}">{{props.data.data.harbourThroughputSpeedUp}}%</span>                                    
                                </div>
                            </div>
                            <div class="flex-row">
                                <div class="span2">集装箱货物吞吐量</div>
                                <div class="span2">{{props.data.data.containerThroughput}}万标准箱</div>
                                <div class="span1" v-if="props.data.data.containerThroughputSpeedUp">
                                    <i class="iconfont icon-jiantoushangsheng" :class="{'icon-jiantouxiajiang': props.data.data.containerThroughputSpeedUp < 0}"></i>
                                    <span class="colorYellow" :class="{colorRed: props.data.data.containerThroughputSpeedUp < 0}">{{props.data.data.containerThroughputSpeedUp}}%</span>                                    
                                </div>
                            </div>
                        </div>
                        <div v-else class="info-text">
                            <div class="tc">{{props.data.name}}</div>
                            <div class="flex-row info-text">
                                <div class="span2">规模以上工业总产值</div>
                                <div class="span1">
                                    <span v-if="props.data.data.industryOutput">{{props.data.data.industryOutput}}亿元</span>
                                    <span v-else>-</span>
                                </div>
                                <div class="span1">
                                    <span v-if="props.data.data.industryOutputSpeedUp">
                                        <i class="iconfont icon-jiantoushangsheng" :class="{'icon-jiantouxiajiang': props.data.data.industryOutputSpeedUp < 0}"></i>
                                        <span class="colorYellow" :class="{colorRed: props.data.data.industryOutputSpeedUp < 0}">{{props.data.data.industryOutputSpeedUp}}%</span>
                                    </span>
                                    <span v-else>-</span>
                                </div>
                            </div>
                            <div class="flex-row">
                                <div class="span2">固定资产投资额</div>
                                <div class="span1">{{props.data.data.fixedAssetInvest}}亿元</div>
                                <div class="span1" v-if="props.data.data.fixedAssetInvestSpeedUp">
                                    <i class="iconfont icon-jiantoushangsheng" :class="{'icon-jiantouxiajiang': props.data.data.fixedAssetInvestSpeedUp < 0}"></i>
                                    <span class="colorYellow" :class="{colorRed: props.data.data.fixedAssetInvestSpeedUp < 0}">{{props.data.data.fixedAssetInvestSpeedUp}}%</span>                                    
                                </div>
                            </div>
                            <div class="flex-row">
                                <div class="span2">招商引资项目数</div> 
                                <div class="span1">{{props.data.data.businessProjectNum}}个</div>
                                <div class="span1"></div>
                            </div>
                            <div class="flex-row">
                                <div class="span2">招商引资计划投资额</div> 
                                <div class="span1">{{props.data.data.businessPlanInvest}}亿元</div>
                                <div class="span1"></div>
                            </div>
                            <div class="flex-row">
                                <div class="span2">招商引资实际到位资金</div>
                                <div class="span1">
                                    <span v-if="props.data.data.businessActualFund">{{props.data.data.businessActualFund}}亿元</span>
                                    <span v-else>-</span>
                                </div>
                                <div class="span1">
                                    <span v-if="props.data.data.businessActualFundSpeedUp">
                                        <i class="iconfont icon-jiantoushangsheng" :class="{'icon-jiantouxiajiang': props.data.data.businessActualFundSpeedUp < 0}"></i>
                                        <span class="colorYellow" :class="{colorRed: props.data.data.businessActualFundSpeedUp < 0}">{{props.data.data.businessActualFundSpeedUp}}%</span>
                                    </span>
                                    <span v-else>-</span>
                                </div>
                            </div>
                            <div class="flex-row">
                                <div class="span2">财政收入</div>
                                <div class="span1">
                                    <span v-if="props.data.data.governmentRevenue">{{props.data.data.governmentRevenue}}亿元</span>
                                    <span v-else>-</span>
                                </div>
                                <div class="span1">
                                    <span v-if="props.data.data.governmentRevenueSpeedUp">
                                        <i class="iconfont icon-jiantoushangsheng" :class="{'icon-jiantouxiajiang': props.data.data.governmentRevenueSpeedUp < 0}"></i>
                                        <span class="colorYellow" :class="{colorRed: props.data.data.governmentRevenueSpeedUp < 0}">{{props.data.data.governmentRevenueSpeedUp}}%</span>
                                    </span>
                                    <span v-else>-</span>
                                </div>
                            </div>
                        </div>
					</template>
                </multiple-point>
                <div class="bottomRemark">
                    点击
                    <img src="../../assets/map-point-red.png" height="20" style="vertical-align:middle;" />
                    <img src="../../assets/map-point.png" height="20" style="vertical-align:middle;" />                    
                    展示园区或港口详情
                </div>
            </div>
        </common-map>
	</div>
</template>
<script>
import commonMap from '@/components/common-map.vue';
import {qinzhouData} from './qinzhouData';
import multiplePoint from '@/components/multiple-point.vue';
import mapPointImg from '@/assets/map-point.png';
import mapPointRed from '@/assets/map-point-red.png';
export default {
    components: {
        commonMap,
        multiplePoint
    },
    data() {
        return {
            myChart: null,
            legendPosition: {
                left: '25vw',
                bottom: '140px'
            },
            data: qinzhouData,
            defaultProps: [
                {
                    key: 'industryPark',
                    icon: mapPointRed,
                    label: '产业园区'
                },
                {
                    key: 'harbour',
                    icon: mapPointImg,
                    label: '港口'
                }
            ],
            showInfoWindow: {
                key: null,
                index: null
            },
            currentIndex: 0
        };
    },
    methods: {
        mapReady(myChart) {
            this.myChart = myChart;
        },
        changeMenu(item, index) {
            if(index == 0) {
                this.showInfoWindow = {
                    key: "harbour",
                    index: 0
                };
            }else {
                let sindex = index - 1;
                this.showInfoWindow = {
                    key: "industryPark",
                    index: sindex
                };
            }
            this.currentIndex = index;
        },
        _click() {
            this.showInfoWindow = {};
        }
    }
};
</script>
<style scoped>
.bottomRemark {
    position: absolute;
    color: white;
    bottom: 20vh;
    right: 32vw;
    font-size: 1.3vw;
    font-family: 'Arial'; 
}
.park-info-button {
    background-color: rgb(0, 204, 153);
    height: 30px;
    color: white;
}
.right-pop-close {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 2.5vw;
    color: rgba(51, 51, 51, 0.6);
    padding: 10px;
}
.tc {
    text-align: center;
}
.tr {
    text-align: right;
}
.info-text {
    font-size: 1.3vw;
}
.flex-row {
    display: flex;
    flex-direction: row;
}
.span1 {
    flex: 1;
}
.span2 {
    flex: 2;
}
.row-space-between {
    justify-content: space-between;
    align-items: center;
}
.icon-jiantoushangsheng {
    color: #f4ea29;
}
.icon-jiantouxiajiang {
    color: #c23531;
}
.colorYellow {
    color: #f4ea29;
}
.colorRed {
    color: #c23531;
}
</style>