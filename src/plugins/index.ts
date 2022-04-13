import { App } from 'vue'
import { setupNaive } from './naive'
import { setupElement } from './element'
export function setupApp(app: App): void {
  setupNaive(app)
  setupElement(app)
}
