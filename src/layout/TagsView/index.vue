<template>
  <div class="tags-view-wrapper">历史记录</div>
</template>

<script setup lang="ts">
// 根据 name 判断唯一性
// 区分不需要添加的页面，与需要添加的页面
const route = useRoute()

console.log(route.name, '===>')
</script>

<style lang="scss" scoped>
.tags-view-wrapper {
  height: 34px;
  display: flex;
  align-items: center;
}
</style>
