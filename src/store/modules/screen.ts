import { defineStore } from 'pinia'

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
}

export const useScreenStore = defineStore({
  id: 'screen',
  state: (): ScreenState => ({
    editMode: false,
    screen: {
      id: 0,
      name: '',
      share: '',
      thumbnail: '',
      groupId: 0,
    },
    pageConfig: {
      width: 1920,
      height: 1080,
      bgcolor: '#0e2a43',
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
  }),
  actions: {
    setEditorOption(payload: {
      screen?: Partial<Project>
      config?: Partial<PageConfig>
      guideLine?: {
        h: number[]
        v: number[]
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
    },
  },
})
