
<template>
    <div>
        <basemap @ready="mapReady" :mapType="'gx'" >
            <div v-if="myChart!=null">
                <multiple-point  :legendShow="'custom'" :showPointLable="true" :legendPosition="legendPosition" :myChart="myChart" :data="data" :defaultProps="defaultProps">
                    <template slot-scope="props" slot="infoContent">
                            <!-- {{props}} -->
                        
                        <div class="info-row">
                            <div>全区占比：</div>
                            <div>{{props.data.data.percentage}}%</div>
                        </div>
                        <div class="info-row">
                            <div>排名：</div>
                            <div>{{props.data.data.ranking}}</div>
                        </div>
                        <div class="info-row" >
                            <info-button @click="projectReportForm" style="margin:0 auto;">项目报表</info-button>
                            <info-button @click="projectDistribution" style="margin:0 auto;">项目分布</info-button>
                        </div>
                    </template>
                      <template slot-scope="props" slot="pointLable">
                          <span style="color:#00FFB1">{{props.data.data.contentScale}}项</span>
                      </template>
                      <!-- 自定义格式的图例 -->
                      <template slot-scope="props" slot="legendContent">
                          <div style="font-size:1.8vh">
                              <div class="info-row">
                                  <div>总投资额：</div><div>{{statisticalData.totalData.totalInvestment}}亿元</div>
                              </div>
                              <div class="info-row">
                                  <div>项目总数：</div><div>{{statisticalData.totalData.projectCount}}项</div>
                              </div>
                              <div style="margin-top:1.5vh;"></div>
                          

                            <div v-if="defaultProps[0].key!='all'" >
                                  <div class="info-row" style="color:#00EFAE">
                                      <div>{{selectProject.name}}投资额：</div><div>{{statisticalData[selectProject.key].totalInvestment}}亿元</div>
                                  </div>
                                  <div class="info-row" style="color:#00EFAE">
                                      <div>{{selectProject.name}}数：</div><div>{{statisticalData[selectProject.key].projectCount}}项</div>
                                  </div>
                            
                                <div style="margin-top:1.5vh;"></div>
                                  <div class="info-row">
                                      <div>其中自治区项目投资额为：</div><div>{{statisticalData.selfSmeltingArea.projectCount}}亿元</div>
                                  </div>
                                  <div class="info-row">
                                      <div>项目数为：</div><div>{{statisticalData.selfSmeltingArea.projectCount}}项，不列入各地市项目</div>
                                  </div>
                              </div>
                        </div>
                          
                      </template>
                </multiple-point>
            </div>
        </basemap>
    </div>
</template>
<script>
import basemap from '@/components/common-map.vue';
import multiplePoint from '@/components/multiple-point.vue';
import infoButton from '@/components/infowindow-button.vue';
import {newOpenData} from './newopendata';
import {completedData} from './completeddata';
import {continuedData} from './continueddata';
import {prepareData} from './preparedata';
// 左下统计数据
import {statisticalData} from './statisticaldata';
export default{
    components: {basemap, multiplePoint, infoButton},
    data() {
        return {
            myChart: null,
            legendPosition: {
                left: '5vw',
                bottom: '15vh'
            },
            data: newOpenData,
            defaultProps: [
                {
                    name: '全部',
                    key: 'all',
                    color: '#12C4B3'
                }
            ],
            dataType: 'newopen',
            statisticalData: statisticalData,
            pointColor: '#12C4B3'
        };
    },
    computed: {
        selectProject() {
            return {
                key: this.defaultProps[0].key,
                name: this.defaultProps[0].name
            };
        }
    },
    methods: {
        changeMenu(item, index) {
            if (index == 0) { // 全部
                this.defaultProps = [{
                    name: '全部',
                    key: 'all',
                    color: this.pointColor
                }];
            }
            if (index == 1) { // 基础设施
                this.defaultProps = [{
                    name: '社会管理项目',
                    key: 'infrastructure',
                    color: this.pointColor
                }];
            } else if (index == 2) { // 产业项目
                this.defaultProps = [{
                    name: '产业项目',
                    key: 'industrialProject',
                    color: this.pointColor
                }];
            } else if (index == 3) { // 社会民生项目
                this.defaultProps = [{
                    name: '社会民生项目',
                    key: 'socialLivelihoodproject',
                    color: this.pointColor
                }];
            } else if (index == 4) { // 生态环保项目
                this.defaultProps = [{
                    name: '生态环保项目',
                    key: 'environmentalProtectionProject',
                    color: this.pointColor
                }];
            } else if (index == 5) { // 社会管理项目
                this.defaultProps = [{
                    name: '社会管理项目',
                    key: 'socialManagementProject',
                    color: this.pointColor
                }];
            }
        },
        changeBottomMenu(item, index) {
            if (index == 0) { // 新开
                this.dataType = 'newopen';
                this.data = newOpenData;
            } else if (index == 1) { // 续建
                this.dataType = 'continue';
                this.data = continuedData;
            } else if (index == 2) { // 竣工
                this.dataType = 'completed';
                this.data = completedData;
            } else if (index == 3) { // 预备
                this.dataType = 'prepare';
                this.data = prepareData;
            }
        },
        mapReady(myChart) {
            this.myChart = myChart;
        },
        projectReportForm() {
            console.log("ss");
        },
        projectDistribution() {
            console.log("sss");
        }
    }
};
</script>
<style scoped>
.info-row {
    display:  flex; 
    flex-direction:  row;
}
</style>