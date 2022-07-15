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
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
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
</script>

<style scoped></style>
