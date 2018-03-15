        <style scoped>
.circle {
    width: 40px;
    height: 40px;
    background-color: #0061b2;
    /* Can be set to transparent */
    border: 2px #0061b2 solid;
    border-radius: 100%;
}

.circle-part {
    width: 68px;
    height: 35px;
    border-radius: 35px 35px 0 0;
    background: #1296db;
    position: absolute;
    top: -35px;
    left: 118px;
}

.stlyle-p1 {
    top: 10%;
    font-size: 18px;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
}

.stlyle-p2 {
    top: 48%;
    font-size: 18px;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
}

.box1 {
    height: 300px;
    position: relative;
    width: 953px;
}

.box1-item1 {
    width: 468px;
    height: 300px;

    display: inline-block;
    margin-left: 2px;
    float: left;
    text-align: center;
}
</style>
 <!-- -->
<template>
    <div>
        <div class="box1">
            <div class="box1-item1">

                <div style="height:140px;width:310px;position: absolute;top: 80px;left:120px;
                                    border:2px solid #1296db;">
                    <div>
                        <nobr>
                            <p class="stlyle-p1">
                                行业增加值增速&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <i class="fa fa-long-arrow-up" style="color: #e0620d; font-size: 19px;">&nbsp;&nbsp;
                                    <span style="color: black; font-size: 19px;">7.04</span>
                                </i>
                            </p>
                        </nobr>
                        <nobr>
                            <p class="stlyle-p2">
                                重点产品产量&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;125648
                            </p>
                        </nobr>
                        <div class="circle-part">
                            <div style="padding:10px;color:white;margin-left:7px">
                                制糖
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="box1-item1">
                <div style="height:140px;width:310px;position: absolute;top: 80px;left:540px;
                                border:2px solid #1296db;">
                    <div>
                        <div>
                            <nobr>
                                <p class="stlyle-p1">
                                    行业增加值增速&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <i class="fa fa-long-arrow-up" style="color: #e0620d; font-size: 19px;">&nbsp;&nbsp;
                                        <span style="color: black; font-size: 19px;">7.04</span>
                                    </i>
                                </p>
                            </nobr>
                            <nobr>
                                <p class="stlyle-p2">
                                    重点产品产量&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;125648
                                </p>
                            </nobr>
                        </div>
                        <div class="circle-part">
                            <div style="padding:10px;color:white;margin-left:7px">
                                烟草
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="height: 300px;width:953px;">
            <column02></column02>
        </div>
        <div style="height: 300px;width:953px;">
            <comprehensiveChart></comprehensiveChart>
        </div>
    </div>
</template>
<script>
import comprehensiveChart from './comprehensiveChart.vue';
import column02 from './column02.vue';
export default {
    components: {
        comprehensiveChart,
        column02
    },
    name: 'HelloWorld',
    data() {
        return {
            tab: ['有色金属', '汽车工业', '食品工业', '石油化工', '机械工业', '医药工业', '电子工业', '七大重点产业'],
            indexActive: 0
        };
    },
    methods: {
        changeYear(year, index) {
            this.indexActive = index;
        }
    }
};
</script>




