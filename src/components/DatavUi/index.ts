import type { App } from 'vue'
import DAsyncLoading from './AsyncLoading'
import DField from './Field'
import DBasicText from './BaseComp/Text/BasicText'
const components = [DAsyncLoading, DField, DBasicText]

const install = (app: App): void => {
  components.forEach((component) => {
    app.use(component)
  })
}

export default {
  install,
}
