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
    <n-pagination
      v-model:page="page"
      :page-count="100"
      size="small"
      show-quick-jumper
      show-size-picker />
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
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useCurrentInstance from '@/hooks/useCurrentInstance'
const { proxy } = useCurrentInstance()
const label = proxy.$t('test.text')
const timestamp = ref(1183135260000)
const page = ref(2)

const value = ref('2021-10-29')
const currentPage = ref(4)
const pageSize = ref(100)
</script>

<style scoped></style>
