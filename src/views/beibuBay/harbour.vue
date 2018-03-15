<template>
    <div>
        <basemap @ready="mapReady" :showText="false">
            <div v-if="myChart!=null">
                <mapBarImage :myChart="myChart" :data="data" :color="['#00FFCC', '#FF0000']" :pointValueKey="'value'" :yAxisKey="'yvalue'" :xAxis="['2017年货物吞吐量（万吨）','同比增长']" :legendPosition="{bottom: '18vh',left: '10vw'}" :showLabel="true"></mapBarImage>
            </div>
            <div style="position:absolute;top:2vw;right:2vw;">
                <legend-item>
                    <div slot="left">全国排名</div>
                    <div slot="right" style="color:#CA450E ">80</div>
                </legend-item>
                <div style="color:#fff;margin:20px 0 20px 0">2017年北部湾港港口吞吐量</div>
                <legend-item>
                    <div slot="left">吞吐量</div>
                    <div slot="right">21,854.64万吨</div>
                </legend-item>
                <legend-item>
                    <div slot="left">增长</div>
                    <div slot="right" >
                       <!--  <i v-if="1==1" class="iconfont icon-tubiaoxiajiangqushi" />
                        <i v-else class="iconfont icon-tubiaoshangshengqushi" /> -->
                        7.2%
                    </div>
                </legend-item>
                 <legend-item>
                    <div slot="left">集装箱</div>
                    <div slot="right">227.87万TEU</div>
                </legend-item>
            </div>
        </basemap>
    </div>
</template>
<script>
import basemap from '@/components/common-map.vue';
import mapBarImage from '@/components/map-bar-image.vue';
import legendItem from '@/components/legend-item.vue';
import {harbourData} from './harbourdata';
export default{
    components: {basemap, mapBarImage, legendItem},
    data() {
        return {
            myChart: null,
            data: harbourData
        };
    },
    methods: {
        changeMenu(item, index) {
        },
        mapReady(myChart) {
            this.myChart = myChart;
        }
    }
};
</script>
<style scoped>
.infowindow-item{
    margin-top:  1vh;
    display:  flex;
    flex-direction:  row;
}
.infowindow-item-value{
    font-weight:  700;
    
}
.infowindow-item-value-per{
    color:  #F4EA29;
    float: right;
}
.infowindow-item-value-div{
    display:block; 
    width:7vw; 
    height:2vw;
    background: #6BB3D2;
    float: right;
    color: #C23531;
    text-align: center;
    -moz-box-shadow: 1px 1px 5px #333; /* 老的 Firefox */
    box-shadow: 1px 1px 5px #333;
}
.legend-cicle{
    width: 10px;
    height: 10px;
    background-color:red;
    border-radius: 50%; 
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    float: left;
}

.legend-text{
    float: left;
}
</style>