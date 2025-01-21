<template>
  <el-aside width="200px">
    <div class="icon-container">图标栏</div>

    <el-scrollbar height="calc(100vh - 88px)" class="pt-12">菜单栏</el-scrollbar>

    <div class="folder-container">折叠栏</div>
  </el-aside>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.icon-container {
  position: fixed;
  top: 0;
  left: 0;
  height: 48px;
  background-color: white;
}

.folder-container {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 40px;
  background-color: white;
}
</style>
