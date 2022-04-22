import _ from './LoginForm.d49b9180.js'
import {
  _ as r,
  d as l,
  r as a,
  o as d,
  c as p,
  a as e,
  b as s,
  w as t,
  p as g,
  e as m,
} from './index.d06dd181.js'
var v = './assets/illustration.68033ca9.svg',
  f = './assets/logo.eaa97953.svg'
const c = (o) => (g('data-v-b4fbb132'), (o = o()), m(), o),
  u = { class: 'login-container page-container flex-container c-c' },
  x = { class: 'login-box flex-container c-c' },
  h = c(() =>
    e('div', { class: 'login-left flex-container c-c' }, [e('img', { src: v, alt: 'login' })], -1)
  ),
  b = { class: 'login-right flex-container c-c' },
  w = { class: 'login-form' },
  I = c(() =>
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
        const n = a('n-grid-item'),
          i = a('n-grid')
        return (
          d(),
          p('div', u, [
            e('div', x, [
              s(
                i,
                { cols: '6', 'item-responsive': '', responsive: 'screen' },
                {
                  default: t(() => [
                    s(n, { span: '0 m:3 l:4' }, { default: t(() => [h]), _: 1 }),
                    s(
                      n,
                      { span: '6 m:3 l:2' },
                      { default: t(() => [e('div', b, [e('div', w, [I, s(_)])])]), _: 1 }
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
var y = r(S, [['__scopeId', 'data-v-b4fbb132']])
export { y as default }
