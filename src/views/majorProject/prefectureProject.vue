<!-- 重大项目 - 按地级市项目汇总 -->
<template>
    <div>
        <common-map @ready="mapReady" :mapType="'gx'">
            <page-title></page-title>
            <div style="position: absolute; bottom: 15.5vh; right: 1vw;">
                <div class="mb20">
                    <div class="legend-title tc">全区汇总</div>
                    <legend-item>
                        <div slot="left" class="legend-label">项目总数</div>
                        <div slot="right" class="legend-value">{{formatNumber(data.total.data.projectAccount)}}项</div>
                    </legend-item>
                    <legend-item>
                        <div slot="left" class="legend-label">总投资额</div>
                        <div slot="right" class="legend-value tr" style="padding-right: 5px;">{{formatNumber(data.total.data.totalInvest)}}万元</div>
                    </legend-item>
                    <legend-item>
                        <div slot="left" class="legend-label">2017年计划投资额</div>
                        <div slot="right" class="legend-value tr" style="padding-right: 5px;">{{formatNumber(data.total.data.planInvest)}}万元</div>
                    </legend-item>
                </div>
                <div>
                    <div class="legend-title tc">区直部门</div>
                    <legend-item>
                        <div slot="left" class="legend-label">项目总数</div>
                        <div slot="right" class="legend-value">{{formatNumber(data.directDepartment.data.projectAccount)}}项</div>
                    </legend-item>
                    <legend-item>
                        <div slot="left" class="legend-label">总投资额</div>
                        <div slot="right" class="legend-value tr" style="padding-right: 5px;">{{formatNumber(data.directDepartment.data.totalInvest)}}万元</div>
                    </legend-item>
                    <legend-item>
                        <div slot="left" class="legend-label">2017年计划投资额</div>
                        <div slot="right" class="legend-value tr" style="padding-right: 5px;">{{formatNumber(data.directDepartment.data.planInvest)}}万元</div>
                    </legend-item>
                </div>
            </div>
            <div v-if="myChart!=null">
                <multiple-point  :legendShow="'custom'" :showPointLable="true" :legendPosition="legendPosition" :myChart="myChart" :data="data" :defaultProps="defaultProps">
                    <template slot-scope="props" slot="infoContent">
                        <div>总投资：{{formatNumber(props.data.data.totalInvest)}}万元</div>
                        <div>排名：{{props.data.data.totalInvestRank}}</div>
                        <div>2017年计划投资：{{formatNumber(props.data.data.planInvest)}}万元</div>
                        <div>排名：{{props.data.data.planInvestRank}}</div>
                    </template>
                    <template slot-scope="props" slot="pointLable">
                        <span>{{formatNumber(props.data.data.projectAccount)}}项</span>
                    </template>
                </multiple-point>
            </div>
            <div class="bottomRemark">点击
                 <img src="../../assets/map-point.png" height="20" style="vertical-align:middle;" /> 
                展示项目投资详情</div>
        </common-map>
    </div>
</template>
<script>
import commonMap from '@/components/common-map.vue';
import multiplePoint from '@/components/multiple-point.vue';
import {prefectureProjectData} from './prefectureProjectData';
import legendItem from '@/components/legend-item.vue';
import mapPointImg from '@/assets/map-point.png';
import util from '@/libs/util';
import pageTitle from '@/components/page-title.vue';
export default{
    components: {commonMap, multiplePoint, legendItem, pageTitle},
    data() {
        return {
            myChart: null,
            legendPosition: {
                left: '5vw',
                bottom: '15vh'
            },
            data: prefectureProjectData,
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
.info-row {
    display:  flex; 
    flex-direction:  row;
}
.legend-value {
    color: #333333;
    font-weight: bold;
    font-family: 'Arial';
    width: 11vw;
}
.legend-label {
    font-family: 'Arial';
    width: 13vw;
}
.legend-title {
    color: #fff; 
    font-weight: 700; 
    font-family: 'Arial'; 
    font-size: 14px;
}
.mb20 {
    margin-bottom: 20px;
}
.pdr20 {
    padding-right: 20px;
}
.bottomRemark {
    position: absolute;
    color: white;
    left: 30vw;
    bottom: 17vh;
    font-size: 1.4vw;
    font-family: 'Arial'; 
}
.tr {
    text-align: right;
}
.tc {
    text-align: center;
}
</style>