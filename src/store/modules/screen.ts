import { defineStore } from 'pinia'
import { debounce } from 'lodash-es'
import { ScreenState, Project, PageConfig, DatavComponent } from './types'
import { calcIntersectingLines } from '@/utils/intersecting-line-util'
import { createStorage } from '@/utils/storage'
const Storage = createStorage({ storage: localStorage })

const rule = 20
const header = 48
const footer = 36
const padding = 60

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
    referLine: {
      enable: true,
    },
    alignLine: {
      enable: false,
      show: false,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      vertical: 0,
      horizontal: 0,
    },
    panel: {
      left: Storage.get('SCREEN-PANEL', { left: '1', right: '1' }).left,
      right: Storage.get('SCREEN-PANEL', { left: '1', right: '1' }).right,
    },
    isNormalResizeMode: true,
    coms: [],
    loading: 0,
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
    getPanelOffsetLeft(state) {
      let offsetX = padding
      if (state.panel.left === '1') {
        offsetX += 240
      }
      return offsetX
    },
    getPanelOffsetTop(state) {
      const offsetY = header + padding
      return offsetY
    },
    selectedCom(state) {
      return state.coms.find((m) => m.selected)
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
        const width = document.documentElement.clientWidth - offset.offsetX - rule
        const height = document.documentElement.clientHeight - offset.offsetY - rule - header - footer

        const a = (width - (padding - rule) * 2) / this.pageConfig.width
        const b = (height - (padding - rule) * 2) / this.pageConfig.height
        const scale = parseFloat((a > b ? b : a).toFixed(6)) * 100

        this.setScale(scale, offset.offsetX, offset.offsetY)
      }, 200)

      window.onresize = resize

      resize()
    },
    async setScale(scale: number, offsetX: number, offsetY: number) {
      let width = document.documentElement.clientWidth - offsetX - rule
      let height = document.documentElement.clientHeight - offsetY - rule - header - footer
      const deltaS = Math.min(Math.max(scale, 10), 200) / 100
      // 方便计算滚动条 和 标尺
      const deltaW = this.pageConfig.width * deltaS
      const deltaH = this.pageConfig.height * deltaS
      if (width < deltaW) {
        width = deltaW + padding * 2
      }

      if (height < deltaH) {
        height = deltaH + padding * 2
      }

      this.canvas = { scale: deltaS, width, height }
    },
    calcAlignLine(com: DatavComponent) {
      if (!this.alignLine.enable) {
        return
      }

      const attr = calcIntersectingLines(com, this.coms, this.canvas.scale)
      this.alignLine = { ...this.alignLine, ...attr, show: true }
    },
    hideAlignLine(id: string) {
      if (!this.alignLine.enable) {
        return
      }

      if (this.alignLine.show) {
        this.alignLine.show = false
        this.selectCom(id)
      }
    },
    selectCom(id: string) {
      this.coms.forEach((com) => {
        if (com.id === id) {
          com.selected = true
        } else {
          com.selected = false
        }
        com.hovered = false
      })
    },
    hoverCom(id: string, flag: boolean) {
      this.coms.forEach((com) => {
        if (com.id === id) {
          com.hovered = flag
        }
      })
    },
    async addCom(com: DatavComponent) {
      this.coms.push(com)
    },
    addLoading() {
      this.loading = this.loading + 1
    },
    removeLoading() {
      this.loading = Math.max(this.loading - 1, 0)
    },
    removeAllLoading() {
      this.loading = 0
    },
  },
})
