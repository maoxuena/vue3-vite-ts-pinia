<template>
  <n-config-provider :theme="darkTheme" :theme-overrides="themeOverrides" abstract>
    <n-layout class="screen-create-wrapper">
      <!-- header 顶部 -->
      <n-layout-header class="screen-create-header">
        <create-header></create-header>
      </n-layout-header>
      <!-- main 主体 -->
      <n-layout has-sider class="screen-create-main">
        <!-- left sider 左边侧栏 -->
        <n-layout-sider
          class="screen-create-left-panel"
          collapse-mode="width"
          :collapsed="collapsedLeft"
          :collapsed-width="0"
          :width="240"
          :show-collapsed-content="true">
          <components-panel></components-panel>
        </n-layout-sider>
        <n-layout has-sider sider-placement="right">
          <n-layout>
            <!-- content 内容 -->
            <n-layout-content class="screen-create-content">
              <create-main></create-main>
            </n-layout-content>
            <!-- footer 底部 -->
            <n-layout-footer class="screen-create-footer">
              <create-footer></create-footer>
            </n-layout-footer>
          </n-layout>
          <!-- right sider 右边侧栏 -->
          <n-layout-sider
            class="screen-create-right-panel"
            collapse-mode="width"
            :collapsed="collapsedRight"
            :collapsed-width="0"
            :width="300"
            :show-collapsed-content="true">
            <n-tabs v-if="!selectedCom" class="config-tabs tabs-num-2" type="card" display-directive="show:lazy">
              <n-tab-pane name="pageConfig" tab="页面设置" display-directive="show:lazy">
                <page-config></page-config>
              </n-tab-pane>
              <n-tab-pane name="layout" tab="图层" display-directive="show:lazy"> 图层 </n-tab-pane>
            </n-tabs>
            <n-tabs v-else class="config-tabs tabs-num-3" type="card" display-directive="show:lazy">
              <n-tab-pane name="config" tab="配置" display-directive="show:lazy">
                <setting-panel :com="selectedCom"></setting-panel>
              </n-tab-pane>
              <n-tab-pane name="data" tab="数据" display-directive="show:lazy">
                <data-panel :key="selectedCom.id"></data-panel>
              </n-tab-pane>
              <n-tab-pane name="interaction" tab="交互" display-directive="show:lazy">
                <interaction-panel :key="selectedCom.id"></interaction-panel>
              </n-tab-pane>
            </n-tabs>
          </n-layout-sider>
        </n-layout>
      </n-layout>
    </n-layout>
  </n-config-provider>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { darkTheme } from 'naive-ui'
import { storeToRefs } from 'pinia'
import { useScreenStore } from '@/store/modules/screen'
import CreateHeader from './compontents/CreateHeader/CreateHeader.vue'
import CreateMain from './compontents/CreateMain/CreateMain.vue'
import CreateFooter from './compontents/CreateFooter/CreateFooter.vue'
import ComponentsPanel from './compontents/ComponentsPanel/ComponentsPanel.vue'
import PageConfig from './compontents/PageConfig/PageConfig.vue'
import settingPanel from './compontents/ComponentsConfig/SettingPanel.vue'
import dataPanel from './compontents/ComponentsConfig/DataPanel.vue'
import interactionPanel from './compontents/ComponentsConfig/InteractionPanel.vue'

const screenStore = useScreenStore()
const { panel } = storeToRefs(screenStore)

// 当前是否选择组件
const selectedCom = computed(() => screenStore.selectedCom)

// 侧边栏是否折叠
const collapsedLeft = computed(() => {
  return panel.value.left === '0'
})
const collapsedRight = computed(() => {
  return panel.value.right === '0'
})

// 主题配置
const themeOverrides = {
  common: {
    fontSizeMedium: '0.12rem',
    heightMedium: '0.28rem',
  },
  Button: {
    fontSizeMedium: '0.12rem',
    heightMedium: '0.28rem',
    iconSizeMedium: '0.12rem',
  },
  Input: {
    fontSizeMedium: '0.12rem',
  },
}

onMounted(async () => {
  screenStore.autoScale(() => ({
    offsetX: screenStore.getPanelOffsetX,
    offsetY: screenStore.getPanelOffsetY,
  }))
})
</script>

<style lang="scss">
@import './index.scss';
</style>
