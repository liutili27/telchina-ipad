import usebasemap from '@/views/basemap/usebasemap.vue';
import scattermap from '@/views/basemap/scattermap.vue';
import adddivtomap from '@/views/basemap/adddivtomap.vue';
import updatemapseries from '@/views/basemap/updatemapseries.vue';
import multilayer from '@/views/basemap/multilayer.vue';
import showachartatmap from '@/views/basemap/showachartatmap.vue';
import harbourBerth from '@/views/basemap/harbour_berth.vue';
// import home from '@/views/basemap/home_page.vue';
// import table from '@/views/basemap/table.vue';
// import city from '@/views/basemap/city.vue';

// import scattermap_1 from '@/views/basemap/scattermap.1.vue';
// import showachartatmap_1 from '@/views/basemap/showachartatmap.1.vue';

const employRouter = [
    {
        path: '/usebasemap',
        name: 'usebasemap',
        component: usebasemap
    },
    // {
    //     path: '/table',
    //     name: 'table',
    //     component: table
    // },
    {
        path: '/scattermap',
        name: 'scattermap',
        component: scattermap
    },
    {
        path: '/adddivtomap',
        name: 'adddivtomap',
        component: adddivtomap
    },
    {
        path: '/updatemapseries',
        name: 'updatemapseries',
        component: updatemapseries
    },
    {
        path: '/multilayer',
        name: 'multilayer',
        component: multilayer
    },
    {
        path: '/showachartatmap',
        name: 'showachartatmap',
        component: showachartatmap
    },
    {
        path: '/harbour_berth',
        name: 'harbour_berth',
        component: harbourBerth
    }
    // {
    //     path: '/city',
    //     name: 'city',
    //     component: city
    // }
    // {
    //     path: '/city',
    //     name: 'city',
    //     component: city
    // }
];

export default employRouter;
