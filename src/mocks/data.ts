export const userInfo = {
  username: 'admin',
  email: '@email',
  auth: [],
  menu: [
    {
      id: '1471377886920839110',
      path: '/components',
      name: 'Components',
      meta: {
        title: 'components',
        icon: 'LogoWebComponent',
        sort: 1,
      },
      redirect: '/components/NaiveUi',
      component: 'Layout',
      children: [
        {
          id: '1471378418985078711',
          path: 'NaiveUi',
          name: 'NaiveUi',
          meta: {
            title: 'NaiveUi',
            sort: 0,
            alwaysShow: true,
          },
          redirect: '/components/NaiveUi/ModalComp',
          component: 'EmptyLayout',
          children: [
            {
              id: '1471378418985078712',
              path: 'ModalComp',
              name: 'ModalComp',
              meta: {
                title: 'ModalComp',
                sort: 0,
              },
              component: 'components/NaiveUi/ModalComp/ModalCompPage',
            },
          ],
        },
        {
          id: '1471378418985078720',
          path: 'SnowUi',
          name: 'SnowUi',
          meta: {
            title: 'SnowUi',
            sort: 0,
            alwaysShow: true,
          },
          redirect: '/components/SnowUi/SvgBorder',
          component: 'EmptyLayout',
          children: [
            {
              id: '1471378418985078721',
              path: 'SvgBorder',
              name: 'SvgBorder',
              meta: {
                title: 'SvgBorder',
                sort: 0,
              },
              component: 'components/SnowUi/SvgBorder/SvgBorderPage',
            },
            {
              id: '1471378418985078722',
              path: 'SvgBg',
              name: 'SvgBg',
              meta: {
                title: 'SvgBg',
                sort: 0,
              },
              component: 'components/SnowUi/SvgBg/SvgBgPage',
            },
            {
              id: '1471378418985078723',
              path: 'CanvasBg',
              name: 'CanvasBg',
              meta: {
                title: 'CanvasBg',
                sort: 1,
              },
              component: 'components/SnowUi/CanvasBg/CanvasBgPage',
            },
            {
              id: '1471378418985078724',
              path: 'CssBg',
              name: 'CssBg',
              meta: {
                title: 'CssBg',
                sort: 1,
              },
              component: 'components/SnowUi/CssBg/CssBgPage',
            },
            {
              id: '1471378418985078725',
              path: 'BadgeTag',
              name: 'BadgeTag',
              meta: {
                title: 'BadgeTag',
                sort: 1,
              },
              component: 'components/SnowUi/BadgeTag/BadgeTagPage',
            },
          ],
        },
        {
          id: '1471378418985078730',
          path: 'SvgIcon',
          name: 'SvgIcon',
          meta: {
            title: 'SvgIcon',
            sort: 0,
            alwaysShow: true,
          },
          component: 'components/SvgIcon/SvgIconPage',
        },
      ],
    },
    {
      id: '1471377886920839120',
      path: '/map',
      name: 'Map',
      meta: {
        title: 'map',
        icon: 'Map',
        sort: 2,
      },
      redirect: '/map/AMap/index',
      component: 'Layout',
      children: [
        {
          id: '1471377886920839121',
          path: 'aMap/index',
          name: 'AMapPage',
          meta: {
            title: 'AMap',
            sort: 0,
          },
          component: 'map/AMap/AMapPage',
        },
        {
          id: '1471377886920839122',
          path: 'BMap/index',
          name: 'BMapPage',
          meta: {
            title: 'BMap',
            sort: 2,
          },
          component: 'map/BMap/BMapPage',
        },
        {
          id: '1471377886920839123',
          path: 'WebGL/index',
          name: 'WebGLPage',
          meta: {
            title: 'WebGL',
            sort: 2,
          },
          component: 'map/WebGL/WebGLPage',
        },
        {
          id: '1471377886920839124',
          path: 'OpenLayers/index',
          name: 'OpenLayersPage',
          meta: {
            title: 'OpenLayers',
            sort: 3,
          },
          component: 'map/OpenLayers/OpenLayersPage',
        },
      ],
    },
    {
      id: '1471377886920839130',
      path: '/screen',
      name: 'Screen',
      meta: {
        title: 'screen',
        icon: 'Screen',
        sort: 2,
      },
      redirect: '/screen/ScreenDesign/index',
      component: 'Layout',
      children: [
        {
          id: '1471377886920839131',
          path: 'ScreenDesign/index',
          name: 'ScreenDesign',
          meta: {
            title: 'ScreenDesign',
            sort: 0,
          },
          component: 'screen/ScreenDesign/ListPage',
        },
        {
          id: '1471377886920839132',
          path: 'ScreenA/index',
          name: 'ScreenAPage',
          meta: {
            title: 'ScreenA',
            sort: 0,
          },
          component: 'screen/ScreenA/ScreenAPage',
        },
        {
          id: '1471377886920839133',
          path: 'ScreenB/index',
          name: 'ScreenBPage',
          meta: {
            title: 'ScreenB',
            sort: 2,
          },
          component: 'screen/ScreenB/ScreenBPage',
        },
      ],
    },
  ],
}
