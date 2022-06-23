import { rootList } from '@/config/setting'
import { camelToDash } from './index'
/**
 * 将传递的百分比与十六进制颜色的 R、G 或 B 相加
 * @param {string} color 要更改的颜色
 * @param {number} amount 更改颜色的量
 * @returns {string} 颜色的加工部分
 */
function addLight(color: string, amount: number) {
  const cc = parseInt(color, 16) + amount
  const c = cc > 255 ? 255 : cc < 0 ? 0 : cc
  return c.toString(16).length > 1 ? c.toString(16) : `0${c.toString(16)}`
}

/**
 * 根据通过的百分比淡化8个字符的十六进制颜色
 * @param {string} color 要更改的颜色
 * @param {number} amount 更改颜色的量
 * @returns {string} 处理后的十六进制颜色
 */
export function lighten(color: string, amount: number) {
  color = color.indexOf('#') >= 0 ? color.substring(1, color.length) : color
  amount = Math.trunc((255 * amount) / 100) // 将数字的小数部分去掉,只保留整数部分
  return `#${addLight(color.substring(0, 2), amount)}${addLight(color.substring(2, 4), amount)}${addLight(
    color.substring(4, 6),
    amount
  )}${color.substring(6, 8)}`
}

/**
 * 动态改变指定变量的颜色值
 * @param key
 * @param color
 * @returns
 */
export function getChangeColor(key: string, color: string) {
  const target = rootList.filter((item) => item.key === key)
  return lighten(color, target[0].value)
}

/**
 * 动态改变 :root 中的变量值
 * @param color
 */
export function updateRoot(color: string) {
  rootList.forEach((item) => {
    const key = `--${camelToDash(item.key)}`
    const value = lighten(color, item.value)
    document.documentElement.style.setProperty(key, value)
  })
}
