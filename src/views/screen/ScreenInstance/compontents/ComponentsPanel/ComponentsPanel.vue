<template>
  <div class="screen-panel-wrap">
    <div class="panel-head">全部组件</div>
    <div class="panel-content" @dragover="dragOver">
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
                    <li
                      v-for="com in subcate.data"
                      :key="com.name"
                      :title="com.alias"
                      :draggable="com.used"
                      class="menu-item double"
                      @dragstart="dragStart($event, com.name)"
                      @click="toAddCom(com.name, com.used)">
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
import { useMessage } from 'naive-ui'
import { useScreenStore } from '@/store/modules/screen'
import { classifications } from '@/data/datav'
import { createComponent } from '@/components/DatavUi/datav'

const message = useMessage()
const screenStore = useScreenStore()

type CategoryType = typeof classifications[0]
const cloneCfs: CategoryType[] = cloneDeep(classifications)
const first = { type: 'all', name: '全部', icon: 'view-grid' }

const categories = computed(() => {
  const list: CategoryType[] = cloneCfs
  list.forEach((item) => {
    item.data.unshift({
      ...first,
      data: item.data.flatMap((m) => m.data),
    })
  })
  return list
})

const toAddCom = async (comName: string, used: boolean) => {
  if (used) {
    screenStore.addLoading()
    const com = await createComponent(comName)
    com.attr.x = Math.floor((screenStore.pageConfig.width - com.attr.width) / 2)
    com.attr.y = Math.floor((screenStore.pageConfig.height - com.attr.height) / 2)
    await screenStore.addCom(com)
    screenStore.selectCom(com.id)
    screenStore.removeLoading()
  } else {
    message.warning('正在开发中。。。')
  }
}

const dragStart = (ev: DragEvent, comName: string) => {
  ev.dataTransfer.setData('text', comName)
}

const dragOver = (ev: DragEvent) => {
  ev.preventDefault()
  ev.stopPropagation()
  ev.dataTransfer.dropEffect = 'none'
}
</script>

<style lang="scss">
@import './index.scss';
</style>
