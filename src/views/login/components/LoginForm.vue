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
    <!-- <n-button @click="handleReset"> 重置 </n-button> -->
    <n-button type="primary" :loading="loading" @click="handleLogin"> 登录 </n-button>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { FormInst } from 'naive-ui'
import { Size } from 'naive-ui/lib/form/src/interface'
import loginApi from '@/service/api/login/login'
import * as T from '@/service/api/login/types'
import { LoginFrom } from '../types/index'

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

const router = useRouter()
// 登录
const handleLogin = () => {
  loginFormRef.value?.validate(async (errors) => {
    if (errors) {
      return false
    }
    loading.value = true
    try {
      const requestLoginForm: T.ILoginParams = {
        username: loginForm.username,
        password: loginForm.password,
      }
      const res = await loginApi.login(requestLoginForm)
      router.push({ name: 'Home' })
    } finally {
      loading.value = false
    }
    setTimeout(() => {
      loading.value = false
    }, 800)
  })
}

// 重置
// const handleReset = () => {
//   loginFormRef.value?.restoreValidation()
// }
</script>

<style lang="scss" scoped>
.btn-container {
  :deep(.n-button) {
    width: 100%;
  }
}
</style>
