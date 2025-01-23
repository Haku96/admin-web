<template>
  <el-container>
    <Sidebar></Sidebar>
    <el-container>
      <Header></Header>

      <Main></Main>

      <el-footer height="48px">Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import Header from './Header/index.vue'
import Sidebar from './Sidebar/index.vue'
import Main from './Main/index.vue'
</script>

<style lang="scss" scoped>
:deep(.el-main) {
  background-color: #f0f2f5;
  min-height: calc(100vh - 130px);
}

:deep(.el-header) {
  background-color: #ffffff;
  height: 82px;
}
</style>
