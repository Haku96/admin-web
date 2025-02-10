import { freeRoutes } from '@/utils/constant'
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
    meta: {
      hidden: true,
    },
  },
  {
    path: '/',
    component: Layout,
    meta: {
      icon: 'ri:home-3-line',
      title: '首页',
    },
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '门户页',
        },
        component: () => import('@/views/home/index.vue'),
      },
    ],
  },
  {
    path: '/components',
    component: Layout,
    redirect: '/components/form',
    meta: {
      icon: 'ri:command-line',
      title: '组件',
      hidden: false,
      target: 'blank',
      keepAlive: true,
    },
    children: [
      {
        path: '/components/form',
        name: 'formComponent',
        component: () => import('@/views/components/form/index.vue'),
        meta: { title: '表单组件' },
        // meta: { title: '表单组件', roles: ['admin'] },
      },
    ],
  },
  {
    path: '/error',
    redirect: '/error/403',
    component: Layout,
    meta: {
      hidden: true,
    },
    children: [
      {
        path: '/error/403',
        name: '403',
        component: () => import('@/views/error/403.vue'),
      },
      {
        path: '/error/404',
        name: '404',
        meta: { hidden: true },
        component: () => import('@/views/error/404.vue'),
      },
      {
        path: '/error/500',
        name: '500',
        component: () => import('@/views/error/500.vue'),
      },
    ],
  },
  {
    path: '/redirect',
    component: Layout,
    meta: {
      hidden: true,
    },
    children: [
      {
        path: '/redirect/:path(.*)',
        name: 'redirect',
        component: () => import('@/layout/ReDirect.vue'),
      },
    ],
  },

  {
    path: '/:pathMatch(.*)',
    name: 'pathMatch',
    redirect: '/error/404',
    meta: {
      hidden: true,
    },
  },
]

// 由固定菜单与动态菜单组成
// 菜单源数据 图标，名字，是否显示，权限
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

NProgress.configure({ showSpinner: false })

router.beforeEach((to, from, next) => {
  NProgress.start()

  if (isLogin()) {
    if (to.path === 'login') {
      next({ path: '/' })
    } else {
      // TODO 权限判断
      if (to.meta && to.meta.roles) {
        // @ts-expect-error 忽略类型检查
        if (!to.meta.roles.some((role: string) => [].includes(role))) {
          next(`/error/404`)
        }
      }

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
