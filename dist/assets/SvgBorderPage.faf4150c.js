import {
  d as e,
  q as l,
  a,
  s as t,
  v as u,
  o as s,
  g as v,
  j as i,
  i as d,
  _ as r,
  r as n,
  x as h,
  y as $,
  z as o,
  A as c,
  u as g,
  f as p,
  h as w,
  w as f,
  B as L,
  k as b,
} from './index.9a0ced8a.js'
const k = ['viewBox'],
  y = i(
    'defs',
    null,
    [
      i('linearGradient', { id: 'linear', x1: '0%', y1: '0%', x2: '0%', y2: '100%' }, [
        i('stop', { offset: '0%', 'stop-color': 'rgb(0, 229, 255)', 'stop-opacity': '0.18' }),
        i('stop', { offset: '100%', 'stop-color': 'rgb(0, 229, 255)', 'stop-opacity': '0.102' }),
      ]),
    ],
    -1
  ),
  x = ['d'],
  m = ['d'],
  _ = ['d'],
  M = ['d'],
  B = ['d'],
  Z = ['d'],
  z = ['d'],
  X = ['d'],
  j = ['cx', 'cy', 'r'],
  R = ['cx', 'cy', 'r'],
  U = e({
    props: { width: { default: 400 }, height: { default: 300 } },
    setup(e) {
      const r = e
      l(
        () => [r.width, r.height],
        ([e, l], [a, t]) => {
          E(e, l)
        }
      )
      const n = a({
          width: 400,
          height: 100,
          margin: [1, 1, 2, 1],
          radius: 4,
          triangle: 8,
          header: { height: 8, empty: 0.3, sideLRX: 8, sideTBX: 8 },
          side: { width: 5, height: 0.3, top: 0.3 },
          scale: 1,
        }),
        h = t(() => n.margin[3] * n.scale),
        $ = t(() => n.margin[0] * n.scale),
        o = t(() => n.width - n.margin[1] * n.scale),
        c = t(() => n.height - n.margin[2] * n.scale),
        g = t(() => n.width * n.header.empty),
        p = t(() => n.header.sideLRX * n.scale),
        w = t(() => n.header.sideTBX * n.scale),
        f = t(() => n.header.height * n.scale),
        L = t(() => $.value + n.height * n.side.top),
        b = t(() => $.value + n.height * (n.side.top + n.side.height)),
        U = t(
          () =>
            `M${h.value},${$.value + (n.triangle + 3) * n.scale}\n          L${h.value + (n.triangle + 3) * n.scale},${
              $.value
            }\n          L${g.value},${$.value} \n          L${g.value + f.value}, ${$.value + f.value} \n          L${
              n.width - g.value - f.value
            }, ${$.value + f.value} \n          L${n.width - g.value},${$.value} \n          L${o.value - (n.triangle + 3) * n.scale},${
              $.value
            }\n          L${o.value},${$.value + (n.triangle + 3) * n.scale} \n          L${o.value},${c.value} \n          L${h.value},${
              c.value
            } \n          L${h.value},${$.value} Z`
        ),
        T = t(
          () =>
            `M${g.value},${$.value}\n          L${g.value + p.value},${$.value} \n          L${g.value + w.value + p.value},${
              $.value + f.value
            } \n          L${g.value + w.value},${$.value + f.value} \n          L${g.value},${$.value} Z`
        ),
        q = t(
          () =>
            `M${n.width - g.value},${$.value}\n          L${n.width - g.value - p.value},${$.value} \n          L${
              n.width - g.value - w.value - p.value
            },${$.value + f.value} \n          L${n.width - g.value - w.value},${$.value + f.value} \n          L${n.width - g.value},${
              $.value
            } Z`
        ),
        A = t(
          () =>
            `M${g.value + 2 * p.value},${$.value}\n          L${n.width - g.value - 2 * p.value},${$.value} \n          L${
              n.width - g.value - 2 * p.value - w.value
            },${$.value + f.value} \n          L${g.value + 2 * p.value + w.value},${$.value + f.value} \n          L${
              g.value + 2 * p.value
            },${$.value} Z`
        ),
        G = t(
          () =>
            `M${h.value},${L.value} \n          L${h.value + n.side.width * n.scale},${L.value + n.side.width * n.scale} \n          L${
              h.value + n.side.width * n.scale
            },${b.value + n.side.width * n.scale} \n          L${h.value},${b.value} \n          L${h.value},${L.value} Z`
        ),
        H = t(
          () =>
            `M${o.value},${L.value} \n          L${o.value - n.side.width * n.scale},${L.value + n.side.width * n.scale}\n          L${
              o.value - n.side.width * n.scale
            },${b.value + n.side.width * n.scale} \n          L${o.value},${b.value}\n          L${o.value},${L.value} Z`
        ),
        I = t(() => ({ cx: n.radius * n.scale, cy: n.height - n.radius * n.scale })),
        W = t(() => ({ cx: n.width - n.radius * n.scale, cy: n.height - n.radius * n.scale })),
        C = t(
          () =>
            `M${h.value},${$.value + n.triangle * n.scale} \n          L${h.value},${$.value} \n          L${
              h.value + n.triangle * n.scale
            },${$.value}`
        ),
        D = t(
          () =>
            `M${o.value},${$.value + n.triangle * n.scale} \n          L${o.value},${$.value}\n          L${
              o.value - n.triangle * n.scale
            },${$.value}`
        ),
        E = (e, l) => {
          ;(n.scale = n.width / e), (n.height = l * n.scale)
        }
      return (
        u(() => {
          E(r.width, r.height)
        }),
        (e, l) => (
          s(),
          v(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              'xmlns:xlink': 'http://www.w3.org/1999/xlink',
              viewBox: `0 0 ${d(n).width} ${d(n).height}`,
            },
            [
              y,
              i(
                'path',
                {
                  'fill-rule': 'evenodd',
                  stroke: 'rgb(0, 229, 255)',
                  'stroke-width': '1',
                  'stroke-linecap': 'butt',
                  'stroke-linejoin': 'miter',
                  'stroke-opacity': '0.2',
                  fill: 'url(#linear)',
                  d: d(U),
                },
                null,
                8,
                x
              ),
              i(
                'path',
                { 'fill-rule': 'evenodd', 'stroke-width': '1', stroke: 'rgb(0, 229, 255)', fill: 'rgb(0, 229, 255)', d: d(C) },
                null,
                8,
                m
              ),
              i(
                'path',
                { 'fill-rule': 'evenodd', 'stroke-width': '1', stroke: 'rgb(0, 229, 255)', fill: 'rgb(0, 229, 255)', d: d(D) },
                null,
                8,
                _
              ),
              i(
                'path',
                { 'fill-rule': 'evenodd', 'stroke-width': '1', stroke: 'rgb(0, 229, 255)', fill: 'rgb(0, 229, 255)', d: d(T) },
                null,
                8,
                M
              ),
              i(
                'path',
                { 'fill-rule': 'evenodd', 'stroke-width': '1', stroke: 'rgb(0, 229, 255)', fill: 'rgb(0, 229, 255)', d: d(q) },
                null,
                8,
                B
              ),
              i(
                'path',
                { 'fill-rule': 'evenodd', 'stroke-width': '1', stroke: 'rgb(0, 229, 255)', fill: 'rgb(0, 229, 255)', d: d(A) },
                null,
                8,
                Z
              ),
              i(
                'path',
                { 'fill-rule': 'evenodd', 'stroke-width': '1', stroke: 'rgb(0, 229, 255)', fill: 'rgb(0, 229, 255)', d: d(G) },
                null,
                8,
                z
              ),
              i(
                'path',
                { 'fill-rule': 'evenodd', 'stroke-width': '1', stroke: 'rgb(0, 229, 255)', fill: 'rgb(0, 229, 255)', d: d(H) },
                null,
                8,
                X
              ),
              i(
                'circle',
                { cx: d(W).cx, cy: d(W).cy, r: d(n).radius * d(n).scale, 'stroke-width': '0', fill: 'rgb(0, 229, 255)' },
                null,
                8,
                j
              ),
              i(
                'circle',
                { cx: d(I).cx, cy: d(I).cy, r: d(n).radius * d(n).scale, 'stroke-width': '0', fill: 'rgb(0, 229, 255)' },
                null,
                8,
                R
              ),
            ],
            8,
            k
          )
        )
      )
    },
  }),
  T = {},
  q = { style: { color: '#e1e1e1' } },
  A = [
    i('p', null, 'test test test test test test', -1),
    i('p', null, 'test test test test test test', -1),
    i('p', null, 'test test test test test test', -1),
    i('p', null, 'test test test test test test', -1),
    i('p', null, 'test test test test test test', -1),
    i('p', null, 'test test test test test test', -1),
    i('p', null, 'test test test test test test', -1),
  ]
