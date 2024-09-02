// 全局配置项 只做导出不修改

// 首页地址（默认）
export const HOME_URL = '/home/index'

// 白名单地址
export const WHITE_PATH_LIST: string[] = ['/401', '/403', '/404', '/500', '/login']

// 接口基础路径
export const APP_WEB_URL = import.meta.env.VITE_APP_WEB_URL || '/api'

// 路由导出方式（all：后端导出路由；intelligence：前端导出路由）
export const AUTHENTICATION = 'intelligence'

// OpenLayers 地图配置 start
// 街景地图地址
export const streetUrl = 'https://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}'

// 卫星图地址
export const satelliteUrl = 'http://wprd0{1-4}.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scl=1&style=6'

// 暗色地图
export const darkUrl = 'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}'

// 船讯网地图地址
// 海图
export const shipxySeaUrl = 'http://m11.shipxy.com/tile.c?l=Na&m=o&x={x}&y={y}&z={z}'

// 卫星图
export const shipxySatelliteUrl = 'https://gwxc.shipxy.com/tile.g?z={z}&x={x}&y={y}'

// 地图街景图
export const shipxyStreetUrl = 'http://gdtn.shipxy.com/vt?lyrs=m@180000000&hl=zh-CN&gl=cn&src=app&s=Gal&x={x}&y={y}&z={z}'
// OpenLayers 地图配置 end
