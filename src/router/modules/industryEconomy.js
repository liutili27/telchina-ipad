// 工业经济页面
import home from '@/views/industryEconomy/home.vue'; // 首页
import industrialProfit from '@/views/industryEconomy/industrialProfit.vue'; // 经济效益
import assetInvestment from '@/views/industryEconomy/assetInvestment.vue'; // 资产投资
// import report from '@/views/industryEconomy/report/report1.vue'; // 资产投资
import report2 from '@/views/industryEconomy/report/report2.vue'; // 资产投资
import report3 from '@/views/industryEconomy/report/report3.vue'; // 资产投资
import homeReport from '@/views/industryEconomy/homeReport.vue'; // 资产投资
const routers = [
    {
        path: '/industryEconomy',
        name: 'industryEconomy',
        components: {
            default: home,
            homeReport: homeReport
        }
    },
    {
        path: '/industrialProfit',
        name: 'industrialProfit',
        components: {
            default: industrialProfit,
            report2: report2
        }
    },
    {
        path: '/assetInvestment',
        name: 'assetInvestment',
        components: {
            default: assetInvestment,
            report3: report3
        }
    }
];

export default routers;
