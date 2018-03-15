import qinzhou from '@/views/qinzhou/home.vue';
import economicIndicator from '@/views/qinzhou/economic-indicator.vue';
import qinzhouMajorProject from '@/views/qinzhou/qinzhou-major-project.vue';

// 钦州市页面

const route = [
    {
        path: '/qinzhou',
        name: 'qinzhou',
        component: qinzhou
    },
    {
        path: '/economicIndicator',
        name: 'economicIndicator',
        component: economicIndicator
    },
    {
        path: '/qinzhouMajorProject',
        name: 'qinzhouMajorProject',
        component: qinzhouMajorProject
    }
];

export default route;
