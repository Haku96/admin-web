<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-md">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">登 录</h2>
      </div>
      <el-form :model="form" :rules="rules" ref="loginForm" @submit.prevent="onSubmit">
        <el-form-item prop="email">
          <el-input v-model="form.email" placeholder="请输入账号">
            <template #prefix>
              <v-icon name="ep:user" />
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" type="password" placeholder="请输入密码" show-password>
            <template #prefix><v-icon name="ep:lock" /></template>
          </el-input>
        </el-form-item>
        <div class="flex items-center justify-between mt-6 mb-6">
          <el-checkbox v-model="form.remember" label="记住我" />
        </div>
        <el-button type="primary" native-type="submit" class="w-full" :loading="loading">
          登 录
        </el-button>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores'
import type { FormInstance } from 'element-plus'

const { asyncLogin } = useUserStore()
const loginForm = ref<FormInstance>()
const loading = ref(false)

const form = reactive({
  email: '',
  password: '',
  remember: false,
})

const rules = {
  email: [{ required: true, message: '请输入账号', trigger: ['blur', 'change'] }],
  password: [{ required: true, message: '请输入密码', trigger: ['blur', 'change'] }],
}

const onSubmit = async () => {
  if (!loginForm.value) return

  try {
    await loginForm.value.validate()
    loading.value = true

    asyncLogin({ name: 'Jerry', password: 'admin' })
  } catch (e) {
    ElMessage.error('请检查账号密码是否正确')
  } finally {
    loading.value = false
  }
}
</script>

<style scoped lang="scss">
:deep(.el-input__wrapper) {
  padding: 0 11px;
}

:deep(.el-input__inner) {
  height: 44px;
}

:deep(.el-button) {
  height: 44px;
  font-size: 16px;
}

:deep(.el-checkbox__label) {
  font-size: 14px;
}
</style>
