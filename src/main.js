// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from '@/libs/fetch';
import echarts from 'echarts';
import '@/font-awesome/css/font-awesome.min.css';
import FastClick from 'fastclick';
import '@/iconfont/iconfont.css';
import util from '@/libs/util';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.min.css';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.prototype.$echarts = echarts;
Vue.prototype.$util = util;
Vue.use(VueAwesomeSwiper);
/* eslint-disable no-new */
let vm = new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
});

FastClick.attach(document.body);
if (process.env.NODE_ENV === 'production') {
    vm.$router.push({path: '/'});
};
