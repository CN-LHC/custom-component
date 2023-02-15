import Vue from 'vue'
import VueRouter from 'vue-router'
import routers  from './router'
import App from './App.vue'

// 按需导入element组件
import element from './element/index'
Vue.use(element)

// 导入组件库
import Component from './../packages/index'
import '../lib/custom-component-lib.css'
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
