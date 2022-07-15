import { ObjectDirective } from 'vue'
import { usePermission } from '@/hooks/web/usePermission'

export const permission: ObjectDirective = {
  mounted(el: HTMLButtonElement, binding) {
    if (binding.value === undefined) {
      return
    }
    const { action, effect } = binding.value
    const { hasPermission } = usePermission()
    if (!hasPermission(action)) {
      // 仅针对 naive ui 按钮组件
      if (effect === 'disabled') {
        el.disabled = true
        el.classList.add('n-button--disabled')
      } else {
        el.remove()
      }
    }
  },
}
