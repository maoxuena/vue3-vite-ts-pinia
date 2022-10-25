<template>
  <n-divider title-placement="left">{{ title }}</n-divider>
  <template v-if="icons.length === 0">
    <n-empty description="暂无图标">
      <template #icon>
        <svg-icon name="no-data-file"></svg-icon>
      </template>
    </n-empty>
  </template>
  <template v-else>
    <!-- Self 响应式突然不起作用了，改成 Screen 响应式 -->
    <!-- <n-grid :x-gap="10" :y-gap="10" cols="2 450:3 600:4 750:5 900:6 1050:7 1200:8 1350:9 1500:10 1650:11 1800:12"> -->
    <n-grid :x-gap="10" :y-gap="10" cols="1 s:2 m:4 l:8 xl:10 2xl:12" responsive="screen">
      <n-grid-item v-for="icon in icons" :key="icon">
        <div class="icon-wrap">
          <svg-icon :name="icon" @click="handleCopyIcon(icon)"></svg-icon>
          <span @click="handleCopyText(icon)">{{ icon }}</span>
          <div class="icon-copy" @click="handleCopyIcon(icon)">复制</div>
        </div>
      </n-grid-item>
    </n-grid>
  </template>
</template>

<script setup lang="ts">
import handleClipboard from '@/utils/clipboard'
// 接收父组件参数（采用ts专有声明，有默认值）
interface ParentProps {
  title?: string
  icons?: any[]
}
const props = withDefaults(defineProps<ParentProps>(), {
  title: '',
  icons: () => [],
})

// 复制图标
const handleCopyIcon = (item: string) => {
  handleClipboard(`<svg-icon name="${item}"></svg-icon>`)
}
// 复制图标名称
const handleCopyText = (text: string) => {
  handleClipboard(text)
}
</script>

<style lang="scss" scoped>
.n-empty {
  :deep(.n-empty__icon) {
    height: 2rem;
    width: 2rem;
    font-size: 2rem;
  }
}
.icon-wrap {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-size: 0.36rem;
  padding: 0.1rem;
  min-height: 1rem;
  transition: padding-bottom 0.2s ease-in-out;
  overflow: hidden;
  svg {
    cursor: pointer;
  }
  span {
    display: inline-block;
    width: 100%;
    font-size: 0.14rem;
    text-align: center;
    cursor: pointer;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .icon-copy {
    position: absolute;
    background-color: var(--primary-color);
    padding: 5px 0;
    color: #fff;
    font-size: 12px;
    bottom: 0;
    left: 0;
    right: 0;
    transform: translateY(100%);
    transition: transform 0.2s ease-in-out;
    cursor: pointer;
    text-align: center;
  }
  &:hover {
    padding-bottom: 20px;
    box-shadow: 0 0 10px #f0f0f0;
    .icon-copy {
      transform: translateY(0);
    }
  }
}
</style>
