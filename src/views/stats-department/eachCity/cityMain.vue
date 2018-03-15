<template>
<div id="bg">
    <div id="ec-main">
        <!-- <div id="ec-left">
          <div @click="goBack">
            <i style="color:#c5c5c5;font-size:52.3vh class="iconfont icon-jiantouzuo"></i>
          </div>
        </div> -->
        <div id="ec-middle">
          <div>
              <div id="ec-tab">
                    <div style="overflow-x:scroll; overflow-y:hidden;" class="tab-div" :style="{fontSize:calWidthSize(12)+'px'}">
                        <div class="tab-item" v-for="(region,index) in tabs" :key="index" :class="{isActive:index === indexActive}"  @click="changeRegion(region,index)">
                        <nobr><span>{{region}}</span></nobr>
                        </div>
                    </div>
                </div>
            
          </div>
          <div>
            <div>
                <all-city :regionData="regionData"></all-city>
            </div>
            <!-- <div v-if="isRegion" id="ec-content">
                <region :valueData="valueData" :regionName="regionName"></region>            
            </div> -->
          </div>
        </div>
        <!-- <div id="ec-right">
            <div @click="goForward" style="text-align:right">
                <i style="color:#c5c5c5;font-size:52.3vh class="iconfont icon-jiantouyou"></i>
            </div>
        </div>         -->
    </div>    
</div>
</template>

<script>
// import region from "./region/region";
import allCity from "./allCity/allCity";
import statsdata from "./stats-data.json";

export default {
    data() {
        return {
            // isAll: true,
            currentRegion: '',
            // isRegion: false,
            regionName: '',
            indexActive: 0,
            isIndex: 0
        };
    },
    components: {
        // region,
        allCity
    },
    watch: {
    },
    computed: {
        tabs: function() {
            var t = [];
            for (var i = 0; i < statsdata.length; i++) {
                this.regionName = statsdata[0].name;
                t.push(statsdata[i].name);
            }
            return t;
        },
        regionData: function() {
            for (var i = 0; i < statsdata.length; i++) {
                if (this.regionName === statsdata[i].name) {
                    return statsdata[i];
                }
            }
        },
        alldata: function() {

        },
        eachdata: function() {

        },
        datas: function() {
            return statsdata;
        }
    },
    methods: {
        calWidthSize(val) {
            return val * window.screen.availWidth / 1024;
        },
        calHeightSize(val) {
            return val * window.screen.availHeight / 768;
        },
        changeRegion: function(region, index) {
            this.indexActive = index;
            this.regionName = region;
        }
        // showCompare: function() {
        //     this.isPicture = true;
        //     this.isCompare = false;
        //     this.indexActive = -1;
        // }
        // goBack: function() {
        //     if (this.indexActive > 0) {
        //         this.indexActive = this.indexActive - 1;
        //         this.currentRegion = this.tabs[this.indexActive];
        //         this.changeRegion(this.currentRegion, this.indexActive);
        //     }
        // },
        // goForward: function() {
        //     if (this.indexActive < this.tabs.length - 1) {
        //         this.indexActive = this.indexActive + 1;
        //         this.currentRegion = this.tabs[this.indexActive];
        //         this.changeRegion(this.currentRegion, this.indexActive);
        //     }
        // }
    },
    mounted() {
        // this.$nextTick(function() {});
    }
};
</script>

<style scoped="scoped">
#ec-main {
  margin-left: 3%;
  /* margin-right: 2%; */
  font-family: "微软雅黑";
  font-style: normal;
  font-size: 2.3vh;
  height: 100%;
  padding-top: 1vh;
}
.tab-div {
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}
.tab-div::-webkit-scrollbar {
    display: none;
}
.tab-item {
  flex:0 0 auto;
  display: block;
  margin: 0;
  padding: 0;
  font-size: 2.3vh;
  color: black;
  width: 6.666666%;
  cursor: pointer;
  background-color: #fff;  
 }
.isActive {
  background-color: #39f;
  color: white;
}
#ec-tab {
  text-align: center;
  position: relative;
  height: 5.2vh;
  line-height: 5.3vh;
  margin-bottom:1.3vh;
}
#ec-left {
  position: relative;
  float: left;
  width: 5%;
  margin-top: 350px;
}
#ec-middle {
  width: 96%;
}
#ec-contetn {
  float: unset;
} 
#bg{
	background: url(../../../assets/mainbg.png) no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    font-size: 2.3vh;
}
</style>
