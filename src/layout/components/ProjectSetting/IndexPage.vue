<template>
  <n-drawer v-model:show="isDrawer" :width="width" :placement="placement">
    <n-drawer-content :title="title" :native-scrollbar="false"> </n-drawer-content>
  </n-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// 接收父组件参数（采用ts专有声明，有默认值）
interface ParentProps {
  width?: Number
  title?: String
}
const props = withDefaults(defineProps<ParentProps>(), {
  width: 280,
  title: '项目配置',
})
const isDrawer = ref<Boolean>(false)
const placement = ref<String>('right')

// 打开抽屉
const openDrawer = (): void => {
  isDrawer.value = true
}

// 关闭抽屉
const closeDrawer = (): void => {
  isDrawer.value = false
}

// 显示暴露的数据，才可以在父组件拿到
defineExpose({
  openDrawer,
  closeDrawer,
})
</script>

<style lang="scss" scoped></style>
