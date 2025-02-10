import { routes } from '@/router'
import { useAppStore } from '@/stores'
import { storeToRefs } from 'pinia'

// 不是所有的路由都是菜单，权限处理
export const filterRouteMenu = () => {
  const userRoles = []
  const _routes = JSON.parse(JSON.stringify(routes))

  const filterRoutes = (routes) => {
    return routes.filter((route) => {
      if (route.meta && route.meta.hidden) return false

      if (route.meta && route.meta.roles) {
        // @ts-expect-error 忽略类型检查
        if (!route.meta.roles.some((role: string) => userRoles.includes(role))) {
          return false
        }
      }

      if (route.children && route.children.length > 0) {
        route.children = filterRoutes(route.children)
      }

      return true
    })
  }

  return filterRoutes(_routes).filter((e) => e.children.length !== 0)
}

// 获取需要缓存的菜单
export const filterCacheRoutes = () => {
  const { menu } = storeToRefs(useAppStore())

  // 获取需要 keep-alive 的路由，默认为 true
  // 区分有无子菜单
  console.log(menu, '===> fdasf')
}
