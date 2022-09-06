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
