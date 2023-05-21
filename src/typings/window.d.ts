declare interface Window {
  /* 解决引用高德地图不能打包问题 */
  AMap: any
  initAMap: any
  /* Windows上挂上Cesium属性便于全局使用 */
  Cesium: any
  Viewer: any
}
