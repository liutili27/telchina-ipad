<style scoped>
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
    <div>
        <div class="box1">
            <div class="box1-item1">
                <circle01></circle01>
            </div>
            <div class="box1-item1">
                <circle02></circle02>
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
import circle01 from './circle01.vue';
import column01 from './column01.vue';
import circle02 from './circle02.vue';
export default {
    components: {
        comprehensiveChart,
        circle01,
        column01,
        circle02
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




