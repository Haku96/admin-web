<template>
  <el-header style="padding: 0">
    <div class="nav-header">
      <div>面包屑</div>

      <div>
        <el-icon class="mx-3">
          <FullScreen />
        </el-icon>

        <el-icon class="mx-3">
          <Bell />
        </el-icon>

        <span class="mx-3">
          <el-avatar :size="22" src="https://avatars.githubusercontent.com/u/44761321" />
        </span>

        <el-icon class="mx-3" @click="handleLogout">
          <Setting />
        </el-icon>
      </div>
    </div>

    <TagsView></TagsView>
  </el-header>
</template>

<script setup lang="ts">
import TagsView from '../TagsView/index.vue'
import { useUserStore } from '@/stores'
import { Bell, Setting, FullScreen } from '@element-plus/icons-vue'

const { asyncLogout } = useUserStore()

const handleLogout = () => {
  asyncLogout()
}
</script>

<style lang="scss" scoped>
.nav-header {
  height: 48px;
  padding-left: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--el-menu-border-color);
}
</style>
