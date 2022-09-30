import {
  isObject,
  isPlainObject,
  isArray,
  isString,
  hyphenate,
  looseEqual,
} from '@vue/shared'
import shortid from 'shortid'

export {
  isObject, // 包括数组
  isPlainObject, // 不包括数组
  isArray,
  isString,
  looseEqual, // 判断两对象是否相等
}

/**
 * Generate shortId 生成短ID
 */
export const generateId = (prefix?: string) => {
  const id = shortid.generate()
  return prefix ? `${prefix}_${id}` : id
}

/**
 * 大小驼峰转短横线连接
 */
export const kebabCase = hyphenate

/**
 * 小驼峰转短横线
 * @param str
 * @returns
 */
export function camelToDash(str: string) {
  return str.replace(/([A-Z])/g, (match, p1, offset, string) => {
    // 一个捕获组捕获全部，所以match等于p1
    return '-' + p1.toLowerCase()
  })
}

/**
 * 短横线转小驼峰
 * @param str
 * @returns
 */
export function dashToCamel(str: string) {
  return str.replace(/(-([a-z]))/g, (match, p1, p2, offset, string) => {
    // 这里有两个捕获组，第一个捕获组捕获全部并包含了第二个捕获组，所以match等于p1
    return p2.toUpperCase()
  })
}

/**
 * @Description:数组去重（简单数据类型）
 * @param {any} arr
 * @return {*}
 */
export const uniqueArr = (arr: any[]) => [...new Set(arr)]

/**
 * @Description: 从url获取参数并转为对象
 * @param {string} URL
 * @return {object}
 */
export const getParameters = (URL: string): object => {
  const params = decodeURI(URL.split('?')[1])
  return JSON.parse(`{"${params.replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"')}"}`)
}

/**
 * @Description: 检查对象是否为空
 * @param {object} obj
 * @return {boolean}
 */
export const isEmptyObj = (obj: object): boolean => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object

/**
 * @Description: 反转字符串
 * @param {string} str
 * @return {string}
 */
export const reverse = (str: string): string => str.split('').reverse().join('')

/**
 * @Description: 生成随机十六进制
 * @return {string}
 */
export const randomHexColor = (): string =>
  `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, '0')}`

/**
 * @Description: 浏览器使用选项卡式浏览时，检查你的网页对用户是隐藏还是可见
 * @return {boolean}
 */
export const isTabActive = (): boolean => !document.hidden

/**
 * @Description: 检测元素是否处于焦点
 * @param {HTMLElement} el
 * @return {boolean}
 */
export const elementIsInFocus = (el: HTMLElement): boolean => el === document.activeElement

/**
 * @Description: 检查设备类型，使用navigator.userAgent 判断是移动设备还是电脑设备
 * @return {string}
 */
export const judgeDeviceType = (): string =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent) ? 'Mobile' : 'PC'

/**
 * @Description: 获取选定的文本
 * @return {string}
 */
export const getSelectedText = (): string => window.getSelection()!.toString()

/**
 * @Description: 两日期之间相差的天数
 * @param {Date} date1
 * @param {Date} date2
 * @return {*}
 */
export const dayDiff = (date1: Date, date2: Date) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000)

/**
 * @Description: 将 RGB 转换为十六进制
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @return {string}
 */
export const rgbToHex = (r: number, g: number, b: number): string => '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)

/**
 * @Description: 计算数组平均值
 * @param {number[]} arr
 * @return {number}
 */
export const average = (arr: number[]): number => arr.reduce((a, b) => a + b) / arr.length
