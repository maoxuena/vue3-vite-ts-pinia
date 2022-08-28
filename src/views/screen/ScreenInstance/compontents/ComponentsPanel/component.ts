export const bar = {
  type: 'bar',
  name: '柱状图',
  icon: 'chart-bar',
  data: [
    {
      name: 'VBasicBar',
      alias: '柱状图',
      img: '/screen/components/basic-bar.png',
      used: true,
    },
    {
      name: 'VArcBar',
      alias: '玉环图',
      img: '/screen/components/arc-bar.png',
      used: true,
    },
    {
      name: 'VLineBarChart',
      alias: '折线柱图',
      img: '/screen/components/line-bar-chart.png',
      used: true,
    },
  ],
}

export const map2d = {
  type: 'map2d',
  name: '2D地图',
  icon: 'map',
  data: [
    {
      name: 'VChina2d',
      alias: '2D基础地图',
      img: '/screen/components/2d-china.png',
      used: true,
    },
  ],
}

export const map3d = {
  type: 'map3d',
  name: '3D地图',
  icon: 'map',
  data: [
    {
      name: 'VWorld3d',
      alias: '3D基础地图',
      img: '/screen/components/3d-world.png',
      used: true,
    },
  ],
}

export const classifications = [
  {
    type: 'regular',
    name: '图表',
    icon: 'chart',
    data: [bar],
  },
  {
    type: 'map',
    name: '地图',
    icon: 'map',
    data: [map2d, map3d],
  },
]
