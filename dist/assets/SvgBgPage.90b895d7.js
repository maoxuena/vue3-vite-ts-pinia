import {
  _ as e,
  d as t,
  a,
  r as l,
  q as s,
  v as n,
  o as r,
  g as u,
  j as i,
  i as d,
  s as o,
  x as v,
  y as h,
  z as f,
  A as p,
  u as g,
  f as m,
  h as w,
  w as c,
  B as b,
  k as y,
} from './index.9a0ced8a.js'
const x = ['height', 'width', 'viewBox'],
  _ = ['transform'],
  S = {
    d: 'M0 150 \n                 C30 130,60 130, 90 150\n                 S150 170,180 150 \n                 S240 130,270 150\n                 S330 170,360 150\n                 V300 H0 Z',
    fill: 'rgba(0, 0, 50, .2)',
    'stroke-width': '3',
  },
  $ = ['dur'],
  C = {
    d: 'M0 150 \n                 C30 135,60 135, 90 150\n                 S150 165,180 150 \n                 S240 135,270 150\n                 S330 165,360 150\n                 V300 H0 Z',
    fill: 'rgba(0, 0, 50, .1)',
    'stroke-width': '1',
  },
  M = ['dur'],
  T = {
    d: 'M0 150 \n                 C30 120,60 120, 90 150\n                 S150 180,180 150 \n                 S240 120,270 150\n                 S330 180,360 150\n                 V300 H0 Z',
    fill: 'rgba(0, 0, 50, .4)',
    'stroke-width': '1',
  },
  k = ['dur']
var z = e(
  t({
    props: { width: { default: 400 }, height: { default: 300 } },
    setup(e) {
      const t = e,
        o = a({ x: 1, y: 1 }),
        v = l(180),
        h = l(300),
        f = (e, t) => {
          ;(o.x = e / v.value), (o.y = t / h.value)
        }
      return (
        s(
          () => [t.width, t.height],
          ([e, t], [a, l]) => {
            f(e, t)
          }
        ),
        n(() => {
          f(t.width, t.height)
        }),
        (t, a) => (
          r(),
          u(
            'svg',
            {
              class: 'move-wrap',
              height: e.height,
              width: e.width,
              viewBox: `0 0 ${e.width} ${e.height}`,
              version: '1.1',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            [
              i(
                'g',
                { transform: `scale(${d(o).x},${d(o).y}) translate(0,0)` },
                [
                  i('path', S, [
                    i(
                      'animateTransform',
                      {
                        attributeName: 'transform',
                        attributeType: 'XML',
                        type: 'translate',
                        from: '0',
                        to: '-180',
                        dur: 3 * d(o).x + 's',
                        repeatCount: 'indefinite',
                      },
                      null,
                      8,
                      $
                    ),
                  ]),
                  i('path', C, [
                    i(
                      'animateTransform',
                      {
                        attributeName: 'transform',
                        attributeType: 'XML',
                        type: 'translate',
                        from: '0',
                        to: '-180',
                        dur: 1.4 * d(o).x + 's',
                        repeatCount: 'indefinite',
                      },
                      null,
                      8,
                      M
                    ),
                  ]),
                  i('path', T, [
                    i(
                      'animateTransform',
                      {
                        attributeName: 'transform',
                        attributeType: 'XML',
                        type: 'translate',
                        from: '0',
                        to: '-180',
                        dur: 2.2 * d(o).x + 's',
                        repeatCount: 'indefinite',
                      },
                      null,
                      8,
                      k
                    ),
                  ]),
                ],
                8,
                _
              ),
            ],
            8,
            x
          )
        )
      )
    },
  }),
  [['__scopeId', 'data-v-25fb1d27']]
)
const B = { class: 'svg-bg-content' }
var H = e(
  t({
    props: { type: { default: 1 } },
    setup(e) {
      const t = e,
        a = { 1: z },
        g = o(() => a[t.type]),
        m = l(null),
        w = l(400),
        c = l(300),
        b = () => {
          p(() => {
            m.value && ((w.value = m.value.offsetWidth), (c.value = m.value.offsetHeight))
          })
        }
      return (
        s(
          () => t.type,
          (e, t) => {
            b()
          }
        ),
        n(() => {
          b()
        }),
        (e, t) => (
          r(),
          u(
            'div',
            { ref_key: 'SvgBg', ref: m, class: 'svg-bg-container' },
            [
              (r(), v(h(d(g)), { width: w.value, height: c.value, class: 'svg-bg' }, null, 8, ['width', 'height'])),
              i('div', B, [f(e.$slots, 'default', {}, void 0, !0)]),
            ],
            512
          )
        )
      )
    },
  }),
  [['__scopeId', 'data-v-1540bdce']]
)
const L = y('内容'),
  N = t({
    setup(e) {
      const t = g(),
        a = l(1),
        s = l(600),
        n = l(400)
      return (e, l) => {
        const o = m('n-input-number'),
          v = m('n-form-item'),
          h = m('n-form')
        return (
          r(),
          u('div', null, [
            w(
              h,
              { ref: 'formRef', inline: '', 'label-width': 80, size: d(t).size },
              {
                default: c(() => [
                  w(
                    v,
                    { label: '宽度' },
                    {
                      default: c(() => [
                        w(
                          o,
                          { value: s.value, 'onUpdate:value': l[0] || (l[0] = (e) => (s.value = e)), placeholder: '输入宽度' },
                          null,
                          8,
                          ['value']
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                  w(
                    v,
                    { label: '高度' },
                    {
                      default: c(() => [
                        w(
                          o,
                          { value: n.value, 'onUpdate:value': l[1] || (l[1] = (e) => (n.value = e)), placeholder: '输入高度' },
                          null,
                          8,
                          ['value']
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                  w(
                    v,
                    { label: '类型（1-2之间的整数，包含1、2）' },
                    {
                      default: c(() => [
                        w(
                          o,
                          { value: a.value, 'onUpdate:value': l[2] || (l[2] = (e) => (a.value = e)), placeholder: '输入类型' },
                          null,
                          8,
                          ['value']
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
                _: 1,
              },
              8,
              ['size']
            ),
            i(
              'div',
              { style: b({ width: `${s.value}px`, height: `${n.value}px` }) },
              [w(H, { type: a.value }, { default: c(() => [L]), _: 1 }, 8, ['type'])],
              4
            ),
          ])
        )
      }
    },
  })
export { N as default }
