import Vue from 'vue'
import App from './App.vue'
import Antd from "ant-design-vue";
import 'ant-design-vue/dist/antd.less';
import VueRouter from 'vue-router'
import startQiankun from "./micro";
Vue.use(Antd)
Vue.use(VueRouter)
Vue.config.productionTip = false
startQiankun();
const router = new VueRouter({
  mode: "history",
  routes:[
    {
      path: '',
      name: 'main',
      component: () => import('@/components/HelloWorld.vue')
    }
  ]
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#main-app')
