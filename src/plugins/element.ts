import 'element-plus/theme-chalk/base.css'
import { App } from 'vue'
import {
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge,
} from 'element-plus'

const components = [
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge,
]

export function setupElement(app: App): void {
  for (const cpn of components) {
    app.component(cpn.name, cpn)
  }
}
