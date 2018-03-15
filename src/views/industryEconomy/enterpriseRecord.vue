<!-- 行业指标 -->
<style scoped>
.isActive {
    background-color: #0062db;
    color: white
}

.tab-item:hover {
    background-color: #3399FF;
    color: white;
}

.tab-div{
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    background: #ccc;
}
.tab-div::-webkit-scrollbar{
    display: none;
}

.tab-item{
    flex: 0 0 auto;
    display: block;
   
    padding: 0;
    margin-left: 1px;
    text-align: center;
    line-height: 40px;
    font-size: 12px;
    width: 11%;
    cursor: pointer;
   
}

.span-1{
    font-size: 13px;
    line-height: 40px;
    color:#0062db;
    font-weight:bold;
}

.span-2{
    font-size: 12px;
    line-height: 80px;
}

.div-box{
    background:#0062db;
    height:18px;
    width:10px;
    float:left;position: relative;
    top: 10px;
    left:0px;
}

.div-box02{
    width:45%;
    float:left;
}

.div-box03{
    width:45%;
    float:left;
    margin-left:9.8%;
}
</style>

<template>
    <div style="padding:30px;margin：0 auto;">
        
            <div style="overflow-x:scroll;overflow-y:hidden;" class="tab-div">
                <div class="tab-item" v-for="(t,index) in tab" :key="index " :class="{isActive:index===indexActive}" @click="changeYear(index)">
                    <span> {{t.name}}</span>
                </div>
            </div>
       
        <div style="overflow-y:scroll;border:1px">
           <div style="margin:20px 25px 20px 25px;">
               <div>
                    <div class="div-box02">
                        <div class="div-box"></div>
                        <span class="span-1">&nbsp&nbsp&nbsp南宁市 </span>
                        <hr/>
                        <span class="span-2">广西南南铝加工有限公司</span>
                        <hr/>
                    </div>
                    <div class="div-box03">
                        <div class="div-box"></div>
                        <span class="span-1">&nbsp&nbsp&nbsp柳州市 </span>
                        <hr/>
                        <span class="span-2">广西柳州银海铝股份有限公司</span>
                        <hr/>
                    </div>
                </div>
                
                <div>
                    <div class="div-box02">
                        <div class="div-box"></div>
                        <span class="span-1">&nbsp&nbsp&nbsp防城港市 </span>
                        <hr/>
                        <span class="span-2">广西金川有色金属有限公司</span>
                        <hr/>
                    </div>
                    <div class="div-box03">
                        <div class="div-box"></div>
                        <span class="span-1">&nbsp&nbsp&nbsp玉林市 </span>
                        <hr/>
                        <span class="span-2">广西银亿新材料有限公司</span>
                        <hr/>
                    </div>
                </div>
                <div>
                    <div class="div-box02">
                        <div class="div-box"></div>
                        <span class="span-1">&nbsp&nbsp&nbsp贺州市 </span>
                        <hr/>
                        <span class="span-2">中国有色集团(广西)平桂飞碟股份有限公司</span>
                        <hr/>
                    </div>
                    <div class="div-box03">
                        <div class="div-box"></div>
                        <span class="span-1">&nbsp&nbsp&nbsp河池市 </span>
                        <hr/>
                        <span class="span-2">广西南南铝加工有限公司</span>
                        <hr/>
                    </div>
                </div>
                <div>
                    <div class="div-box02">
                        <div class="div-box"></div>
                        <span class="span-1">&nbsp&nbsp&nbsp来宾市 </span>
                        <hr/>
                        <span class="span-2">广西南南铝加工有限公司</span>
                        <hr/>
                    </div>
                    <div class="div-box03">
                        <div class="div-box"></div>
                        <span class="span-1">&nbsp&nbsp&nbsp百色市 </span>
                        <hr/>
                        <span class="span-2">广西南南铝加工有限公司</span>
                        <hr/>
                    </div>
                </div>
               


            </div>
        </div>
    </div>
</template>
<script>
import matal from './matal.vue';
import food from './food.vue';
import automobile from './automobile.vue';
import { Scroller } from 'vux';
export default {
    components: {
        matal,
        food,
        automobile,
        Scroller
    },
    data() {
        return {
            tab: [
                { name: '有色金属' },
                { name: '汽车工业' },
                { name: '食品工业' },
                { name: '石油化工' },
                { name: '机械工业' },
                { name: '医药工业' },
                { name: '电子工业' },
                { name: '冶金工业' },
                { name: '电力工业' }

            ],
            indexActive: 0,
        }
    },
    methods: {
        changeYear(index) {
            this.indexActive = index;
        }
    }
};
</script>

