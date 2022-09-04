import type { App } from 'vue'
import DBasicText from './BaseComp/Text/BasicText'
const components = [DBasicText]

const install = (app: App): void => {
  components.forEach((component) => {
    app.use(component)
  })
}

export default {
  install,
}
