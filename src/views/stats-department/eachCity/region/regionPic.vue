<template>
    <div style="overflow-y: scroll;overflow-x:hidden;" :style="{height: calHeightSize(600)+'px'}">
        <div>
            <div style="margin-top:5vh;display:flex;justify-content:flex-start;align-items:baseline;">
                <div style="width:6px;height:20px;background-color:#0062db">            
                </div>
                <div style="position:relative;" :style="{top:-calHeightSize(3)+'px'}">
                    <p :style="{fontSize:calHeightSize(14)+'px'}" style="margin-top:0;margin-left:10px;font-family:'微软雅黑 Bold','微软雅黑';font-weight:700;color:#0062DB">{{region}}生产总值</p>
                </div>
            </div>
            <div style="width:100%;display:flex;  flex-direction: row;">
                <div style="width:28%;">
                    <circle01 :region="region"></circle01>
                </div>
                <div style="width:17%;">
                    <circle02></circle02>
                </div>
                <div style="width:50%;">
                    <circle03></circle03>
                </div>
            </div>
        </div>
        

        <div style="width:100%;">
            <div style="margin-top:5vh;display:flex;justify-content:flex-start;align-items:baseline;">
                <div style="width:6px;height:20px;background-color:#0062db"></div>
                <div style="position:relative;" :style="{top:-calHeightSize(3)+'px'}">
                    <p :style="{fontSize:calHeightSize(14)+'px'}" style="margin-top:0;margin-left:10px;font-family:'微软雅黑 Bold','微软雅黑';font-weight:700;color:#0062DB">{{region}}生产总值历年对比</p>
                </div>
            </div>
            <div style="display:flex;flex-direction:row;justify-content:space-between;flex:auto;">
                <div style="width:47%;float:left;margin-top:15px;border-right:1px solid #d7d7d7">
                    <zhuxing01 :region="region"></zhuxing01>
                </div>
                <div style="width:47%;float:left;margin-top:15px;margin-left:2.5%;">
                    <zhuxing02 :region="region"></zhuxing02>
                </div>
            </div>
        </div>

        <div>
            <div style="margin-top:0vh;display:flex;justify-content:flex-start;align-items:baseline;">
                <div style="width:6px;height:20px;background-color:#0062db">            
                </div>
                <div style="position:relative;" :style="{top:-calHeightSize(3)+'px'}">
                    <p :style="{fontSize:calHeightSize(14)+'px'}" style="margin-top:0;margin-left:10px;font-family:'微软雅黑 Bold','微软雅黑';font-weight:700;color:#0062DB">{{region}}财政收入</p>
                </div>
            </div>
            <div  style="margin-top:-5vh">
                <circle-bar :region="region"></circle-bar>
            </div>
        </div>
        <div>
            <div style="margin-top:0vh;display:flex;justify-content:flex-start;align-items:baseline;">
                <div style="width:6px;height:20px;background-color:#0062db">            
                </div>
                <div style="position:relative;" :style="{top:-calHeightSize(3)+'px'}">
                    <p :style="{fontSize:calHeightSize(14)+'px'}" style="margin-top:0;margin-left:10px;font-family:'微软雅黑 Bold','微软雅黑';font-weight:700;color:#0062DB">{{region}}财政收入历年数据对比</p>
                </div>
            </div>
            <div style="position:relative;text-align:left;left:0px">                
                <zhuxing03 :region="region"></zhuxing03>
            </div>
        </div>
    </div>
</template>

<script>
import circle01 from "./../recycle/circle01";
import circle02 from "./../recycle/circle02";
import circle03 from "./../recycle/circle03";
import zhexian from "./../recycle/zhexian";
import zhuxing01 from "./../recycle/zhuxing01";
import zhuxing02 from "./../recycle/zhuxing02";
import zhuxing03 from "./../recycle/zhuxing03";
import consumeTable from "./../recycle/consumeTable";
import circleBar from "./../recycle/circleBar";
export default {
    props: ['region'],
    data() {
        return {
            raedius: 0
        };
    },
    components: {
        circle01,
        circle02,
        circle03,
        zhexian,
        zhuxing01,
        zhuxing02,
        zhuxing03,
        consumeTable,
        circleBar
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
        }
    }
};
</script>
<style scoped="scoped">

</style>
