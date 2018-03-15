<!-- 重大项目 - 按行业汇总 -->
<template>
    <div class="map-back">
        <div class="tabBar">
            <button v-for="(item, index) in buttonArr" :key="index" :class="{onButton: tabIndex == index}" @click="onTheBtn(index)">{{item}}</button>
        </div>
        <div class="content">
            <div class="yuan" :style="hidDiv">
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
            <div align="center" :style="tabStyle">
                <table class="tab" :style="{width:(clientWidth - 100)+'px'}">
                <tr class="title">
                    <td v-for="(item, index) in titleArray" :key="index">{{item}}</td>
                </tr>
                <tr v-for="(item, index) in data.contentArr" :key="index">
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
        </div>
    </div>
</template>

<script>
import {industryData} from './industryData';
import { swiper, swiperSlide } from 'vue-awesome-swiper'; // 滑动视图
import reportTitle from '@/components/report-title.vue';
import util from '@/libs/util';
export default {
    components: {
        reportTitle,
        swiper,
        swiperSlide 
    },
    data: function() {
        return {
            tabIndex: 0,
            data: industryData,
            titleArray: ['项目分类', '项目数', '占比', '总投资(万元)', '占比', '2017年计划投资(万元)', '占比'],
            buttonArr: ['汇总', '基础设施', '产业', '社会公益', '生态环保', '社会管理'],
            myProject: null,
            myInvestment: null,
            myPlan: null,
            clientHeight: 0,
            clientWidth: 0,
            hidDiv: '',
            tabStyle: '',
            swiperOption: {
                direction: 'vertical' // 竖屏滑动
            }
        };
    },
    mounted() {
        this.drawProject();
        this.drawInvestment();
        this.drawPlan();
        this.initYuan();
        this.$nextTick(() => {
            this.witdhHeight();
        });
        this.onTheBtn(0);
    },
    methods: {
        // 项目
        drawProject() {
            // 基于准备好的dom，初始化echarts实例
            if (this.myProject == null) {
                this.myProject = this.$echarts.init(document.getElementById('project'));
            }
            // 绘制图表
            this.myProject.setOption({
                legend: {
                    type: 'plain',
                    show: 'true',
                    // orient: 'vertical',
                    left: 'center',
                    bottom: 0,
                    itemWidth: 7,
                    itemHeight: 7,
                    data: [],
                    textStyle: {
                        color: '#fff',
                        fontSize: 14
                    },
                    formatter: function(name) {
                        return name;
                    }
                },
                series: [{
                    name: '',
                    startAngle: 180,
                    type: 'pie',
                    radius: '65%',
                    center: ['50%', '45%'],
                    data: [],
                    color: [
                        '#35bb06',
                        '#ed7d3e',
                        '#4f7d2b',
                        '#f9c003',
                        '#af00fa'
                    ],
                    label: {
                        normal: {
                            color: '#fff',
                            fontSize: 14,
                            formatter: function(p) {
                                // console.log(p)
                                return '项目数: ' + p.value + '项 ' + '占比: ' + p.percent + '%';
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
                    data: [],
                    textStyle: {
                        color: '#fff',
                        fontSize: 14
                    },
                    formatter: function(name) {
                        return name;
                    }
                },
                series: [{
                    name: '',
                    type: 'pie',
                    startAngle: 180,
                    radius: '65%',
                    center: ['50%', '45%'],
                    data: [],
                    color: [
                        '#35bb06',
                        '#ed7d3e',
                        '#4f7d2b',
                        '#f9c003',
                        '#af00fa'
                    ],
                    label: {
                        normal: {
                            color: '#fff',
                            fontSize: 14,
                            formatter: function(p) {
                                // console.log(p)
                                return '投资额: ' + util.formatNumber(p.value) + '万元 ' + '占比: ' + p.percent + '%';
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
                    data: [],
                    textStyle: {
                        color: '#fff',
                        fontSize: 14
                    },
                    formatter: function(name) {
                        return name;
                    }
                },
                series: [{
                    name: '',
                    type: 'pie',
                    startAngle: 180,
                    radius: '65%',
                    center: ['50%', '45%'],
                    data: [],
                    color: [
                        '#35bb06',
                        '#ed7d3e',
                        '#4f7d2b',
                        '#f9c003',
                        '#af00fa'
                    ],
                    label: {
                        normal: {
                            color: '#fff',
                            fontSize: 14,
                            formatter: function(p) {
                                // console.log(p)
                                return '2017年计划投资: ' + util.formatNumber(p.value) + '万元 ' + '占比: ' + p.percent + '%';
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
        // 点击切换
        onTheBtn (index) {
            switch (index) {
                case 0:
                    this.data.contentArr = this.data.summaryArr;
                    break;
                case 1:
                    this.data.contentArr = this.data.basicsArr;
                    break;
                case 2:
                    this.data.contentArr = this.data.industryArr;
                    break;
                case 3:
                    this.data.contentArr = this.data.commonwealArr;
                    break;
                case 4:
                    this.data.contentArr = this.data.ecologyArr;
                    break;
                case 5:
                    this.data.contentArr = this.data.administrationArr;
                    break;
            }
            this.tabIndex = index;
            this.drawProject();
            this.drawInvestment();
            this.drawPlan();
            // 初始化数据
            this.initYuan();
            if (this.data.contentArr.length == 2) {
                this.hidDiv = 'display:none;';
                this.tabStyle = 'margin-top: -80px;';
            } else {
                this.hidDiv = 'flex-direction: row-reverse;';
                this.tabStyle = 'display:none;';
            }
            // this.editYuan(this.myProject);
            // this.editYuan(this.myInvestment);
            // this.editYuan(this.myPlan);
        },
        initYuan() {
            var optionPro = this.editMyOption(this.myProject, 1);
            var optionInv = this.editMyOption(this.myInvestment, 2);
            var optionPla = this.editMyOption(this.myPlan, 3);
            this.myProject.setOption(optionPro);
            this.myInvestment.setOption(optionInv);
            this.myPlan.setOption(optionPla);
        },
        // 编辑Option Data数据
        editMyOption(myOption, n) {
            var option = myOption.getOption();
            let myLegend = [];
            let mySeries = [];
            for (var i = 0; i < this.data.contentArr.length; i++) {
                let name = this.data.contentArr[i].name;
                if (name != '合计') {
                    let value;
                    switch (n) {
                        case 1:
                            value = this.data.contentArr[i].xms;
                            break;
                        case 2:
                            value = this.data.contentArr[i].ztz;
                            break;
                        case 3:
                            value = this.data.contentArr[i].njh;
                            break;
                    }
                    let myName = {name: name};
                    let theData = {name: name, value: value};
                    myLegend.push(myName);
                    mySeries.push(theData);
                }
            }
            option.legend[0].data = myLegend;
            option.series[0].data = mySeries;
            return option;
        },
        witdhHeight() {
            this.clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            this.clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        },
        // 科学计数法
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
    height: 73vh;
}

.content{
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


.yuan{
    width: 100%;
    height: 320px;
}

.tab{
    margin-top: 130px;
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

/* 导航栏 */
.tabBar{
    width: 100%;
    height: 50px;
    background-color: #fff;
}

.tabBar button{
    width: 100px;
    height: 50px;
    border: none;
    font-size: 14px;
    background-color: #fff;
}

.tabBar .onButton{
    background-color: #3799FF;
    color: #fff;
}

</style>