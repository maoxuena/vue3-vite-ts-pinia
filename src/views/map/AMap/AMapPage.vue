<template>
  <div class="full-container full">
    <n-space class="amap-button">
      <n-button type="primary" @click="showDrawer('style')"> 主题 </n-button>
      <n-button type="primary" @click="drawPoint"> 绘制点 </n-button>
      <n-button type="primary" @click="drawPolygon"> 绘制区域 </n-button>
      <n-button type="primary" @click="drawYinzhou"> 鄞州 </n-button>
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
import { pointList } from './options/point'
import { polygonList } from './options/polygon'
import { yinzhou } from './options/yinzhou'

// 地图主题样式
import { styleList } from './options/style'
const style = ref<string>('')

// 弹窗
const type = ref<string>('')
const show = ref<boolean>(false)

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

/**
 * 绘制点
 */
const drawPoint = (): void => {
  const map = state.map
  const data = pointList

  // 信息窗口
  const infoWindow = new AMap.InfoWindow({
    offset: new AMap.Pixel(0, -30),
  })

  for (let i = 0; i < data.length; i++) {
    const markerOption = new AMap.Marker({
      position: data[i].lnglat.split(','),
      title: data[i].name,
      map: map,
    })
    markerOption.content = '<div class="map-content">单位名称：' + data[i].name + '<br>单位地址：' + data[i].addr + '</div>'
    markerOption.on('click', markerClick)
  }

  // 点击事件
  function markerClick(e) {
    infoWindow.setContent(e.target.content)
    infoWindow.open(map, e.target.getPosition())
  }
  map.setFitView()
}

/**
 * 绘制区域
 */
const drawPolygon = (): void => {
  const map = state.map
  const data = polygonList
  const polygonStyle = {
    strokeColor: '#2b8cbe', // 线颜色
    strokeOpacity: 1, // 线透明度
    strokeWeight: 3, // 线宽
    strokeStyle: 'dashed', // 线样式
    strokeDasharray: [5, 5],
    fillColor: '#ccebc5', // 填充色
    fillOpacity: 0.5, // 填充透明度
  }
  data.forEach((item) => {
    // 处理边界经纬度
    const tempArr = item.latiAndLongi.split(';')
    const path = []
    for (let i = 0; i < tempArr.length; i++) {
      if (tempArr[i].trim() === '' || tempArr === null) {
        continue
      }
      const t = tempArr[i].split(',')
      path.push(t)
    }
    // 创建多边形（Polygon）实例
    const polygon = new AMap.Polygon({
      path: path,
      content: '<div class="custom-content-label">' + item.Name + '</div>', //自定义点标记覆盖物内容
      ...polygonStyle,
    })
    // 鼠标移入
    polygon.on('mouseover', () => {
      polygon.setOptions({
        fillOpacity: 0.7,
        fillColor: '#7bccc4',
      })
    })
    // 鼠标移出
    polygon.on('mouseout', () => {
      polygon.setOptions({
        fillOpacity: 0.5,
        fillColor: '#ccebc5',
      })
    })

    // 处理中心点经纬度
    const center = item.center.split(',')
    // 创建标记点（Marker）实例
    const marker = new AMap.Marker({
      map,
      position: [center[0], center[1]], //基点位置
      offset: new AMap.Pixel(0, 0), //相对于基点的偏移位置
      draggable: false, //是否可拖动
      icon: new AMap.Icon({ image: '' }),
      content: '<div class="custom-content-label">' + item.name + '</div>', //自定义点标记覆盖物内容
    })
    // 添加多边形、标记点
    map.add(polygon)
    map.add(marker)
  })
}

/**
 * 鄞州
 */
const drawYinzhou = (): void => {
  const map = state.map
  const data = yinzhou
  const polygons = []
  const lable = []

  for (const i in data.features) {
    const lines = data.features[i].geometry.coordinates
    for (const j in lines) {
      const line = lines[j]
      // gps：GPS 坐标转为高德坐标；mapbar：图吧坐标转为高德坐标；baidu：百度坐标转为高德坐标；
      AMap.convertFrom(line, 'gps', function (status, result) {
        if (result.info === 'ok') {
          const poly = new AMap.Polygon({
            path: result.locations,
            strokeColor: '#0288d1',
            strokeWeight: 2,
            strokeOpacity: 0.7,
            fillOpacity: 0.2,
            fillColor: '#1791fc',
            zIndex: 50,
          })
          map.add(poly)
          map.setFitView(poly)
        }
      })

      // 添加自定义点标记
      const marker = new AMap.Marker({
        map: map,
        position: lines[0][2], //基点位置
        offset: new AMap.Pixel(-17, -17), //相对于基点的偏移位置
        draggable: false, //是否可拖动
        icon: new AMap.Icon({
          image: '',
        }),
        content: '<div class="custom-content-label">' + data.features[i].properties.name + '</div>', //自定义点标记覆盖物内容
      })
      lable.push(marker)
    }
    map.add(lable)
  }
}

onMounted(() => {
  init()
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
