<template>
	<div id="scrollor">
		<div>
			<div class="title" style="margin-top: 0">
				<div class="titleBar">
				</div>
				<div class="titleWord" >
					<p>2016年{{regionName}}生产总值和增速，以及三次产业结构占比</p>
				</div>
			</div>
			<div class="flex-row" style="width:100%;">
				<div style="width:28%;">
					<circle01 :circleOne="circleOne"></circle01>
				</div>
				<div style="width:17%;">
					<circle02 :region="regionName" :circleTwo="circleTwo"></circle02>
				</div>
				<div style="width:50%;">
					<circle03 :region="regionName" :circleThree="circleThree"></circle03>
				</div>
			</div>
            
		</div>

		<div style="width:100%;">
			<div class="title">
				<div class="titleBar"></div>
				<div class="titleWord">
					<p>2012-2016年{{regionName}}生产总值、人均GDP</p>
				</div>
			</div>
			<div class="flex-row flex-row-between">
				<div style="width:49%;margin-top:2vh;border-right:1px solid #1160a3">
					<zhuxing01 :zhuxingOne="zhuxingOne" :region="regionName"></zhuxing01>
				</div>
				<div style="width:49%;margin-top:2vh;margin-left:2.5%;">
					<zhuxing02 :region="regionName" :zhuxingTwo="zhuxingTwo"></zhuxing02>
				</div>
			</div>
		</div>
        <div v-if="tableData">
            <div>
                <div class="title">
                    <div class="titleBar"></div>
                    <div class="titleWord">
                        <p>2016年广西居民消费价格比上年涨跌幅度</p>
                    </div>
                </div>
                <div>
                    <consume-table :tableData="tableData"></consume-table>
                </div>
            </div>

            <div>
                <div class="title">
                    <div class="titleBar">
                    </div>
                    <div class="titleWord">
                        <p>2012-2016年{{regionName}}居民消费价格涨跌幅度</p>
                    </div>
                </div>
                <div class="flex-row flex-row-center">
                    <zhexian :zhexianData="zhexian"></zhexian>
                </div>
            </div>
        </div>

		<div>
			<div class="title">
				<div class="titleBar">
				</div>
				<div class="titleWord">
					<p>2016年{{regionName}}一般公共预算收入与支出</p>
				</div>
			</div>
			<div style="margin-top:-10vh">
				<circle-bar :region="regionName" :barData="barData"></circle-bar>
			</div>
		</div>
		<div>
			<div class="title">
				<div class="titleBar">
				</div>
				<div class="titleWord">
					<p>2012-2016年{{regionName}}财政收入</p>
				</div>
			</div>
			<div class="flex-row flex-row-center">
				<zhuxing03 :region="regionName" :zhuxingThree="zhuxingThree"></zhuxing03>
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
    props: ['regionData'],
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
    },
    watch: {
        testData() {
            alert('aaa');
        }
    },
    computed: {
        regionName: function() {
            return this.regionData.name;
        },
        circleTwo: function() {
            var rate = this.regionData.GDP.increase;
            return rate;
        },
        circleOne: function() {
            var c = {};
            this.$set(c, "name", this.regionData.name);
            this.$set(c, "value", this.regionData.GDP.total);
            return c;
        },
        circleThree: function() {
            return this.regionData.GDP.threeIndustries;
        },
        zhuxingOne: function() {
            return this.regionData.GDPCompare;
        },
        zhuxingTwo: function() {
            return this.regionData.GDPPerPeo;
        },
        tableData: function() {
            if (this.regionData.residentItem != undefined) {
                return this.regionData.residentItem;
            }
        },
        zhexian: function() {
            if (this.regionData.residentCom != undefined) {
                return this.regionData.residentCom;
            }
        },
        barData: function() {
            return this.regionData.revenue;
        },
        zhuxingThree: function() {
            return this.regionData.revenueCom;
        }
    }
};
</script>
<style scoped="scoped">
    #scrollor {
        overflow-y: scroll;
        overflow-x:hidden;
        height: 74.5vh;
        font-size: 2.3vh;
    }
    p{
        font-size:2.3vh;
    }
    .title {
        display:flex;
        justify-content:flex-start;
        align-items:baseline;
        margin-top: 10vh;        
    }
    .titleBar {
        width: 1.1vh;
        height: 2.6vh;
        background-color:white
    }
    .titleWord {
        position:relative;
        top:-0.3vh
    }
    .titleWord p {
        margin-left: 0.9vw;
        font-weight: 700;
        color: white
    }
    .flex-row {
        display:flex;
        flex-direction:row;
    }
    .flex-row-center {
        justify-content:center;
    }
    .flex-row-around {        
        justify-content: space-around;
    }
    .flex-row-between {
        justify-content:space-between;
        flex:auto;
    }
    .flex-row-around p {
        color: white;
    }
</style>