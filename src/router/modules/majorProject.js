import majorproject from '@/views/majorProject/majorproject.vue';
import infrastructure from '@/views/majorProject/infrastructure.vue';
import prefectureProject from '@/views/majorProject/prefectureProject.vue';
import industry from '@/views/majorProject/industry.vue';
import constructionStage from '@/views/majorProject/constructionStage.vue';
const majorProjectRouter = [
    {
        path: '/majorproject',
        name: 'majorproject',
        component: majorproject
    },
    {
        path: '/infrastructure',
        name: 'infrastructure',
        component: infrastructure
    },
    {
        path: '/prefectureProject',
        name: 'prefectureProject',
        component: prefectureProject
    },
    {
        path: '/industry',
        name: 'industry',
        component: industry
    },
    {
        path: '/constructionStage',
        name: 'constructionStage',
        component: constructionStage
    }
];

export default majorProjectRouter;
