<template>
  <div>
      <div style="">
        <!-- <div id="ec-menu-icon" style="display:flex;flex-direction:row;justify-content:flex-end;">            
            <div :class="{isActive:pieChart}" id="ec-menu-icon2" @click="clickPieChart">
                <i style="color:#1e90ff" class="fa fa-pie-chart fa-lg"></i>
            </div>
            <div :class="{isActive:navicon}" id="ec-menu-icon1" @click="clickNavicon">
                <i style="color:#8cd88c" class="fa fa-navicon fa-lg"></i>
            </div>
        </div> -->
        <div style="overflow-y: scroll;height:650px">
            <div v-if="isPic">
                <region-pic :region="regionName"></region-pic>
            </div>
            <div v-if="isValue">
                <region-value :valueData="valueData"></region-value>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import regionValue from './regionValue';
import regionPic from './regionPic';
export default {
    props: ['valueData', 'regionName'],
    data() {
        return {
            navicon: false,
            pieChart: false,
            isPic: true,
            isValue: false
        };
    },
    methods: {
        calWidthSize(val) {
            return val * window.screen.availWidth / 1024;
        },
        calHeightSize(val) {
            return val * window.screen.availHeight / 768;
        },
        clickNavicon() {
            this.navicon = true;
            this.pieChart = false;
            this.isValue = true;
            this.isPic = false;
        },
        clickPieChart() {
            this.navicon = false;
            this.pieChart = true;
            this.isValue = false;
            this.isPic = true;
        },
        replacePic() {
            this.isPic = true;
            this.isValue = false;
        },
        replaceVal() {
            this.isPic = false;
            this.isValue = true;
        }
    },
    components: {
        regionValue,
        regionPic
    }
};
</script>

<style scoped="scoped">
#ec-menu-icon {
    width:100%;
    height:50px;
    margin-top:25px;
}
#ec-menu-icon1 {
    background-color: #dddddd;
    width:15px;
    height: 15px;
    padding: 7px 11px 11px 11px;
    float:right;
}
#ec-menu-icon2 {
    margin-right:5px;
    background-color: #dddddd;
    width:15px;
    height: 15px;
    padding: 7px 11px 11px 11px;
    float:right;
}
.isActive{
    border:2px solid #80affd
}
</style>
