import {
  _ as S,
  d as b,
  o as m,
  c as A,
  l as P,
  p as k,
  e as C,
  a as d,
  m as M,
  f as g,
  h as B,
  u as E,
  r as o,
  n as I,
  q as R,
  i as L,
  s as T,
  t as z,
  b as e,
  w as n,
  v as N,
  F as O,
  x as U,
  y as V,
  g as j,
  z as q,
  j as D,
  A as H,
  k as K,
} from './index.d06dd181.js'
var G = './assets/logo.d240a955.png'
const J = (t) => (k('data-v-d83e4d1a'), (t = t()), C(), t),
  Q = { class: 'logo flex-container se-c' },
  W = J(() => d('img', { src: G, alt: '' }, null, -1)),
  X = { key: 0, class: 'title' },
  Y = b({
    props: { collapsed: null },
    setup(t) {
      return (l, s) => (
        m(), A('div', Q, [W, t.collapsed ? P('', !0) : (m(), A('h2', X, 'Snow Admin'))])
      )
    },
  })
var Z = S(Y, [['__scopeId', 'data-v-d83e4d1a']])
const ee = b({
  setup(t) {
    const l = M(),
      s = g([])
    ;(() => {
      s.value = R(l.getMenus)
    })()
    const u = B(),
      c = g(u.name),
      p = E(),
      r = (_) => {
        ;/http(s)?:/.test(_) ? window.open(_) : p.push({ name: _ })
      }
    return (_, i) => {
      const h = o('n-menu')
      return (
        m(),
        I(
          h,
          {
            value: c.value,
            'onUpdate:value': [i[0] || (i[0] = (a) => (c.value = a)), r],
            options: s.value,
          },
          null,
          8,
          ['value', 'options']
        )
      )
    }
  },
})
var te = S(ee, [['__scopeId', 'data-v-6284da75']])
const oe = (t) => (k('data-v-42a523bb'), (t = t()), C(), t),
  ne = { class: 'header-container flex-container sb-c' },
  se = oe(() => d('div', { class: 'left' }, null, -1)),
  ae = { class: 'right flex-container fe-c' },
  le = b({
    setup(t) {
      const l = [{ label: '\u9000\u51FA\u767B\u5F55', key: 'logout', icon: U.LogOutOutline }],
        s = L(),
        f = T(),
        u = z(),
        c = E(),
        p = B(),
        r = () => {
          f.info({
            title: '\u63D0\u793A',
            content: '\u60A8\u786E\u5B9A\u8981\u9000\u51FA\u767B\u5F55\u5417',
            positiveText: '\u786E\u5B9A',
            negativeText: '\u53D6\u6D88',
            onPositiveClick: () => {
              s.logout().then(() => {
                u.success('\u6210\u529F\u9000\u51FA\u767B\u5F55'),
                  c.replace({ path: '/login', query: { redirect: p.fullPath } })
              })
            },
          })
        },
        _ = (a) => {
          switch (a) {
            case 'logout':
              r()
              break
          }
        },
        i = g('FullscreenOutlined'),
        h = () => {
          const a = i.value === 'FullscreenOutlined'
          i.value = a ? 'FullscreenExitOutlined' : 'FullscreenOutlined'
        }
      return (a, v) => {
        const w = o('n-icon'),
          y = o('PersonCircleOutline'),
          F = o('n-dropdown'),
          $ = o('content'),
          x = o('n-dialog-provider')
        return (
          m(),
          A(
            O,
            null,
            [
              d('div', ne, [
                se,
                d('div', ae, [
                  e(
                    w,
                    { size: '0.24rem' },
                    { default: n(() => [(m(), I(N(i.value), { onClick: h }))]), _: 1 }
                  ),
                  e(
                    F,
                    { trigger: 'click', options: l, onSelect: _ },
                    {
                      default: n(() => [
                        e(w, { size: '0.36rem' }, { default: n(() => [e(y)]), _: 1 }),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
              ]),
              e(x, null, { default: n(() => [e($)]), _: 1 }),
            ],
            64
          )
        )
      }
    },
  })
var ce = S(le, [['__scopeId', 'data-v-42a523bb']])
const ue = (t) => (k('data-v-1cd035eb'), (t = t()), C(), t),
  re = K('\u4E3B\u9898'),
  _e = { class: 'setting-item flex-container sb-c' },
  ie = ue(() => d('div', { class: 'setting-item-title' }, '\u4E3B\u9898\u8272', -1)),
  de = { class: 'setting-item-action', style: { 'font-size': '0' } },
  pe = b({
    props: { width: { default: 280 }, title: { default: '\u9879\u76EE\u914D\u7F6E' } },
    setup(t, { expose: l }) {
      const s = V(),
        f = j({ color: s.getAppTheme, colorList: s.getAppThemeList }),
        { color: u, colorList: c } = q(f),
        p = async (a) => {
          await s.setAppTheme(a)
        },
        r = g(!1),
        _ = g('right')
      return (
        l({
          openDrawer: () => {
            r.value = !0
          },
          closeDrawer: () => {
            r.value = !1
          },
        }),
        (a, v) => {
          const w = o('n-divider'),
            y = o('n-color-picker'),
            F = o('n-drawer-content'),
            $ = o('n-drawer')
          return (
            m(),
            I(
              $,
              {
                show: r.value,
                'onUpdate:show': v[1] || (v[1] = (x) => (r.value = x)),
                width: t.width,
                placement: _.value,
              },
              {
                default: n(() => [
                  e(
                    F,
                    { title: t.title, 'native-scrollbar': !1 },
                    {
                      default: n(() => [
                        e(w, { 'title-placement': 'center' }, { default: n(() => [re]), _: 1 }),
                        d('div', _e, [
                          ie,
                          d('div', de, [
                            e(
                              y,
                              {
                                value: D(u),
                                'onUpdate:value': [
                                  v[0] || (v[0] = (x) => (H(u) ? (u.value = x) : null)),
                                  p,
                                ],
                                swatches: D(c),
                              },
                              null,
                              8,
                              ['value', 'swatches']
                            ),
                          ]),
                        ]),
                      ]),
                      _: 1,
                    },
                    8,
                    ['title']
                  ),
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
var ve = S(pe, [['__scopeId', 'data-v-1cd035eb']])
const me = b({
  setup(t) {
    const l = g(!1),
      s = g(null),
      f = () => {
        const { openDrawer: u } = s.value
        u()
      }
    return (u, c) => {
      const p = o('n-layout-sider'),
        r = o('n-layout-header'),
        _ = o('router-view'),
        i = o('n-layout-content'),
        h = o('n-layout-footer'),
        a = o('n-layout'),
        v = o('SettingsOutline'),
        w = o('n-icon')
      return (
        m(),
        A(
          O,
          null,
          [
            e(
              a,
              { class: 'page-container', 'has-sider': '' },
              {
                default: n(() => [
                  e(
                    p,
                    {
                      bordered: '',
                      'show-trigger': '',
                      'collapse-mode': 'width',
                      collapsed: l.value,
                      onCollapse: c[0] || (c[0] = (y) => (l.value = !0)),
                      onExpand: c[1] || (c[1] = (y) => (l.value = !1)),
                    },
                    {
                      default: n(() => [
                        e(Z, { collapsed: l.value }, null, 8, ['collapsed']),
                        e(te),
                      ]),
                      _: 1,
                    },
                    8,
                    ['collapsed']
                  ),
                  e(a, null, {
                    default: n(() => [
                      e(
                        r,
                        { class: 'layout-header', position: 'absolute', bordered: '' },
                        { default: n(() => [e(ce)]), _: 1 }
                      ),
                      e(
                        i,
                        { class: 'layout-content', 'content-style': 'padding: 0.24rem;' },
                        { default: n(() => [e(_)]), _: 1 }
                      ),
                      e(h, { class: 'layout-footer', bordered: '', position: 'absolute' }),
                    ]),
                    _: 1,
                  }),
                ]),
                _: 1,
              }
            ),
            d('span', { class: 'settings-btn', onClick: f }, [
              e(w, { size: '0.24rem' }, { default: n(() => [e(v)]), _: 1 }),
            ]),
            e(ve, { ref_key: 'drawerSetting', ref: s }, null, 512),
          ],
          64
        )
      )
    }
  },
})
var fe = S(me, [['__scopeId', 'data-v-191c9043']])
export { fe as default }