var G = r(T, [
  [
    'render',
    function (e, l) {
      return s(), v('div', q, A)
    },
  ],
])
const H = { class: 'svg-border-content' }
var I = r(
  e({
    props: { type: { default: 1 } },
    setup(e) {
      const a = e,
        r = { 1: U, 2: G },
        g = t(() => r[a.type]),
        p = n(null),
        w = n(400),
        f = n(300),
        L = () => {
          c(() => {
            p.value && ((w.value = p.value.offsetWidth), (f.value = p.value.offsetHeight))
          })
        }
      return (
        l(
          () => a.type,
          (e, l) => {
            L()
          }
        ),
        u(() => {
          L()
        }),
        (e, l) => (
          s(),
          v(
            'div',
            { ref_key: 'svgBorder', ref: p, class: 'svg-border-container' },
            [
              (s(), h($(d(g)), { width: w.value, height: f.value, class: 'svg-bg' }, null, 8, ['width', 'height'])),
              i('div', H, [o(e.$slots, 'default', {}, void 0, !0)]),
            ],
            512
          )
        )
      )
    },
  }),
  [['__scopeId', 'data-v-df8e5a46']]
)
const W = b('内容'),
  C = e({
    setup(e) {
      const l = g(),
        a = n(1),
        t = n(300),
        u = n(200)
      return (e, r) => {
        const n = p('n-input-number'),
          h = p('n-form-item'),
          $ = p('n-form')
        return (
          s(),
          v('div', null, [
            w(
              $,
              { ref: 'formRef', inline: '', 'label-width': 80, size: d(l).size },
              {
                default: f(() => [
                  w(
                    h,
                    { label: '宽度' },
                    {
                      default: f(() => [
                        w(
                          n,
                          {
                            value: t.value,
                            'onUpdate:value': r[0] || (r[0] = (e) => (t.value = e)),
                            disabled: '',
                            placeholder: '输入宽度',
                          },
                          null,
                          8,
                          ['value']
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                  w(
                    h,
                    { label: '高度' },
                    {
                      default: f(() => [
                        w(
                          n,
                          {
                            value: u.value,
                            'onUpdate:value': r[1] || (r[1] = (e) => (u.value = e)),
                            disabled: '',
                            placeholder: '输入高度',
                          },
                          null,
                          8,
                          ['value']
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                  w(
                    h,
                    { label: '类型（1-2之间的整数，包含1、2）' },
                    {
                      default: f(() => [
                        w(
                          n,
                          { value: a.value, 'onUpdate:value': r[2] || (r[2] = (e) => (a.value = e)), placeholder: '输入类型' },
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
              { style: L({ width: `${t.value}px`, height: `${u.value}px` }) },
              [w(I, { type: a.value }, { default: f(() => [W]), _: 1 }, 8, ['type'])],
              4
            ),
          ])
        )
      }
    },
  })
export { C as default }
