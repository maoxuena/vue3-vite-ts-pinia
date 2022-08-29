import { defineStore } from 'pinia'
import { debounce } from 'lodash-es'
import { createStorage } from '@/utils/storage'
const Storage = createStorage({ storage: localStorage })

enum ZoomMode {
  // 全屏铺满
  auto,
  // 等比缩放宽度铺满
  width,
  // 等比缩放高度铺满
  height,
  // 等比缩放高度铺满并且可以左右移动
  full,
  // 不缩放
  disabled,
}

interface Project {
  id: number
  name: string
  share: string
  thumbnail: string
  groupId: number
  createAt: string
  updateAt: string
  config?: any
}

interface PageStyleFilter {
  enable: boolean
  hue: number
  saturate: number
  brightness: number
  contrast: number
  opacity: number
}

interface PageConfig {
  width: number
  height: number
  bgcolor: string
  bgimage: string
  grid: number
  screenshot: string
  zoomMode: ZoomMode
  useWatermark: boolean
  styleFilterParams: PageStyleFilter
}

interface ScreenState {
  editMode: boolean
  screen: Partial<Project>
  pageConfig: PageConfig
  canvas: {
    scale: number
    width: number
    height: number
  }
  guideLine: {
    h: number[]
    v: number[]
  }
  panel: {
    left?: string
    right?: string
  }
}

export const useScreenStore = defineStore({
  id: 'screen',
  state: (): ScreenState => ({
    editMode: false,
    screen: {
      id: 0,
      name: '标题',
      share: '',
      thumbnail: '',
      groupId: 0,
    },
    pageConfig: {
      width: 1920,
      height: 1080,
      bgcolor: 'rgba(13,42,67,0)',
      bgimage: 'src/assets/images/screen/bj.png',
      grid: 8,
      screenshot: '',
      zoomMode: 1,
      useWatermark: true,
      styleFilterParams: {
        enable: false,
        hue: 0,
        saturate: 100,
        brightness: 100,
        contrast: 100,
        opacity: 100,
      },
    },
    canvas: {
      scale: 0.2,
      width: 1920,
      height: 1080,
    },
    guideLine: {
      h: [],
      v: [],
    },
    panel: {
      left: Storage.get('SCREEN-PANEL', { left: '1', right: '1' }).left,
      right: Storage.get('SCREEN-PANEL', { left: '1', right: '1' }).right,
    },
  }),
  getters: {
    getPanelOffsetX(state) {
      let offsetX = 0
      if (state.panel.left === '1') {
        offsetX += 240
      }

      if (state.panel.right === '1') {
        offsetX += 300
      }

      return offsetX
    },
    getPanelOffsetY(state) {
      const offsetY = 0
      return offsetY
    },
  },
  actions: {
    setEditorOption(payload: {
      screen?: Partial<Project>
      config?: Partial<PageConfig>
      guideLine?: {
        h: number[]
        v: number[]
      }
      panel?: {
        left?: string
        right?: string
      }
    }) {
      if (payload.screen) {
        this.screen = { ...this.screen, ...payload.screen }
      }

      if (payload.config) {
        this.pageConfig = { ...this.pageConfig, ...payload.config }
      }

      if (payload.guideLine) {
        this.guideLine = { ...payload.guideLine }
      }

      if (payload.panel) {
        this.panel = { ...this.panel, ...payload.panel }
        Storage.set('SCREEN-PANEL', this.panel)
      }
    },
    async autoScale(payload: () => { offsetX: number; offsetY: number }) {
      const resize = debounce(() => {
        const offset = payload()
        const width = document.documentElement.clientWidth - offset.offsetX
        const height = document.documentElement.clientHeight - 42 - 32 - offset.offsetY

        const a = (width - 120) / this.pageConfig.width
        const b = (height - 140) / this.pageConfig.height
        const scale = parseFloat((a > b ? b : a).toFixed(6)) * 100

        this.setScale(scale, offset.offsetX, offset.offsetY)
      }, 200)

      window.onresize = resize

      resize()
    },
    async setScale(scale: number, offsetX: number, offsetY: number) {
      let width = document.documentElement.clientWidth - offsetX
      let height = document.documentElement.clientHeight - 42 - 32 - offsetY
      const deltaS = Math.min(Math.max(scale, 10), 200) / 100

      // 方便计算滚动条 和 标尺
      const deltaW = this.pageConfig.width * deltaS
      const deltaH = this.pageConfig.height * deltaS
      if (width < deltaW) {
        width = deltaW + 400
      }

      if (height < deltaH) {
        height = deltaH + 400
      }

      this.canvas = { scale: deltaS, width, height }
    },
  },
})
