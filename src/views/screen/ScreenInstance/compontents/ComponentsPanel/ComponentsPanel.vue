<template>
  <div class="screen-panel-wrap">
    <div class="panel-head">全部组件</div>
    <div class="panel-content">
      <el-tabs tab-position="left" class="screen-tabs has-icon">
        <el-tab-pane v-for="cate in categories" :key="cate.type">
          <template #label>
            <n-tooltip placement="left" :delay="500" class="screen-tip">
              <template #trigger>
                <div>
                  <svg-icon :name="cate.icon" class="tab-icon" />
                  <span class="tab-title">{{ cate.name }}</span>
                </div>
              </template>
              {{ cate.name }}
            </n-tooltip>
          </template>
          <el-tabs v-if="cate.data.length > 0" tab-position="left" class="no-icon">
            <el-tab-pane v-for="subcate in cate.data" :key="subcate.type">
              <template #label>
                <span class="tab-title">{{ subcate.name }}</span>
              </template>
              <n-scrollbar style="height: 100%">
                <div class="menu-wrap">
                  <ul class="menu-list">
                    <li v-for="com in subcate.data" :key="com.name" :title="com.alias" :draggable="com.used" class="menu-item double">
                      <div class="item-text">{{ com.alias }}</div>
                      <div class="item-img" :style="`background-image: url(src/assets/images${com.img});`"></div>
                    </li>
                  </ul>
                </div>
              </n-scrollbar>
            </el-tab-pane>
          </el-tabs>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { cloneDeep } from 'lodash-es'
import { classifications } from './component.ts'

type CategoryType = typeof classifications[0]
const cloneCfs: CategoryType[] = cloneDeep(classifications)
const first = { type: 'all', name: '全部', icon: 'view-grid' }

const categories = computed(() => {
  const list: CategoryType[] = cloneCfs
  list.forEach((item) => {
    item.data.unshift({
      ...first,
      data: item.data.flatMap((m: CategoryType) => m.data),
    })
  })
  return list
})
</script>

<style lang="scss">
@import './index.scss';
</style>
