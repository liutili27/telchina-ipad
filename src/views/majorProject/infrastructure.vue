<template>
    <div>
        <basemap @ready="mapReady" :mapType="'gx'" >
            <div v-if="myChart!=null">
                <multiple-point :legendShow="true" :legendPosition="legendPosition" :myChart="myChart" :data="data" :defaultProps="defaultProps">
                    <template slot-scope="props" slot="infoContent">
                            <!-- {{props}} -->
                        <div class="info-row">
                            <div>项目名称：</div>
                            <div>{{props.data.data.projectName}}</div>
                        </div>
                        <div class="info-row">
                            <div>建设内容及规模：</div>
                            <div>{{props.data.data.contentScale}}</div>
                        </div>
                        <div class="info-row">
                            <div>总投资：</div>
                            <div>{{props.data.data.totalInvestment}}</div>
                        </div>
                        <div class="info-row">
                            <div>项目业主：</div>
                            <div>{{props.data.data.owner}}</div>
                        </div>
                        <div class="info-row">
                            <div>责任单位：</div>
                            <div>{{props.data.data.repInstitutions}}</div>
                        </div>
                        <div class="info-row">
                            <div>责任人：</div>
                            <div>{{props.data.data.responsiblePeople}}</div>
                        </div>
                    </template>
                  
                </multiple-point>
            </div>
        </basemap>
    </div>
</template>
<script>
import basemap from '@/components/common-map.vue';
import multiplePoint from '@/components/multiple-point.vue';
import {infrastuctureData} from './infrastructuredata';
// 需要的图片
import railwayimg from '@/assets/railway.png';
import expresswayimg from '@/assets/expressway.png';
import airlinesimg from '@/assets/airlines.png';
import rivertransportimg from '@/assets/rivertransport.png';
import seatransportimg from '@/assets/seatransport.png';
import otherimg from '@/assets/other.png';
export default{
    components: {basemap, multiplePoint},
    data() {
        return {
            myChart: null,
            legendPosition: {
                left: '25vw',
                bottom: '140px'
            },
            data: infrastuctureData,
            defaultProps: [
                {
                    key: 'railway',
                    icon: railwayimg,
                    color: '#36FA00',
                    label: '铁路'
                },
                {
                    key: 'expressway',
                    icon: expresswayimg,
                    label: '高速公路'
                },
                {
                    key: 'airlines',
                    icon: airlinesimg,
                    label: '航空'
                },
                {
                    key: 'rivertransport',
                    icon: rivertransportimg,
                    label: '内河水运'
                },
                {
                    key: 'seatransport',
                    icon: seatransportimg,
                    label: '沿海水运'
                },
                {
                    key: 'other',
                    icon: otherimg,
                    label: '其他交通设施'
                }
            ]
        };
    },
    methods: {
        changeMenu(item, index) {
        },
        mapReady(myChart) {
            this.myChart = myChart;
        }
    }
};
</script>
<style>
.info-row {
    display: flex; 
    flex-direction: row;
}
</style>