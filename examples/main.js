import Vue from 'vue'
import VueRouter from 'vue-router'
import routers  from './router'
import App from './App.vue'

import element from './element/index'
Vue.use(element)
// import ElementUI from 'element-ui'
// Vue.use(ElementUI)
// import 'element-ui/lib/theme-chalk/index.css'
// 导入组件库
import Component from './../packages/index'
import '../lib/custom-component-lib.css'
// 注册组件库
Vue.use(Component)
Vue.use(VueRouter)

Vue.config.productionTip = false

const router  = new VueRouter({
  mode: 'history',
  routes: routers
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
