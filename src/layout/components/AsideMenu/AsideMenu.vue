<template>
  <n-menu
    v-model:value="activeKey"
    :options="menus"
    :expanded-keys="openKeys"
    @update:value="clickMenuItem" />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAsyncRouteStore } from '@/store/modules/asyncRoute'
import { generatorMenu } from '@/utils/route'

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

// 获取当前打开的子菜单
const matched = currentRoute.matched
const getOpenKeys = matched && matched.length ? matched.map((item) => item.name) : []
const openKeys = ref(getOpenKeys)

// 跟随页面路由变化，切换菜单选中状态
watch(
  () => currentRoute.fullPath,
  () => {
    updateMenu()
    const matched = currentRoute.matched
    openKeys.value = matched.map((item) => item.name)
    const activeMenu: string = (currentRoute.meta?.activeMenu as string) || ''
    activeKey.value = activeMenu ? (activeMenu as string) : (currentRoute.name as string)
  }
)

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
