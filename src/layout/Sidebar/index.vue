<template>
  <el-aside :width="menuWidth">
    <div class="icon-container">图标</div>

    <el-scrollbar height="calc(100vh - 88px)" class="pt-12">
      <el-menu
        default-active="2"
        :collapse-transition="false"
        class="el-menu-wrapper"
        :collapse="isCollapse"
        close-on-click-outside
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <template #title>Navigator Two</template>
          </el-menu-item>
        </el-sub-menu>

        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <template #title>Navigator Two</template>
        </el-menu-item>

        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <template #title>Navigator Four</template>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>

    <div class="folder-container" @click="handleCollapseClick">
      <el-icon v-if="isCollapse"><expand /></el-icon>
      <el-icon v-else> <Fold /></el-icon>
    </div>
  </el-aside>
</template>

<script setup lang="ts">
import { Menu as IconMenu, Location, Setting, Expand, Fold } from '@element-plus/icons-vue'

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
</script>

<style lang="scss" scoped>
.el-aside {
  border-right: solid 1px var(--el-menu-border-color);
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
