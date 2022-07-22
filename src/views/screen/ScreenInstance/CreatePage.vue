<template>
  <n-layout class="screen-create-wrapper">
    <!-- header 顶部 -->
    <n-layout-header class="screen-create-header"></n-layout-header>
    <!-- main 主体 -->
    <n-layout has-sider class="screen-create-main">
      <!-- left sider 左边侧栏 -->
      <n-layout-sider
        class="screen-create-left-panel"
        collapse-mode="width"
        :collapsed-width="10"
        :width="240"
        show-trigger="arrow-circle"
        :show-collapsed-content="false"
        bordered>
      </n-layout-sider>
      <n-layout has-sider sider-placement="right">
        <n-layout>
          <!-- content 内容 -->
          <n-layout-content class="screen-create-content"> </n-layout-content>
          <!-- footer 底部 -->
          <n-layout-footer class="screen-create-footer">
            <create-footer></create-footer>
          </n-layout-footer>
        </n-layout>
        <!-- right sider 右边侧栏 -->
        <n-layout-sider
          class="screen-create-right-panel"
          collapse-mode="width"
          :collapsed-width="10"
          :width="240"
          show-trigger="arrow-circle"
          :show-collapsed-content="false"
          bordered>
        </n-layout-sider>
      </n-layout>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import CreateFooter from './compontents/CreateFooter.vue'
</script>

<style lang="scss">
@import './index.scss';
</style>
