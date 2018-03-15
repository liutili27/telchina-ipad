<template>
    <div id="main">
        <div id="main-top">
            <!-- 全区财政收入蓝色圆 -->
            <div id="circle">
                <div id="circle-div01">
                    <p class="item01">
                        <span>2017年财政收入</span>
                    </p>
                    <p style="margin-top: -1.5vh">
                        <span class="span1">{{moneyFormatter(barData.total)}}</span>
                        <span class="span2">亿元</span>      
                    </p>
                    <div class="flex-row-center" style="margin-top: -1.8vh">
                        <!-- <div style="width:1.953125vw;height:3.90625vh;float:left;margin-left:4.8828125vw;">
                            <div style="width:0;height:0;border-right:0.68359375vw solid transparent;border-bottom:0.68359375vw solid white;border-left:0.68359375vw solid transparent"></div>
                            <div style="margin-left:0.48828125vw;width:0.390625vw;height:2.34375vh;background-color:white;"></div>
                        </div> -->
                        <div>
                            <i v-if="barData.increase >= 0" class="icon01 iconfont icon-tubiaoshangshengqushi"></i>
                            <i v-else class="icon02 iconfont icon-tubiaoxiajiangqushi"></i>
                        </div>
                        <div style="color:white;font-size:2.3vh" class="arrow-p"><span>增长{{barData.increase}}%</span></div>
                    </div>
                </div>
            </div>
            <!-- 全区财政收入浅蓝色横条 -->
            <div id="c-bar"></div>
            <div style="display:flex;">
                <!-- 税收收入框 -->
                <div class="div01" style="border:0.01vh dashed #1bb2d8;">
                    <p class="p1"><span>税收收入</span></p>
                    <p style="margin-left:2.90625vw;margin-top:-0.5vh;">
                        <span class="span1">{{moneyFormatter(barData.item[0].item.tax)}}</span>
                        <span class="span2">亿元</span></p>
                    <div style="margin-left:2.90625vw;display:flex;flex-direction:row;margin-top:-1.5vh;">
                        <!-- <div style="width:1.953125vw;height:3.90625vh;float:left;margin-left:2.9296875vw">
                            <div class="arrow" :style="{borderBottom:calWidthSize(7)+'px solid #d31e08',borderRight:calWidthSize(7)+'px solid transparent',borderLeft:calWidthSize(7)+'px solid transparent'}"></div>
                            <div class="arrow-bar"></div>
                        </div> -->
                        <div>
                            <i v-if="barData.item[0].item.increase >= 0" class="icon01 iconfont icon-tubiaoshangshengqushi"></i>
                            <i v-else class="icon02 iconfont icon-tubiaoxiajiangqushi"></i>
                        </div>
                        <div style="margin-top: 0.52083333vh;" class="arrow-p"><span style="color: white;">增长{{barData.item[0].item.increase}}%</span></div>

                    </div>
                </div>
                <!-- 青色圆晕 -->
                <div style="position:relative;left:3.222656vw;top:-24.74vh;">
                    <div style="height:2.604vh;width:2.604vh;position:relative;float:left;left:7vh;border-radius:50%;-moz-border-radius:50%;-webkit-border-radius:50%;background-color:#3a7e9e;z-index:2;">
                        <div style="width:1.6vh;height:1.6vh;top:0.52vh;left:0.52vh;position:relative;background-color:#66cccc;border-radius:50%;-moz-border-radius:50%;-webkit-border-radius:50%">
                        </div>
                    </div>
                    <div style="float:left;position:relative;left:-1.5vw">
                        <img style="width: 11vw" src="./../../../assets/dashed.png" />
                    </div>
                </div>
                <!-- 一般公共预算收入 -->
                <div class="div01" style="left:1.5vw">
                    <p class="p1" style="margin-left:0"><span>一般公共预算收入</span></p>
                    <p style="margin-top:-0.5vh;">
                        <span class="span1">{{moneyFormatter(barData.item[0].budgetIncome)}}</span>
                        <span class="span2">亿元</span></p>
                    <div style="display:flex;flex-direction:row;margin-top:-1.5vh;">
                        <!-- <div style="width:1.953125vw;height:3.90625vh;float:left;margin-left:2.9296875vw">
                            <div class="arrow" :style="{borderBottom:calWidthSize(7)+'px solid #d31e08',borderRight:calWidthSize(7)+'px solid transparent',borderLeft:calWidthSize(7)+'px solid transparent'}"></div>
                            <div class="arrow-bar"></div>
                        </div> -->
                        <div>
                            <i v-if="barData.item[0].increase >= 0" class="icon01 iconfont icon-tubiaoshangshengqushi"></i>
                            <i v-else class="icon02 iconfont icon-tubiaoxiajiangqushi"></i>
                        </div>
                        <div style="margin-top: 0.52083333vh;" class="arrow-p"><span style="color: white;font-size:2.3vh">增长{{barData.item[0].increase}}%</span></div>

                    </div>
                </div>                    
                <!-- 预算支出 -->
                <div class="div01" style="text-align:left;left: 5vw; margin-left:17vw">
                    <p class="p1" style="margin-left:0;"><span>一般公共预算支出</span></p>
                    <p style="margin-top:-0.5vh;">
                        <span class="span1">{{moneyFormatter(barData.item[1].budgetExpend)}}</span>
                        <span class="span2">亿元</span></p>
                    <div style="display:flex;flex-direction:row;margin-top:-1.5vh;">
                        <!-- <div style="width:1.953125vw;height:3.90625vh;float:left;margin-left:2.9296875vw">
                            <div class="arrow" :style="{borderBottom:calWidthSize(7)+'px solid #d31e08',borderRight:calWidthSize(7)+'px solid transparent',borderLeft:calWidthSize(7)+'px solid transparent'}"></div>
                            <div class="arrow-bar"></div>
                        </div> -->
                        <div>
                            <i v-if="barData.item[1].increase >= 0" class="icon01 iconfont icon-tubiaoshangshengqushi"></i>
                            <i v-else class="icon02 iconfont icon-tubiaoxiajiangqushi"></i>
                        </div>
                        <div style="margin-top: 0.52083333vh;" class="arrow-p"><span style="color: white;">增长{{barData.item[1].increase}}%</span></div>
                    </div>
                </div>         
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['region', 'barData'],
    data() {
        return {
        };
    },
    methods: {
        calWidthSize(val) {
            return val * window.screen.availWidth / 1024;
        },
        calHeightSize(val) {
            return val * window.screen.availHeight / 768;
        },
        calRadius(val) {
            var w = window.screen.availWidth;
            var h = window.screen.availHeight;
            this.radius = 153 * (w * 0.57 / 1024 + h * 0.43 / 768);
            return val * (w * 0.57 / 1024 + h * 0.43 / 768);
        },
        moneyFormatter(s) {
            s = s.toString();
            s = s.replace(/^(\d*)$/, "$1.");
            s = (s + "00").replace(/(\d*\.\d\d)\d*/, "$1");
            s = s.replace(".", ",");
            var re = /(\d)(\d{3},)/;
            while (re.test(s)) {
                s = s.replace(re, "$1,$2");
            }
            s = s.replace(/,(\d\d)$/, ".$1");
            return s.replace(/^\./, "0.");
        }
    },
    computed: {
    }
};
</script>

