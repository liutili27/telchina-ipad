        <style scoped>
.circle {
    width: 40px;
    height: 40px;
    background-color: #0061b2;
    /* Can be set to transparent */
    border: 2px #0061b2 solid;
    border-radius: 100%;
}
.stlyle-i {
    color: white;
    font-size: 28px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    top: 50%;
}
.stlyle-p{
    top:10%;
    font-size:18px;
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
<template>
     <!-- -->
    <div>
        <!-- <div style="height:300
        px;">
            <div style="float:left;width:50%;hight:300px;">
                <div style="height:140px;width:310px;position: absolute;top: 140px;left:120px;
                        border:2px solid #1296db;
                    ">

                    <div>
                        <p class="stlyle-p">行业增加值增速</p>
                        <div style="font-size:22px;position: absolute;top: 65px;left:100px;">
                            <i class="fa fa-long-arrow-up" style="color: #e0620d; font-size: 22px;"></i>
                            7.04
                        </div>
                        <div class="circle" style="position: absolute;top: 45px;left:35px;">
                            <i class="fa fa-plus stlyle-i"></i>
                        </div>
                    </div>

                </div>
            </div>
            <div style="float:left;width:50%;hight:300px;">
                <div style="height:140px;width:310px;position: absolute;top: 140px;left:540px;
                    border:2px solid #1296db;">
                    <div>
                        <p class="stlyle-p">重点产品产量</p>
                        <div style="font-size:22px;position: absolute;top: 65px;left:100px;">
                            125648
                        </div>
                        <div class="circle" style="position: absolute;top: 45px;left:35px;">
                            <i class="fa fa-automobile stlyle-i" ></i>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->

         <div class="box1">
                <div class="box1-item1">
                   
                        <div style="height:140px;width:310px;position: absolute;top: 80px;left:120px;
                        border:2px solid #1296db;
                    ">

                    <div>
                        <p class="stlyle-p">行业增加值增速</p>
                        <div style="font-size:22px;position: absolute;top: 65px;left:100px;">
                            <i class="fa fa-long-arrow-up" style="color: #e0620d; font-size: 22px;"></i>
                            7.04
                        </div>
                        <div class="circle" style="position: absolute;top: 45px;left:35px;">
                            <i class="fa fa-plus stlyle-i"></i>
                        </div>
                    </div>

                </div>


                </div>
            <div class="box1-item1">

                        <div style="height:140px;width:310px;position: absolute;top: 80px;left:540px;
                    border:2px solid #1296db;">
                    <div>
                        <p class="stlyle-p">重点产品产量</p>
                        <div style="font-size:22px;position: absolute;top: 65px;left:100px;">
                            125648
                        </div>
                        <div class="circle" style="position: absolute;top: 45px;left:35px;">
                            <i class="fa fa-automobile stlyle-i" ></i>
                        </div>
                    </div>
                </div>

                </div>
            </div>
        <div style="height: 300px;width:953px;">
            <column01></column01>
        </div>
        <div style="height: 300px;width:953px;">
            <comprehensiveChart></comprehensiveChart>
        </div>
    </div>
</template>

<script>
import comprehensiveChart from './comprehensiveChart.vue';
import column01 from './column01.vue';
export default {
    components: {
        comprehensiveChart,
        column01
    },
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




