import { createRouter, createWebHashHistory } from 'vue-router'
import App from '@/App.vue'

// 路由规则
const routes = [
  { path: '', redirect: '/home' },

  {
    path: '/',
    component: App,
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home.vue')
  },
  {
    path: '/softwareList',
    name: 'softwareList',
    component: () => import('@/views/softwareList.vue'),
    meta: {
      keepAlive: true //设置是否需要缓存
    }
  },
  {
    path: '/softwareDetail',
    name: 'softwareDetail',
    component: () => import('@/views/softwareDetail.vue')
  },
  {
    path: '/more',
    name: 'more',
    component: () => import('@/views/more.vue')
  },
  {
    path: '/jd',
    name: 'jd',
    component: () => import('@/views/jdLogin.vue')
  },
  {
    // vue-router@4的变化，舍弃*通配符
    // 官方文档：https://next.router.vuejs.org/zh/guide/migration/index.html#%E5%88%A0%E9%99%A4%E4%BA%86-%EF%BC%88%E6%98%9F%E6%A0%87%E6%88%96%E9%80%9A%E9%85%8D%E7%AC%A6%EF%BC%89%E8%B7%AF%E7%94%B1
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/views/404.vue')
  }
]

const router = createRouter({
  // vueRouter@3版本的mode改成了history，hash模式配置createWebHashHistory，history模式配置createWebHistory
  history: createWebHashHistory(),
  routes
})

export default router
