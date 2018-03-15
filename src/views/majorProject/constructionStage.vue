<!-- 重大项目 - 按建设阶段汇总 -->
<template>
    <div class="map-back" :style="{height:clientHeight+'px'}">
        <div class="content">
            <div class="yuan">
                <swiper :options="swiperOption">
                    <swiper-slide>
                        <reportTitle title="2017年项目数占比"></reportTitle>
                        <div id="project"></div>
                    </swiper-slide>
                    <swiper-slide>
                        <reportTitle title="2017年总投资及占比"></reportTitle>
                        <div id="investment"></div>
                    </swiper-slide>
                    <swiper-slide>
                        <reportTitle title="2017年计划投资及占比"></reportTitle>
                        <div id="plan"></div>
                    </swiper-slide>
                </swiper>
            </div>
            <!-- <div><p>{{tabTitle}}</p></div>
            <div align="center">
                <table class="tab" :style="{width:(clientWidth - 100)+'px'}">
                <tr class="title">
                    <td v-for="(item, index) in titleArray" :key="index">{{item}}</td>
                </tr>
                <tr v-for="(item, index) in contentArr" :key="index">
                    <td style="background-color: #f2f2f2;border-left: solid 1px #ccc;">{{item.name}}</td>
                    <td>{{formatNumber(item.xms)}}</td>
                    <td>{{item.zb1}}</td>
                    <td>{{formatNumber(item.ztz)}}</td>
                    <td>{{item.zb2}}</td>
                    <td>{{formatNumber(item.njh)}}</td>
                    <td>{{item.zb3}}</td>
                </tr>
                </table>
            </div>
            <div style="height:120px"></div> -->
        </div>
    </div>
</template>

