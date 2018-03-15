<!-- 北部湾 - 综合表现 -->
<template>
	<div style="position:relative;">
		<basemap @ready="mapReady" :showText="false">
            <page-title></page-title>
			<div v-if="positionhadinit">
				<d-component :datas="data" :cityData="cityData" ref="ref"></d-component>
			</div>
			<div style="position: absolute; right: 20px; top: 40px;">
				<!-- 四市xx总额 -->
				<div>
					<div class="right-text-title">{{ cityData.fourCityname }}</div>
					<div class="right-text-title" v-if="cityData.allCityTotal">
                        {{ cityData.fourCitytotal }}
                        <span v-if="cityData.fourCityCurrency">{{cityData.fourCityCurrency}}</span>
                        <span v-else>亿元</span>
                    </div>
					<legend-item>
						<div slot="left" class="right-text-title w8vw">增长</div>
						<div slot="right" class="right-text-content w8vw" :class="{colorRed: cityData.fourCityspeedUp > 0}">
							<i class="iconfont icon-tubiaoshangshengqushi" v-if="cityData.fourCityspeedUp > 0" style="color: #c23531;"></i>
							<i class="iconfont icon-tubiaoxiajiangqushi" v-else style="color: #00cc00;"></i> {{ cityData.fourCityspeedUp }}%
						</div>
					</legend-item>
					<legend-item v-if="cityData.allCityTotal">
						<div slot="left" class="right-text-title w8vw">全区占比</div>
						<div slot="right" class="right-text-content w8vw color333">{{fourCityPercent}}%</div>
					</legend-item>
				</div>
				<!-- 六市xx总额 -->
				<div class="mt20">
					<div class="right-text-title">{{ cityData.sixCityname }}</div>
					<div class="right-text-title" v-if="cityData.allCityTotal">
                        {{ cityData.sixCitytotal }}
                        <span v-if="cityData.sixCityCurrency">{{cityData.sixCityCurrency}}</span>
                        <span v-else>亿元</span>
                    </div>
					<legend-item>
						<div slot="left" class="right-text-title w8vw">增长</div>
						<div slot="right" class="right-text-content w8vw" :class="{colorRed: cityData.sixCityspeedUp > 0}">
							<i class="iconfont icon-tubiaoshangshengqushi" v-if="cityData.sixCityspeedUp > 0" style="color: #c23531;"></i>
							<i class="iconfont icon-tubiaoxiajiangqushi" v-else style="color: #00cc00;"></i> {{ cityData.sixCityspeedUp }}%
						</div>
					</legend-item>
					<legend-item v-if="cityData.allCityTotal">
						<div slot="left" class="right-text-title w8vw">全区占比</div>
						<div slot="right" class="right-text-content w8vw color333">{{sixCityPercent}}%</div>
					</legend-item>
				</div>
				<!-- 全区xx总额 -->
				<div class="mt20" v-if="!cityData.allCityTotal">
					<div class="right-text-title">{{ cityData.allCityName }}</div>
					<legend-item>
						<div slot="left" class="right-text-title w8vw">增长</div>
						<div slot="right" class="right-text-content w8vw" :class="{colorRed: cityData.allCitySpeedUp > 0}">
							<i class="iconfont icon-tubiaoshangshengqushi" v-if="cityData.allCitySpeedUp > 0" style="color: #c23531;"></i>
							<i class="iconfont icon-tubiaoxiajiangqushi" v-else style="color: #00cc00;"></i> {{ cityData.allCitySpeedUp }}%
						</div>
					</legend-item>
				</div>

				<!-- 排行 -->
                <!--
				<flexbox :gutter="0" orient="horizontal" class="leftMenu" style="width: 18vw; margin-top: 40px;">
					<flexbox-item>
						<div class="leftMenuItem" :class="{ leftSelected: rankType==0 }" @click="rankType=0">
							{{rankTitle}}
						</div>
					</flexbox-item>
					<flexbox-item>
						<div class="leftMenuItem" :class="{ leftSelected: rankType==1 }" @click="rankType=1">
							增速排名
						</div>
					</flexbox-item>
				</flexbox>
				<div v-if="rankType==0" style="position: relative;">
					<vertical-bar :position="{top:'0',right:'0'}" :showShadow='true' :data="totalRankData" :width="'20vw'" :height="'30vh'">
						<div slot="title">
							<center class="right-text-title" v-if="cityData.allCityTotal">各市总量排名（亿元）</center>
							<center class="right-text-title" v-else>各市规模以上工业增加值排名</center>
						</div>
					</vertical-bar>
				</div>
				<div class="right-text-title" style="position: relative;" v-else>
					<vertical-bar :position="{top:'0',right:'0'}" :showShadow='true' :data="speedUpRankData" :width="'20vw'" :height="'30vh'">
						<div slot="title">
							<center class="right-text-title">各市增速排名（%）</center>
						</div>
					</vertical-bar>
				</div>
                -->
			</div>
            <div class="bottomRemark">                  
                “<span style="font-weight: bold;">增长</span>”指同比增长
            </div>
		</basemap>

	</div>
