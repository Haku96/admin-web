import { routes } from '@/router'

// 不是所有的路由都是菜单，权限处理
export const filterRouteMenu = () => {
  const userRoles = []
  const _routes = JSON.parse(JSON.stringify(routes))
  return _routes.filter((route) => {
    if (route.meta && route.meta.hidden) return false

    if (route.meta && route.meta.roles) {
      // @ts-expect-error 忽略类型检查
      return route.meta.roles.some((role: string) => userRoles.includes(role))
    }

    return true
  })
}
