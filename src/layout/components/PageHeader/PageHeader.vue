<template>
  <div class="header-container flex-container sb-c">
    <div class="left"></div>
    <div class="right flex-container fe-c">
      <!-- 全局搜索 -->
      <HeaderSearch></HeaderSearch>
      <!-- 语言切换 -->
      <LangSelect></LangSelect>
      <!-- 全屏 -->
      <n-icon size="0.24rem">
        <component :is="fullscreenIcon" @click="toggleFullScreen" />
      </n-icon>
      <n-dropdown trigger="click" :options="options" @select="handleSelect">
        <n-icon size="0.36rem">
          <PersonCircleOutline></PersonCircleOutline>
        </n-icon>
      </n-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useDialog, useMessage } from 'naive-ui'
import { useRoute, useRouter } from 'vue-router'
import { constantRouterIcon } from '@/plugins/naive-icon'
import { useUserStore } from '@/store/modules/user'
import LangSelect from '@/components/LangSelect/index.vue'
import HeaderSearch from '@/components/HeaderSearch/index.vue'

const options = [
  {
    label: '退出登录',
    key: 'logout',
    icon: constantRouterIcon.LogOutOutline,
  },
]

const userStore = useUserStore()
const dialog = useDialog()
const message = useMessage()
const router = useRouter()
const route = useRoute()
const Logout = () => {
  dialog.info({
    title: '提示',
    content: '您确定要退出登录吗',
    positiveText: '确定',
    negativeText: '取消',
    onPositiveClick: () => {
      userStore.logout().then(() => {
        message.success('成功退出登录')
        router.replace({
          path: '/login',
          query: {
            redirect: route.fullPath,
          },
        })
        // .finally(() => location.reload())
      })
    },
  })
}

const handleSelect = (key: string | number): void => {
  switch (key) {
    // 退出登录
    case 'logout':
      Logout()
      break

    default:
      break
  }
}

// 全屏
const fullscreenIcon = ref<string>('FullscreenOutlined')
const toggleFullScreenIcon = (): void => {
  const isFullscreen = fullscreenIcon.value === 'FullscreenOutlined'
  // TODO: 全屏切换
  fullscreenIcon.value = isFullscreen ? 'FullscreenExitOutlined' : 'FullscreenOutlined'
}

// 监听全屏切换事件
document.addEventListener('fullscreenchange', toggleFullScreenIcon)

// 全屏切换
const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen()
  } else if (document.exitFullscreen) {
    document.exitFullscreen()
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
