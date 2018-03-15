import home from '@/views/beibuBay/home.vue'; // 北部湾首页
import harbour from '@/views/beibuBay/harbour.vue';
import focusarea from '@/views/beibuBay/focusarea.vue';
// import focusareaForm from '@/views/basemap/table.vue'; //重点园区报表页
import focusareaReport from '@/views/beibuBay/focusarea-report/table.vue'; // 重点园区报表页
// import economic from '@/components/Economic.vue'
// import eachCity from '@/components/eachCity/cityMain.vue'
// import economic from '@/components/Economic.vue';
// import comprehensiveReport from '@/views/beibuBay/comprehensive-report/Economic.vue';
import beibuBayGuide from '@/views/beibuBay/guide/beibubay-guide.vue';
import testvue from '@/views/beibuBay/comprehensive-report/testvue.vue';

const beibuBayRouter = [
    {
        path: '/beibuBay',
        name: 'beibuBay',
        components: {
            default: home,
            testvue: testvue
        }
    },
    {
        path: '/harbour',
        name: 'harbour',
        component: harbour
    },
    {
        path: '/focusarea',
        name: 'focusarea',
        components: {
            default: focusarea,
            focusareaReport: focusareaReport
        }
    },
    {
        path: '/beibuBayGuide',
        name: 'beibuBayGuide',
        component: beibuBayGuide
    },
    {
        path: '/focusareaReport',
        name: 'focusareaReport',
        component: focusareaReport
    }
];

export default beibuBayRouter;
