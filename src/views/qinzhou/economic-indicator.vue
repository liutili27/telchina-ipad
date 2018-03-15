<!-- 钦州 - 经济指标 -->
<template>
    <div class="map-back" style="display:flex;flex-direction: row; justify-content: center;">
        <div id="scrollor" style="margin-top: 0;width: 96%">
            <div>
                <div class="title" style="margin-top: 0;">
                    <div class="titleBar">
                    </div>
                    <div class="titleWord" >
                        <p>2017年{{regionName}}生产总值和增速，以及三次产业结构占比</p>
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
                        <p>2013-2017年{{regionName}}生产总值、人均GDP</p>
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

            <div>
                <div class="title">
                    <div class="titleBar">
                    </div>
                    <div class="titleWord">
                        <p>2017年{{regionName}}一般公共预算收入与支出</p>
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
                        <p>2013-2017年{{regionName}}财政收入</p>
                    </div>
                </div>
                <div class="flex-row flex-row-center">
                    <zhuxing03 :region="regionName" :zhuxingThree="zhuxingThree"></zhuxing03>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	import circle01 from "./recycle/circle01";
	import circle02 from "./recycle/circle02";
	import circle03 from "./recycle/circle03";
	import zhuxing01 from "./recycle/zhuxing01";
	import zhuxing02 from "./recycle/zhuxing02";
	import zhuxing03 from "./recycle/zhuxing03";
	import circleBar from "./recycle/circleBar";
	export default {
    data() {
        return {
            data: {
                "name": "钦州市",
                "GDP": {
                    "total": 1309.82,
                    "increase": 8.8,
                    "threeIndustries": [
                        {
                            "name": "第一产业",
                            "value": 234.95
                        },
                        {
                            "name": "第二产业",
                            "value": 625.01,
                            "item": {
                                "name": "工业",
                                "value": 487.18
                            }
                        },
                        {
                            "name": "第三产业",
                            "value": 449.86
                        }
                    ]
                },
                "GDPCompare": {
                    "year": [
                        2013,
                        2014,
                        2015,
                        2016,
                        2017
                    ],
                    "value": [
                        753.74,
                        854.96,
                        944.42,
                        1102.05,
                        1309.82
                    ],
                    "increase": [
                        107.9,
                        109.8,
                        108.4,
                        109,
                        108.8
                    ]
                },
                "GDPPerPeo": {
                    "year": [
                        2013,
                        2014,
                        2015,
                        2016,
                        2017
                    ],
                    "value": [
                        691.32,
                        753.74,
                        854.96,
                        944.42,
                        1102.05
                    ]
                },
                "revenue": {
                    "total": 145.08,
                    "increase": -6.4,
                    "item": [
                        {
                            "budgetIncome": 52.81,
                            "increase": 6.7,
                            "item": {
                                "tax": 123.95,
                                "increase": -8.1
                            }
                        },
                        {
                            "budgetExpend": 205.94,
                            "increase": 6.1
                        }
                    ]
                },
                "revenueCom": {
                    "year": [
                        2013,
                        2014,
                        2015,
                        2016,
                        2017
                    ],
                    "value": [
                        136.12,
                        138.31,
                        162.23,
                        154.08,
                        145.08
                    ]
                }
            }
                };
            },
            components: {
                circle01,
                circle02,
                circle03,
                zhuxing01,
                zhuxing02,
                zhuxing03,
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
            computed: {
                regionName: function() {
                    return this.data.name;
                },
                circleTwo: function() {
                    var rate = this.data.GDP.increase;
                    return rate;
                },
                circleOne: function() {
                    var c = {};
                    this.$set(c, "name", this.data.name);
                    this.$set(c, "value", this.data.GDP.total);
                    return c;
                },
                circleThree: function() {
                    return this.data.GDP.threeIndustries;
                },
                zhuxingOne: function() {
                    return this.data.GDPCompare;
                },
                zhuxingTwo: function() {
                    return this.data.GDPPerPeo;
                },
                barData: function() {
                    return this.data.revenue;
                },
                zhuxingThree: function() {
                    return this.data.revenueCom;
                }
            }
        };
</script>

<style scoped>
    .map-back {
        background: url('../../assets/map-background.jpg') no-repeat; 
        background-size: cover;
        width: 100%;
        height: 100%;
    }
    #scrollor {
        overflow-y: scroll;
        overflow-x:hidden;
        /*height: 74.5vh*/
        margin-bottom: 100px;
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
        font-size: 1.5vw;
        margin-left: 0.9vw;
        font-weight: 700;
        color: white;
        font-size: 2.3vh
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