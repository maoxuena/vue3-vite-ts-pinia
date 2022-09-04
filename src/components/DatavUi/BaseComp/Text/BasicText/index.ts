import type { App } from 'vue'
import type { SFCWithInstall } from '../../../types'
import { loadAsyncComponent } from '../../../asyncComponent'
import BasicText from './src/BasicText.vue'

BasicText.install = (app: App): void => {
  app.component('DBasicText', BasicText)
  app.component(
    'DBasicTextProp',
    loadAsyncComponent(() => import('./src/ConfigPage.vue'))
  )
}

export default BasicText as SFCWithInstall<typeof BasicText>
