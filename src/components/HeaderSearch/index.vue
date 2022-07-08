<template>
  <div :class="{ show: isShow }" class="header-search" @click.stop="isShow = true">
    <n-icon id="guide-search" size="0.24rem" class="search-icon" @click.stop="onShowClick">
      <Search></Search>
    </n-icon>
    <n-select
      ref="headerSearchSelectRef"
      v-model:value="search"
      class="header-search-select"
      filterable
      placeholder="搜索内容"
      :options="searchOptions"
      :loading="loading"
      clearable
      remote
      @search="handleSearch"
      @update:value="handleUpdateValue" />
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { SelectInst, SelectOption } from 'naive-ui'
import Fuse from 'fuse.js'
import { filterRouters } from '@/utils/route'
import { watchSwitchLang } from '@/utils/i18n'
import { generateRoutes } from './FuseData'
import { FuseItem, SelectItem } from './types'

// TODO: 还需完善
const loading = ref<boolean>(false)
// 控制 search 显示
const isShow = ref(false)
// el-select 实例
const headerSearchSelectRef = ref<SelectInst | null>(null)
const onShowClick = () => {
  isShow.value = !isShow.value
  headerSearchSelectRef.value?.focus()
}

// search 相关
const search = ref('')
// 搜索结果
const searchOptions = ref([])
// 搜索方法
const handleSearch = (query: string) => {
  loading.value = true
  if (query !== '') {
    searchOptions.value = fuse.search(query).map((item: FuseItem) => {
      return {
        label: item.item.title.join(' > '),
        value: item.item,
      }
    })
  } else {
    searchOptions.value = []
  }
  loading.value = false
}
// 选中回调
const handleUpdateValue = (val: SelectItem) => {
  router.push(val.path)
  onClose()
}

// 检索数据源
const router = useRouter()
let searchPool = computed(() => {
  const filterRoutes = filterRouters(router.getRoutes())
  return generateRoutes(filterRoutes)
})
/**
 * 搜索库相关
 */
let fuse: any
const initFuse = (searchPool: any) => {
  fuse = new Fuse(searchPool, {
    // 是否按优先级进行排序
    shouldSort: true,
    // 匹配算法放弃的时机， 阈值 0.0 需要完美匹配（字母和位置），阈值 1.0 将匹配任何内容。
    threshold: 0.4,
    // 匹配长度超过这个值的才会被认为是匹配的
    minMatchCharLength: 1,
    // 将被搜索的键列表。 这支持嵌套路径、加权搜索、在字符串和对象数组中搜索。
    // name：搜索的键
    // weight：对应的权重
    keys: [
      {
        name: 'title',
        weight: 0.7,
      },
      {
        name: 'path',
        weight: 0.3,
      },
    ],
  })
}
initFuse(searchPool.value)

/**
 * 关闭 search 的处理事件
 */
const onClose = () => {
  headerSearchSelectRef.value?.blur()
  isShow.value = false
  searchOptions.value = []
}
/**
 * 监听 search 打开，处理 close 事件
 */
watch(isShow, (val) => {
  if (val) {
    document.body.addEventListener('click', onClose)
  } else {
    document.body.removeEventListener('click', onClose)
  }
})

// 处理国际化
watchSwitchLang(() => {
  searchPool = computed(() => {
    const filterRoutes = filterRouters(router.getRoutes())
    return generateRoutes(filterRoutes)
  })
  initFuse(searchPool.value)
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
