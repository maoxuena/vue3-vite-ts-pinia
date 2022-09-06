export const text = {
  type: 'text',
  name: '文本',
  icon: 'text',
  data: [
    {
      name: 'DBasicText',
      alias: '基础文本',
      img: '/screen/components/basic-text.png',
      used: true,
    },
  ],
}

export const bar = {
  type: 'bar',
  name: '柱状图',
  icon: 'chart-bar',
  data: [
    {
      name: 'DBasicBar',
      alias: '柱状图',
      img: '/screen/components/basic-bar.png',
      used: false,
    },
    {
      name: 'DArcBar',
      alias: '玉环图',
      img: '/screen/components/arc-bar.png',
      used: false,
    },
    {
      name: 'DLineBarChart',
      alias: '折线柱图',
      img: '/screen/components/line-bar-chart.png',
      used: false,
    },
  ],
}

export const map2d = {
  type: 'map2d',
  name: '2D地图',
  icon: 'map',
  data: [
    {
      name: 'DChina2d',
      alias: '2D基础地图',
      img: '/screen/components/2d-china.png',
      used: false,
    },
  ],
}

export const map3d = {
  type: 'map3d',
  name: '3D地图',
  icon: 'map',
  data: [
    {
      name: 'DWorld3d',
      alias: '3D基础地图',
      img: '/screen/components/3d-world.png',
      used: false,
    },
  ],
}

export const classifications = [
  {
    type: 'basic',
    name: '基础',
    icon: 'basic-components',
    data: [text],
  },
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

export function findComByName(name: string) {
  for (let i = 0; i < classifications.length; i++) {
    const classification = classifications[i]
    for (let j = 0; j < classification.data.length; j++) {
      const category = classification.data[j]
      const com = category.data.find((m) => m.name === name)
      if (com) {
        return {
          classification,
          category,
          com,
        }
      }
    }
  }

  return null
}