<style scoped="scoped">
#main {
    width:100%;
    height: 22.7865vh
}
#main-top {
    width:100%;
    margin-top: 19.53vh
}
.p1 {
  font-family: "Arial Negreta", "Arial Normal", "Arial";
  font-weight: 700;
  font-size: 2.3vh;
  color: white;
  margin-left: 2vw;
  margin-top: 1.30208333vh;
  margin-bottom: 1.30208333vh;
}
.span1 {
  font-weight: 400;
  color: white;
  font-size: 2.3vh;
  /* font-size:16px; */
}
.span2 {
  font-size: 1.7vh;
  color: #e0620d;
  font-weight: 400;
}
#circle {
  z-index: 2;
  position: relative;
  left: 43%;
  top: 40%;
  background-color: #1296db;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  text-align:center;
  width:19.53vh;
  height:19.53vh
}
#circle-div01 {
    position: relative;
    top:4.5573vh
}
.item01 {
    color:white;
    margin-top: 13.0208vh;
    font-size:2.3vh
}
.icon01 {
    color:#d31e08;
    font-size:3.0vh
}
.icon02 {
    color:#1afa29;
    font-size:3.0vh
}
#c-bar {
  position: relative;
  left: 2.44vw;
  top: -11.237vh;
  height: 2.474vh;
  width: 81.0547vw;
  /* left:20px;    
    top:-85px;
    height:19px;
    width:830px; */
  background-color: #126bac;
  border-radius: 6.51vh;
}
.flex-row-center {
    display:flex;
    justify-content:center;
    flex-direction:row;
}
.div01 {
  font-family: "Arial Normal", "Arial";
  position: relative;
  height: 13.0208vh;
  width: 13.6719vw;
  top:-30vh;
  left: 3.5vw;
  float: left;
}
.arrow-p {
  margin-top: 0.52083333vh;
  font-size: 2.3vh;
  text-align: left;
  font-weight: 400;
}
</style>
