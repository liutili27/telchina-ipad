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


</style>

<template>
    <div style="padding:30px;margin：0 auto;">
        
            <div style="overflow-x:scroll;overflow-y:hidden;" class="tab-div">
                <div class="tab-item" v-for="(t,index) in tab" :key="index " :class="{isActive:index===indexActive}" @click="changeYear(index)">
                    <span> {{t.name}}</span>
                </div>
            </div>
       
        <div style="overflow-y:scroll;height:768px">
            <food v-if="indexActive==2"></food>
            <matal v-if="indexActive==0"></matal>
            <automobile v-if="indexActive==1"></automobile>
        </div>
    </div>
</template>
<script>
import matal from './matal.vue';
import food from './food.vue';
import automobile from './automobile.vue';
export default {
    components: {
        matal,
        food,
        automobile
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
                { name: '七大重点产业合计' },
                { name: '冶金工业' }

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

