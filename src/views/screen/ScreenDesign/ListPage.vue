<template>
  <n-button type="primary" @click="handleOpen">
    <template #icon>
      <n-icon><add /></n-icon>
    </template>
    新建
  </n-button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const handleOpen = (): void => {
  const routeUrl = router.resolve({
    path: '/screenInstance/create',
  })
  window.open(routeUrl.href, '_blank')
}
</script>

<style scoped></style>
