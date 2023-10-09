import HomeCom from '@/pages/Home-Com'
import HelloWorld from '@/components/HelloWorld'
import Dashboard from "@/pages/Dashboard.vue";
export default [
    {
        path: '',
        redirect: '/microApp/vue'
    },
    {
        path: '/microApp/vue',
        component: HomeCom,
        beforeEnter: (to, from, next) => {
            console.log('进入了路由')
            next()
        },
        children: [
            {
                path: '',
                component: Dashboard
            },
            {
                path: 'hello',
                component: HelloWorld
            }
        ]
    }
]
