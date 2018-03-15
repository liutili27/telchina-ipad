<template>
    <div class="map-back">
        <div style="height:1vh"></div>
        <div class="flex-row">
            <!--<div class="header" v-show="indexActive != 6 && indexActive != 7 && indexActive != 9" v-for="(t,index) in tab.year.title" :key="index" :class="{isActive:index===yearindexActive}" @click="changeInfo1(index)">{{t}}</div>
            <div class="header" v-show="indexActive == 6 " v-for="(t,index) in tab.year.title3" :key="index" :class="{isActive:index===yearindexActive}" @click="changeInfo1(index)">{{t}}</div>
            <div class="header" v-show="indexActive == 7 || indexActive == 9" v-for="(t,index) in tab.year.title1" :key="index" :class="{isActive:index===yearindexActive}" @click="changeInfo1(index)">{{t}}</div>-->
            <div class="header" v-for="(t,index) in tab.year.title" :key="index" 
                :class="classObject(index)" @click="changeInfo1(index)">{{t}}</div>            
        </div>

        <div style="width:100%;height:79vh;overflow: auto;">
            <!--<swiper :options="swiperOption">
                <swiper-slide>-->
                    <div class="title" style="margin-top: 0;color:white;margin:4vh 0px 0px 3vw;font-size:1.5vw;">
                        <div class="titleBar">
                        </div>
                        <div class="titleWord" style="margin-left:10px">
                            <p>{{changeTitle}}{{leftIndex}}</p>
                        </div>
                    </div>
                    <div id="container1" v-show="indexActive != 3" style="width: 75vw; height: 442px;margin:0 auto"></div>
                <!--</swiper-slide>
                <swiper-slide>-->
                    <div class="title" style="margin-top: 0;color:white;margin:4vh 0px 0px 3vw;font-size:1.5vw;">
                        <div class="titleBar">
                        </div>
                        <div class="titleWord" style="margin-left:10px">
                            <p>{{changeTitle}}{{leftIndex}}同比增长</p>
                        </div>
                    </div>
                    <div id="container2" style="width: 70vw; height: 442px;margin:0 auto"></div>
                <!--</swiper-slide>
            </swiper>-->
        </div>
        <div>

        </div>
    </div>
</template>

