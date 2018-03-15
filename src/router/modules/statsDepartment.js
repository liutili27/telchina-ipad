import statsDepartment from '@/views/stats-department/home.vue';
import eachCity from '@/views/stats-department/eachCity/cityMain.vue';

// 统计局页面
const route = [
    {
        path: '/statsDepartment',
        name: 'statsDepartment',
        component: statsDepartment
    },
    {
        path: '/eachCity',
        name: 'eachCity',
        component: eachCity
    }
];

export default route;
