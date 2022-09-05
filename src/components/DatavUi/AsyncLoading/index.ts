import type { App } from 'vue'
import type { SFCWithInstall } from '../types'
import AsyncLoading from './src/AsyncLoading.vue'

AsyncLoading.install = (app: App): void => {
  app.component('DAsyncLoading', AsyncLoading)
}

export default AsyncLoading as SFCWithInstall<typeof AsyncLoading>
