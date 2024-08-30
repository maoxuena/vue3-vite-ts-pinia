/*
 * @Author: maoxuena
 * @Date: 2024-08-29 16:42:57
 * @LastEditors: maoxuena
 * @LastEditTime: 2024-08-30 16:15:02
 * @FilePath: \vue3-vite-ts-pinia\src\mocks\auth\getUserInfo.ts
 * @Description:
 */
import { promiser, resolver, worker, rester } from '@/mocks/setup'
import { http, HttpResponse } from 'msw'

const tag = '获取用户信息'
const url = resolver('/getUserInfo')

worker.use(
  http.get(url, async (req) => {
    const query = await rester.query(req)
    const params = await rester.params(req)
    const printer = await rester.printer(tag)

    let result: any = null

    result = {
      code: '200',
      message: '成功',
      data: {
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
            redirect: '/components/naiveui',
            component: 'Layout',
            children: [
              {
                id: '1471378418985078711',
                path: 'naiveui',
                name: 'NaiveUi',
                meta: {
                  title: 'naiveui',
                  sort: 0,
                  alwaysShow: true,
                },
                redirect: '/components/naiveui/modalcomp',
                component: 'EmptyLayout',
                children: [
                  {
                    id: '1471378418985078712',
                    path: 'modalcomp',
                    name: 'ModalComp',
                    meta: {
                      title: 'modalcomp',
                      sort: 0,
                    },
                    component: 'components/NaiveUi/ModalComp/ModalCompPage',
                  },
                ],
              },
              {
                id: '1471378418985078720',
                path: 'snowui',
                name: 'SnowUi',
                meta: {
                  title: 'snowui',
                  sort: 0,
                  alwaysShow: true,
                },
                redirect: '/components/snowui/svgborder',
                component: 'EmptyLayout',
                children: [
                  {
                    id: '1471378418985078721',
                    path: 'svgborder',
                    name: 'SvgBorder',
                    meta: {
                      title: 'svgborder',
                      sort: 0,
                    },
                    component: 'components/SnowUi/SvgBorder/SvgBorderPage',
                  },
                ],
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
            redirect: '/map/amap/index',
            component: 'Layout',
            children: [
              {
                id: '1471377886920839121',
                path: 'amap/index',
                name: 'AMapPage',
                meta: {
                  title: 'amap',
                  sort: 0,
                },
                component: 'map/AMap/AMapPage',
              },
              {
                id: '1471377886920839122',
                path: 'bmap/index',
                name: 'BMapPage',
                meta: {
                  title: 'bmap',
                  sort: 2,
                },
                component: 'map/BMap/BMapPage',
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
            redirect: '/screen/screenA/index',
            component: 'Layout',
            children: [
              {
                id: '1471377886920839131',
                path: 'screenA/index',
                name: 'ScreenAPage',
                meta: {
                  title: 'screenA',
                  sort: 0,
                },
                component: 'screen/ScreenA/ScreenAPage',
              },
              {
                id: '1471377886920839132',
                path: 'screenB/index',
                name: 'ScreenBPage',
                meta: {
                  title: 'screenB',
                  sort: 2,
                },
                component: 'screen/ScreenB/ScreenBPage',
              },
            ],
          },
        ],
      },
    }

    printer((log) => {
      log('[query] - ', query)
      log('[params] - ', params)
      log('[result] - ', result)
    })

    return promiser(HttpResponse.json(result), 100)
  })
)
