import HomeCom from '@/pages/Home-Com'
import HelloWorld from '@/components/HelloWorld'
import Dashboard from "@/pages/Dashboard.vue";
import vTable from "@/pages/v-table.vue";
import vMap from "@/pages/v-map.vue";
import vPie from '@/pages/v-pie.vue'
export default [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: HomeCom,
        beforeEnter: (to, from, next) => {
            console.log('进入了路由', to)
            next()
        },
        children: [
            {
                path: '',
                component: Dashboard
            },
            {
                path: 'form',
                component: HelloWorld
            },
            {
                path: 'table',
                component: vTable
            },

            {
                path: 'map',
                component: vMap
            },
            {
                path: 'pie',
                component: vPie
            }
        ]
    }
]
