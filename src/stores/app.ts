import { defineStore } from 'pinia'
import { filterRouteMenu } from '@/router/utils'

export const useAppStore = defineStore('app', () => {
  const menu = reactive(filterRouteMenu())
  const isCollapse = ref(false)
  const menuWidth = ref('200px')
  const cachedMenu = reactive([])

  const handleCollapseClick = () => {
    isCollapse.value = !isCollapse.value

    if (isCollapse.value) {
      menuWidth.value = '64px'
    } else {
      menuWidth.value = '200px'
    }
  }

  return { menu, isCollapse, menuWidth, handleCollapseClick, cachedMenu }
})
