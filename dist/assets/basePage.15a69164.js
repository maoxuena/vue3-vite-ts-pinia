import {
  _ as F,
  d as b,
  o as g,
  c as D,
  q as N,
  p as B,
  f as I,
  a as u,
  s as V,
  g as f,
  j as T,
  i as M,
  r as t,
  t as $,
  v as j,
  k as q,
  x as H,
  y as K,
  b as e,
  w as o,
  z as G,
  F as O,
  A as J,
  u as Q,
  h as W,
  B as X,
  e as x,
  C as Y,
  D as Z,
  l as ee,
  E as te,
} from './index.01b9ed1a.js'
var ne = './assets/logo.d240a955.png'
const oe = (n) => (B('data-v-d83e4d1a'), (n = n()), I(), n),
  se = { class: 'logo flex-container se-c' },
  ae = oe(() => u('img', { src: ne, alt: '' }, null, -1)),
  ce = { key: 0, class: 'title' },
  le = b({
    props: { collapsed: null },
    setup(n) {
      return (r, s) => (g(), D('div', se, [ae, n.collapsed ? N('', !0) : (g(), D('h2', ce, 'Snow Admin'))]))
    },
  })
var ue = F(le, [['__scopeId', 'data-v-d83e4d1a']])
const re = b({
  setup(n) {
    const r = V(),
      s = f([])
    ;(() => {
      s.value = j(r.getMenus)
    })()
    const d = T(),
      a = f(d.name),
      p = M(),
      m = (c) => {
        ;/http(s)?:/.test(c) ? window.open(c) : p.push({ name: c })
      }
    return (c, _) => {
      const w = t('n-menu')
      return (
        g(),
        $(
          w,
          {
            value: a.value,
            'onUpdate:value': [_[0] || (_[0] = (v) => (a.value = v)), m],
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
var _e = F(re, [['__scopeId', 'data-v-6284da75']])
const ie = (n) => (B('data-v-5ad0b603'), (n = n()), I(), n),
  de = { class: 'header-container flex-container sb-c' },
  pe = ie(() => u('div', { class: 'left' }, null, -1)),
  me = { class: 'right flex-container fe-c' },
  ve = b({
    setup(n) {
      const r = [{ label: '\u9000\u51FA\u767B\u5F55', key: 'logout', icon: J.LogOutOutline }],
        s = q(),
        h = H(),
        d = K(),
        a = M(),
        p = T(),
        m = () => {
          h.info({
            title: '\u63D0\u793A',
            content: '\u60A8\u786E\u5B9A\u8981\u9000\u51FA\u767B\u5F55\u5417',
            positiveText: '\u786E\u5B9A',
            negativeText: '\u53D6\u6D88',
            onPositiveClick: () => {
              s.logout().then(() => {
                d.success('\u6210\u529F\u9000\u51FA\u767B\u5F55'), a.replace({ path: '/login', query: { redirect: p.fullPath } })
              })
            },
          })
        },
        c = (l) => {
          switch (l) {
            case 'logout':
              m()
              break
          }
        },
        _ = f('FullscreenOutlined'),
        w = () => {
          const l = _.value === 'FullscreenOutlined'
          _.value = l ? 'FullscreenExitOutlined' : 'FullscreenOutlined'
        }
      document.addEventListener('fullscreenchange', w)
      const v = () => {
        document.fullscreenElement ? document.exitFullscreen && document.exitFullscreen() : document.documentElement.requestFullscreen()
      }
      return (l, i) => {
        const y = t('n-icon'),
          A = t('PersonCircleOutline'),
          k = t('n-dropdown'),
          E = t('content'),
          C = t('n-dialog-provider')
        return (
          g(),
          D(
            O,
            null,
            [
              u('div', de, [
                pe,
                u('div', me, [
                  e(y, { size: '0.24rem' }, { default: o(() => [(g(), $(G(_.value), { onClick: v }))]), _: 1 }),
                  e(
                    k,
                    { trigger: 'click', options: r, onSelect: c },
                    {
                      default: o(() => [e(y, { size: '0.36rem' }, { default: o(() => [e(A)]), _: 1 })]),
                      _: 1,
                    }
                  ),
                ]),
              ]),
              e(C, null, { default: o(() => [e(E)]), _: 1 }),
            ],
            64
          )
        )
      }
    },
  })
var ge = F(ve, [['__scopeId', 'data-v-5ad0b603']])
const P = (n) => (B('data-v-3380f844'), (n = n()), I(), n),
  fe = ee('\u4E3B\u9898\u914D\u7F6E'),
  he = { class: 'setting-item flex-container sb-c theme-switch' },
  we = P(() => u('div', { class: 'setting-item-title' }, '\u4E3B\u9898', -1)),
  ye = { class: 'setting-item-action', style: { 'font-size': '0' } },
  Se = { class: 'setting-item flex-container sb-c' },
  xe = P(() => u('div', { class: 'setting-item-title' }, '\u4E3B\u9898\u8272', -1)),
  Fe = { class: 'setting-item-action', style: { 'font-size': '0' } },
  be = b({
    props: { width: { default: 280 }, title: { default: '\u9879\u76EE\u914D\u7F6E' } },
    setup(n, { expose: r }) {
      const s = Q(),
        h = async (l) => {
          await s.setDarkTheme(l)
        },
        d = W({ color: s.getAppTheme, colorList: s.getAppThemeList }),
        { color: a, colorList: p } = X(d),
        m = async (l) => {
          await s.setAppTheme(l), te(l)
        },
        c = f(!1),
        _ = f('right')
      return (
        r({
          openDrawer: () => {
            c.value = !0
          },
          closeDrawer: () => {
            c.value = !1
          },
        }),
        (l, i) => {
          const y = t('n-divider'),
            A = t('Moon'),
            k = t('n-icon'),
            E = t('SunnySharp'),
            C = t('n-switch'),
            R = t('n-tooltip'),
            z = t('n-color-picker'),
            L = t('n-drawer-content'),
            U = t('n-drawer')
          return (
            g(),
            $(
              U,
              {
                show: c.value,
                'onUpdate:show': i[2] || (i[2] = (S) => (c.value = S)),
                width: n.width,
                placement: _.value,
              },
              {
                default: o(() => [
                  e(
                    L,
                    { title: n.title, 'native-scrollbar': !1 },
                    {
                      default: o(() => [
                        e(y, { 'title-placement': 'center' }, { default: o(() => [fe]), _: 1 }),
                        u('div', he, [
                          we,
                          u('div', ye, [
                            e(
                              R,
                              { placement: 'bottom' },
                              {
                                trigger: o(() => [
                                  e(
                                    C,
                                    {
                                      value: x(s).darkTheme,
                                      'onUpdate:value': [i[0] || (i[0] = (S) => (x(s).darkTheme = S)), h],
                                    },
                                    {
                                      checked: o(() => [e(k, { size: '0.14rem', color: '#ffd93b' }, { default: o(() => [e(A)]), _: 1 })]),
                                      unchecked: o(() => [e(k, { size: '0.14rem', color: '#ffd93b' }, { default: o(() => [e(E)]), _: 1 })]),
                                      _: 1,
                                    },
                                    8,
                                    ['value']
                                  ),
                                ]),
                                default: o(() => [u('span', null, Y(x(s).darkTheme ? '\u6DF1' : '\u6D45') + '\u8272\u4E3B\u9898', 1)]),
                                _: 1,
                              }
                            ),
                          ]),
                        ]),
                        u('div', Se, [
                          xe,
                          u('div', Fe, [
                            e(
                              z,
                              {
                                value: x(a),
                                'onUpdate:value': [i[1] || (i[1] = (S) => (Z(a) ? (a.value = S) : null)), m],
                                swatches: x(p),
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
var ke = F(be, [['__scopeId', 'data-v-3380f844']])
const De = b({
  setup(n) {
    const r = f(!1),
      s = f(null),
      h = () => {
        const { openDrawer: d } = s.value
        d()
      }
    return (d, a) => {
      const p = t('n-layout-sider'),
        m = t('n-layout-header'),
        c = t('router-view'),
        _ = t('n-layout-content'),
        w = t('n-layout-footer'),
        v = t('n-layout'),
        l = t('SettingsOutline'),
        i = t('n-icon')
      return (
        g(),
        D(
          O,
          null,
          [
            e(
              v,
              { class: 'page-container', 'has-sider': '' },
              {
                default: o(() => [
                  e(
                    p,
                    {
                      bordered: '',
                      'show-trigger': '',
                      'collapse-mode': 'width',
                      collapsed: r.value,
                      onCollapse: a[0] || (a[0] = (y) => (r.value = !0)),
                      onExpand: a[1] || (a[1] = (y) => (r.value = !1)),
                    },
                    {
                      default: o(() => [e(ue, { collapsed: r.value }, null, 8, ['collapsed']), e(_e)]),
                      _: 1,
                    },
                    8,
                    ['collapsed']
                  ),
                  e(v, null, {
                    default: o(() => [
                      e(m, { class: 'layout-header', position: 'absolute', bordered: '' }, { default: o(() => [e(ge)]), _: 1 }),
                      e(_, { class: 'layout-content', 'content-style': 'padding: 0.24rem;' }, { default: o(() => [e(c)]), _: 1 }),
                      e(w, { class: 'layout-footer', bordered: '', position: 'absolute' }),
                    ]),
                    _: 1,
                  }),
                ]),
                _: 1,
              }
            ),
            u('span', { class: 'settings-btn', onClick: h }, [e(i, { size: '0.24rem' }, { default: o(() => [e(l)]), _: 1 })]),
            e(ke, { ref_key: 'drawerSetting', ref: s }, null, 512),
          ],
          64
        )
      )
    }
  },
})
var Ee = F(De, [['__scopeId', 'data-v-191c9043']])
export { Ee as default }
