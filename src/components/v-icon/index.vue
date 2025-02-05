<template>
  <Icon :icon="name" :style="{ color, fontSize: `${size}px` }" />
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'gray',
  },
  size: {
    type: Number,
    default: 16,
  },
})
</script>
