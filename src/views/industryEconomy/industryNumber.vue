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

.tab-div {
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    background: #ccc;
}

.tab-div::-webkit-scrollbar {
    display: none;
}

.tab-item {
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

.span-1 {
    font-size: 13px;
    line-height: 40px;
    color: #0062db;
    font-weight: bold;
}

.span-2 {
    font-size: 12px;
    line-height: 80px;
}

.div-box {
    background: #0062db;
    height: 18px;
    width: 10px;
    float: left;
    position: relative;
    top: 10px;
    left: 0px;
}

.div-box02 {
    width: 45%;
    float: left;
}

.div-box03 {
    width: 45%;
    float: left;
    margin-left: 9.8%;
}

table tr:nth-child(odd) {
    background: white;
}

table th {
    background: #0062db;
    color: white;
    font-weight:bold;
    font-size: 13px;
}

table {
    background: #ccc;
    width:100%;
    font-size: 12px;
    line-height: 40px;
    text-align: center;
}
</style>

<template>
    <div style="padding:30px;margin：0 auto;">
        <div style="overflow-y:scroll;border:1px">
            <div style="margin:20px 25px 20px 25px;">
                <table border="0" cellspacing="0">
                    <tr>
                        <th>种类</th>
                        <th>2017年12月累计</th>
                        <th>2016年12月累计</th>
                        <th>2015年12月累计</th>
                    </tr>
                    <tr>
                        <td>成品糖（万吨）</td>
                        <td>935.96&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                        <td>914.29&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                        <td>925.73&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                    </tr>
                     <tr>
                        <td>机制纸（万吨）</td>
                        <td>935.96&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                        <td>914.29&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                        <td>925.73&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                    </tr>
                     <tr>
                        <td>发酵酒精（万千升）</td>
                        <td>935.96&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                        <td>914.29&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                        <td>925.73&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                    </tr>
                     <tr>
                        <td>卷烟（万箱）</td>
                        <td>935.96&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                        <td>914.29&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                        <td>925.73&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                    </tr>
                     <tr>
                        <td>发电量（亿千瓦时）</td>
                        <td>935.96&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                        <td>914.29&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                        <td>925.73&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                    </tr>
                     <tr>
                        <td>火电</td>
                        <td>935.96&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                        <td>914.29&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                        <td>925.73&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                    </tr>
                     <tr>
                        <td>水电</td>
                        <td>935.96&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                        <td>914.29&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                        <td>925.73&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                    </tr>
                     <tr>
                        <td>全社会用电量(亿千瓦时)</td>
                        <td>935.96&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                        <td>914.29&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                        <td>925.73&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                    </tr>
                     <tr>
                        <td>工业用电量(亿千瓦时)</td>
                        <td>935.96&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                        <td>914.29&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                        <td>925.73&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                    </tr>
                    <tr>
                        <td>原油加工量（万吨）</td>
                        <td>935.96&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                        <td>914.29&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                        <td>925.73&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                    </tr>
                    <tr>
                        <td>化肥（万吨）</td>
                        <td>935.96&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                        <td>914.29&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                        <td>925.73&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                    </tr>
                    <tr>
                        <td>工业用电量(亿千瓦时)</td>
                        <td>935.96&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                        <td>914.29&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                        <td>925.73&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                    </tr>
                    <tr>
                        <td>钢材（万吨）</td>
                        <td>935.96&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                        <td>914.29&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                        <td>925.73&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                    </tr>
                    <tr>
                        <td>铁合金（万吨）</td>
                        <td>935.96&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                        <td>914.29&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                        <td>925.73&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                    </tr>
                    <tr>
                        <td>十种有色金属（万吨）</td>
                        <td>935.96&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                        <td>914.29&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                        <td>925.73&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                    </tr>
                    <tr>
                        <td>电解铝（万吨）</td>
                        <td>935.96&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                        <td>914.29&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                        <td>925.73&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                    </tr>
                    <tr>
                        <td>氧化铝（万吨）</td>
                        <td>935.96&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                        <td>914.29&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                        <td>925.73&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                    </tr>
                    <tr>
                        <td>水泥（万吨）</td>
                        <td>935.96&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                        <td>914.29&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                        <td>925.73&nbsp&nbsp&nbsp&nbsp↑&nbsp&nbsp&nbsp&nbsp4.42</td>
                    </tr>
                    
                </table>
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

