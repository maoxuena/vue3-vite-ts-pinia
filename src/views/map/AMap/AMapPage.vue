<template>
  <div class="full-container">
    <n-space class="amap-button">
      <n-button type="primary"> 点聚合 </n-button>
      <n-button type="primary"> 运动路径 </n-button>
    </n-space>
    <div id="container" class="amap-container"></div>
  </div>
</template>

<script setup lang="ts">
import AMap from 'AMap' // 引入高德地图
import { onMounted, reactive } from 'vue'
import { pointList } from './data'
const state = reactive({
  map: {}, // 地图
  zoom: 10, // 地图缩放级别
  center: [121.558196, 29.908339], // 指定地图中心点
  style: '2d47d18dde35a5d2312c7863a2b0406a', // 主题样式
})
/**
 * 地图初始化
 */
const init = () => {
  state.map = new AMap.Map('container', {
    // showLabel: false, // 不显示地图文字标记
    center: state.center,
    resizeEnable: true,
    zoom: state.zoom,
  })
  state.map.setMapStyle('amap://styles/' + state.style)
  state.map.setFeatures(['bg', 'road', 'building', 'point']) // 地图显示信息：'bg', 'road', 'building', 'point'
}

onMounted(() => {
  init()
})
</script>

<style scoped>
@import './index.scss';
</style>
