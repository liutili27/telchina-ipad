// import scienceTechnology from '@/views/science-technology/home.vue'; //原来首页，或已不用
import itemDistribution from '@/views/science-technology/item-distribution.vue'; // 项目分布
import achievement from '@/views/science-technology/achievement.vue'; // 科技成果
import hightechEnterprise from '@/views/science-technology/hightech-enterprise.vue'; // 高新企业

// 扶贫办页面
const routes = [
    // {
    //     path: '/scienceTechnology',
    //     name: 'scienceTechnology',
    //     component: scienceTechnology
    // },
    {
        path: '/itemDistribution',
        name: 'itemDistribution',
        component: itemDistribution
    },
    {
        path: '/achievement',
        name: 'achievement',
        component: achievement
    },
    {
        path: '/hightechEnterprise',
        name: 'hightechEnterprise',
        component: hightechEnterprise
    }
];

export default routes;
