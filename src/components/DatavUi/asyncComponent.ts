import { defineAsyncComponent, AsyncComponentLoader } from 'vue'
import AsyncLoading from './AsyncLoading/src/AsyncLoading.vue'

export const loadAsyncComponent = (loader: AsyncComponentLoader<any>) =>
  defineAsyncComponent({
    loader,
    loadingComponent: AsyncLoading,
    delay: 20,
  })
