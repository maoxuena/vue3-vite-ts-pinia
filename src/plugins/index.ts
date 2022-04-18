import { App } from 'vue'
import { setupNaive } from './naive'
import { setupNaiveIcon } from './naive-icon'
import { setupElement } from './element'
export function setupApp(app: App): void {
  setupNaive(app)
  setupNaiveIcon(app)
  setupElement(app)
}
