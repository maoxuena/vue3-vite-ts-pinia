import {
  _,
  d as l,
  u as d,
  r as a,
  o as p,
  c as g,
  a as e,
  b as o,
  w as t,
  n as m,
  e as v,
  p as f,
  f as u,
} from './index.01b9ed1a.js'
import x from './LoginForm.288a05c9.js'
var h = './assets/illustration.68033ca9.svg',
  S = './assets/logo.eaa97953.svg'
const c = (s) => (f('data-v-1cc6e5b2'), (s = s()), u(), s),
  b = { class: 'login-box flex-container c-c' },
  k = c(() =>
    e('div', { class: 'login-left flex-container c-c' }, [e('img', { src: h, alt: 'login' })], -1)
  ),
  w = { class: 'login-right flex-container c-c' },
  C = { class: 'login-form' },
  I = c(() =>
    e(
      'div',
      { class: 'login-title flex-container c-c' },
      [
        e('img', { class: 'login-icon', src: S, alt: '' }),
        e('p', { class: 'logo-text' }, 'Snow-Admin'),
      ],
      -1
    )
  ),
  B = l({
    setup(s) {
      const i = d()
      return (L, y) => {
        const n = a('n-grid-item'),
          r = a('n-grid')
        return (
          p(),
          g(
            'div',
            {
              class: m([
                'login-container page-container flex-container c-c',
                { 'dark-bg': v(i).darkTheme },
              ]),
            },
            [
              e('div', b, [
                o(
                  r,
                  { cols: '6', 'item-responsive': '', responsive: 'screen' },
                  {
                    default: t(() => [
                      o(n, { span: '0 m:3 l:4' }, { default: t(() => [k]), _: 1 }),
                      o(
                        n,
                        { span: '6 m:3 l:2' },
                        { default: t(() => [e('div', w, [e('div', C, [I, o(x)])])]), _: 1 }
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
  })
var V = _(B, [['__scopeId', 'data-v-1cc6e5b2']])
export { V as default }
