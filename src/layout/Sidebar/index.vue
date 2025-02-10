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
        <menuItem v-for="item in menu" :key="item.meta.title" :menu="item"></menuItem>
      </el-menu>
    </el-scrollbar>

    <div class="folder-container" @click="handleCollapseClick">
      <el-icon v-if="isCollapse"><expand /></el-icon>
      <el-icon v-else> <Fold /></el-icon>
    </div>
  </el-aside>
</template>

<script setup lang="ts">
import menuItem from './menu-item'
import { Expand, Fold } from '@element-plus/icons-vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores'

const appStore = useAppStore()
const { handleCollapseClick } = useAppStore()
const { menu, isCollapse, menuWidth } = storeToRefs(appStore)
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
