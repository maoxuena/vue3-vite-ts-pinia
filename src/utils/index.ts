/**
 * 驼峰转短横线
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
 * 短横线转驼峰
 * @param str
 * @returns
 */
export function dashToCamel(str: string) {
  return str.replace(/(-([a-z]))/g, (match, p1, p2, offset, string) => {
    // 这里有两个捕获组，第一个捕获组捕获全部并包含了第二个捕获组，所以match等于p1
    return p2.toUpperCase()
  })
}
