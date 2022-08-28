import { App } from 'vue'
import 'element-plus/dist/index.css'
import {
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge,
  ElDatePicker,
  ElPagination,
  ElTabs,
  ElTabPane,
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
  ElDatePicker,
  ElPagination,
  ElTabs,
  ElTabPane,
]

export function setupElement(app: App): void {
  for (const cpn of components) {
    app.component(cpn.name, cpn)
  }
}
