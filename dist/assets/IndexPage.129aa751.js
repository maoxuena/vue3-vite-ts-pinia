import { _ as d } from './plugin-vue_export-helper.21dcd24c.js'
import {
  d as g,
  o as u,
  c as f,
  l as I,
  p as w,
  e as b,
  a as $,
  m as M,
  f as y,
  h as S,
  u as C,
  r as n,
  n as x,
  q as P,
  w as l,
  b as e,
} from './index.a7d9147a.js'
var R = './assets/logo.d240a955.png'
const B = (t) => (w('data-v-9e56dbf0'), (t = t()), b(), t),
  k = { class: 'logo flex-container se-c' },
  A = B(() => $('img', { src: R, alt: '' }, null, -1)),
  N = { key: 0, class: 'title' },
  V = g({
    props: { collapsed: null },
    setup(t) {
      return (o, c) => (
        u(), f('div', k, [A, t.collapsed ? I('', !0) : (u(), f('h2', N, 'Snow Admin'))])
      )
    },
  })
var E = d(V, [['__scopeId', 'data-v-9e56dbf0']])
const q = g({
  setup(t) {
    const o = M(),
      c = y([])
    ;(() => {
      c.value = P(o.getMenus)
    })()
    const p = S(),
      r = y(p.name),
      i = C(),
      v = (a) => {
        ;/http(s)?:/.test(a) ? window.open(a) : i.push({ name: a })
      }
    return (a, _) => {
      const m = n('n-menu')
      return (
        u(),
        x(
          m,
          {
            value: r.value,
            'onUpdate:value': [_[0] || (_[0] = (h) => (r.value = h)), v],
            options: c.value,
          },
          null,
          8,
          ['value', 'options']
        )
      )
    }
  },
})
var H = d(q, [['__scopeId', 'data-v-dd896a36']])
const K = {}
function L(t, o) {
  return u(), f('div')
}
var U = d(K, [['render', L]])
const j = g({
  setup(t) {
    const o = y(!1)
    return (c, s) => {
      const p = n('n-layout-sider'),
        r = n('n-layout-header'),
        i = n('router-view'),
        v = n('n-layout-content'),
        a = n('n-layout-footer'),
        _ = n('n-layout')
      return (
        u(),
        x(
          _,
          { class: 'page-container', 'has-sider': '' },
          {
            default: l(() => [
              e(
                p,
                {
                  bordered: '',
                  'show-trigger': '',
                  'collapse-mode': 'width',
                  collapsed: o.value,
                  onCollapse: s[0] || (s[0] = (m) => (o.value = !0)),
                  onExpand: s[1] || (s[1] = (m) => (o.value = !1)),
                },
                {
                  default: l(() => [e(E, { collapsed: o.value }, null, 8, ['collapsed']), e(H)]),
                  _: 1,
                },
                8,
                ['collapsed']
              ),
              e(_, null, {
                default: l(() => [
                  e(
                    r,
                    { class: 'layout-header', position: 'absolute', bordered: '' },
                    { default: l(() => [e(U)]), _: 1 }
                  ),
                  e(
                    v,
                    { class: 'layout-content', 'content-style': 'padding: 0.24rem;' },
                    { default: l(() => [e(i)]), _: 1 }
                  ),
                  e(a, { class: 'layout-footer', bordered: '', position: 'absolute' }),
                ]),
                _: 1,
              }),
            ]),
            _: 1,
          }
        )
      )
    }
  },
})
var F = d(j, [['__scopeId', 'data-v-f37f3bac']])
export { F as default }
