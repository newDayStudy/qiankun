import HomeCom from '@/pages/Home-Com'
import HelloWorld from '@/components/HelloWorld'
import Dashboard from "@/pages/Dashboard.vue";
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
            }
        ]
    }
]
