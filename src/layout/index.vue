<template>
  <div class="common-layout">
    <el-container>
      <Sidebar></Sidebar>
      <el-container>
        <Header></Header>

        <Main> </Main>

        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import Header from './Header/index.vue'
import Sidebar from './Sidebar/index.vue'
import Main from './Main/index.vue'
</script>

<style lang="scss" scoped>
:deep(.el-main) {
  background-color: #fcfcfc;

  // TODO 重置最小高度
  min-height: calc(100vh - 240px);
}
</style>
