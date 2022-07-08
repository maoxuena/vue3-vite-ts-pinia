<template>
  <canvas id="canvas-bg1" :width="width" :height="height"></canvas>
</template>

<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'

// 接收父组件参数（采用ts专有声明，有默认值）
interface ParentProps {
  width?: number
  height?: number
}
const props = withDefaults(defineProps<ParentProps>(), {
  width: 400,
  height: 300,
})

const w = ref<number>(0)
const h = ref<number>(0)
const hue = ref<number>(217)
const stars = ref<any[]>([])
const count = ref<number>(0)
const maxStars = ref<number>(2500) //星星数量
const canvas = ref<any>(null)
const ctx = ref<any>(null)
const canvas2 = ref<any>(null)
const ctx2 = ref<any>(null)

watch(
  () => [props.width, props.height],
  ([newWidth, newHeight], [oldWidth, oldHeight]) => {
    w.value = newWidth
    h.value = newHeight
    init(w.value, h.value)
    for (let i = 0; i < maxStars.value; i++) {
      count.value++
      stars.value[count.value] = new Star(w.value, h.value, maxStars.value)
    }
    animation()
  }
)

// 初始化画布
const init = (w: number, h: number): void => {
  canvas.value = document.getElementById('canvas-bg1')
  ctx.value = canvas.value.getContext('2d')

  canvas2.value = document.createElement('canvas')
  ctx2.value = canvas2.value.getContext('2d')
  canvas2.value.width = w
  canvas2.value.height = h
  const half = canvas2.value.width / 2
  const gradient2 = ctx2.value.createRadialGradient(half, half, 0, half, half, half)
  gradient2.addColorStop(0.025, '#CCC')
  gradient2.addColorStop(0.1, 'hsl(' + hue.value + ', 61%, 33%)')
  gradient2.addColorStop(0.25, 'hsl(' + hue.value + ', 64%, 6%)')
  gradient2.addColorStop(1, 'transparent')

  ctx2.value.fillStyle = gradient2
  ctx2.value.beginPath()
  ctx2.value.arc(half, half, half, 0, Math.PI * 2)
  ctx2.value.fill()
}

// 随机数
const random = (min = 0, max = 0): number => {
  if (min > max) {
    const hold = max
    max = min
    min = hold
  }
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * 星星移动范围，返回值越大范围越小，
 */
const maxOrbit = (x: number, y: number): number => {
  const max = Math.max(x, y)
  const diameter = Math.round(Math.sqrt(max * max + max * max))
  return diameter / 2
}

// 动画
const animation = (): void => {
  ctx.value.globalCompositeOperation = 'source-over'
  ctx.value.globalAlpha = 0.5 // 尾巴
  ctx.value.fillStyle = 'hsla(' + hue.value + ', 64%, 6%, 2)'
  ctx.value.fillRect(0, 0, w.value, h.value)
  ctx.value.globalCompositeOperation = 'lighter'
  for (let i = 1, l = stars.value.length; i < l; i++) {
    stars.value[i].draw()
  }
  window.requestAnimationFrame(animation)
}

class Star {
  orbitRadius: number
  radius: number
  orbitX: number
  orbitY: number
  timePassed: number
  speed: number
  alpha: number
  constructor(w: number, h: number, maxStars: number) {
    this.orbitRadius = random(maxOrbit(w, h))
    this.radius = random(60, this.orbitRadius) / 18
    //星星大小
    this.orbitX = w / 2
    this.orbitY = h / 2
    this.timePassed = random(0, maxStars)
    this.speed = random(this.orbitRadius) / 500000
    //星星移动速度
    this.alpha = random(2, 10) / 10
  }
  draw() {
    const x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX
    const y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY
    const twinkle = random(10)

    if (twinkle === 1 && this.alpha > 0) {
      this.alpha -= 0.05
    } else if (twinkle === 2 && this.alpha < 1) {
      this.alpha += 0.05
    }
    ctx.value.globalAlpha = this.alpha
    ctx.value.drawImage(canvas2.value, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius)
    this.timePassed += this.speed
  }
}
</script>

<style scoped></style>
