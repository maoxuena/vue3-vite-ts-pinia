<template>
  <n-menu v-model:value="activeKey" :options="menus" @update:value="clickMenuItem" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAsyncRouteStore } from '@/store/modules/asyncRoute'
import { generatorMenu } from '@/utils'

const asyncRouteStore = useAsyncRouteStore()
const menus = ref<any[]>([])
// 更新菜单
const updateMenu = () => {
  menus.value = generatorMenu(asyncRouteStore.getMenus)
}
updateMenu()

// 获取当前路由
const currentRoute = useRoute()
const activeKey = ref<string>(currentRoute.name as string)

// 点击菜单跳转
const router = useRouter()
const clickMenuItem = (key: string) => {
  if (/http(s)?:/.test(key)) {
    // 外部链接
    window.open(key)
  } else {
    router.push({ name: key })
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>