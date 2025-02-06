<template>
  <el-aside :width="menuWidth">
    <div class="icon-container">图标</div>

    <el-scrollbar height="calc(100vh - 88px)" class="pt-12">
      <el-menu
        default-active="2"
        :collapse-transition="false"
        class="el-menu-wrapper"
        :collapse="isCollapse"
        unique-opened
        close-on-click-outside
      >
        <el-sub-menu v-for="item in menu" :index="item.meta.title" :key="item.meta.title">
          <template #title>
            <v-icon class="mr-2" :name="item.meta.icon"></v-icon>
            <span>{{ item.meta.title }}</span>
          </template>

          <el-menu-item
            v-for="menuItem in item.children"
            :key="menuItem.meta.title"
            :index="menuItem.meta.title"
            @click="handleMenuItemClick(menuItem)"
          >
            <template #title>{{ menuItem.meta.title }}</template>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-scrollbar>

    <div class="folder-container" @click="handleCollapseClick">
      <el-icon v-if="isCollapse"><expand /></el-icon>
      <el-icon v-else> <Fold /></el-icon>
    </div>
  </el-aside>
</template>

<script setup lang="ts">
import { filterRouteMenu } from '@/router/utils'
import { Expand, Fold } from '@element-plus/icons-vue'

const router = useRouter()
const isCollapse = ref(false)
const menuWidth = ref('200px')

const handleCollapseClick = () => {
  isCollapse.value = !isCollapse.value

  if (isCollapse.value) {
    menuWidth.value = '64px'
  } else {
    menuWidth.value = '200px'
  }
}

const handleMenuItemClick = (e) => {
  // TODO 根据不同网址跳转，系统内，系统外，iframe 等
  router.push({ name: e.name })
}

const menu = reactive(filterRouteMenu())
</script>

<style lang="scss" scoped>
.el-aside {
  // TODO 隐藏纵向滚动条
  // border-right: solid 1px var(--el-menu-border-color);
  transition: width 0.3s;
}

.icon-container {
  position: fixed;
  top: 0;
  left: 0;
  height: 48px;
  padding: 10px;
  width: v-bind(menuWidth);
  background-color: white;
  border-right: solid 1px var(--el-menu-border-color);
  transition: width 0.3s;
}

.folder-container {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 40px;
  padding: 10px;
  width: v-bind(menuWidth);
  background-color: white;
  box-shadow: 0 0 6px -3px var(--el-color-primary);
  border-right: solid 1px var(--el-menu-border-color);
  transition: width 0.3s;
}

.el-menu-wrapper {
  width: v-bind(menuWidth);
  min-height: calc(100vh - 88px);
  transition: width 0.3s;
}

.el-menu {
  border: none;
}
</style>
