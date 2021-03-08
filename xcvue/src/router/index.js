import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'

// 千万不要写import其它页面组件.vue

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/details',
    // webpackChunkName:"details", 意为不要讲Details.vue的内容和首页打包在一起! 而要单独打包成一个名为details.js的文件单独下载。
    // 为什么是函数?因为函数只有调用是才执行, 不调用时不执行! 这里, 只有当用户访问/details路径时, 才临时调用函数, 临时引入Details.vue。
    component: () => import(/* webpackChunkName: "details" */ '../views/Details.vue')
  }
]


const router = new VueRouter({
  routes
})

export default router
