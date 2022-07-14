<template>
  <n-divider title-placement="left">{{ title }}</n-divider>
  <template v-if="icons.length === 0">
    <n-empty description="暂无图标">
      <template #icon>
        <svg-icon name="no-data-file"></svg-icon>
      </template>
    </n-empty>
  </template>
  <template v-else>
    <n-grid :x-gap="10" :y-gap="10" cols="2 400:4 600:6 800:8 1000:10 1200:12">
      <n-grid-item v-for="icon in icons" :key="icon">
        <div class="icon-wrap">
          <svg-icon :name="icon"></svg-icon>
          <p>{{ icon }}</p>
        </div>
      </n-grid-item>
    </n-grid>
  </template>
</template>

<script setup lang="ts">
// 接收父组件参数（采用ts专有声明，有默认值）
interface ParentProps {
  title?: string
  icons?: any[]
}
const props = withDefaults(defineProps<ParentProps>(), {
  title: '',
  icons: () => [],
})
</script>

<style lang="scss" scoped>
.n-empty {
  :deep(.n-empty__icon) {
    height: 2rem;
    width: 2rem;
    font-size: 2rem;
  }
}
.icon-wrap {
  font-size: 0.36rem;
  border: 1px solid rgb(239, 239, 245);
  text-align: center;
  padding: 0.1rem;
  border-radius: 0.03rem;
  cursor: pointer;
  transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  p {
    font-size: 0.14rem;
    padding: 0.06rem 0;
  }
  &:hover {
    box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.08), 0 3px 6px 0 rgba(0, 0, 0, 0.06), 0 5px 12px 4px rgba(0, 0, 0, 0.04);
  }
}
</style>
