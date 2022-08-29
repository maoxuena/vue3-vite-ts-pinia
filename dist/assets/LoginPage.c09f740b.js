import {
  _ as e,
  d as a,
  u as s,
  r as l,
  a as n,
  b as r,
  c as o,
  e as t,
  f as i,
  o as c,
  g as d,
  h as u,
  w as p,
  i as m,
  j as v,
  F as f,
  k as g,
  n as b,
  p as w,
  l as _,
} from './index.9a0ced8a.js'
const x = { class: 'btn-container flex-container sb-c' },
  h = g(' 登录 ')
var y = e(
  a({
    setup(e) {
      const a = s()
      l('medium')
      const g = l(null),
        b = n({
          username: [{ required: !0, message: '请输入用户名', trigger: 'blur' }],
          password: [{ required: !0, message: '请输入密码', trigger: 'blur' }],
        }),
        w = n({ username: 'admin', password: '123456' }),
        _ = l(!1),
        y = r(),
        k = o(),
        q = t(),
        z = () => {
          var e
          null == (e = g.value) ||
            e.validate(async (e) => {
              var a
              if (e) return !1
              _.value = !0
              try {
                const e = { username: w.username, password: w.password },
                  s = (await q.login(e), decodeURIComponent((null == (a = k.query) ? void 0 : a.redirect) || '/home'))
                y.replace(s)
              } finally {
                _.value = !1
              }
              setTimeout(() => {
                _.value = !1
              }, 800)
            })
        }
      return (e, s) => {
        const l = i('n-input'),
          n = i('n-form-item'),
          r = i('n-form'),
          o = i('n-button')
        return (
          c(),
          d(
            f,
            null,
            [
              u(
                r,
                { ref_key: 'loginFormRef', ref: g, model: m(w), rules: m(b), size: m(a).size },
                {
                  default: p(() => [
                    u(
                      n,
                      { path: 'username' },
                      {
                        default: p(() => [
                          u(
                            l,
                            {
                              value: m(w).username,
                              'onUpdate:value': s[0] || (s[0] = (e) => (m(w).username = e)),
                              placeholder: '请输入账号',
                              clearable: '',
                            },
                            null,
                            8,
                            ['value']
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                    u(
                      n,
                      { path: 'password' },
                      {
                        default: p(() => [
                          u(
                            l,
                            {
                              value: m(w).password,
                              'onUpdate:value': s[1] || (s[1] = (e) => (m(w).password = e)),
                              placeholder: '请输入密码',
                              type: 'password',
                              'show-password-on': 'click',
                              clearable: '',
                            },
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
                ['model', 'rules', 'size']
              ),
              v('div', x, [u(o, { type: 'primary', loading: _.value, onClick: z }, { default: p(() => [h]), _: 1 }, 8, ['loading'])]),
            ],
            64
          )
        )
      }
    },
  }),
  [['__scopeId', 'data-v-b20b7b5c']]
)
const k = { class: 'login-box flex-container c-c' },
  q = { class: 'login-left flex-container c-c' },
  z = { class: 'login-right flex-container c-c' },
  I = { class: 'login-form' },
  U = { class: 'login-title flex-container c-c' },
  j = ((e) => (w('data-v-1f21c0dd'), (e = e()), _(), e))(() => v('p', { class: 'logo-text' }, 'Snow-Admin', -1))
var C = e(
  a({
    setup(e) {
      const a = s()
      return (e, s) => {
        const l = i('svg-icon'),
          n = i('n-grid-item'),
          r = i('n-grid')
        return (
          c(),
          d(
            'div',
            { class: b(['login-container page-container flex-container c-c', { 'dark-bg': m(a).darkTheme }]) },
            [
              v('div', k, [
                u(
                  r,
                  { cols: '6', 'item-responsive': '', responsive: 'screen' },
                  {
                    default: p(() => [
                      u(
                        n,
                        { span: '0 m:3 l:4' },
                        { default: p(() => [v('div', q, [u(l, { class: 'login-illustration', name: 'illustration' })])]), _: 1 }
                      ),
                      u(
                        n,
                        { span: '6 m:3 l:2' },
                        { default: p(() => [v('div', z, [v('div', I, [v('div', U, [u(l, { name: 'logo' }), j]), u(y)])])]), _: 1 }
                      ),
                    ]),
                    _: 1,
                  }
                ),
              ]),
            ],
            2
          )
        )
      }
    },
  }),
  [['__scopeId', 'data-v-1f21c0dd']]
)
export { C as default }
