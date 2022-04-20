import _ from './LoginForm.29046d12.js'
import { _ as r } from './plugin-vue_export-helper.21dcd24c.js'
import {
  d as l,
  r as c,
  o as d,
  c as p,
  a as e,
  b as s,
  w as t,
  p as g,
  e as m,
} from './index.a7d9147a.js'
var v = './assets/illustration.d377e784.svg',
  f = './assets/logo.eaa97953.svg'
const a = (o) => (g('data-v-9c351b98'), (o = o()), m(), o),
  x = { class: 'login-container page-container flex-container c-c' },
  u = { class: 'login-box flex-container c-c' },
  h = a(() =>
    e('div', { class: 'login-left flex-container c-c' }, [e('img', { src: v, alt: 'login' })], -1)
  ),
  I = { class: 'login-right flex-container c-c' },
  b = { class: 'login-form' },
  w = a(() =>
    e(
      'div',
      { class: 'login-title flex-container c-c' },
      [
        e('img', { class: 'login-icon', src: f, alt: '' }),
        e('p', { class: 'logo-text' }, 'Snow-Admin'),
      ],
      -1
    )
  ),
  S = l({
    setup(o) {
      return (B, C) => {
        const n = c('n-grid-item'),
          i = c('n-grid')
        return (
          d(),
          p('div', x, [
            e('div', u, [
              s(
                i,
                { cols: '6', 'item-responsive': '', responsive: 'screen' },
                {
                  default: t(() => [
                    s(n, { span: '0 m:3 l:4' }, { default: t(() => [h]), _: 1 }),
                    s(
                      n,
                      { span: '6 m:3 l:2' },
                      { default: t(() => [e('div', I, [e('div', b, [w, s(_)])])]), _: 1 }
                    ),
                  ]),
                  _: 1,
                }
              ),
            ]),
          ])
        )
      }
    },
  })
var P = r(S, [['__scopeId', 'data-v-9c351b98']])
export { P as default }
