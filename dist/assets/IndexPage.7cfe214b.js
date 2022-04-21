import {
  _ as x,
  d as w,
  o as p,
  c as y,
  l as B,
  p as b,
  e as $,
  a as g,
  m as E,
  f as v,
  h as D,
  u as C,
  r as t,
  n as F,
  q as M,
  i as R,
  s as z,
  t as L,
  b as e,
  w as a,
  v as N,
  F as k,
  x as U,
} from './index.01528b85.js'
var V = './assets/logo.d240a955.png'
const q = (n) => (b('data-v-7f7f69ba'), (n = n()), $(), n),
  T = { class: 'logo flex-container se-c' },
  H = q(() => g('img', { src: V, alt: '' }, null, -1)),
  K = { key: 0, class: 'title' },
  j = w({
    props: { collapsed: null },
    setup(n) {
      return (s, o) => (
        p(), y('div', T, [H, n.collapsed ? B('', !0) : (p(), y('h2', K, 'Snow Admin'))])
      )
    },
  })
var G = x(j, [['__scopeId', 'data-v-7f7f69ba']])
const J = w({
  setup(n) {
    const s = E(),
      o = v([])
    ;(() => {
      o.value = M(s.getMenus)
    })()
    const d = D(),
      l = v(d.name),
      m = C(),
      _ = (c) => {
        ;/http(s)?:/.test(c) ? window.open(c) : m.push({ name: c })
      }
    return (c, u) => {
      const i = t('n-menu')
      return (
        p(),
        F(
          i,
          {
            value: l.value,
            'onUpdate:value': [u[0] || (u[0] = (r) => (l.value = r)), _],
            options: o.value,
          },
          null,
          8,
          ['value', 'options']
        )
      )
    }
  },
})
var Q = x(J, [['__scopeId', 'data-v-46fd0027']])
const W = (n) => (b('data-v-0df14f14'), (n = n()), $(), n),
  X = { class: 'header-container flex-container sb-c' },
  Y = W(() => g('div', { class: 'left' }, null, -1)),
  Z = { class: 'right flex-container fe-c' },
  ee = w({
    setup(n) {
      const s = [{ label: '\u9000\u51FA\u767B\u5F55', key: 'logout', icon: U.LogOutOutline }],
        o = R(),
        f = z(),
        d = L(),
        l = C(),
        m = D(),
        _ = () => {
          f.info({
            title: '\u63D0\u793A',
            content: '\u60A8\u786E\u5B9A\u8981\u9000\u51FA\u767B\u5F55\u5417',
            positiveText: '\u786E\u5B9A',
            negativeText: '\u53D6\u6D88',
            onPositiveClick: () => {
              o.logout().then(() => {
                d.success('\u6210\u529F\u9000\u51FA\u767B\u5F55'),
                  l.replace({ path: '/login', query: { redirect: m.fullPath } })
              })
            },
          })
        },
        c = (r) => {
          switch (r) {
            case 'logout':
              _()
              break
          }
        },
        u = v('FullscreenOutlined'),
        i = () => {
          const r = u.value === 'FullscreenOutlined'
          u.value = r ? 'FullscreenExitOutlined' : 'FullscreenOutlined'
        }
      return (r, I) => {
        const h = t('n-icon'),
          S = t('PersonCircleOutline'),
          A = t('n-dropdown'),
          O = t('content'),
          P = t('n-dialog-provider')
        return (
          p(),
          y(
            k,
            null,
            [
              g('div', X, [
                Y,
                g('div', Z, [
                  e(
                    h,
                    { size: '0.24rem' },
                    { default: a(() => [(p(), F(N(u.value), { onClick: i }))]), _: 1 }
                  ),
                  e(
                    A,
                    { trigger: 'click', options: s, onSelect: c },
                    {
                      default: a(() => [
                        e(h, { size: '0.36rem' }, { default: a(() => [e(S)]), _: 1 }),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
              ]),
              e(P, null, { default: a(() => [e(O)]), _: 1 }),
            ],
            64
          )
        )
      }
    },
  })
var te = x(ee, [['__scopeId', 'data-v-0df14f14']])
const ne = w({
  props: { width: { default: 280 }, title: { default: '\u9879\u76EE\u914D\u7F6E' } },
  setup(n, { expose: s }) {
    const o = v(!1),
      f = v('right')
    return (
      s({
        openDrawer: () => {
          o.value = !0
        },
        closeDrawer: () => {
          o.value = !1
        },
      }),
      (m, _) => {
        const c = t('n-drawer-content'),
          u = t('n-drawer')
        return (
          p(),
          F(
            u,
            {
              show: o.value,
              'onUpdate:show': _[0] || (_[0] = (i) => (o.value = i)),
              width: n.width,
              placement: f.value,
            },
            {
              default: a(() => [
                e(c, { title: n.title, 'native-scrollbar': !1 }, null, 8, ['title']),
              ]),
              _: 1,
            },
            8,
            ['show', 'width', 'placement']
          )
        )
      }
    )
  },
})
const oe = w({
  setup(n) {
    const s = v(!1),
      o = v(null),
      f = () => {
        const { openDrawer: d } = o.value
        d()
      }
    return (d, l) => {
      const m = t('n-layout-sider'),
        _ = t('n-layout-header'),
        c = t('router-view'),
        u = t('n-layout-content'),
        i = t('n-layout-footer'),
        r = t('n-layout'),
        I = t('SettingsOutline'),
        h = t('n-icon')
      return (
        p(),
        y(
          k,
          null,
          [
            e(
              r,
              { class: 'page-container', 'has-sider': '' },
              {
                default: a(() => [
                  e(
                    m,
                    {
                      bordered: '',
                      'show-trigger': '',
                      'collapse-mode': 'width',
                      collapsed: s.value,
                      onCollapse: l[0] || (l[0] = (S) => (s.value = !0)),
                      onExpand: l[1] || (l[1] = (S) => (s.value = !1)),
                    },
                    {
                      default: a(() => [
                        e(G, { collapsed: s.value }, null, 8, ['collapsed']),
                        e(Q),
                      ]),
                      _: 1,
                    },
                    8,
                    ['collapsed']
                  ),
                  e(r, null, {
                    default: a(() => [
                      e(
                        _,
                        { class: 'layout-header', position: 'absolute', bordered: '' },
                        { default: a(() => [e(te)]), _: 1 }
                      ),
                      e(
                        u,
                        { class: 'layout-content', 'content-style': 'padding: 0.24rem;' },
                        { default: a(() => [e(c)]), _: 1 }
                      ),
                      e(i, { class: 'layout-footer', bordered: '', position: 'absolute' }),
                    ]),
                    _: 1,
                  }),
                ]),
                _: 1,
              }
            ),
            g('span', { class: 'settings-btn', onClick: f }, [
              e(h, { size: '0.24rem' }, { default: a(() => [e(I)]), _: 1 }),
            ]),
            e(ne, { ref_key: 'drawerSetting', ref: o }, null, 512),
          ],
          64
        )
      )
    }
  },
})
var ae = x(oe, [['__scopeId', 'data-v-1cfefc6e']])
export { ae as default }
