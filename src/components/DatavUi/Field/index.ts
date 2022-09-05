import type { App } from 'vue'
import type { SFCWithInstall } from '../types'
import Field from './src/FieldList.vue'

Field.install = (app: App): void => {
  app.component('DField', Field)
}

export default Field as SFCWithInstall<typeof Field>
