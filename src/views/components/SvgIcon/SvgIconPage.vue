<template>
  <svg-icon-item title="网站通用图标" :icons="icons"></svg-icon-item>
  <svg-icon-item title="文件类型图标（fileType）" :icons="fileTypeIcons"></svg-icon-item>
  <svg-icon-item title="表单类图标"></svg-icon-item>
  <svg-icon-item title="方向性图标"></svg-icon-item>
  <svg-icon-item title="提示建议性图标"></svg-icon-item>
  <svg-icon-item title="编辑类图标"></svg-icon-item>
  <svg-icon-item title="数据类图标" :icons="chartIcons"></svg-icon-item>
  <svg-icon-item title="视频类图标" :icons="videoIcons"></svg-icon-item>
  <svg-icon-item title="品牌和标识"></svg-icon-item>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SvgIconItem from './components/SvgIconItem.vue'

// 通用图标
const modules = import.meta.globEager('@/assets/svg/icons/*.svg', {
  as: 'component',
})
const icons = ref<any[]>([])
for (const path in modules) {
  const file = path.split('/').pop()
  const fileName = file?.split('.')?.shift()
  icons.value.push(fileName)
}

// 文件类型图标
const fileTypeModules = import.meta.globEager('@/assets/svg/icons/fileType/*.svg', {
  as: 'component',
})
const fileTypeIcons = ref<any[]>([])
for (const path in fileTypeModules) {
  const file = path.split('/').pop()
  const fileName = file?.split('.')?.shift()
  fileTypeIcons.value.push(fileName)
}

// 数据类图标
const chartModules = import.meta.globEager('@/assets/svg/icons/chart/*.svg', {
  as: 'component',
})
const chartIcons = ref<any[]>([])
for (const path in chartModules) {
  const file = path.split('/').pop()
  const fileName = file?.split('.')?.shift()
  chartIcons.value.push(fileName)
}

// 视频类图标
const videoModules = import.meta.globEager('@/assets/svg/icons/video/*.svg', {
  as: 'component',
})
const videoIcons = ref<any[]>([])
for (const path in videoModules) {
  const file = path.split('/').pop()
  const fileName = file?.split('.')?.shift()
  videoIcons.value.push(fileName)
}
</script>

<style lang="scss" scoped></style>
