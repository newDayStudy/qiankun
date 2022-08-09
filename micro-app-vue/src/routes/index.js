import HomeCom from '@/pages/Home-Com'
import HelloWorld from '@/components/HelloWorld'
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
        }
    },
    {
        path: '/microApp/vue/hello',
        component: HelloWorld
    }
]