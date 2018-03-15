import Vue from 'vue';
import Router from 'vue-router';

import store from '@/store/index';
import otherRouter from './modules/otherRouter'; // 首页，404等页面
import echarts from './modules/echarts';
import map from './modules/map';
import beibuBay from './modules/beibuBay'; // 北部湾
import majorProject from './modules/majorProject'; // 重大项目
import industryEconomy from './modules/industryEconomy'; // 工业经济
import statsDepartment from './modules/statsDepartment'; // 统计局
import povertyReduction from './modules/povertyReduction'; // 扶贫办
import scienceTechnology from './modules/scienceTechnology'; // 科技厅
import qinzhou from './modules/qinzhou'; // 钦州市

Vue.use(Router);

const routers = [
    ...otherRouter,
    ...echarts,
    ...map,
    ...beibuBay,
    ...majorProject,
    ...industryEconomy,
    ...statsDepartment,
    ...povertyReduction,
    ...scienceTechnology,
    ...qinzhou
];

const router = new Router({
    mode: 'history',
    routes: routers
});

export default router;

router.beforeEach((to, from, next) => {
    store.commit('updateLoadingStatus', { isLoading: true });
    next();
});

router.afterEach((to) => {
    store.commit('updateLoadingStatus', { isLoading: false });
});
