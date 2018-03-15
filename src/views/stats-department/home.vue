<!-- 统计局 - 经济发展情况 -->
<template>
    <div style="width: 100%; height: 100%;position:relative">
        <basemap @ready="mapReady" ref="map" :mapType="'gx'" :showText="false">
            <page-title :year="'2016年12月'"></page-title>
            <div style="position: absolute;top: 5vh;right: 2vw;">
                <legend-item>
                    <div slot="left" style="width:17vw;">{{itemTitle[index]}}</div>
                    <div slot="right" style="font-weight: bold; color:#000000;width:10vw;">{{statisticsData.total}}</div>
                </legend-item>
                <legend-item>
                    <div slot="left" style="width:17vw;">增速</div>
                    <div slot="right" style="font-weight: bold;color:#D81E06;width:10vw">
                        <i style="" class="iconfont icon-tubiaoshangshengqushi"></i>
                        {{statisticsData.increase}}
                    </div>
                </legend-item>
            </div>
           <!--  <div style="position: absolute;top: 23vh;right: 3vw;">
                <cComponent2 :dataList="dataList" :barColor=1 :BorderRadius=5 :titleList="titleList" :showLable="false" ref="comp"></cComponent2>
            </div> -->
          <!--   <div style="position: absolute;top: 68vh;left: 15vw;">
                <info :datas="infos"></info>
            </div> -->
            <div v-if="myChart!=null">
                <mapBar :myChart="myChart" :data="barData" :color="['#00FFCC', '#FF0000']" :pointValueKey="'pvalue'" :yAxisKey="'value'" :xAxis="infos" :legendPosition="{bottom: '18vh',left: '10vw'}" :showLabel="true" :showPercentage="false"></mapBar>
            </div>
            <vertical-bar :showShadow='true' :position="{top:'16vh',right:'1vw'}" :data="dataList" :width="'20vw'" :height="'60vh'">
                <div slot="title"><center>{{rankTitle[index]}}</center></div>
            </vertical-bar>
        </basemap>
    </div>
</template>
<script>
    // import info from './info-component.vue';
    import basemap from '@/components/common-map.vue';
    import jsondata from './citydata.json';
    // import cComponent2 from '@/views/industryEconomy/company-component2.vue';
    import legendItem from '@/components/legend-item.vue';
    import mapBar from '@/components/map-bar-image.vue';
    import verticalBar from '@/components/vertical-bar.vue';
    import pageTitle from '@/components/page-title.vue';
    export default {
        components: {
            basemap,
            // info,
            // cComponent2,
            legendItem,
            mapBar,
            verticalBar,
            pageTitle
        },
        data() {
            return {
                infos: [],
                myChart: null,
                barData: [],
                titleList: [],
                dataList: [],
                title: '',
                index: 0,
                rankTitle: [
                    '各市地区生产总值排名',
                    '各市人均地区生产总值排名',
                    '公共财政收入排名',
                    '公共财政支出排名',
                    '城镇居民人均可支配收入排名',
                    '农村居民人均可支配收入排名'
                ],
                itemTitle: [
                    '全区生产总值',
                    '全区人均生产总值',
                    '全区公共财政收入',
                    '全区公共财政支出',
                    '全区城镇人均可支配收入',
                    '全区农村人均可支配收入'
                ],
                mapPoint:
                {
                    "南宁市": [108.53, 23.24],
                    "桂林市": [110.48, 25.29],
                    "柳州市": [109.5, 24.73],
                    "玉林市": [110.24, 22.34],
                    "钦州市": [108.79, 22.36],
                    "百色市": [106.62, 23.91],
                    "河池市": [107.66, 24.7],
                    "北海市": [109.42, 21.69],
                    "梧州市": [111.04, 23.51],
                    "贺州市": [111.51, 24.62],
                    "崇左市": [107.17, 22.62],
                    "贵港市": [110.0, 23.3],
                    "来宾市": [109.24, 23.86],
                    "防城港市": [108.05, 21.78]
                },
                statisticsData: {
                    total: 0,
                    increase: '0%'
                }
            };
        },
        mounted() {
            this.changeData(0);
        },
        methods: {
            mapReady(myChart) {
                this.myChart = myChart;
            },
            changeMenu(item, index) {
                this.index = index;
                this.changeData(index);
            },
            changeData(index) {
                this.barData = [];
                this.dataList = [];
                var mapData = JSON.parse(JSON.stringify(jsondata[index]));
                // this.barData = JSON.parse(JSON.stringify(mapData.mapData));
                this.statisticsData.total = mapData.total;
                this.statisticsData.increase = mapData.increase;
                for (var i = 0; i < mapData.mapData.length; i++) {
                    mapData.mapData[i].pvalue = this.mapPoint[mapData.mapData[i].name]; // 把点坐标转换成比较合适的坐标
                    this.barData.push(mapData.mapData[i]);
                    var data = {
                        name: mapData.mapData[i].name,
                        value: mapData.mapData[i].value[0]
                    };
                    this.dataList.push(data);
                }
                this.infos = mapData.valueTitle;
            }
        },
        destroyed() {
            // this.myChart.dispose(); // 这种使用底图的，底图通用组件已经进行销毁了
        }
    };
</script>
<style>

</style>