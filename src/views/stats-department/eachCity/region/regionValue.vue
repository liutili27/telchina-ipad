<template>
<div>  
    <div id="ec-middle">
        <div v-if="valueData==''">
            <p>无数据</p>
        </div>  
        <div v-else id="ec-content" style="">
            <!-- 1 -->
            <div style="height:3px"></div>
            <div class="ec-content-d">
                <div>
                    <p class="p1"><span class="span1">{{valueData.cityPerPeo.name}}</span></p>
                </div>

                <div>
                    <p class="p2"><span class="money">{{valueData.cityPerPeo.value}}元</span></p>
                </div>
            </div>
            <!-- 2 -->
            <div class="ec-content-d">
                <div>
                    <p class="p1"><span class="span1">{{valueData.countryPerPeo.name}}</span></p>
                </div>

                <div>
                    <p class="p2"><span class="money">{{valueData.countryPerPeo.value}}元</span></p>
                </div>
            </div>
            <!-- 3 -->
            <div class="ec-content-d middle">
                <div class="m1" v-for="(item, index) in valueData.productionValue" :key="index">
                    <div class="m2 m-name">{{item.name}}</div>
                    <div class="m3 m-value">{{item.value}}</div>
                    
                    <div class="m4" v-for="(sitem, sindex) in item.detail" :key="sindex">
                        <div class="m5 m-name" ><span>{{sitem.name}}</span></div>
                        <div class="m6 m-value">{{sitem.value}}</div>                            
                    </div>
                </div>
            </div>
            <!-- 4 -->
            <div class="ec-content-d middle">
                <div class="m1" v-for="(item, index) in valueData.valueIndex" :key="index">
                    <div class="m2 m-name" style="width:65%">{{item.name}}</div>
                    <div class="m3 m-value">{{item.value}}</div>
                    
                    <div class="m4" v-for="(sitem, sindex) in item.detail" :key="sindex">
                        <div class="m5 m-name">{{sitem.name}}</div>
                        <div class="m6 m-value" style="width:60%">{{sitem.value}}</div>                            
                    </div>
                </div>
            </div>
            <!-- 5 -->
            <div class="ec-content-d">
                <div class="m1" id="pub" v-for="(item, index) in valueData.pubFinIncome" :key="index">
                    <div class="m2 m-name">{{item.name}}</div>
                    <div class="m3 m-value">{{item.value}}</div>                        

                    <div class="m1" id="subFin" v-for="(sitem, sindex) in item.subIncome" :key="sindex">
                        <div class="m2 m-name">{{sitem.name}}</div>
                        <div class="m3 m-value" style="">{{sitem.value}}</div>

                        <div id="finDetail" v-for="(ssitem, ssindex) in sitem.detail" :key="ssindex">
                            <div class="m2 m-name">{{ssitem.name}}</div>
                            <div class="m3 m-value">{{ssitem.value}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 6 -->
            <div class="ec-content-d" style="">
                <div class="m1" v-for="(item, index) in valueData.pubFinExpend" :key="index">
                    <div class="m2 m-name">{{item.name}}</div>
                    <div class="m3 m-value">{{item.value}}</div>
                    
                    <div v-for="(sitem, sindex) in item.detail" :key="sindex">
                        <div class="m2 m-name" style="margin-left:40px">{{sitem.name}}</div>
                        <div class="m3 m-value" style="margin-left:5px">{{sitem.value}}</div>                            
                    </div>
                </div>
            </div>                
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['valueData'],
    data() {
        return {
        };
    },
    components: {
    },
    computed: {
    },
    methods: {
    }
};
</script>

<style scoped="scoped">
#ec-main {
    margin: 2.6vh 1.95vw 2.6vh 1.95vw;
    margin-left: 3%;
    margin-right: 3%;
    font-family: 微软雅黑;
    font-style: normal;
    font-size: 12px;
}
#ec-menu-icon1 {
    float:right;
}
#ec-menu-icon2 {
    float:right;
}
#ec-contetn {
    float:unset;
}
.ec-content-d {
    text-align: center;
    margin-left: 5px;
    margin-right: 1%;
    margin-bottom: 17px;
    width: 48%;
    min-height: 26.041667vh;
    background-color: rgba(255, 255, 255, 1);
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(204, 204, 204, 1);
    border-radius: 0px;
    box-shadow: 1px 1px 10px rgba(0, 204, 255, 1);
    float: left;
}
.middle {
    height:200px;
    border-width: 0px;
    font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
    font-weight: 700;
    font-style: normal;
}
.p1 {
    margin-top:4.557vh;
}
.p2 {
    margin-top:3.255vh; 
}
.money {
    color:#0099FF;
    font-size: 3.6458vh;
    font-style: normal;
    font-weight: 700;
}
.span1 {
    font-weight: 700;
    font-style: normal;
    font-size: 2.0833vh;
}
.m-name {
    font-size: 1.8229vh;
    margin-left:1.953vw;    
    margin-top:1.3021vh;
    font-weight: 700;    
}
.m-value {
    font-weight:400;
    color:#00CCFF;
    font-size:2.4375vh;
    margin-top:1.04167vh;
}
.m1 {     
     width: 100%; 
     height:2.6042667vh;
     text-align:left;
     margin-left:0.9765625vw;
}
.m2 {
    width:50%;
    float:left; 
}
.m3 {    
    float:left;    
}
.m4 {
    text-align:right; 
    float:left; 
    width:100%; 
    margin-left:1.953125vw;
}
.m5 {
    margin-top:1.04167vh;
    width:15%;
    text-align:right;
    float:left;
}
.m6 {
    width:58%;
    text-align:right;
    float:left;
}
#pub {
    margin-top:0;
}
#finDetail {
    margin-left:1.953125vw;
}

</style>
