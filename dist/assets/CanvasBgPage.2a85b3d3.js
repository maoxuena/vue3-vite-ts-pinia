var a = Object.defineProperty,
  e = (e, t, l) => (
    ((e, t, l) => {
      t in e ? a(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : (e[t] = l)
    })(e, 'symbol' != typeof t ? t + '' : t, l),
    l
  )
import {
  d as t,
  r as l,
  q as s,
  o as i,
  g as u,
  _ as h,
  s as o,
  v as d,
  x as v,
  y as r,
  i as n,
  j as p,
  z as c,
  A as b,
  u as f,
  f as g,
  h as m,
  w,
  B as y,
  k as C,
} from './index.9a0ced8a.js'
const R = ['width', 'height'],
  _ = t({
    props: { width: { default: 400 }, height: { default: 300 } },
    setup(a) {
      const t = a,
        h = l(0),
        o = l(0),
        d = l(217),
        v = l([]),
        r = l(0),
        n = l(2500),
        p = l(null),
        c = l(null),
        b = l(null),
        f = l(null)
      s(
        () => [t.width, t.height],
        ([a, e], [t, l]) => {
          ;(h.value = a), (o.value = e), g(h.value, o.value)
          for (let s = 0; s < n.value; s++) r.value++, (v.value[r.value] = new y(h.value, o.value, n.value))
          w()
        }
      )
      const g = (a, e) => {
          ;(p.value = document.getElementById('canvas-bg1')),
            (c.value = p.value.getContext('2d')),
            (b.value = document.createElement('canvas')),
            (f.value = b.value.getContext('2d')),
            (b.value.width = a),
            (b.value.height = e)
          const t = b.value.width / 2,
            l = f.value.createRadialGradient(t, t, 0, t, t, t)
          l.addColorStop(0.025, '#CCC'),
            l.addColorStop(0.1, 'hsl(' + d.value + ', 61%, 33%)'),
            l.addColorStop(0.25, 'hsl(' + d.value + ', 64%, 6%)'),
            l.addColorStop(1, 'transparent'),
            (f.value.fillStyle = l),
            f.value.beginPath(),
            f.value.arc(t, t, t, 0, 2 * Math.PI),
            f.value.fill()
        },
        m = (a = 0, e = 0) => {
          if (a > e) {
            const t = e
            ;(e = a), (a = t)
          }
          return Math.floor(Math.random() * (e - a + 1)) + a
        },
        w = () => {
          ;(c.value.globalCompositeOperation = 'source-over'),
            (c.value.globalAlpha = 0.5),
            (c.value.fillStyle = 'hsla(' + d.value + ', 64%, 6%, 2)'),
            c.value.fillRect(0, 0, h.value, o.value),
            (c.value.globalCompositeOperation = 'lighter')
          for (let a = 1, e = v.value.length; a < e; a++) v.value[a].draw()
          window.requestAnimationFrame(w)
        }
      class y {
        constructor(a, t, l) {
          e(this, 'orbitRadius'),
            e(this, 'radius'),
            e(this, 'orbitX'),
            e(this, 'orbitY'),
            e(this, 'timePassed'),
            e(this, 'speed'),
            e(this, 'alpha'),
            (this.orbitRadius = m(
              ((a, e) => {
                const t = Math.max(a, e)
                return Math.round(Math.sqrt(t * t + t * t)) / 2
              })(a, t)
            )),
            (this.radius = m(60, this.orbitRadius) / 18),
            (this.orbitX = a / 2),
            (this.orbitY = t / 2),
            (this.timePassed = m(0, l)),
            (this.speed = m(this.orbitRadius) / 5e5),
            (this.alpha = m(2, 10) / 10)
        }
        draw() {
          const a = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
            e = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
            t = m(10)
          1 === t && this.alpha > 0 ? (this.alpha -= 0.05) : 2 === t && this.alpha < 1 && (this.alpha += 0.05),
            (c.value.globalAlpha = this.alpha),
            c.value.drawImage(b.value, a - this.radius / 2, e - this.radius / 2, this.radius, this.radius),
            (this.timePassed += this.speed)
        }
      }
      return (e, t) => (i(), u('canvas', { id: 'canvas-bg1', width: a.width, height: a.height }, null, 8, R))
    },
  })
const x = { class: 'canvas-bg-content' }
var M = h(
  t({
    props: { type: { default: 1 } },
    setup(a) {
      const e = a,
        t = { 1: _ },
        h = o(() => t[e.type]),
        f = l(null),
        g = l(400),
        m = l(300),
        w = () => {
          b(() => {
            f.value && ((g.value = f.value.offsetWidth), (m.value = f.value.offsetHeight))
          })
        }
      return (
        s(
          () => e.type,
          (a, e) => {
            w()
          }
        ),
        d(() => {
          w()
        }),
        (a, e) => (
          i(),
          u(
            'div',
            { ref_key: 'CanvasBg', ref: f, class: 'canvas-bg-container' },
            [
              (i(), v(r(n(h)), { width: g.value, height: m.value, class: 'canvas-bg' }, null, 8, ['width', 'height'])),
              p('div', x, [c(a.$slots, 'default', {}, void 0, !0)]),
            ],
            512
          )
        )
      )
    },
  }),
  [['__scopeId', 'data-v-23a73285']]
)
const P = C('内容'),
  S = t({
    setup(a) {
      const e = f(),
        t = l(1),
        s = l(500),
        h = l(300)
      return (a, l) => {
        const o = g('n-input-number'),
          d = g('n-form-item'),
          v = g('n-form')
        return (
          i(),
          u('div', null, [
            m(
              v,
              { ref: 'formRef', inline: '', 'label-width': 80, size: n(e).size },
              {
                default: w(() => [
                  m(
                    d,
                    { label: '宽度' },
                    {
                      default: w(() => [
                        m(
                          o,
                          {
                            value: s.value,
                            'onUpdate:value': l[0] || (l[0] = (a) => (s.value = a)),
                            disabled: '',
                            placeholder: '输入宽度',
                          },
                          null,
                          8,
                          ['value']
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                  m(
                    d,
                    { label: '高度' },
                    {
                      default: w(() => [
                        m(
                          o,
                          {
                            value: h.value,
                            'onUpdate:value': l[1] || (l[1] = (a) => (h.value = a)),
                            disabled: '',
                            placeholder: '输入高度',
                          },
                          null,
                          8,
                          ['value']
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                  m(
                    d,
                    { label: '类型（1-2之间的整数，包含1、2）' },
                    {
                      default: w(() => [
                        m(
                          o,
                          { value: t.value, 'onUpdate:value': l[2] || (l[2] = (a) => (t.value = a)), placeholder: '输入类型' },
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
              ['size']
            ),
            p(
              'div',
              { style: y({ width: `${s.value}px`, height: `${h.value}px` }) },
              [m(M, { type: t.value }, { default: w(() => [P]), _: 1 }, 8, ['type'])],
              4
            ),
          ])
        )
      }
    },
  })
export { S as default }