<script>
import projectData from './proData.json';
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    data: function() {
        return {

            swiperOption: {
                direction: 'vertical'
            },


            yearindexActive: 0,
            // indexActive: 0,
            barData: [],
            lineData: [],
            echartObj: null,
            echartObj2: null,
            proData: projectData,
            tab: {
                title: {
                    value: [
                        "地区生产总值",
                        "财政收入",
                        "一般公共预算",
                        "规模以上工业增加值",
                        "全社会固定资产投资总额",
                        "社会消费品零售总额",
                        "房地产投资额",
                        "外贸进出口总额",
                        "出口总额",
                        "外商直接投资额"
                    ],
                },
                year: {
                    header: "年份：",
                    title: [
                        "2017年",
                        "2016年",
                        "近三年",
                        "近五年",
                        "近十年"
                    ],
                    title1: [
                        "2017年",
                        "2016年"
                    ],
                    title3: [
                        "2017年"
                    ]

                }
            },
            barDatas: {},
            lineDatas: {},
            ableClick: true
        }
    },
    computed: {
        changeTitle() {
            return this.tab.year.title[this.yearindexActive];
        },
        indexActive() {
            return this.$store.state.app.leftIndex;
        },
        leftIndex() {
            return this.tab.title.value[this.indexActive];
        }
    },
    methods: {
        classObject(index) {
            return {
                isActive: index === this.yearindexActive,
                colorGrey: (this.indexActive == 6 && index != 0) || ((this.indexActive == 7 || this.indexActive == 9) && index >= 2)
            }
        },
        changeInfo1(index) {
            if(this.indexActive == 6 && index != 0) {
                return;
            }
            if((this.indexActive == 7 || this.indexActive == 9) && index >= 2) {
                return;
            }
            this.yearindexActive = index;
        },

        changeInfo2() {
            //为的是监听barData重新影响装配图表
            this.barData = [];
            this.barDatas = {};
            this.lineData = [];
            this.lineDatas = {};
            var lineDatasTeam = {
                line1: {
                    value: []
                },
                line2: {
                    value: []
                },
                line3: {
                    value: []
                },
                line4: {
                    value: []
                },
                line5: {
                    value: []
                },
                line6: {
                    value: []
                },
                line7: {
                    value: []
                },
                line8: {
                    value: []
                },
                line9: {
                    value: []
                },
                line10: {
                    value: []
                }
            };
            var barDatasTeam = {
                bar1: {
                    value: []
                },
                bar2: {
                    value: []
                },
                bar3: {
                    value: []
                },
                bar4: {
                    value: []
                },
                bar5: {
                    value: []
                },
                bar6: {
                    value: []
                },
                bar7: {
                    value: []
                },
                bar8: {
                    value: []
                },
                bar9: {
                    value: []
                },
                bar10: {
                    value: []
                }
            };


            var years = [];
            //装配三年的数据		

            for (var j = 0; j < 6; j++) {
                //控制城市个数
                if (this.indexActive == 0) {
                    if (this.yearindexActive >= 2) {
                        barDatasTeam.bar1.value[j] = this.proData[0].year2017[j].value[0].localProduction;
                        barDatasTeam.bar2.value[j] = this.proData[1].year2016[j].value[0].localProduction;
                        barDatasTeam.bar3.value[j] = this.proData[2].year2015[j].value[0].localProduction;

                        lineDatasTeam.line1.value[j] = this.proData[0].year2017[j].value[0].rate;
                        lineDatasTeam.line2.value[j] = this.proData[1].year2016[j].value[0].rate;
                        lineDatasTeam.line3.value[j] = this.proData[2].year2015[j].value[0].rate;

                        if (this.yearindexActive >= 3) {
                            barDatasTeam.bar4.value[j] = this.proData[3].year2014[j].value[0].localProduction;
                            barDatasTeam.bar5.value[j] = this.proData[4].year2013[j].value[0].localProduction;

                            lineDatasTeam.line4.value[j] = this.proData[3].year2014[j].value[0].rate;
                            lineDatasTeam.line5.value[j] = this.proData[4].year2013[j].value[0].rate;

                            if (this.yearindexActive >= 4) {
                                barDatasTeam.bar6.value[j] = this.proData[5].year2012[j].value[0].localProduction;
                                barDatasTeam.bar7.value[j] = this.proData[6].year2011[j].value[0].localProduction;
                                barDatasTeam.bar8.value[j] = this.proData[7].year2010[j].value[0].localProduction;
                                barDatasTeam.bar9.value[j] = this.proData[8].year2009[j].value[0].localProduction;
                                barDatasTeam.bar10.value[j] = this.proData[9].year2008[j].value[0].localProduction;

                                lineDatasTeam.line6.value[j] = this.proData[5].year2012[j].value[0].rate;
                                lineDatasTeam.line7.value[j] = this.proData[6].year2011[j].value[0].rate;
                                lineDatasTeam.line8.value[j] = this.proData[7].year2010[j].value[0].rate;
                                lineDatasTeam.line9.value[j] = this.proData[8].year2009[j].value[0].rate;
                                lineDatasTeam.line10.value[j] = this.proData[9].year2008[j].value[0].rate;
                            }
                        }
                    }
                } else if (this.indexActive == 1) {
                    if (this.yearindexActive >= 2) {
                        barDatasTeam.bar1.value[j] = this.proData[0].year2017[j].value[1].financial;
                        barDatasTeam.bar2.value[j] = this.proData[1].year2016[j].value[1].financial;
                        barDatasTeam.bar3.value[j] = this.proData[2].year2015[j].value[1].financial;

                        lineDatasTeam.line1.value[j] = this.proData[0].year2017[j].value[1].rate;
                        lineDatasTeam.line2.value[j] = this.proData[1].year2016[j].value[1].rate;
                        lineDatasTeam.line3.value[j] = this.proData[2].year2015[j].value[1].rate;

                        if (this.yearindexActive >= 3) {
                            barDatasTeam.bar4.value[j] = this.proData[3].year2014[j].value[1].financial;
                            barDatasTeam.bar5.value[j] = this.proData[4].year2013[j].value[1].financial;

                            lineDatasTeam.line4.value[j] = this.proData[3].year2014[j].value[1].rate;
                            lineDatasTeam.line5.value[j] = this.proData[4].year2013[j].value[1].rate;

                            if (this.yearindexActive >= 4) {
                                barDatasTeam.bar6.value[j] = this.proData[5].year2012[j].value[1].financial;
                                barDatasTeam.bar7.value[j] = this.proData[6].year2011[j].value[1].financial;
                                barDatasTeam.bar8.value[j] = this.proData[7].year2010[j].value[1].financial;
                                barDatasTeam.bar9.value[j] = this.proData[8].year2009[j].value[1].financial;
                                barDatasTeam.bar10.value[j] = this.proData[9].year2008[j].value[1].financial;

                                lineDatasTeam.line6.value[j] = this.proData[5].year2012[j].value[1].rate;
                                lineDatasTeam.line7.value[j] = this.proData[6].year2011[j].value[1].rate;
                                lineDatasTeam.line8.value[j] = this.proData[7].year2010[j].value[1].rate;
                                lineDatasTeam.line9.value[j] = this.proData[8].year2009[j].value[1].rate;
                                lineDatasTeam.line10.value[j] = this.proData[9].year2008[j].value[1].rate;
                            }

                        }
                    }
                }
                else if (this.indexActive == 2) {
                    if (this.yearindexActive >= 2) {
                        barDatasTeam.bar1.value[j] = this.proData[0].year2017[j].value[2].public;
                        barDatasTeam.bar2.value[j] = this.proData[1].year2016[j].value[2].public;
                        barDatasTeam.bar3.value[j] = this.proData[2].year2015[j].value[2].public;

                        lineDatasTeam.line1.value[j] = this.proData[0].year2017[j].value[2].rate;
                        lineDatasTeam.line2.value[j] = this.proData[1].year2016[j].value[2].rate;
                        lineDatasTeam.line3.value[j] = this.proData[2].year2015[j].value[2].rate;

                        if (this.yearindexActive >= 3) {
                            barDatasTeam.bar4.value[j] = this.proData[3].year2014[j].value[2].public;
                            barDatasTeam.bar5.value[j] = this.proData[4].year2013[j].value[2].public;

                            lineDatasTeam.line4.value[j] = this.proData[3].year2014[j].value[2].rate;
                            lineDatasTeam.line5.value[j] = this.proData[4].year2013[j].value[2].rate;

                            if (this.yearindexActive >= 4) {
                                barDatasTeam.bar6.value[j] = this.proData[5].year2012[j].value[2].public;
                                barDatasTeam.bar7.value[j] = this.proData[6].year2011[j].value[2].public;
                                barDatasTeam.bar8.value[j] = this.proData[7].year2010[j].value[2].public;
                                barDatasTeam.bar9.value[j] = this.proData[8].year2009[j].value[2].public;
                                barDatasTeam.bar10.value[j] = this.proData[9].year2008[j].value[2].public;

                                lineDatasTeam.line6.value[j] = this.proData[5].year2012[j].value[2].rate;
                                lineDatasTeam.line7.value[j] = this.proData[6].year2011[j].value[2].rate;
                                lineDatasTeam.line8.value[j] = this.proData[7].year2010[j].value[2].rate;
                                lineDatasTeam.line9.value[j] = this.proData[8].year2009[j].value[2].rate;
                                lineDatasTeam.line10.value[j] = this.proData[9].year2008[j].value[2].rate;
                            }
                        }
                    }
                }
                else if (this.indexActive == 3) {
                    if (this.yearindexActive >= 2) {

                        lineDatasTeam.line1.value[j] = this.proData[0].year2017[j].value[3].scale;
                        lineDatasTeam.line2.value[j] = this.proData[1].year2016[j].value[3].scale;
                        lineDatasTeam.line3.value[j] = this.proData[2].year2015[j].value[3].scale;

                        if (this.yearindexActive >= 3) {

                            lineDatasTeam.line4.value[j] = this.proData[3].year2014[j].value[3].scale;
                            lineDatasTeam.line5.value[j] = this.proData[4].year2013[j].value[3].scale;

                            if (this.yearindexActive >= 4) {

                                lineDatasTeam.line6.value[j] = this.proData[5].year2012[j].value[3].scale;
                                lineDatasTeam.line7.value[j] = this.proData[6].year2011[j].value[3].scale;
                                lineDatasTeam.line8.value[j] = this.proData[7].year2010[j].value[3].scale;
                                lineDatasTeam.line9.value[j] = this.proData[8].year2009[j].value[3].scale;
                                lineDatasTeam.line10.value[j] = this.proData[9].year2008[j].value[3].scale;
                            }
                        }
                    }
                }
                else if (this.indexActive == 4) {
                    if (this.yearindexActive >= 2) {
                        barDatasTeam.bar1.value[j] = this.proData[0].year2017[j].value[4].assets;
                        barDatasTeam.bar2.value[j] = this.proData[1].year2016[j].value[4].assets;
                        barDatasTeam.bar3.value[j] = this.proData[2].year2015[j].value[4].assets;

                        lineDatasTeam.line1.value[j] = this.proData[0].year2017[j].value[4].rate;
                        lineDatasTeam.line2.value[j] = this.proData[1].year2016[j].value[4].rate;
                        lineDatasTeam.line3.value[j] = this.proData[2].year2015[j].value[4].rate;

                        if (this.yearindexActive >= 3) {
                            barDatasTeam.bar4.value[j] = this.proData[3].year2014[j].value[4].assets;
                            barDatasTeam.bar5.value[j] = this.proData[4].year2013[j].value[4].assets;

                            lineDatasTeam.line4.value[j] = this.proData[3].year2014[j].value[4].rate;
                            lineDatasTeam.line5.value[j] = this.proData[4].year2013[j].value[4].rate;

                            if (this.yearindexActive >= 4) {
                                barDatasTeam.bar6.value[j] = this.proData[5].year2012[j].value[4].assets;
                                barDatasTeam.bar7.value[j] = this.proData[6].year2011[j].value[4].assets;
                                barDatasTeam.bar8.value[j] = this.proData[7].year2010[j].value[4].assets;
                                barDatasTeam.bar9.value[j] = this.proData[8].year2009[j].value[4].assets;
                                barDatasTeam.bar10.value[j] = this.proData[9].year2008[j].value[4].assets;

                                lineDatasTeam.line6.value[j] = this.proData[5].year2012[j].value[4].rate;
                                lineDatasTeam.line7.value[j] = this.proData[6].year2011[j].value[4].rate;
                                lineDatasTeam.line8.value[j] = this.proData[7].year2010[j].value[4].rate;
                                lineDatasTeam.line9.value[j] = this.proData[8].year2009[j].value[4].rate;
                                lineDatasTeam.line10.value[j] = this.proData[9].year2008[j].value[4].rate;
                            }
                        }
                    }
                }
                else if (this.indexActive == 5) {
                    if (this.yearindexActive >= 2) {
                        barDatasTeam.bar1.value[j] = this.proData[0].year2017[j].value[5].consume;
                        barDatasTeam.bar2.value[j] = this.proData[1].year2016[j].value[5].consume;
                        barDatasTeam.bar3.value[j] = this.proData[2].year2015[j].value[5].consume;

                        lineDatasTeam.line1.value[j] = this.proData[0].year2017[j].value[5].rate;
                        lineDatasTeam.line2.value[j] = this.proData[1].year2016[j].value[5].rate;
                        lineDatasTeam.line3.value[j] = this.proData[2].year2015[j].value[5].rate;

                        if (this.yearindexActive >= 3) {
                            barDatasTeam.bar4.value[j] = this.proData[3].year2014[j].value[5].consume;
                            barDatasTeam.bar5.value[j] = this.proData[4].year2013[j].value[5].consume;

                            lineDatasTeam.line4.value[j] = this.proData[3].year2014[j].value[5].rate;
                            lineDatasTeam.line5.value[j] = this.proData[4].year2013[j].value[5].rate;

                            if (this.yearindexActive >= 4) {
                                barDatasTeam.bar6.value[j] = this.proData[5].year2012[j].value[5].consume;
                                barDatasTeam.bar7.value[j] = this.proData[6].year2011[j].value[5].consume;
                                barDatasTeam.bar8.value[j] = this.proData[7].year2010[j].value[5].consume;
                                barDatasTeam.bar9.value[j] = this.proData[8].year2009[j].value[5].consume;
                                barDatasTeam.bar10.value[j] = this.proData[9].year2008[j].value[5].consume;

                                lineDatasTeam.line6.value[j] = this.proData[5].year2012[j].value[5].rate;
                                lineDatasTeam.line7.value[j] = this.proData[6].year2011[j].value[5].rate;
                                lineDatasTeam.line8.value[j] = this.proData[7].year2010[j].value[5].rate;
                                lineDatasTeam.line9.value[j] = this.proData[8].year2009[j].value[5].rate;
                                lineDatasTeam.line10.value[j] = this.proData[9].year2008[j].value[5].rate;
                            }
                        }
                    }
                } else if (this.indexActive == 6) {

                }
                else if (this.indexActive == 7) {
                    // if (this.yearindexActive >= 2) {
                    //     barDatasTeam.bar1.value[j] = this.proData[0].year2017[j].value[7].foreignTrade;
                    //     barDatasTeam.bar2.value[j] = this.proData[1].year2016[j].value[7].foreignTrade;
                    //     barDatasTeam.bar3.value[j] = this.proData[2].year2015[j].value[7].foreignTrade;

                    //     lineDatasTeam.line1.value[j] = this.proData[0].year2017[j].value[7].rate;
                    //     lineDatasTeam.line2.value[j] = this.proData[1].year2016[j].value[7].rate;
                    //     lineDatasTeam.line3.value[j] = this.proData[2].year2015[j].value[7].rate;

                    //     if (this.yearindexActive >= 3) {
                    //         barDatasTeam.bar4.value[j] = this.proData[3].year2014[j].value[7].foreignTrade;
                    //         barDatasTeam.bar5.value[j] = this.proData[4].year2013[j].value[7].foreignTrade;

                    //         lineDatasTeam.line4.value[j] = this.proData[3].year2014[j].value[7].rate;
                    //         lineDatasTeam.line5.value[j] = this.proData[4].year2013[j].value[6].rate;

                    //         if (this.yearindexActive >= 4) {
                    //             barDatasTeam.bar6.value[j] = this.proData[5].year2012[j].value[7].foreignTrade;
                    //             barDatasTeam.bar7.value[j] = this.proData[6].year2011[j].value[7].foreignTrade;
                    //             barDatasTeam.bar8.value[j] = this.proData[7].year2010[j].value[7].foreignTrade;
                    //             barDatasTeam.bar9.value[j] = this.proData[8].year2009[j].value[7].foreignTrade;
                    //             barDatasTeam.bar10.value[j] = this.proData[9].year2008[j].value[7].foreignTrade;

                    //             lineDatasTeam.line6.value[j] = this.proData[5].year2012[j].value[7].rate;
                    //             lineDatasTeam.line7.value[j] = this.proData[6].year2011[j].value[7].rate;
                    //             lineDatasTeam.line8.value[j] = this.proData[7].year2010[j].value[7].rate;
                    //             lineDatasTeam.line9.value[j] = this.proData[8].year2009[j].value[7].rate;
                    //             lineDatasTeam.line10.value[j] = this.proData[9].year2008[j].value[7].rate;
                    //         }
                    //     }
                    // }
                }
                else if (this.indexActive == 8) {
                    if (this.yearindexActive >= 2) {
                        barDatasTeam.bar1.value[j] = this.proData[0].year2017[j].value[8].export;
                        barDatasTeam.bar2.value[j] = this.proData[1].year2016[j].value[8].export;
                        barDatasTeam.bar3.value[j] = this.proData[2].year2015[j].value[8].export;

                        lineDatasTeam.line1.value[j] = this.proData[0].year2017[j].value[8].rate;
                        lineDatasTeam.line2.value[j] = this.proData[1].year2016[j].value[8].rate;
                        lineDatasTeam.line3.value[j] = this.proData[2].year2015[j].value[8].rate;

                        if (this.yearindexActive >= 3) {
                            barDatasTeam.bar4.value[j] = this.proData[3].year2014[j].value[8].export;
                            barDatasTeam.bar5.value[j] = this.proData[4].year2013[j].value[8].export;

                            lineDatasTeam.line4.value[j] = this.proData[3].year2014[j].value[8].rate;
                            lineDatasTeam.line5.value[j] = this.proData[4].year2013[j].value[8].rate;

                            if (this.yearindexActive >= 4) {
                                barDatasTeam.bar6.value[j] = this.proData[5].year2012[j].value[8].export;
                                barDatasTeam.bar7.value[j] = this.proData[6].year2011[j].value[8].export;
                                barDatasTeam.bar8.value[j] = this.proData[7].year2010[j].value[8].export;
                                barDatasTeam.bar9.value[j] = this.proData[8].year2009[j].value[8].export;
                                barDatasTeam.bar10.value[j] = this.proData[9].year2008[j].value[8].export;

                                lineDatasTeam.line6.value[j] = this.proData[5].year2012[j].value[8].rate;
                                lineDatasTeam.line7.value[j] = this.proData[6].year2011[j].value[8].rate;
                                lineDatasTeam.line8.value[j] = this.proData[7].year2010[j].value[8].rate;
                                lineDatasTeam.line9.value[j] = this.proData[8].year2009[j].value[8].rate;
                                lineDatasTeam.line10.value[j] = this.proData[9].year2008[j].value[8].rate;
                            }
                        }
                    }
                }

            }

            this.barDatas = barDatasTeam;
            this.lineDatas = lineDatasTeam;

        },

        changeInfo() {
            this.barData = [];
            this.lineData = [];

            var year = [];
            if (this.yearindexActive == 1) {
                year = this.proData[1].year2016;
            } else if (this.yearindexActive == 0) {
                year = this.proData[0].year2017;
            }

            for (var i = 0; i < year.length; i++) {
                if (this.indexActive == 0) {
                    this.barData.push(year[i].value[0].localProduction);
                } else if (this.indexActive == 1) {
                    this.barData.push(year[i].value[1].financial);
                }
                else if (this.indexActive == 2) {
                    this.barData.push(year[i].value[2].public);
                }
                else if (this.indexActive == 3) {
                    this.lineData.push(year[i].value[3].scale);
                }
                else if (this.indexActive == 4) {
                    this.barData.push(year[i].value[4].assets);
                }
                else if (this.indexActive == 5) {
                    this.barData.push(year[i].value[5].consume);
                } else if (this.indexActive == 6) {
                    this.barData.push(year[i].value[6].house);
                } else if (this.indexActive == 7) {
                    this.barData.push(year[i].value[7].foreignTrade);

                }
                else if (this.indexActive == 8) {
                    this.barData.push(year[i].value[8].export);
                } else if (this.indexActive == 9) {
                    this.barData.push(year[i].value[9].foreignTradesMan);
                }
                if (this.indexActive != 3) {
                    this.lineData.push(year[i].value[this.indexActive].rate);
                }
            }
        },

        getoption1() {
            var option = {
                color: ['#81C2D6', '#8192D6', '#D9B3E6', '#DCF7A1', '#83FCD8', '#56A36C', '#5E8579', '#77C34F', '#2E68AA', '#7E884F', '#7E8840'],
                tooltip: {
                    trigger: 'axis',

                    //  formatter:'{c}'
                },
                legend: {
                    data: [],
                    textStyle: {
                        color: 'white'
                    },
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ["南宁市",
                            "北海市",
                            "防城港市",
                            "钦州市",
                            "玉林市",
                            "崇左市"],
                        axisPointer: {
                            show: true,
                            label: false,
                            type: 'shadow'
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: 'white',
                                width: 2,
                                type: 'solid'
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '亿元',
                        axisLabel: {
                            formatter: '{value} 亿元'
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: 'white',
                                width: 2,
                                type: 'solid'
                            }
                        },
                        splitLine:{  
                            show:true,
                            lineStyle:{
                                color: 'rgba(255,255,255,0.35)',
                                width: 1
                            }
                        }
                    },

                ],
                series: [
                    {
                        type: 'bar',
                        data: [],
                        label: {
                            normal: {
                                show: true,
                                position: 'top',
                                formatter: '{c}{per|亿元}',
                                rich: {
                                    per: {
                                        fontSize: '14',
                                        color: '#fff'
                                    }
                                },
                                textStyle: {
                                    fontSize: '14',
                                    color: '#fff'
                                }
                            }
                        }
                    },
                ]
            };
            if (this.yearindexActive >= 2) {
                option.series[0].label = {};

                option.series[0].data = this.barDatas.bar1.value;
                var o2 = {
                    type: 'bar',
                    data: this.barDatas.bar2.value
                };
                var o3 = {
                    type: 'bar',
                    data: this.barDatas.bar3.value
                };
                option.series.push(o2);
                option.series.push(o3);

                var yy = ["2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008"];
                for (var i = 0; i < 3; i++) {
                    option.legend.data.push(yy[i]);
                    option.series[i].name = yy[i];

                }

                if (this.yearindexActive >= 3) {
                    var o4 = {
                        type: 'bar',
                        data: this.barDatas.bar4.value
                    };
                    option.series.push(o4);
                    var o5 = {
                        type: 'bar',
                        data: this.barDatas.bar5.value
                    };
                    option.series.push(o5);

                    for (var i = 3; i < 5; i++) {
                        option.legend.data.push(yy[i]);
                        option.series[i].name = yy[i];

                    }

                    if (this.yearindexActive >= 4) {
                        var o6 = {
                            type: 'bar',
                            data: this.barDatas.bar6.value
                        };
                        option.series.push(o6);
                        var o7 = {
                            type: 'bar',
                            data: this.barDatas.bar7.value
                        };
                        option.series.push(o7);
                        var o8 = {
                            type: 'bar',
                            data: this.barDatas.bar8.value
                        };
                        option.series.push(o8);
                        var o9 = {
                            type: 'bar',
                            data: this.barDatas.bar9.value
                        };
                        option.series.push(o9);
                        var o10 = {
                            type: 'bar',
                            data: this.barDatas.bar10.value
                        };
                        option.series.push(o10);

                        for (var i = 5; i < 10; i++) {
                            option.legend.data.push(yy[i]);
                            option.series[i].name = yy[i];

                        }
                    }
                }
            }
            else {
                option.series[0].data = this.barData;
                if (this.yearindexActive == 9) {
                }
            }
            return option;
        },

        getoption2() {
            var option = {
                tooltip: {
                    trigger: 'axis',
                },
                legend: {
                    data: [],
                    textStyle: {
                        color: 'white'
                    },
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ["南宁市", "北海市", "防城港市", "钦州市", "玉林市", "崇左市"],
                        axisPointer: {
                            type: 'shadow'
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: 'white',
                                width: 2,
                                type: 'solid'
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '比上年同期增长',


                        axisLabel: {
                            formatter: '{value} (%)'
                        },
                        spiltLine: {
                            show: false
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: 'white',
                                width: 2,
                                type: 'solid'
                            },

                        },
                        splitLine:{  
                            show:true,
                            lineStyle:{
                                color: 'rgba(255,255,255,0.35)',
                                width: 1
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: '',
                        type: 'line',
                        data: [],
                        label: {
                            normal: {
                                show: true,
                                position: 'top',
                                formatter: '{c}{per|%}',
                                rich: {
                                    per: {
                                        fontSize: '14',
                                        color: '#fff'
                                    }
                                },
                                textStyle: {
                                    fontSize: '14',
                                    color: '#fff'
                                }
                            }
                        }
                    },
                ]
            };

            if (this.yearindexActive >= 2) {
                option.series[0].label = {};
                option.series[0].data = this.lineDatas.line1.value;
                var o2 = {
                    type: 'line',
                    data: this.lineDatas.line2.value
                };
                var o3 = {
                    type: 'line',
                    data: this.lineDatas.line3.value
                };
                option.series.push(o2);
                option.series.push(o3);

                var yy = ["2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008"];
                for (var i = 0; i < 3; i++) {
                    option.legend.data.push(yy[i]);
                    option.series[i].name = yy[i];

                }

                if (this.yearindexActive >= 3) {
                    var o4 = {
                        type: 'line',
                        data: this.lineDatas.line4.value
                    };
                    var o5 = {
                        type: 'line',
                        data: this.lineDatas.line5.value
                    };
                    option.series.push(o4);
                    option.series.push(o5);

                    for (var i = 3; i < 5; i++) {
                        option.legend.data.push(yy[i]);
                        option.series[i].name = yy[i];
                    }

                    if (this.yearindexActive >= 4) {
                        var o6 = {
                            type: 'line',
                            data: this.lineDatas.line6.value
                        };
                        option.series.push(o6);
                        var o7 = {
                            type: 'line',
                            data: this.lineDatas.line7.value
                        };
                        option.series.push(o7);
                        var o8 = {
                            type: 'line',
                            data: this.lineDatas.line8.value
                        };
                        option.series.push(o8);
                        var o9 = {
                            type: 'line',
                            data: this.lineDatas.line9.value
                        };
                        option.series.push(o9);
                        var o10 = {
                            type: 'line',
                            data: this.lineDatas.line10.value
                        };
                        option.series.push(o10);

                        for (var i = 5; i < 10; i++) {
                            option.legend.data.push(yy[i]);
                            option.series[i].name = yy[i];
                        }
                    }
                }
            } else {

                option.series[0].data = this.lineData;
            }
            return option;
        },

        do(option) {
            if(!this.echartObj) {
                this.echartObj = this.$echarts.init(document.getElementById("container1"));
            }
            this.echartObj.setOption(option);
        },

        do2(option) {
            if(!this.echartObj2) {
                this.echartObj2 = this.$echarts.init(document.getElementById("container2"));
            }
            this.echartObj2.setOption(option);
        },
        reportReady() {
            setTimeout(() => {
                this.changeInfo();
                this.do(this.getoption1());
                this.do2(this.getoption2());
            }, 30);
        }
    },
    watch: {
        barData() {
            this.echartObj.clear();
            this.echartObj2.clear();
            this.do(this.getoption1());
            this.do2(this.getoption2());
        },
        indexActive() {
            this.changeInfo1(0);
            this.changeInfo();
        },
        yearindexActive() {
            if (this.yearindexActive > 1) {
                this.changeInfo2();
            } else {
                this.changeInfo();
            }
        }
    },
    destroyed() {
        if (!this.echartObj) {
            this.echartObj.dispose();
        }
        if (this.echartObj2) {
            this.echartObj2.dispose();
        }
    }
}
</script>

<style scoped>
.map-back {
    background: url('../../../assets/map-background.jpg') no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    text-align: center;
}

.flex-column {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.flex-row {
    display: flex;
    flex-direction: row;
    margin: 0px 4vw 0px 4vw;
    padding: 0px;
    background: #fff;
}

.span1 {
    flex: 1;
}

.tc {
    text-align: center;
}

.isActive {
    background-color: #3799FF;
    color: #fff;
}

.title {
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    margin-top: 10vh;
}

.titleBar {
    width: 1.1vh;
    height: 2.6vh;
    background-color: white
}

.titleWord {
    position: relative;
    top: -0.3vh
}

.header {
    flex-grow: 1;
    font-size: 1.5vw;

    line-height: 6vh;
}
.swiper-slide {
    height: 79vh;
}
.colorGrey {
    color: #cccccc;
}
</style>