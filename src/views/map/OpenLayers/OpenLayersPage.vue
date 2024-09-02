<!--
 * @Author: maoxuena
 * @Date: 2024-01-25 14:02:13
 * @LastEditTime: 2024-09-02 09:32:20
 * @LastEditors: maoxuena
 * @Description:
-->
<template>
  <div class="full-container full">
    <div id="open-layers-map" ref="mapBox" class="mapBox"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, shallowRef } from 'vue'
import type { Map as olMapType } from 'ol'

import { createMap } from './map'

const mapBox = shallowRef<HTMLDivElement | null>(null) //地图实例
const map = shallowRef<olMapType | null>(null)
const center = [122.028784, 29.788291]

// 初始化地图
const initMap = () => {
  const target = mapBox.value
  const _map = createMap(target!, center) //创建地图实例
  map.value = _map
}

const worker = new Worker(new URL('./utils/worker.ts', import.meta.url))

worker.postMessage(5) // 向 worker 发送数据

worker.onmessage = (event) => {
  const result = event.data
  console.log('Result received from worker:', result)
}

onMounted(() => {
  initMap()
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