</template>
<script>
import basemap from '@/components/common-map.vue';
import dComponent from './div-component.vue';
import right from './right-component.vue';
import jsondata from './data.json';
import legendItem from '@/components/legend-item.vue';
import { ButtonTab, ButtonTabItem, Flexbox, FlexboxItem } from 'vux';
// import verticalBar from '@/components/vertical-bar.vue';
import pageTitle from '@/components/page-title.vue';

export default {
    components: {
        dComponent,
        basemap,
        right,
        legendItem,
        ButtonTab,
        ButtonTabItem,
        // verticalBar,
        Flexbox,
        FlexboxItem,
        pageTitle
    },
    data() {
        return {
            myChart: null,
            data: [],
            positionhadinit: false,
            series: [],
            cityData: {},
            rankType: 0,
            rankData: [],
            totalRankData: [],
            speedUpRankData: [],
            rankTitle: jsondata[0].rankName
        };
    },
    computed: {
        fourCityPercent() {
            return Math.round(this.cityData.fourCitytotal / this.cityData.allCityTotal * 100);
        },
        sixCityPercent() {
            return Math.round(this.cityData.sixCitytotal / this.cityData.allCityTotal * 100);
        }
    },
    mounted() {
        this.refreshData(0);
    },
    methods: {
        mapReady(myChart) {
            this.myChart = myChart;
            var option = this.myChart.getOption();
            option.series = [{
                type: 'custom',
                coordinateSystem: 'geo',
                renderItem: (params, api) => {
                    var lat = this.data[params.dataIndex].value[0];
                    var lng = this.data[params.dataIndex].value[1];
                    var p = api.coord([lat, lng]);
                    this.$set(this.data[params.dataIndex], "position", p);
                },
                data: this.data
            }];
            this.myChart.setOption(option);
            this.positionhadinit = true;
        },
        refreshData(index) {
            for (var i = 0; i < jsondata[index].mapData.length; i++) {
                this.data.push(jsondata[index].mapData[i]);

                let totalObj = {
                    name: jsondata[index].mapData[i].name,
                    value: jsondata[index].mapData[i].total
                };
                this.totalRankData.push(totalObj);

                let speedUpObj = {
                    name: jsondata[index].mapData[i].name,
                    value: jsondata[index].mapData[i].speedUp
                };
                this.speedUpRankData.push(speedUpObj);
            }
            this.cityData = {
                fourCityname: jsondata[index].fourCity.name,
                fourCityspeedUp: jsondata[index].fourCity.speedUp,
                fourCitytotal: jsondata[index].fourCity.total,
                fourCityisUp: jsondata[index].fourCity.isUp,
                fourCityCurrency: jsondata[index].fourCity.currency,
                sixCityname: jsondata[index].sixCity.name,
                sixCityspeedUp: jsondata[index].sixCity.speedUp,
                sixCitytotal: jsondata[index].sixCity.total,
                sixCityisUp: jsondata[index].sixCity.isUp,
                sixCityCurrency: jsondata[index].sixCity.currency,
                allCityName: jsondata[index].allCity.name,
                allCitySpeedUp: jsondata[index].allCity.speedUp,
                allCityTotal: jsondata[index].allCity.total,
                unit: jsondata[index].unit
            };
        },
        changeMenu(item, index) {
            this.totalData = [];
            this.upData = [];
            this.cityData = [];
            this.positionhadinit = false;
            this.data.splice(0, this.data.length);
            this.totalRankData.splice(0, this.totalRankData.length);
            this.speedUpRankData.splice(0, this.speedUpRankData.length);
            this.$refs.ref.getRank();
            this.refreshData(index);
            this.mapReady(this.myChart);

            this.rankTitle = jsondata[index].rankName;
        }
    }
};
</script>
<style scoped>
.right-text-title {
    color: #ffffff;
    font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
    font-size: 1.4vw;
}

.right-text-content {
    color: #00cc00;
    font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
    font-weight: bold;
}

.w8vw {
    width: 8vw;
}

.colorRed {
    color: #c23531;
}

.mt20 {
    margin-top: 20px;
}

.leftMenu {
    width: 19vw;
    transform: translateY(-50%);
    background-color: rgba(0, 255, 204, 0.4);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 5px 5px 10px rgba(0, 255, 204, 0.35);
}

.leftMenuItem {
    width: 9vw;
    height: 4vh;
    font-size: 1.4vw;
    color: #ffffff;
    text-align: center;
    line-height: 4vh;
}

.leftSelected {
    border-radius: 8px;
    background-color: rgba(0, 255, 204, 0.2);
    color: #00ffcc;
}
.color333 {
    color: #333333;
}
.bottomRemark {
    position: absolute;
    color: white;
    left: 30vw;
    bottom: 17vh;
    font-size: 1.4vw;
    font-family: 'Arial'; 
}
</style>
