<template>
  <div class="full-container full">
    <n-space class="amap-button">
      <n-button type="primary" @click="showDrawer('style')"> 主题 </n-button>
      <n-button type="primary"> 点聚合 </n-button>
      <n-button type="primary"> 运动路径 </n-button>
    </n-space>
    <div id="container" class="amap-container"></div>
    <div v-if="show" class="setting-drawer">
      <template v-if="type === 'style'"></template>
      <n-radio-group v-model:value="style" name="radiogroup" @update:value="changeStyle">
        <n-space>
          <n-radio v-for="item in styleList" :key="item.value" :value="item.value">
            <span class="radio-label">{{ item.label }}</span>
          </n-radio>
        </n-space>
      </n-radio-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import AMap from 'AMap' // 引入高德地图
import { onMounted, reactive, ref } from 'vue'
import { pointList } from './data'

// 地图主题样式
import { styleList } from './options/style'
const style = ref<String>('')

// 弹窗
const type = ref<String>('')
const show = ref<Boolean>(false)

const state = reactive({
  map: {}, // 地图
  zoom: 10, // 地图缩放级别
  center: [121.558196, 29.908339], // 指定地图中心点
  style: '2d47d18dde35a5d2312c7863a2b0406a',
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

/**
 * 改变主题
 */
const changeStyle = (): void => {
  state.map.setMapStyle('amap://styles/' + style.value)
}

/**
 * 显示弹出层
 */
const showDrawer = (value): void => {
  show.value = true
  type.value = value
}

onMounted(() => {
  init()
})
</script>

<style scoped>
@import './index.scss';
</style>
