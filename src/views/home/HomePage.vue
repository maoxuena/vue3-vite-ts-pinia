<template>
  <div>
    home
    <br />
    {{ label }}
    <br />
    <n-divider title-placement="left">Naive UI国际化测试</n-divider>
    <br />
    <n-date-picker v-model:value="timestamp" type="date" clearable />
    <br />
    <n-switch :size="settingStore.size" />
    <br />
    <n-pagination v-model:page="page" :page-count="100" show-quick-jumper show-size-picker />
    <br />
    <br />
    <n-divider title-placement="left">Element plus国际化测试</n-divider>
    <br />
    <el-date-picker v-model="value" type="date" placeholder="Pick a day" />
    <br />
    <el-pagination
      v-model:currentPage="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[100, 200, 300, 400]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400" />
    <n-divider title-placement="left">svg 图标使用</n-divider>
    <i style="font-size: 32px; color: #155bcd">
      <svg-icon name="logistics-track" />
    </i>
    <n-divider title-placement="left">按钮级权限控制</n-divider>
    <n-button v-permission="{ action: ['system:user:add'], effect: 'disabled' }">新增</n-button>
    <n-button v-permission="{ action: ['system:user:edit'], effect: 'disabled' }">编辑</n-button>
    <n-button v-permission="{ action: ['system:user:remove'], effect: 'disabled' }">删除</n-button>
    <n-divider title-placement="left">点击当前区域之外的位置</n-divider>
    <n-card v-click-outside="handleClickOutside" title="点击当前区域之外的位置" hoverable @click="handleClickInside">
      {{ clickText }}
    </n-card>
    <n-divider title-placement="left">水印测试</n-divider>
    <n-card v-water-mark="waterMark" title="水印测试" hoverable>
      <p>卡片内容</p>
      <p>卡片内容</p>
      <p>卡片内容</p>
      <p>卡片内容</p>
      <p>卡片内容</p>
      <p>卡片内容</p>
    </n-card>
    <n-divider title-placement="left">DataV 组件使用</n-divider>
    <d-basic-text :com="com"></d-basic-text>
    <d-async-loading></d-async-loading>
    <n-divider title-placement="left">Token 过期/重复请求</n-divider>
    <n-button @click="tokenExpired">Token 过期</n-button>
    <n-button @click="repeatRequest">重复请求</n-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { limitRequest } from '@/service/http'
import loginApi from '@/service/api/login/login'
import useCurrentInstance from '@/hooks/useCurrentInstance'
import { useSettingStore } from '@/store/modules/setting'
// 系统配置
const settingStore = useSettingStore()

const { proxy } = useCurrentInstance()
const label = proxy.$t('test.text')
const timestamp = ref(1183135260000)
const page = ref(2)

const value = ref('2021-10-29')
const currentPage = ref(4)
const pageSize = ref(100)

const clickText = ref<string>('')
const handleClickOutside = (): void => {
  clickText.value = '点击当前区域之外的位置'
}
const handleClickInside = (): void => {
  clickText.value = '点击当前区域之内的位置'
}

const waterMark = ref({
  text: '水印测试',
  style: {
    font: '24px Microsoft YaHei', // 文字大小及字体
    textColor: 'rgba(34, 200, 200, 0.3)', // 水印颜色
    rotate: -10, // 旋转角度
    rowLength: 120, // 每个水印高度
    colLength: 160, // 每个水印宽度
  },
})

// 限制axios并发请求测试
limitRequest.limitGet('/getUserInfo').then((res) => {
  console.log(16, res)
})
limitRequest.limitGet('/getUserInfo').then((res) => {
  console.log(26, res)
})
limitRequest.limitGet('/getUserInfo').then((res) => {
  console.log(36, res)
})
limitRequest.limitGet('/getUserInfo').then((res) => {
  console.log(46, res)
})

const repeatRequest = () => {
  loginApi.getUserInfo()
  setTimeout(() => {
    loginApi.getUserInfo()
  }, 100)
}

const tokenExpired = () => {
  limitRequest.limitGet('/tokenExpired').then((res) => {
    console.log(16, res)
  })
  setTimeout(() => {
    loginApi.getUserInfo()
  }, 200)
}

const com = ref({
  attr: {
    width: 200,
    height: 30,
  },
  config: {
    title: '我是标题数据',
    textStyle: {
      fontFamily: 'Microsoft Yahei',
      fontSize: 24,
      color: '#000',
      fontWeight: 'normal',
    },
    textAlign: 'center',
    writingMode: 'horizontal-tb',
    letterSpacing: 0,
    backgroundStyle: {
      show: false,
      bgColor: '#008bff',
      borderRadius: 15,
      borderColor: '#fff',
      borderStyle: 'solid',
      borderWidth: 1,
    },
    ellipsis: false,
    urlConfig: {
      url: '',
      isBlank: false,
    },
  },
})
</script>

<style scoped></style>
