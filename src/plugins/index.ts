import { App } from 'vue'
import { setupNaive } from '@/plugins/naive'
export function setupApp(app: App): void {
  setupNaive(app)
}
