<template>
    <div>
        <basemap @ready="mapReady" :mapType="'gx'" :showText="false">
            <page-title>高新企业地市分布</page-title>
            <div v-if="myChart!=null" style="font-size:1vw;">
                <mapBar :myChart="myChart" :data="barData" :color="['#00FFCC', '#FF0000']" :pointValueKey="'value'" :yAxisKey="'yvalue'" :xAxis="['2017年有效高企数','2017年新认定高企数']" :legendPosition="{bottom: '16vh',left: '10vw'}" :showLabel="true"></mapBar>
            </div>
            <div style="position:absolute;top:7.5vh;right:1.3vw;">
                <legend-item style="margin-bottom:-3px;">
                        <div slot="left" style="width:16vw;font-size:1.3vw;">全区2017年有效高企数</div>
                        <div slot="right" style="width:4vw;font-size:1.3vw;text-align:right;margin-right: 3vw;">1,204</div> 
                </legend-item>
                <legend-item style="margin-bottom:-3px;">
                    <div slot="left" style="width:16vw;font-size:1.3vw;">全区2017年新认定高企数</div>
                    <div slot="right"  style="width:4vw;font-size:1.3vw;text-align:right;margin-right: 3vw;">570</div>
                </legend-item> 
            </div>
            <vertical-bar :showShadow='true' :position="{top:'18vh',right:'1.3vw'}" :data="verticalBarData" :width="'18vw'" :height="'60vh'">
                <div slot="title" style="font-size: 1.3vw;" class="font-f">
                    <center>各地市2017年有效高企数排名</center>
                </div>
            </vertical-bar>
        </basemap>
    </div>
</template>
<script>
import basemap from '@/components/common-map.vue';
import legendItem from '@/components/legend-item.vue';
import verticalBar from '@/components/vertical-bar.vue';
import mapBar from '@/components/map-bar.vue';
import pageTitle from '@/components/page-title.vue';
export default {
    components: { basemap, legendItem, verticalBar, mapBar, pageTitle },
    data() {
        return {
            option: [],
            myChart: null,
            verticalBarData: [
                { name: '南宁市', value: 120 },
                { name: '柳州市', value: 72 },
                { name: '桂林市', value: 40 },
                { name: '钦州市', value: 50 },
                { name: '北海市', value: 21 },
                { name: '梧州市', value: 51 },
                { name: '玉林市', value: 22 },
                { name: '百色市', value: 32 },
                { name: '贵港市', value: 12 },
                { name: '防城港市', value: 8 },
                { name: '来宾市', value: 2 },
                { name: '贺州市', value: 5 },
                { name: '崇左市', value: 2 },
                { name: '河池市', value: 5 }
            ],
            barData: [
                {
                    name: '钦州市',
                    value: [109.01, 22.36], // 地理位置,
                    yvalue: [55, 24] // y轴数据，对应x轴
                },
                {
                    name: '北海市',
                    value: [109.50, 21.69], // 地理位置,
                    yvalue: [49, 23] // y轴数据，对应x轴
                },
                {
                    name: '南宁市',
                    value: [108.43, 23.30], // 地理位置,
                    yvalue: [451, 214] // y轴数据，对应x轴
                },
                {
                    name: '桂林市',
                    value: [110.58, 25.60], // 地理位置,
                    yvalue: [158, 81] // y轴数据，对应x轴
                },
                {
                    name: '柳州市',
                    value: [109.50, 24.63], // 地理位置,
                    yvalue: [280, 126] // y轴数据，对应x轴
                },
                {
                    name: '玉林市',
                    value: [110.34, 22.64], // 地理位置,
                    yvalue: [37, 20] // y轴数据，对应x轴
                },
                {
                    name: '百色市',
                    value: [106.52, 24.25], // 地理位置,
                    yvalue: [29, 20] // y轴数据，对应x轴
                },
                {
                    name: '河池市',
                    value: [108.26, 24.80], // 地理位置,
                    yvalue: [5, 2] // y轴数据，对应x轴
                },
                {
                    name: '梧州市',
                    value: [111.28, 23.10], // 地理位置,
                    yvalue: [40, 14] // y轴数据，对应x轴
                },
                {
                    name: '贺州市',
                    value: [111.48, 24.63], // 地理位置,
                    yvalue: [16, 10] // y轴数据，对应x轴
                },
                {
                    name: '崇左市',
                    value: [107.30, 22.75], // 地理位置,
                    yvalue: [14, 6] // y轴数据，对应x轴
                },
                {
                    name: '贵港市',
                    value: [110.35, 23.60], // 地理位置,
                    yvalue: [26, 12] // y轴数据，对应x轴
                },
                {
                    name: '来宾市',
                    value: [109.34, 23.84], // 地理位置,
                    yvalue: [22, 9] // y轴数据，对应x轴
                },
                {
                    name: '防城港市',
                    value: [108.06, 21.80], // 地理位置,
                    yvalue: [22, 9] // y轴数据，对应x轴
                }
            ]
        };
    },
    mounted() {

    },
    methods: {
        mapReady(myChart) {
            this.myChart = myChart;
        }
    }
};
</script>
<style scoped>
.legend-value {
    color:black;
    width: 3vw;
    font-size: 1.3vw;
    padding-left: 0px;
}

.legend-label {
    width: 14vw;
    font-size: 1.3vw;
}

.font-f{
    font-family: 'Arial Normal', 'Arial';
}
</style>