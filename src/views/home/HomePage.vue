<template>
  <div>
    home
    <br />
    {{ label }}
    <br />
    <h4>Naive UI国际化测试</h4>
    <br />
    <n-date-picker v-model:value="timestamp" type="date" clearable />
    <br />
    <n-switch :size="settingStore.size" />
    <br />
    <n-pagination v-model:page="page" :page-count="100" show-quick-jumper show-size-picker />
    <br />
    <br />
    <h4>Element plus国际化测试</h4>
    <br />
    <el-date-picker v-model="value" type="date" placeholder="Pick a day" />
    <br />
    <el-pagination
      v-model:currentPage="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[100, 200, 300, 400]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400" />
    <h4>svg 图标使用</h4>
    <i style="font-size: 32px; color: #155bcd">
      <svg-icon name="logistics-track" />
    </i>
    <n-button @click="setLocalCache">set LocalCache</n-button>
    <n-button @click="getLocalCache">get LocalCache</n-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useCurrentInstance from '@/hooks/useCurrentInstance'
import { useSettingStore } from '@/store/modules/setting'
import { LocalCache } from '@/utils/cache'
// 系统配置
const settingStore = useSettingStore()

const { proxy } = useCurrentInstance()
const label = proxy.$t('test.text')
const timestamp = ref(1183135260000)
const page = ref(2)

const value = ref('2021-10-29')
const currentPage = ref(4)
const pageSize = ref(100)

const setLocalCache = () => {
  LocalCache.setItem('aaa', 'bbb', 5)
}
const getLocalCache = () => {
  const a = LocalCache.getItem('aaa')
}
</script>

<style scoped></style>
