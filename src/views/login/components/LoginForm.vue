<template>
  <n-form ref="loginFormRef" :model="loginForm" :rules="loginRules" :size="size">
    <n-form-item path="username">
      <n-input v-model:value="loginForm.username" placeholder="请输入账号" clearable />
    </n-form-item>
    <n-form-item path="password">
      <n-input
        v-model:value="loginForm.password"
        placeholder="请输入密码"
        type="password"
        show-password-on="click"
        clearable />
    </n-form-item>
  </n-form>
  <div class="btn-container flex-container sb-c">
    <n-button @click="resetForm"> 重置 </n-button>
    <n-button type="primary" :loading="loading" @click="login"> 登录 </n-button>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { FormInst } from 'naive-ui'
import { LoginFrom } from '../types/index'
import { Size } from 'naive-ui/lib/form/src/interface'

// Naive UI组件尺寸
const size = ref<Size>('medium')

// 定义 form
const loginFormRef = ref<FormInst | null>(null)
const loginRules = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
})

// 登录表单数据
const loginForm = reactive<LoginFrom>({
  username: 'admin',
  password: '123456',
})
const loading = ref<boolean>(false)

// 登录
const login = () => {
  loginFormRef.value?.validate((errors) => {
    if (errors) {
      return false
    }
    loading.value = true
    setTimeout(() => {
      loading.value = false
    }, 800)
  })
}

// 重置
const resetForm = () => {
  loginFormRef.value?.restoreValidation()
}
</script>

<style lang="scss" scoped>
.btn-container {
  :deep(.n-button) {
    width: 46%;
  }
}
</style>
