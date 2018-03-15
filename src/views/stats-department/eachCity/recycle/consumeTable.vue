<template>
    <div>
        <table style="width:100%;text-align:center;">
            <thead style="background-color:#37a2da">
                <tr>
                    <th v-for="(th,index) in thData" :key="index">{{th}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(tr,index) in tbodyData" :key="index" style="color: white;">
                    <td v-for="(td,index) in tr" :key="index" style="border: 1px solid #6381a8;">
                        <div class="tdWidth" :class="{isRight: index != 'name'}"> {{td}} </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    props: ['tableData'],
    data() {
        return {
            thData: [
                '指标',
                '广西',
                '城市',
                '农村'
            ]
        };
    },
    methods: {
        calWidthSize(val) {
            return val * window.screen.availWidth / 1024;
        },
        calHeightSize(val) {
            return val * window.screen.availHeight / 768;
        }
    },
    computed: {
        tbodyData() {
            var tdata = this.tableData;
            return tdata;
        }
    }
};
</script>
<style scoped="scoped">
table,th,td {
    /* border: 1px solid #CCCCCC; */
    margin: 0px;
    padding: 0px;
    border-collapse: collapse;
    font-size: 2.1vh;
    width: 25.390625vw;
}
th{
    height: 3.90625vh;
    color:white;
    border-right:1px solid #6381a8;
    font-weight: 50;
}
table td{
    height: 3.90625vh;
}
.isWhite {
    background-color: white
}
.tdWidth {
    width: 100%;
}
.isRight {
    text-align: right;
    width:55%;
}
</style>

