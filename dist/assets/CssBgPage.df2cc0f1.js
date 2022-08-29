import {
  _ as e,
  o as a,
  g as l,
  C as s,
  d as t,
  s as d,
  r as v,
  q as i,
  v as u,
  x as c,
  y as o,
  i as r,
  j as n,
  z as f,
  A as p,
  u as h,
  f as y,
  h as b,
  w as x,
  B as _,
  k as g,
} from './index.9a0ced8a.js'
const m = {},
  w = { class: 'css-bg1' },
  z = [
    s(
      '<div class="color" data-v-5e4fe652></div><div class="color" data-v-5e4fe652></div><div class="color" data-v-5e4fe652></div><div class="box" data-v-5e4fe652><div class="circle" style="--x:0;" data-v-5e4fe652></div><div class="circle" style="--x:1;" data-v-5e4fe652></div><div class="circle" style="--x:2;" data-v-5e4fe652></div><div class="circle" style="--x:3;" data-v-5e4fe652></div><div class="circle" style="--x:4;" data-v-5e4fe652></div></div>',
      4
    ),
  ]
var U = e(m, [
  [
    'render',
    function (e, s) {
      return a(), l('div', w, z)
    },
  ],
  ['__scopeId', 'data-v-5e4fe652'],
])
const $ = { class: 'css-bg-content' }
var j = e(
  t({
    props: { type: { default: 1 } },
    setup(e) {
      const s = e,
        t = { 1: U },
        h = d(() => t[s.type]),
        y = v(null),
        b = v(400),
        x = v(300),
        _ = () => {
          p(() => {
            y.value && ((b.value = y.value.offsetWidth), (x.value = y.value.offsetHeight))
          })
        }
      return (
        i(
          () => s.type,
          (e, a) => {
            _()
          }
        ),
        u(() => {
          _()
        }),
        (e, s) => (
          a(),
          l(
            'div',
            { ref_key: 'CssBg', ref: y, class: 'css-bg-container' },
            [
              (a(), c(o(r(h)), { width: b.value, height: x.value, class: 'css-bg' }, null, 8, ['width', 'height'])),
              n('div', $, [f(e.$slots, 'default', {}, void 0, !0)]),
            ],
            512
          )
        )
      )
    },
  }),
  [['__scopeId', 'data-v-458cc348']]
)
const k = g('内容'),
  B = t({
    setup(e) {
      const s = h(),
        t = v(1),
        d = v(500),
        i = v(300)
      return (e, v) => {
        const u = y('n-input-number'),
          c = y('n-form-item'),
          o = y('n-form')
        return (
          a(),
          l('div', null, [
            b(
              o,
              { ref: 'formRef', inline: '', 'label-width': 80, size: r(s).size },
              {
                default: x(() => [
                  b(
                    c,
                    { label: '宽度' },
                    {
                      default: x(() => [
                        b(
                          u,
                          {
                            value: d.value,
                            'onUpdate:value': v[0] || (v[0] = (e) => (d.value = e)),
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
                  b(
                    c,
                    { label: '高度' },
                    {
                      default: x(() => [
                        b(
                          u,
                          {
                            value: i.value,
                            'onUpdate:value': v[1] || (v[1] = (e) => (i.value = e)),
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
                  b(
                    c,
                    { label: '类型（1-2之间的整数，包含1、2）' },
                    {
                      default: x(() => [
                        b(
                          u,
                          { value: t.value, 'onUpdate:value': v[2] || (v[2] = (e) => (t.value = e)), placeholder: '输入类型' },
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
            n(
              'div',
              { style: _({ width: `${d.value}px`, height: `${i.value}px` }) },
              [b(j, { type: t.value }, { default: x(() => [k]), _: 1 }, 8, ['type'])],
              4
            ),
          ])
        )
      }
    },
  })
export { B as default }
