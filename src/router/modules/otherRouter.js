import homePage from '@/views/home/home-page.vue';
import testSwiper from '@/views/home/testSwiper.vue';

// 首页，其他404，302等页面

const otherRouter = [
    {
        path: '/',
        name: 'home',
        component: homePage
    },
    {
        path: '/testSwiper',
        name: 'testSwiper',
        component: testSwiper
    }
];

export default otherRouter;