<script>
import util from '@/libs/util';
import reportTitle from '@/components/report-title.vue';
import { swiper, swiperSlide } from 'vue-awesome-swiper'; // 滑动视图
export default {
    components: {
        reportTitle,
        swiper,
        swiperSlide
    },
    data: function() {
        return {
            titleArray: ['项目分类', '项目数', '占比', '总投资(万元)', '占比', '2017年计划投资(万元)', '占比'],
            tabTitle: '2017年自治区层面统筹推进重大项目占比情况表（按建设阶段分）',
            contentArr: [
                {name: '新开工', xms: 198, zb1: '25.65%', ztz: 84736092, zb2: '18.64%', njh: 11495077, zb3: '15.28%'},
                {name: '投产', xms: 73, zb1: '9.46%', ztz: 56756984, zb2: '8.17%', njh: 6973148, zb3: '14.68%'},
                {name: '续建', xms: 381, zb1: '49.35%', ztz: 12979726, zb2: '55.16%', njh: 2248091, zb3: '70.03%'},
                {name: '预备', xms: 120, zb1: '15.54%', ztz: 2281886, zb2: '18.03%', njh: 0, zb3: ''},
                {name: '合计', xms: 772, zb1: '', ztz: 156990158, zb2: '', njh: 21096357, zb3: ''}
            ],
            clientHeight: 0,
            clientWidth: 0,
            myProject: null,
            myInvestment: null,
            myPlan: null,
            swiperOption: {
                direction: 'vertical' // 竖屏滑动
            }
        };
    },
    mounted() {
        this.drawProject();
        this.drawInvestment();
        this.drawPlan();
        this.$nextTick(() => {
            this.witdhHeight();
        });
    },
    methods: {
        // 项目
        drawProject() {
            // 基于准备好的dom，初始化echarts实例
            if (this.myProject == null) {
                this.myProject = this.$echarts.init(document.getElementById('project'));
            }
            this.myProject.setOption({
                legend: {
                    bottom: 0,
                    type: 'plain',
                    show: 'true',
                    left: 'center',
                    itemWidth: 7,
                    itemHeight: 7,
                    data: [
                        {name: this.contentArr[0].name,
                            icon: 'rect',
                            textStyle: {
                                color: 'white',
                                fontSize: 14,
                                padding: [0, 0, 0, -4]
                            }},
                        {name: this.contentArr[1].name,
                            icon: 'rect',
                            textStyle: {
                                color: 'white',
                                fontSize: 14,
                                padding: [0, 0, 0, -4]
                            }},
                        {name: this.contentArr[2].name,
                            icon: 'rect',
                            textStyle: {
                                color: 'white',
                                fontSize: 14,
                                padding: [0, 0, 0, -4]
                            }},
                        {name: this.contentArr[3].name,
                            icon: 'rect',
                            textStyle: {
                                color: 'white',
                                fontSize: 14,
                                padding: [0, 0, 0, -4]
                            }}
                    ]
                },
                series: [{
                    name: '',
                    type: 'pie',
                    radius: '65%',
                    center: ['50%', '45%'],
                    color: [
                        '#35bb06',
                        '#ed7d3e',
                        '#4f7d2b',
                        '#f9c003',
                        '#af00fa'
                    ],
                    data: [
                        {value: this.contentArr[0].xms,
                            name: this.contentArr[0].name},
                        {value: this.contentArr[1].xms,
                            name: this.contentArr[1].name},
                        {value: this.contentArr[2].xms,
                            name: this.contentArr[2].name},
                        {value: this.contentArr[3].xms,
                            name: this.contentArr[3].name}
                    ],
                    label: {
                        normal: {
                            color: '#fff',
                            fontSize: 14,
                            position: 'outside',
                            formatter: function(p) {
                                // console.log(p)
                                return '项目数: ' + util.formatNumber(p.value) + ' ' + '占比: ' + p.percent + '%';
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: true
                        }
                    }
                }]
            });
        },
        // 投资
        drawInvestment() {
            if (this.myInvestment == null) {
                this.myInvestment = this.$echarts.init(document.getElementById('investment'));
            }
            // 绘制图表
            this.myInvestment.setOption({
                legend: {
                    bottom: 0,
                    type: 'plain',
                    show: 'true',
                    left: 'center',
                    itemWidth: 7,
                    itemHeight: 7,
                    data: [
                        {name: this.contentArr[0].name,
                            icon: 'rect',
                            textStyle: {
                                color: 'white',
                                fontSize: 14,
                                padding: [0, 0, 0, -4]
                            }},
                        {name: this.contentArr[1].name,
                            icon: 'rect',
                            textStyle: {
                                color: 'white',
                                fontSize: 14,
                                padding: [0, 0, 0, -4]
                            }},
                        {name: this.contentArr[2].name,
                            icon: 'rect',
                            textStyle: {
                                color: 'white',
                                fontSize: 14,
                                padding: [0, 0, 0, -4]
                            }},
                        {name: this.contentArr[3].name,
                            icon: 'rect',
                            textStyle: {
                                color: 'white',
                                fontSize: 14,
                                padding: [0, 0, 0, -4]
                            }}
                    ]
                },
                series: [{
                    startAngle: 180,
                    type: 'pie',
                    radius: '65%',
                    center: ['50%', '45%'],
                    color: [
                        '#35bb06',
                        '#ed7d3e',
                        '#4f7d2b',
                        '#f9c003',
                        '#af00fa'
                    ],
                    data: [
                        {value: this.contentArr[0].ztz,
                            name: this.contentArr[0].name},
                        {value: this.contentArr[1].ztz,
                            name: this.contentArr[1].name},
                        {value: this.contentArr[2].ztz,
                            name: this.contentArr[2].name},
                        {value: this.contentArr[3].ztz,
                            name: this.contentArr[3].name}
                    ],
                    label: {
                        normal: {
                            color: '#fff',
                            fontSize: 14,
                            position: 'outside',
                            formatter: function(p) {
                                // console.log(p)
                                return '投资额: ' + util.formatNumber(p.value) + ' ' + '占比: ' + p.percent + '%';
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: true
                        }
                    }
                }]
            });
        },
        // 计划
        drawPlan() {
            if (this.myPlan == null) {
                this.myPlan = this.$echarts.init(document.getElementById('plan'));
            }
            // 绘制图表
            this.myPlan.setOption({
                legend: {
                    bottom: 0,
                    type: 'plain',
                    show: 'true',
                    left: 'center',
                    itemWidth: 7,
                    itemHeight: 7,
                    data: [
                        {name: this.contentArr[0].name,
                            icon: 'rect',
                            textStyle: {
                                color: 'white',
                                fontSize: 14,
                                padding: [0, 0, 0, -4]
                            }},
                        {name: this.contentArr[1].name,
                            icon: 'rect',
                            textStyle: {
                                color: 'white',
                                fontSize: 14,
                                padding: [0, 0, 0, -4]
                            }},
                        {name: this.contentArr[2].name,
                            icon: 'rect',
                            textStyle: {
                                color: 'white',
                                fontSize: 14,
                                padding: [0, 0, 0, -4]
                            }}
                    ]
                },
                series: [{
                    name: '',
                    type: 'pie',
                    radius: '65%',
                    center: ['50%', '45%'],
                    color: [
                        '#35bb06',
                        '#ed7d3e',
                        '#4f7d2b',
                        '#f9c003',
                        '#af00fa'
                    ],
                    data: [
                        {value: this.contentArr[0].njh,
                            name: this.contentArr[0].name},
                        {value: this.contentArr[1].njh,
                            name: this.contentArr[1].name},
                        {value: this.contentArr[2].njh,
                            name: this.contentArr[2].name}
                    ],
                    label: {
                        normal: {
                            color: '#fff',
                            fontSize: 14,
                            position: 'outside',
                            formatter: function(p) {
                                // console.log(p)
                                return '计划投资额: ' + util.formatNumber(p.value) + ' ' + '占比' + p.percent + '%';
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: true
                        }
                    }
                }]
            });
        },

        witdhHeight() {
            this.clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            this.clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        },
        formatNumber(num) {
            return util.formatNumber(num);
        }
    },
    destroyed() {
        this.myProject.dispose();
        this.myInvestment.dispose();
        this.myPlan.dispose();
    }
};
</script>

<style scoped>
.map-back {
    background: url('../../assets/map-background.jpg') no-repeat; 
    background-size: cover;
    width: 100%;
    height: 100vh;
}

.swiper-container{
    height: 75vh;
}

.content{
    overflow: scroll;
    height: 100vh;
    width: 100%;
    flex-direction: row-reverse;
}

#project{
    height: 65vh;
    width: 100vw;
}

#investment{
    height: 65vh;
    width: 100vw;
}

#plan{
    height: 65vh;
    width: 100vw;
}

p{
    margin-left: 50px;
    color: #fff;
    font-weight: bold;
    border-left: solid 5px #fff;
    padding-left: 10px;
}

.yuan{
    flex-direction: row-reverse;
    width: 100%;
    height: 320px;
}

.tab{
    margin-top: 20px;
    text-align: center;
    border-collapse: collapse;
    border-spacing: 0;
}

.tab td{
    height: 40px;
    border-bottom: solid 1px #ccc;
    background-color: #fff;
    border-right: solid 1px #ccc;
}

.title td{
    background-color: #37a2da;
    border: none;
    color: #fff;
    font-weight: bold;
}

</style>