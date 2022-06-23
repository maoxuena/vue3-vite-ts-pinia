import { _ as r, d, h as i, m as u, r as n, o as l, c as m, b as a, w as o, l as c, p as f, f as v, a as y } from './index.01b9ed1a.js'
const h = window.AMap
const b = (t) => (f('data-v-f8544968'), (t = t()), v(), t),
  M = { class: 'full-container' },
  w = c(' \u70B9\u805A\u5408 '),
  x = c(' \u8FD0\u52A8\u8DEF\u5F84 '),
  g = b(() => y('div', { id: 'container', class: 'amap-container' }, null, -1)),
  A = d({
    setup(t) {
      const e = i({
          map: {},
          zoom: 10,
          center: [121.558196, 29.908339],
          style: '2d47d18dde35a5d2312c7863a2b0406a',
        }),
        p = () => {
          ;(e.map = new h.Map('container', { center: e.center, resizeEnable: !0, zoom: e.zoom })),
            e.map.setMapStyle('amap://styles/' + e.style),
            e.map.setFeatures(['bg', 'road', 'building', 'point'])
        }
      return (
        u(() => {
          p()
        }),
        (z, B) => {
          const s = n('n-button'),
            _ = n('n-space')
          return (
            l(),
            m('div', M, [
              a(
                _,
                { class: 'amap-button' },
                {
                  default: o(() => [
                    a(s, { type: 'primary' }, { default: o(() => [w]), _: 1 }),
                    a(s, { type: 'primary' }, { default: o(() => [x]), _: 1 }),
                  ]),
                  _: 1,
                }
              ),
              g,
            ])
          )
        }
      )
    },
  })
var I = r(A, [['__scopeId', 'data-v-f8544968']])
export { I as default }
