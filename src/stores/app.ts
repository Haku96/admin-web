import { defineStore } from 'pinia'
import { routes as constantMenus } from '@/router/index'
// import Components from '@/router/components'

// TODO 动态增加路由的方法
export const useAppStore = defineStore('app', () => {
  // 其它应用设置
  const wholeMenus = ref([])
  const cacheMenus = ref([])

  const generateMenus = () => {
    const routes = [...constantMenus]
    // routes 所有动态路由
    // roles 当前用户角色

    return routes
  }

  return {
    constantMenus,
    wholeMenus,
    cacheMenus,
    generateMenus,
  }
})
