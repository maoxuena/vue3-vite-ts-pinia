import {
  d as B,
  f as m,
  g as f,
  u as h,
  h as x,
  i as C,
  r as u,
  o as k,
  c as R,
  b as s,
  w as l,
  j as a,
  a as U,
  F as q,
  k as z,
} from './index.a7d9147a.js'
import { _ as L } from './plugin-vue_export-helper.21dcd24c.js'
const N = { class: 'btn-container flex-container sb-c' },
  V = z(' \u767B\u5F55 '),
  D = B({
    setup(I) {
      const v = m('medium'),
        p = m(null),
        g = f({
          username: [
            { required: !0, message: '\u8BF7\u8F93\u5165\u7528\u6237\u540D', trigger: 'blur' },
          ],
          password: [{ required: !0, message: '\u8BF7\u8F93\u5165\u5BC6\u7801', trigger: 'blur' }],
        }),
        e = f({ username: 'admin', password: '123456' }),
        n = m(!1),
        F = h(),
        w = x(),
        b = C(),
        y = () => {
          var c
          ;(c = p.value) == null ||
            c.validate(async (o) => {
              var t
              if (o) return !1
              n.value = !0
              try {
                const r = { username: e.username, password: e.password },
                  _ = await b.login(r),
                  i = decodeURIComponent(((t = w.query) == null ? void 0 : t.redirect) || '/home')
                F.replace(i)
              } finally {
                n.value = !1
              }
              setTimeout(() => {
                n.value = !1
              }, 800)
            })
        }
      return (c, o) => {
        const t = u('n-input'),
          r = u('n-form-item'),
          _ = u('n-form'),
          i = u('n-button')
        return (
          k(),
          R(
            q,
            null,
            [
              s(
                _,
                { ref_key: 'loginFormRef', ref: p, model: a(e), rules: a(g), size: v.value },
                {
                  default: l(() => [
                    s(
                      r,
                      { path: 'username' },
                      {
                        default: l(() => [
                          s(
                            t,
                            {
                              value: a(e).username,
                              'onUpdate:value': o[0] || (o[0] = (d) => (a(e).username = d)),
                              placeholder: '\u8BF7\u8F93\u5165\u8D26\u53F7',
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
                    s(
                      r,
                      { path: 'password' },
                      {
                        default: l(() => [
                          s(
                            t,
                            {
                              value: a(e).password,
                              'onUpdate:value': o[1] || (o[1] = (d) => (a(e).password = d)),
                              placeholder: '\u8BF7\u8F93\u5165\u5BC6\u7801',
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
              U('div', N, [
                s(
                  i,
                  { type: 'primary', loading: n.value, onClick: y },
                  { default: l(() => [V]), _: 1 },
                  8,
                  ['loading']
                ),
              ]),
            ],
            64
          )
        )
      }
    },
  })
var j = L(D, [['__scopeId', 'data-v-6c6b26d7']])
export { j as default }
