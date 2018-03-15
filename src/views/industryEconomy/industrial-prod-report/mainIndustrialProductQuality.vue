<!-- 主要工业产品产量 -->
<template>
    <div :style="{overflow:'scroll',width:clientWidth+'px',height:clientHeight+'px'}">
        <reportTitle :title="'2017年主要工业产品产量'"></reportTitle>
        <reportTable :column="column" :data="data"></reportTable>
        <div style="height:200px"></div>
    </div>
</template>
<script>
import reportTable from '@/components/report-table.vue';
import reportTitle from '@/components/report-title.vue';
import {qualityData} from './mainIndustrialProductQualityData';
export default {
    components: {
        reportTitle,
        reportTable
    },
    data() {
        return {
            clientHeight: 0,
            clientWidth: 0,
            column: [
                {
                    title: '种类',
                    key: 'name'
                },
                {
                    title: '2017年12月累计',
                    key: 'total2017'
                },
                {
                    title: '同比±%',
                    key: 'increase2017'
                },
                {
                    title: '2016年12月累计',
                    key: 'total2016'
                }
            ],
            data: qualityData
        };
    },
    mounted() {
        this.getWitdhHeight();
    },
    methods: {
        getWitdhHeight() {
            this.clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            this.clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        },
        toThousands(num) {
            return num && num.toString().replace(/^\d+/g, (m) => m.replace(/(?=(?!^)(\d{3})+$)/g, ','));
        }
    }
};
</script>
<style scoped>
    
</style>