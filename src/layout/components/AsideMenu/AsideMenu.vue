<template>
  <n-menu
    v-model:value="activeKey"
    :options="menus"
    :expanded-keys="state.openKeys"
    @update:value="clickMenuItem"
    @update:expanded-keys="menuExpanded" />
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, unref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAsyncRouteStore } from '@/store/modules/asyncRoute'
import { generatorMenu } from '@/utils/route'

const asyncRouteStore = useAsyncRouteStore()
const menus = ref<any[]>([])
// 更新菜单
const updateMenu = () => {
  menus.value = generatorMenu(asyncRouteStore.getMenus)
}

// 获取当前路由
const currentRoute = useRoute()
const activeKey = ref<string>(currentRoute.name as string)

// 获取当前打开的子菜单
const matched = currentRoute.matched
const getOpenKeys = matched && matched.length ? matched.map((item) => item.name) : []
const state = reactive({
  openKeys: getOpenKeys,
})

// 跟随页面路由变化，切换菜单选中状态
watch(
  () => currentRoute.fullPath,
  () => {
    updateMenu()
    const matched = currentRoute.matched
    state.openKeys = matched.map((item) => item.name)
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

//展开菜单
const menuExpanded = (openKeys: string[]) => {
  if (!openKeys) {
    return
  }
  const latestOpenKey = openKeys.find((key) => state.openKeys.indexOf(key) === -1)
  const isExistChildren = findChildrenLen(latestOpenKey as string)
  state.openKeys = isExistChildren ? (latestOpenKey ? [latestOpenKey] : []) : openKeys
}

//查找是否存在子路由
const findChildrenLen = (key: string) => {
  if (!key) {
    return false
  }
  const subRouteChildren: string[] = []
  for (const { children, key } of unref(menus)) {
    if (children && children.length) {
      subRouteChildren.push(key as string)
    }
  }
  return subRouteChildren.includes(key)
}

onMounted(() => {
  updateMenu()
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
