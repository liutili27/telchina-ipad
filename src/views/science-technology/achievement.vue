<!-- 科技专利 -->
<template>
  <div>
    <basemap @ready="mapReady" :mapType="'gx'">
        <page-title></page-title>
      <div v-if="myChart!=null">
        <multiple-point :legendShow="'custom'" :showPointLable="true" :legendPosition="legendPosition" :myChart="myChart" :data="data" :defaultProps="defaultProps" :pointLableOffset="{left:33,top:11}">
          <template slot-scope="props" slot="infoContent">
            <center>
              <div class="font-f">
                2017年{{props.data.name}}专利{{dataType[dataIndex]}}数据统计
                <div v-if="props.data.patentData[dataIndex].increase>0" style="position: relative;top:2px;right:0px;height:23px;width:70px;color: #ff9900;font-weight:bold;float:right">
                  <i class="iconfont icon-jiantoushangsheng" style="color: #f4ea29; "></i>
                  {{formatNumber(props.data.patentData[dataIndex].increase)}}%
                </div>

                <div v-if="props.data.patentData[dataIndex].increase<0" style="position: relative;top: 2px;right:-12px;height:23px;width:70px;color: #ff9900;font-weight:bold;float:right;">
                  <i class="iconfont icon-jiantouxiajiang" style="color: #f4ea29; "></i>
                  {{formatNumber(props.data.patentData[dataIndex].increase)}}%
                </div>

              </div>
            </center>
            <div class="infowindow-item font-f" v-if="dataIndex!=2">
              <div  class="infowindow-control" >合计</div>
              <div  class="item-value" >{{formatNumber(props.data.patentData[dataIndex].total)}}件</div>
            </div>

            <div class="infowindow-item font-f">
              <div class="infowindow-control">发明</div>
              <div class="item-value">{{formatNumber(props.data.patentData[dataIndex].inventionCount)}}件</div>
            </div>
            <div class="infowindow-item font-f" v-if="dataIndex!=2">
              <div class="infowindow-control">实用新型</div>
              <div class="item-value">{{formatNumber(props.data.patentData[dataIndex].utilityModelCount)}}件</div>
            </div>
            <div class="infowindow-item font-f" v-if="dataIndex!=2">
              <div class="infowindow-control">外观设计</div>
              <div class="item-value">{{formatNumber(props.data.patentData[dataIndex].designCount)}}件</div>
            </div>
          </template>

          <template slot-scope="props" slot="legendContent">
            <div class="font-f" style="position:absolute;bottom:60vh;right:-1vw;">
              <center>
                <div style="text-align:left">2017年全区专利 {{dataType[dataIndex]}} </div>
                <div style="text-align:left">56,957件</div>
              </center>
              <legend-item >
                <div slot="left">增速</div>
                <div slot="right" class="legend-value" style="font-size:1.3vw;">
                  <i class="iconfont icon-tubiaoshangshengqushi" style="font-weight: bold;color: red;">8.0%</i>
                </div>
              </legend-item>
            </div>
          </template>

          <template slot-scope="props" slot="pointLable">
            <span  style="color:#fff">合计{{formatNumber(props.data.patentData[dataIndex].total)}}</span>
          </template>

        </multiple-point>
      </div>
      <div style="position:absolute;bottom:17vh;right:56%;color:white;font-size:1.4vw">
        点击
        <img src="../../assets/map-point.png" height="20" style="vertical-align:middle; " /> 显示统计数据
      </div>
    </basemap>
  </div>
</template>
<script>
import basemap from '@/components/common-map.vue';
import multiplePoint from '@/components/multiple-point.vue';
import legendItem from '@/components/legend-item.vue';
import { achievementData } from './achievementdata';
import mapPoint from '@/assets/map-point.png';
import util from '@/libs/util';
import pageTitle from '@/components/page-title.vue';
export default {
  components: { basemap, multiplePoint, legendItem, pageTitle },
  data() {
    return {
      myChart: null,
      position: [-108, 165],
      legendPosition: {
        right: '3vw',
        bottom: '10vh'
      },
      data: {
        achievement: achievementData.mapData
      },
      defaultProps: [{
        name: '科技成果',
        key: 'achievement',
        color: '#12C4B3',
        icon: mapPoint
      }],
      dataIndex: 0,
      dataType: [
        '申请数',
        '授权数',
        '有效数'
      ]
    };
  },
  methods: {
    changeMenu(item, index) {
      this.dataIndex = index;
    },
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
.infowindow-item {
  display: flex;
  flex-direction: row;
  /*justify-content: space-around;*/
  margin-top: 5px;
  font-family: 'Arial Normal', 'Arial';
  font-size:1vw;
}

.item-value {
  margin-left: 30px;
  width: 65px;
}

.legend-value {
  color:#ff9900;
  font-weight: 700;
  width: 7vw;
  font-size: 1vw;
}

.infowindow-control {
  width: 55px;
}

.font-f {
  font-family: 'Arial Normal', 'Arial';
  font-size: 1.3vw;
}
</style>
