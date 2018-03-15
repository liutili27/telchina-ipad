<!-- 报表导航栏组件 -->
<template>
    <div style="background:#143974;padding-top:10px">
        <reportNav :data="navData" @click="navClick" :activeIndex="navActive"></reportNav>
        <div id="reportContainer">
            <div v-if="navActive==0">
                <inTheWholeRegion></inTheWholeRegion>
            </div>
            <div v-if="navActive==1">
                <industrialGrowthInEachCity></industrialGrowthInEachCity>
            </div>
            <div v-if="navActive==2">
                <growthOfIndustrialIndustry></growthOfIndustrialIndustry>
            </div>
            <div v-if="navActive==3">
                <industrialOutputOEachCity></industrialOutputOEachCity>
            </div>
            <div v-if="navActive==4">
                <mainIndustrialOutput></mainIndustrialOutput>
            </div>
            <div v-if="navActive==5">
                <mainIndustrialProductQuality></mainIndustrialProductQuality>
            </div>
            <div v-if="navActive==6">
                <test></test>
            </div>
        </div>
    </div>
</template>
<script>
import reportNav from '@/components/report-navigation.vue';

// 全区各产业生产总值
import inTheWholeRegion from './industrial-prod-report/inTheWholeRegion.vue';
// 各市工业增加值增速
import industrialGrowthInEachCity from './industrial-prod-report/industrialGrowthInEachCity.vue';
// 工业行业增加值增速
import growthOfIndustrialIndustry from './industrial-prod-report/growthOfIndustrialIndustry.vue';
// 各市工业总产值
import industrialOutputOEachCity from './industrial-prod-report/industrialOutputOEachCity.vue';
// 主要工业行业总产值
import mainIndustrialOutput from './industrial-prod-report/mainIndustrialOutput.vue';
// 主要工业产品产量
import mainIndustrialProductQuality from './industrial-prod-report/mainIndustrialProductQuality.vue';
import test from './industrial-prod-report/testScroll.vue';
export default {
    components: {
        reportNav,
        inTheWholeRegion,
        industrialGrowthInEachCity,
        growthOfIndustrialIndustry,
        industrialOutputOEachCity,
        mainIndustrialOutput,
        mainIndustrialProductQuality,
        test
    },
    data() {
        return {
            navData: [
                "全区各产业生产总值",
                "各市工业增加值增速",
                "工业行业增加值增速",
                "各市工业总产值",
                "主要工业行业总产值",
                "主要工业产品产量",
                // "测试"
            ],
            navActive: -1,
            clientHeight: 0,
            clientWidth: 0
        };
    },
    mounted() {
        this.witdhHeight();
        this.$nextTick(function() {
            // var container = document.getElementById("reportContainer");
            // container.onmousemove = function(e) {
            //     console.log("down");
            //     console.log(e);
            // };
        });
    },
    methods: {
        reportReady() {
            this.navActive = 0;
        },
        navClick(name, index) {
            // console.log(name, index);
            this.navActive = index;
        },
        witdhHeight() {
            this.clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            this.clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        }
    }
};
</script>
<style scoped>
#reportContainer {

} 
</style>