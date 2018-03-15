<template>
    <div v-if="tbodyData">
        <table style="width:100%;text-align:center;">
            <thead style="background-color:#BFE6F9">
                <tr>
                    <th class="table-border" v-for="(th,index) in thData" :key="index">{{th}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(tr,index) in tbodyData" :key="index">
                    <td v-for="(td,index) in tr" :key="index" class="table-border">{{td}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            thData: [
                '地区',
                '生产总值（亿元）',
                '增速',
                '占比（%）'
            ]
        };
    },
    props: ["tbodyData"],
    components: {
    },
    methods: {
        calWidthSize(val) {
            return val * window.screen.availWidth / 1024;
        },
        calHeightSize(val) {
            return val * window.screen.availHeight / 768;
        }
    },
    mounted() {
        this.$emit("setTableData", this.tbodyData);
    }
};
</script>

<style scoped="scoped">
table,th,td{
    border: 0.1vw solid #CCCCCC;
    margin: 0px;
    padding: 0px;
    border-collapse: collapse;
    font-size: 1.822916667vh;
    width: 260px;
}
table th{
    height: 5.078125vh;
}
table td{
    height: 2.60416667vh;
}
</style>
