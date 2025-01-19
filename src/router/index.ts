import { createRouter, createWebHistory } from 'vue-router'
import { isLogin } from '@/utils/auth.js'
import Login from '@/views/login/index.vue'
import Layout from '@/layout/index.vue'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
  ],
})

NProgress.configure({ showSpinner: false })

const freeRoutes = ['/login']
router.beforeEach((to, from, next) => {
  NProgress.start()

  if (isLogin()) {
    if (to.path === 'login') {
      next({ path: '/' })
    } else {
      // TODO 权限判断
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
