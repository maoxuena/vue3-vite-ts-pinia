import { DirectiveBinding } from 'vue'

interface style {
  font?: string
  textColor?: string
  rotate?: number
  rowLength?: number
  colLength?: number
}

/**
 * 添加水印
 * @param parentNode
 * @param str
 * @param style
 */
function addWaterMarker(parentNode: HTMLDivElement, str: string, style: style) {
  // 水印文字，父元素，字体，文字颜色
  const { font = '16px Microsoft YaHei', textColor = 'rgba(180, 180, 180, 0.3)', rotate = -10, rowLength = 100, colLength = 100 } = style
  const can = document.createElement('canvas')
  parentNode.appendChild(can)
  can.width = parentNode.offsetWidth
  can.height = parentNode.offsetHeight
  can.style.display = 'none'
  const cans = can.getContext('2d')
  cans?.rotate((rotate * Math.PI) / 180)
  cans!.font = font
  cans!.fillStyle = textColor
  cans!.textAlign = 'left'
  cans!.textBaseline = 'middle'
  // 需要遍历添加文字
  for (let row = 0; row < can.height / rowLength; row++) {
    for (let col = 0; col < can.width / colLength; col++) {
      cans?.fillText(str, col * colLength, row * rowLength)
    }
  }
  parentNode.style.backgroundImage = 'url(' + can.toDataURL('image/png') + ')'
}

export const waterMark = {
  mounted(el: HTMLDivElement, binding: DirectiveBinding) {
    const { text, style = {} } = binding.value
    addWaterMarker(el, text, style)
  },
}
