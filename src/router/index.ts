import { createRouter, createWebHistory } from 'vue-router'
import { isLogin } from '@/utils/auth.js'
import Login from '@/views/login/index.vue'
import Layout from '@/layout/index.vue'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

export const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
      },
    ],
  },
]

// 由固定菜单与动态菜单组成
// 菜单源数据 图标，名字，是否显示，权限
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

NProgress.configure({ showSpinner: false })

const freeRoutes = ['/login', '/home']
router.beforeEach((to, from, next) => {
  NProgress.start()

  if (isLogin()) {
    if (to.path === 'login') {
      next({ path: '/' })
    } else {
      // TODO 权限判断
      next()
    }
  } else {
    if (freeRoutes.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})

export default router
