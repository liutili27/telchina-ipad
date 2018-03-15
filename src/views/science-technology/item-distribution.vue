<!-- 科技厅项目分布 -->
<template>
    <div>
        <basemap @ready="mapReady" :mapType="'gx'">
            <page-title></page-title>
            <div v-if="myChart!=null" >
                <multiple-point :legendShow="'custom'" :legendPosition="legendPosition" :myChart="myChart" :data="data" :defaultProps="defaultProps" :pointLableOffset="{left:35,top:20}">
                    <template slot-scope="props" slot="infoContent">

                        <center>
                            <div style="font-family: 'Arial Normal', 'Arial';font-size:1.4vw;">{{props.data.name}}科技经费情况数据统计</div>
                        </center>
                        
                        <div class="infowindow-item">
                            <div class="legend-left">2017项目数量</div>
                            <div class="item-value">{{formatNumber(props.data.projectCount2)}}个</div>
                        </div>
                        <div class="infowindow-item">
                            <div class="legend-left">2017支持经费</div>
                            <div class="item-value">{{formatNumber(props.data.supportForFunds2)}}万元</div>
                        </div>
                        <div class="infowindow-item">
                            <div class="legend-left">2017经费占比</div>
                            <div class="item-value">{{formatNumber(props.data.per2)}}%</div>
                        </div>
                    </template>

                    <!-- <template slot-scope="props" slot="legendContent">
                        <div class="font-f" style="margin-left:-2.5vw;position:absolute;bottom:-0.5vh;left:1vw">
                            <center>
                                <div style="font-size:1.3vw">{{legendData.title}}</div>
                            </center>
                            <div  style="width:48%;font-size:1vw;margin:10px 0px -5px 50% ;">项目数量&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp支持经费</div>
                            <legend-item v-for="(item,index) in legendData.data" :key="index" style="margin-bottom:-5px;height:4vh">
                                <div slot="left" style="line-height:4vh;width:17vw;margin-left: -3px;font-size:1.5vw;margin-right:-10px">{{item.name}}</div>
                                <div slot="right" style="line-height:4vh;text-align:left;" class="legend-value">
                                    <div style="width:35%;float:left">{{formatNumber(item.num)}}个</div>
                                    <span style="margin-left:12%">{{item.per}}万元</span>
                                </div>
                            </legend-item>
                        </div>
                    </template> -->
                </multiple-point>

                <div class="font-f" style="position:absolute;bottom:17vh;right:1vw;">
                    <center>
                        <div style="color:#fff;font-size:1.5vw">{{legendData2.title}}</div>
                    </center>
                    <div style="width:48%;font-size:1.3vw;margin:10px 0px -5px 50%;color: white;">项目数量&nbsp;&nbsp;&nbsp;&nbsp;支持经费</div>
                    <legend-item v-for="(item,index) in legendData2.data" :key="index" >
                        <div slot="left" style="width:14vw;">{{item.name}}</div>
                        <div slot="right"  class="legend-value">
                            <div style="display: flex;flex-direction: row;justify-content: center;">
                                <div style="flex:3;text-align: right;margin-right:1vw">{{formatNumber(item.num)}}个</div>
                                <div style="flex:4;text-align: right;margin-right:1vw;"><span>{{item.per}}万元</span></div>
                            </div>
                        </div>
                    </legend-item>
                </div>
                <div style="position:absolute;bottom:17vh;right:56%;color:white;font-size:1.4vw">
                    点击
                    <img src="../../assets/map-point.png" height="20" style="vertical-align:middle; " /> 显示统计数据
                </div>
            </div>
        </basemap>
    </div>
</template>
<script>
import basemap from '@/components/common-map.vue';
import multiplePoint from '@/components/multiple-point.vue';
import legendItem from '@/components/legend-item.vue';
import mapPoint from '@/assets/map-point.png';
import { projectDistributionData } from './projectdistributiondata';
import util from '@/libs/util';
import pageTitle from '@/components/page-title.vue';
export default {
    components: { basemap, multiplePoint, legendItem, pageTitle },
    data() {
        return {
            myChart: null,
            legendPosition: {
                left: '3vw',
                bottom: '15vh'
            },
            data: {
                technology: projectDistributionData.mapData
            },
            defaultProps: [
                {
                    name: '科技厅',
                    key: 'technology',
                    color: '#12C4B3',
                    icon: mapPoint
                }
            ],
            legendData: {
                title: '全区九张名片项目经费情况',
                data: [
                    {
                        name: '优势特色农业',
                        num: 461,
                        per: "47,947"
                    },
                    {
                        name: '大健康产业',
                        num: 437,
                        per: "22,869"
                    },
                    {
                        name: '先进制造业',
                        num: 85,
                        per: "12,260"
                    },
                    {
                        name: '传统优势产业',
                        num: 54,
                        per: "11,637"
                    },
                    {
                        name: '生态环保',
                        num: 113,
                        per: "10,384"
                    },
                    {
                        name: '新一代信息技术',
                        num: 123,
                        per: "9,860"
                    },
                    {
                        name: '高性能新材料',
                        num: 77,
                        per: "9,722"
                    },
                    {
                        name: '海洋资源开发利用保护',
                        num: 33,
                        per: "3,781"
                    },
                    {
                        name: '互联网经济',
                        num: 52,
                        per: "3,737"
                    },
                    {
                        name: '合计',
                        num: 1435,
                        per: "132,197"
                    }
                ]
            },
            legendData2: {
                title: '全区五大类项目经费情况',
                data: [
                    {
                        name: '自然科学基金',
                        num: 697,
                        per: "11,243"
                    },
                    {
                        name: '重点研发计划',
                        num: 364,
                        per: "21,633"
                    },
                    {
                        name: '技术创新专项引导',
                        num: 136,
                        per: "5,218"
                    },
                    {
                        name: '科技基地和人才专项',
                        num: 353,
                        per: "29,573"
                    },
                    {
                        name: '科技重大专项',
                        num: 13,
                        per: "2,270"
                    },
                    {
                        name: '合计',
                        num: 1563,
                        per: "69,937"
                    }
                ]
            }
        };
    },
    methods: {
        mapReady(myChart) {
            this.myChart = myChart;
        },
       formatNumber(num){
           return util.formatNumber(num);
       }
    }
};
</script>
<style scoped>
.infowindow-item {
    display: flex;
    flex-direction: row;
    margin-top: 5px;
    font-family: 'Arial Normal', 'Arial';
}

.item-value {
    margin-left: 60px;
    font-family: 'Arial Normal', 'Arial';
    font-size:1.3vw;
}

.legend-value {
    color: black;
    width: 15vw;
}

.font-f{
    font-family: 'Arial Normal', 'Arial';
}


.legend-left{
    margin-left:30px;
}
</style>