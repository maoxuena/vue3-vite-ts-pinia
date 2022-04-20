import {
  _ as y,
  d as h,
  o as d,
  c as x,
  l as P,
  p as b,
  e as w,
  a as g,
  m as M,
  f,
  h as S,
  u as $,
  r as o,
  n as I,
  q as O,
  i as R,
  s as D,
  t as E,
  b as e,
  w as a,
  v as L,
  F as N,
  x as V,
} from './index.2609be78.js'
var q = './assets/logo.d240a955.png'
const z = (t) => (b('data-v-9e56dbf0'), (t = t()), w(), t),
  T = { class: 'logo flex-container se-c' },
  U = z(() => g('img', { src: q, alt: '' }, null, -1)),
  H = { key: 0, class: 'title' },
  K = h({
    props: { collapsed: null },
    setup(t) {
      return (n, u) => (
        d(), x('div', T, [U, t.collapsed ? P('', !0) : (d(), x('h2', H, 'Snow Admin'))])
      )
    },
  })
var j = y(K, [['__scopeId', 'data-v-9e56dbf0']])
const G = h({
  setup(t) {
    const n = M(),
      u = f([])
    ;(() => {
      u.value = O(n.getMenus)
    })()
    const i = S(),
      _ = f(i.name),
      p = $(),
      v = (l) => {
        ;/http(s)?:/.test(l) ? window.open(l) : p.push({ name: l })
      }
    return (l, s) => {
      const m = o('n-menu')
      return (
        d(),
        I(
          m,
          {
            value: _.value,
            'onUpdate:value': [s[0] || (s[0] = (r) => (_.value = r)), v],
            options: u.value,
          },
          null,
          8,
          ['value', 'options']
        )
      )
    }
  },
})
var J = y(G, [['__scopeId', 'data-v-46fd0027']])
const Q = (t) => (b('data-v-3989c4b6'), (t = t()), w(), t),
  W = { class: 'header-container flex-container sb-c' },
  X = Q(() => g('div', { class: 'left' }, null, -1)),
  Y = { class: 'right flex-container fe-c' },
  Z = h({
    setup(t) {
      const n = [{ label: '\u9000\u51FA\u767B\u5F55', key: 'logout', icon: V.LogOutOutline }],
        u = R(),
        c = D(),
        i = E(),
        _ = $(),
        p = S(),
        v = () => {
          c.info({
            title: '\u63D0\u793A',
            content: '\u60A8\u786E\u5B9A\u8981\u9000\u51FA\u767B\u5F55\u5417',
            positiveText: '\u786E\u5B9A',
            negativeText: '\u53D6\u6D88',
            onPositiveClick: () => {
              u.logout().then(() => {
                i.success('\u6210\u529F\u9000\u51FA\u767B\u5F55'),
                  _.replace({ path: '/login', query: { redirect: p.fullPath } })
              })
            },
          })
        },
        l = (r) => {
          switch (r) {
            case 'logout':
              v()
              break
          }
        },
        s = f('FullscreenOutlined'),
        m = () => {
          const r = s.value === 'FullscreenOutlined'
          s.value = r ? 'FullscreenExitOutlined' : 'FullscreenOutlined'
        }
      return (r, oe) => {
        const F = o('n-icon'),
          A = o('person-circle-outline'),
          B = o('n-dropdown'),
          k = o('content'),
          C = o('n-dialog-provider')
        return (
          d(),
          x(
            N,
            null,
            [
              g('div', W, [
                X,
                g('div', Y, [
                  e(
                    F,
                    { size: '0.24rem' },
                    { default: a(() => [(d(), I(L(s.value), { onClick: m }))]), _: 1 }
                  ),
                  e(
                    B,
                    { trigger: 'click', options: n, onSelect: l },
                    {
                      default: a(() => [
                        e(F, { size: '0.36rem' }, { default: a(() => [e(A)]), _: 1 }),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
              ]),
              e(C, null, { default: a(() => [e(k)]), _: 1 }),
            ],
            64
          )
        )
      }
    },
  })
var ee = y(Z, [['__scopeId', 'data-v-3989c4b6']])
const te = h({
  setup(t) {
    const n = f(!1)
    return (u, c) => {
      const i = o('n-layout-sider'),
        _ = o('n-layout-header'),
        p = o('router-view'),
        v = o('n-layout-content'),
        l = o('n-layout-footer'),
        s = o('n-layout')
      return (
        d(),
        I(
          s,
          { class: 'page-container', 'has-sider': '' },
          {
            default: a(() => [
              e(
                i,
                {
                  bordered: '',
                  'show-trigger': '',
                  'collapse-mode': 'width',
                  collapsed: n.value,
                  onCollapse: c[0] || (c[0] = (m) => (n.value = !0)),
                  onExpand: c[1] || (c[1] = (m) => (n.value = !1)),
                },
                {
                  default: a(() => [e(j, { collapsed: n.value }, null, 8, ['collapsed']), e(J)]),
                  _: 1,
                },
                8,
                ['collapsed']
              ),
              e(s, null, {
                default: a(() => [
                  e(
                    _,
                    { class: 'layout-header', position: 'absolute', bordered: '' },
                    { default: a(() => [e(ee)]), _: 1 }
                  ),
                  e(
                    v,
                    { class: 'layout-content', 'content-style': 'padding: 0.24rem;' },
                    { default: a(() => [e(p)]), _: 1 }
                  ),
                  e(l, { class: 'layout-footer', bordered: '', position: 'absolute' }),
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
var se = y(te, [['__scopeId', 'data-v-f37f3bac']])
export { se as default }
