import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '我的活动',
    component: () => import('@/views/salesman/index.vue')
  },
  {
    path: '/details',
    name: '查看活动闲情',
    component: () => import('@/views/salesman/details/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
