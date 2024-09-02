import proj4 from 'proj4'
import { Projection, addProjection, addCoordinateTransforms, transform } from 'ol/proj'
import { register } from 'ol/proj/proj4'
import { Feature, Map, View } from 'ol'
import { defaults as defaultControls } from 'ol/control'
import { Point } from 'ol/geom'
import TileLayer from 'ol/layer/Tile'
import VectorLayer from 'ol/layer/Vector'
import { Cluster, Vector as VectorSource, XYZ } from 'ol/source'
import OSM from 'ol/source/OSM'
import { Icon, Style } from 'ol/style'
import { MapOptions } from 'ol/Map'
import { streetUrl } from '@/config/config'

/**
 * @description 注册EPSG:3395
 */
export const registerEPSG = function () {
  const EPSG3395 = new Projection({
    code: 'EPSG:3395',
    extent: [-20026376.39, -15496570.74, 20026376.39, 18764656.23],
    units: 'm',
    axisOrientation: 'neu',
  })
  // 定义3395坐标系，且与其他4326,3857的互相转换
  proj4.defs('EPSG:3395', '+proj=merc +lon_0=0 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs')
  // 结合proj4在ol中自定义坐标系
  addProjection(EPSG3395)
  addCoordinateTransforms(
    'EPSG:4326',
    'EPSG:3395',
    function (coordinate) {
      return proj4('EPSG:4326', 'EPSG:3395', coordinate)
    },
    function (coordinate) {
      return proj4('EPSG:3395', 'EPSG:4326', coordinate)
    }
  )
  addCoordinateTransforms(
    'EPSG:3857',
    'EPSG:3395',
    function (coordinate) {
      return proj4('EPSG:3857', 'EPSG:3395', coordinate)
    },
    function (coordinate) {
      return proj4('EPSG:3395', 'EPSG:3857', coordinate)
    }
  )
  // 这种如果测试成功，代表定义成功了
  // ol.proj.transform([118, 32], 'EPSG:4326', 'EPSG:3395')
}

/**
 * @description 创建一个地图实例
 * @param {Document | DocumentId} target 地图挂载到的容器
 * @param {Array} center 地图中心点
 * @param {Object} config 其他配置项
 * @returns 地图对象
 */
export const createMap = function (target: HTMLElement | string, center: number[], config: MapOptions = {}): Map {
  registerEPSG()
  const view = new View({
    projection: 'EPSG:4326', // 坐标系，有EPSG:4326、EPSG:3857
    center, // 需要
    zoom: 12,
    maxZoom: 18,
    minZoom: 3,
    constrainResolution: true, //自动缩放到距离最近的一个整数级别，因为当缩放在非整数级别时地图会糊
  })
  // 创建地图对象
  const map = new Map({
    target,
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    controls: defaultControls({
      zoom: true, //不显示放大放小按钮；
      rotate: true, //不显示指北针控件；
      attribution: true, //不显示右下角的地图信息控件；
    }).extend([]),
    view,
    ...config,
  })
  setLayer(streetUrl, map)
  return map
}

/**
 * @description 设置地图的地图
 * @param {String} layerUrl 地图地址
 * @param {Objcet} map 当前的地图实例
 */
export const setLayer = function (layerUrl: string, map: Map) {
  const satelliteE = new XYZ({
    crossOrigin: 'anonymous',
    url: layerUrl,
  })
  const baseLayer2 = map.getLayers().item(0)
  // FIXME
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  baseLayer2.setSource(satelliteE)
}

/**
 * @description 循环创建marker
 * @param {Object} map 绑定的地图对象
 * @param {Array} el 含有经纬度的数组
 */
export function addMarkers(map: Map, lnglats: any, imgSrc: string, options = {}, styleConfig = {}) {
  // 创建Feature对象集合
  const features1 = []
  for (let i = 0; i < lnglats.length; i++) {
    const numAry = new Feature({
      geometry: new Point([Number(lnglats[i].lng), Number(lnglats[i].lat)]),
      ...lnglats[i],
    })
    features1.push(numAry)
  }
  // 矢量要素数据源
  const source1 = new VectorSource({
    features: features1,
  })
  const clusterSource = new Cluster({
    distance: 5, //标注之间
    source: source1,
  })

  const iconStyle = markerStyle(imgSrc, styleConfig)

  const clusters = new VectorLayer({
    source: clusterSource,
    style: iconStyle,
    zIndex: 999,
    ...options,
  })
  map.addLayer(clusters)
  return source1
}

const markerStyle = (imgSrc: any, styleConfig: {}) => {
  const img = imgSrc ? imgSrc : ``
  return new Style({
    image: new Icon({
      opacity: 1,
      src: img,
      anchor: [0.5, 3], // 偏移位置
      anchorOrigin: 'bottom-left',
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      offsetOrigin: 'top-right',
      offset: [0, 1], //偏移量设置
      scale: 1, //图标缩放比例
      ...styleConfig,
    }),
  })
}
