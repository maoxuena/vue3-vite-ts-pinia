var e = Object.defineProperty,
  t = Object.defineProperties,
  n = Object.getOwnPropertyDescriptors,
  s = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  r = (t, n, s) => (n in t ? e(t, n, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (t[n] = s)),
  o = (e, t) => {
    for (var n in t || (t = {})) i.call(t, n) && r(e, n, t[n])
    if (s) for (var n of s(t)) a.call(t, n) && r(e, n, t[n])
    return e
  },
  c = (e, s) => t(e, n(s))
import {
  _ as l,
  d as h,
  o as u,
  g as d,
  M as g,
  p as f,
  l as p,
  j as m,
  N as v,
  r as y,
  c as b,
  a as x,
  q as M,
  b as w,
  v as k,
  f as _,
  x as S,
  i as C,
  O as L,
  u as A,
  s as I,
  P as O,
  Q as E,
  w as $,
  h as F,
  R as T,
  S as j,
  T as R,
  U as z,
  V as N,
  n as P,
  e as U,
  W,
  y as K,
  X as q,
  Y as D,
  t as J,
  Z as V,
  $ as B,
  a0 as H,
  k as Q,
  a1 as X,
  F as Y,
} from './index.9a0ced8a.js'
import { u as Z } from './useCurrentInstance.8edf2477.js'
const G = { class: 'logo flex-container se-c' },
  ee = ((e) => (f('data-v-34c089aa'), (e = e()), p(), e))(() => m('img', { src: './assets/logo.d240a955.png', alt: '' }, null, -1)),
  te = { key: 0, class: 'title' }
var ne = l(
  h({
    props: { collapsed: { type: Boolean } },
    setup: (e) => (t, n) => (u(), d('div', G, [ee, e.collapsed ? g('', !0) : (u(), d('h2', te, 'Snow Admin'))])),
  }),
  [['__scopeId', 'data-v-34c089aa']]
)
var se = l(
  h({
    setup(e) {
      const t = v(),
        n = y([]),
        s = () => {
          n.value = L(t.getMenus)
        },
        i = b(),
        a = y(i.name),
        r = i.matched,
        o = r && r.length ? r.map((e) => e.name) : [],
        c = x({ openKeys: o })
      M(
        () => i.fullPath,
        () => {
          var e
          s()
          const t = i.matched
          c.openKeys = t.map((e) => e.name)
          const n = (null == (e = i.meta) ? void 0 : e.activeMenu) || ''
          a.value = n || i.name
        }
      )
      const l = w(),
        h = (e) => {
          ;/http(s)?:/.test(e) ? window.open(e) : l.push({ name: e })
        },
        d = (e) => {
          if (!e) return
          const t = e.find((e) => -1 === c.openKeys.indexOf(e)),
            n = g(t)
          c.openKeys = n ? (t ? [t] : []) : e
        },
        g = (e) => {
          if (!e) return !1
          const t = []
          for (const { children: s, key: i } of C(n)) s && s.length && t.push(i)
          return t.includes(e)
        }
      return (
        k(() => {
          s()
        }),
        (e, t) => {
          const s = _('n-menu')
          return (
            u(),
            S(
              s,
              {
                value: a.value,
                'onUpdate:value': [t[0] || (t[0] = (e) => (a.value = e)), h],
                options: n.value,
                'expanded-keys': C(c).openKeys,
                'onUpdate:expandedKeys': d,
              },
              null,
              8,
              ['value', 'options', 'expanded-keys']
            )
          )
        }
      )
    },
  }),
  [['__scopeId', 'data-v-75dfb0a5']]
)
var ie = l(
  h({
    setup(e) {
      const t = A(),
        n = I(() => t.language),
        s = I(() => {
          const e = []
          return (
            Object.keys(O).forEach((t) => {
              e.push({ label: O[t].label, key: t, disabled: n.value === t })
            }),
            e
          )
        }),
        { proxy: i } = Z(),
        a = E(),
        r = async (e) => {
          ;(i.$i18n.locale = e), await t.setLanguage(e), a.success(i.$t('toast.switchLangSuccess')), window.location.reload()
        }
      return (e, t) => {
        const n = _('Language'),
          i = _('n-icon'),
          a = _('n-dropdown')
        return (
          u(),
          S(
            a,
            { trigger: 'hover', options: C(s), onSelect: r },
            { default: $(() => [F(i, { class: 'language', size: '0.24rem' }, { default: $(() => [F(n)]), _: 1 })]), _: 1 },
            8,
            ['options']
          )
        )
      }
    },
  }),
  [['__scopeId', 'data-v-630a38c3']]
)
function ae(e) {
  return Array.isArray ? Array.isArray(e) : '[object Array]' === de(e)
}
function re(e) {
  return 'string' == typeof e
}
function oe(e) {
  return 'number' == typeof e
}
function ce(e) {
  return (
    !0 === e ||
    !1 === e ||
    ((function (e) {
      return le(e) && null !== e
    })(e) &&
      '[object Boolean]' == de(e))
  )
}
function le(e) {
  return 'object' == typeof e
}
function he(e) {
  return null != e
}
function ue(e) {
  return !e.trim().length
}
function de(e) {
  return null == e ? (void 0 === e ? '[object Undefined]' : '[object Null]') : Object.prototype.toString.call(e)
}
const ge = Object.prototype.hasOwnProperty
class fe {
  constructor(e) {
    ;(this._keys = []), (this._keyMap = {})
    let t = 0
    e.forEach((e) => {
      let n = pe(e)
      ;(t += n.weight), this._keys.push(n), (this._keyMap[n.id] = n), (t += n.weight)
    }),
      this._keys.forEach((e) => {
        e.weight /= t
      })
  }
  get(e) {
    return this._keyMap[e]
  }
  keys() {
    return this._keys
  }
  toJSON() {
    return JSON.stringify(this._keys)
  }
}
function pe(e) {
  let t = null,
    n = null,
    s = null,
    i = 1
  if (re(e) || ae(e)) (s = e), (t = me(e)), (n = ve(e))
  else {
    if (!ge.call(e, 'name')) throw new Error(((e) => `Missing ${e} property in key`)('name'))
    const a = e.name
    if (((s = a), ge.call(e, 'weight') && ((i = e.weight), i <= 0)))
      throw new Error(((e) => `Property 'weight' in key '${e}' must be a positive integer`)(a))
    ;(t = me(a)), (n = ve(a))
  }
  return { path: t, id: n, weight: i, src: s }
}
function me(e) {
  return ae(e) ? e : e.split('.')
}
function ve(e) {
  return ae(e) ? e.join('.') : e
}
const ye = {
  useExtendedSearch: !1,
  getFn: function (e, t) {
    let n = [],
      s = !1
    const i = (e, t, a) => {
      if (he(e))
        if (t[a]) {
          const r = e[t[a]]
          if (!he(r)) return
          if (a === t.length - 1 && (re(r) || oe(r) || ce(r)))
            n.push(
              (function (e) {
                return null == e
                  ? ''
                  : (function (e) {
                      if ('string' == typeof e) return e
                      let t = e + ''
                      return '0' == t && 1 / e == -1 / 0 ? '-0' : t
                    })(e)
              })(r)
            )
          else if (ae(r)) {
            s = !0
            for (let e = 0, n = r.length; e < n; e += 1) i(r[e], t, a + 1)
          } else t.length && i(r, t, a + 1)
        } else n.push(e)
    }
    return i(e, re(t) ? t.split('.') : t, 0), s ? n : n[0]
  },
  ignoreLocation: !1,
  ignoreFieldNorm: !1,
  fieldNormWeight: 1,
}
var be = o(
  o(
    o(
      o(
        {},
        {
          isCaseSensitive: !1,
          includeScore: !1,
          keys: [],
          shouldSort: !0,
          sortFn: (e, t) => (e.score === t.score ? (e.idx < t.idx ? -1 : 1) : e.score < t.score ? -1 : 1),
        }
      ),
      { includeMatches: !1, findAllMatches: !1, minMatchCharLength: 1 }
    ),
    { location: 0, threshold: 0.6, distance: 100 }
  ),
  ye
)
const xe = /[^ ]+/g
class Me {
  constructor({ getFn: e = be.getFn, fieldNormWeight: t = be.fieldNormWeight } = {}) {
    ;(this.norm = (function (e = 1, t = 3) {
      const n = new Map(),
        s = Math.pow(10, t)
      return {
        get(t) {
          const i = t.match(xe).length
          if (n.has(i)) return n.get(i)
          const a = 1 / Math.pow(i, 0.5 * e),
            r = parseFloat(Math.round(a * s) / s)
          return n.set(i, r), r
        },
        clear() {
          n.clear()
        },
      }
    })(t, 3)),
      (this.getFn = e),
      (this.isCreated = !1),
      this.setIndexRecords()
  }
  setSources(e = []) {
    this.docs = e
  }
  setIndexRecords(e = []) {
    this.records = e
  }
  setKeys(e = []) {
    ;(this.keys = e),
      (this._keysMap = {}),
      e.forEach((e, t) => {
        this._keysMap[e.id] = t
      })
  }
  create() {
    !this.isCreated &&
      this.docs.length &&
      ((this.isCreated = !0),
      re(this.docs[0])
        ? this.docs.forEach((e, t) => {
            this._addString(e, t)
          })
        : this.docs.forEach((e, t) => {
            this._addObject(e, t)
          }),
      this.norm.clear())
  }
  add(e) {
    const t = this.size()
    re(e) ? this._addString(e, t) : this._addObject(e, t)
  }
  removeAt(e) {
    this.records.splice(e, 1)
    for (let t = e, n = this.size(); t < n; t += 1) this.records[t].i -= 1
  }
  getValueForItemAtKeyId(e, t) {
    return e[this._keysMap[t]]
  }
  size() {
    return this.records.length
  }
  _addString(e, t) {
    if (!he(e) || ue(e)) return
    let n = { v: e, i: t, n: this.norm.get(e) }
    this.records.push(n)
  }
  _addObject(e, t) {
    let n = { i: t, $: {} }
    this.keys.forEach((t, s) => {
      let i = this.getFn(e, t.path)
      if (he(i))
        if (ae(i)) {
          let e = []
          const t = [{ nestedArrIndex: -1, value: i }]
          for (; t.length; ) {
            const { nestedArrIndex: n, value: s } = t.pop()
            if (he(s))
              if (re(s) && !ue(s)) {
                let t = { v: s, i: n, n: this.norm.get(s) }
                e.push(t)
              } else
                ae(s) &&
                  s.forEach((e, n) => {
                    t.push({ nestedArrIndex: n, value: e })
                  })
          }
          n.$[s] = e
        } else if (!ue(i)) {
          let e = { v: i, n: this.norm.get(i) }
          n.$[s] = e
        }
    }),
      this.records.push(n)
  }
  toJSON() {
    return { keys: this.keys, records: this.records }
  }
}
function we(e, t, { getFn: n = be.getFn, fieldNormWeight: s = be.fieldNormWeight } = {}) {
  const i = new Me({ getFn: n, fieldNormWeight: s })
  return i.setKeys(e.map(pe)), i.setSources(t), i.create(), i
}
function ke(
  e,
  { errors: t = 0, currentLocation: n = 0, expectedLocation: s = 0, distance: i = be.distance, ignoreLocation: a = be.ignoreLocation } = {}
) {
  const r = t / e.length
  if (a) return r
  const o = Math.abs(s - n)
  return i ? r + o / i : o ? 1 : r
}
function _e(
  e,
  t,
  n,
  {
    location: s = be.location,
    distance: i = be.distance,
    threshold: a = be.threshold,
    findAllMatches: r = be.findAllMatches,
    minMatchCharLength: o = be.minMatchCharLength,
    includeMatches: c = be.includeMatches,
    ignoreLocation: l = be.ignoreLocation,
  } = {}
) {
  if (t.length > 32) throw new Error(`Pattern length exceeds max of ${32}.`)
  const h = t.length,
    u = e.length,
    d = Math.max(0, Math.min(s, u))
  let g = a,
    f = d
  const p = o > 1 || c,
    m = p ? Array(u) : []
  let v
  for (; (v = e.indexOf(t, f)) > -1; ) {
    let e = ke(t, { currentLocation: v, expectedLocation: d, distance: i, ignoreLocation: l })
    if (((g = Math.min(e, g)), (f = v + h), p)) {
      let e = 0
      for (; e < h; ) (m[v + e] = 1), (e += 1)
    }
  }
  f = -1
  let y = [],
    b = 1,
    x = h + u
  const M = 1 << (h - 1)
  for (let k = 0; k < h; k += 1) {
    let s = 0,
      a = x
    for (; s < a; ) {
      ke(t, { errors: k, currentLocation: d + a, expectedLocation: d, distance: i, ignoreLocation: l }) <= g ? (s = a) : (x = a),
        (a = Math.floor((x - s) / 2 + s))
    }
    x = a
    let o = Math.max(1, d - a + 1),
      c = r ? u : Math.min(d + a, u) + h,
      v = Array(c + 2)
    v[c + 1] = (1 << k) - 1
    for (let r = c; r >= o; r -= 1) {
      let s = r - 1,
        a = n[e.charAt(s)]
      if (
        (p && (m[s] = +!!a),
        (v[r] = ((v[r + 1] << 1) | 1) & a),
        k && (v[r] |= ((y[r + 1] | y[r]) << 1) | 1 | y[r + 1]),
        v[r] & M && ((b = ke(t, { errors: k, currentLocation: s, expectedLocation: d, distance: i, ignoreLocation: l })), b <= g))
      ) {
        if (((g = b), (f = s), f <= d)) break
        o = Math.max(1, 2 * d - f)
      }
    }
    if (ke(t, { errors: k + 1, currentLocation: d, expectedLocation: d, distance: i, ignoreLocation: l }) > g) break
    y = v
  }
  const w = { isMatch: f >= 0, score: Math.max(0.001, b) }
  if (p) {
    const e = (function (e = [], t = be.minMatchCharLength) {
      let n = [],
        s = -1,
        i = -1,
        a = 0
      for (let r = e.length; a < r; a += 1) {
        let r = e[a]
        r && -1 === s ? (s = a) : r || -1 === s || ((i = a - 1), i - s + 1 >= t && n.push([s, i]), (s = -1))
      }
      return e[a - 1] && a - s >= t && n.push([s, a - 1]), n
    })(m, o)
    e.length ? c && (w.indices = e) : (w.isMatch = !1)
  }
  return w
}
function Se(e) {
  let t = {}
  for (let n = 0, s = e.length; n < s; n += 1) {
    const i = e.charAt(n)
    t[i] = (t[i] || 0) | (1 << (s - n - 1))
  }
  return t
}
class Ce {
  constructor(
    e,
    {
      location: t = be.location,
      threshold: n = be.threshold,
      distance: s = be.distance,
      includeMatches: i = be.includeMatches,
      findAllMatches: a = be.findAllMatches,
      minMatchCharLength: r = be.minMatchCharLength,
      isCaseSensitive: o = be.isCaseSensitive,
      ignoreLocation: c = be.ignoreLocation,
    } = {}
  ) {
    if (
      ((this.options = {
        location: t,
        threshold: n,
        distance: s,
        includeMatches: i,
        findAllMatches: a,
        minMatchCharLength: r,
        isCaseSensitive: o,
        ignoreLocation: c,
      }),
      (this.pattern = o ? e : e.toLowerCase()),
      (this.chunks = []),
      !this.pattern.length)
    )
      return
    const l = (e, t) => {
        this.chunks.push({ pattern: e, alphabet: Se(e), startIndex: t })
      },
      h = this.pattern.length
    if (h > 32) {
      let e = 0
      const t = h % 32,
        n = h - t
      for (; e < n; ) l(this.pattern.substr(e, 32), e), (e += 32)
      if (t) {
        const e = h - 32
        l(this.pattern.substr(e), e)
      }
    } else l(this.pattern, 0)
  }
  searchIn(e) {
    const { isCaseSensitive: t, includeMatches: n } = this.options
    if ((t || (e = e.toLowerCase()), this.pattern === e)) {
      let t = { isMatch: !0, score: 0 }
      return n && (t.indices = [[0, e.length - 1]]), t
    }
    const { location: s, distance: i, threshold: a, findAllMatches: r, minMatchCharLength: o, ignoreLocation: c } = this.options
    let l = [],
      h = 0,
      u = !1
    this.chunks.forEach(({ pattern: t, alphabet: d, startIndex: g }) => {
      const {
        isMatch: f,
        score: p,
        indices: m,
      } = _e(e, t, d, {
        location: s + g,
        distance: i,
        threshold: a,
        findAllMatches: r,
        minMatchCharLength: o,
        includeMatches: n,
        ignoreLocation: c,
      })
      f && (u = !0), (h += p), f && m && (l = [...l, ...m])
    })
    let d = { isMatch: u, score: u ? h / this.chunks.length : 1 }
    return u && n && (d.indices = l), d
  }
}
class Le {
  constructor(e) {
    this.pattern = e
  }
  static isMultiMatch(e) {
    return Ae(e, this.multiRegex)
  }
  static isSingleMatch(e) {
    return Ae(e, this.singleRegex)
  }
  search() {}
}
function Ae(e, t) {
  const n = e.match(t)
  return n ? n[1] : null
}
class Ie extends Le {
  constructor(
    e,
    {
      location: t = be.location,
      threshold: n = be.threshold,
      distance: s = be.distance,
      includeMatches: i = be.includeMatches,
      findAllMatches: a = be.findAllMatches,
      minMatchCharLength: r = be.minMatchCharLength,
      isCaseSensitive: o = be.isCaseSensitive,
      ignoreLocation: c = be.ignoreLocation,
    } = {}
  ) {
    super(e),
      (this._bitapSearch = new Ce(e, {
        location: t,
        threshold: n,
        distance: s,
        includeMatches: i,
        findAllMatches: a,
        minMatchCharLength: r,
        isCaseSensitive: o,
        ignoreLocation: c,
      }))
  }
  static get type() {
    return 'fuzzy'
  }
  static get multiRegex() {
    return /^"(.*)"$/
  }
  static get singleRegex() {
    return /^(.*)$/
  }
  search(e) {
    return this._bitapSearch.searchIn(e)
  }
}
class Oe extends Le {
  constructor(e) {
    super(e)
  }
  static get type() {
    return 'include'
  }
  static get multiRegex() {
    return /^'"(.*)"$/
  }
  static get singleRegex() {
    return /^'(.*)$/
  }
  search(e) {
    let t,
      n = 0
    const s = [],
      i = this.pattern.length
    for (; (t = e.indexOf(this.pattern, n)) > -1; ) (n = t + i), s.push([t, n - 1])
    const a = !!s.length
    return { isMatch: a, score: a ? 0 : 1, indices: s }
  }
}
const Ee = [
    class extends Le {
      constructor(e) {
        super(e)
      }
      static get type() {
        return 'exact'
      }
      static get multiRegex() {
        return /^="(.*)"$/
      }
      static get singleRegex() {
        return /^=(.*)$/
      }
      search(e) {
        const t = e === this.pattern
        return { isMatch: t, score: t ? 0 : 1, indices: [0, this.pattern.length - 1] }
      }
    },
    Oe,
    class extends Le {
      constructor(e) {
        super(e)
      }
      static get type() {
        return 'prefix-exact'
      }
      static get multiRegex() {
        return /^\^"(.*)"$/
      }
      static get singleRegex() {
        return /^\^(.*)$/
      }
      search(e) {
        const t = e.startsWith(this.pattern)
        return { isMatch: t, score: t ? 0 : 1, indices: [0, this.pattern.length - 1] }
      }
    },
    class extends Le {
      constructor(e) {
        super(e)
      }
      static get type() {
        return 'inverse-prefix-exact'
      }
      static get multiRegex() {
        return /^!\^"(.*)"$/
      }
      static get singleRegex() {
        return /^!\^(.*)$/
      }
      search(e) {
        const t = !e.startsWith(this.pattern)
        return { isMatch: t, score: t ? 0 : 1, indices: [0, e.length - 1] }
      }
    },
    class extends Le {
      constructor(e) {
        super(e)
      }
      static get type() {
        return 'inverse-suffix-exact'
      }
      static get multiRegex() {
        return /^!"(.*)"\$$/
      }
      static get singleRegex() {
        return /^!(.*)\$$/
      }
      search(e) {
        const t = !e.endsWith(this.pattern)
        return { isMatch: t, score: t ? 0 : 1, indices: [0, e.length - 1] }
      }
    },
    class extends Le {
      constructor(e) {
        super(e)
      }
      static get type() {
        return 'suffix-exact'
      }
      static get multiRegex() {
        return /^"(.*)"\$$/
      }
      static get singleRegex() {
        return /^(.*)\$$/
      }
      search(e) {
        const t = e.endsWith(this.pattern)
        return { isMatch: t, score: t ? 0 : 1, indices: [e.length - this.pattern.length, e.length - 1] }
      }
    },
    class extends Le {
      constructor(e) {
        super(e)
      }
      static get type() {
        return 'inverse-exact'
      }
      static get multiRegex() {
        return /^!"(.*)"$/
      }
      static get singleRegex() {
        return /^!(.*)$/
      }
      search(e) {
        const t = -1 === e.indexOf(this.pattern)
        return { isMatch: t, score: t ? 0 : 1, indices: [0, e.length - 1] }
      }
    },
    Ie,
  ],
  $e = Ee.length,
  Fe = / +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/
const Te = new Set([Ie.type, Oe.type])
class je {
  constructor(
    e,
    {
      isCaseSensitive: t = be.isCaseSensitive,
      includeMatches: n = be.includeMatches,
      minMatchCharLength: s = be.minMatchCharLength,
      ignoreLocation: i = be.ignoreLocation,
      findAllMatches: a = be.findAllMatches,
      location: r = be.location,
      threshold: o = be.threshold,
      distance: c = be.distance,
    } = {}
  ) {
    ;(this.query = null),
      (this.options = {
        isCaseSensitive: t,
        includeMatches: n,
        minMatchCharLength: s,
        findAllMatches: a,
        ignoreLocation: i,
        location: r,
        threshold: o,
        distance: c,
      }),
      (this.pattern = t ? e : e.toLowerCase()),
      (this.query = (function (e, t = {}) {
        return e.split('|').map((e) => {
          let n = e
              .trim()
              .split(Fe)
              .filter((e) => e && !!e.trim()),
            s = []
          for (let i = 0, a = n.length; i < a; i += 1) {
            const e = n[i]
            let a = !1,
              r = -1
            for (; !a && ++r < $e; ) {
              const n = Ee[r]
              let i = n.isMultiMatch(e)
              i && (s.push(new n(i, t)), (a = !0))
            }
            if (!a)
              for (r = -1; ++r < $e; ) {
                const n = Ee[r]
                let i = n.isSingleMatch(e)
                if (i) {
                  s.push(new n(i, t))
                  break
                }
              }
          }
          return s
        })
      })(this.pattern, this.options))
  }
  static condition(e, t) {
    return t.useExtendedSearch
  }
  searchIn(e) {
    const t = this.query
    if (!t) return { isMatch: !1, score: 1 }
    const { includeMatches: n, isCaseSensitive: s } = this.options
    e = s ? e : e.toLowerCase()
    let i = 0,
      a = [],
      r = 0
    for (let o = 0, c = t.length; o < c; o += 1) {
      const s = t[o]
      ;(a.length = 0), (i = 0)
      for (let t = 0, o = s.length; t < o; t += 1) {
        const o = s[t],
          { isMatch: c, indices: l, score: h } = o.search(e)
        if (!c) {
          ;(r = 0), (i = 0), (a.length = 0)
          break
        }
        if (((i += 1), (r += h), n)) {
          const e = o.constructor.type
          Te.has(e) ? (a = [...a, ...l]) : a.push(l)
        }
      }
      if (i) {
        let e = { isMatch: !0, score: r / i }
        return n && (e.indices = a), e
      }
    }
    return { isMatch: !1, score: 1 }
  }
}
const Re = []
function ze(e, t) {
  for (let n = 0, s = Re.length; n < s; n += 1) {
    let s = Re[n]
    if (s.condition(e, t)) return new s(e, t)
  }
  return new Ce(e, t)
}
const Ne = '$and',
  Pe = '$or',
  Ue = '$path',
  We = '$val',
  Ke = (e) => !(!e[Ne] && !e[Pe]),
  qe = (e) => ({ [Ne]: Object.keys(e).map((t) => ({ [t]: e[t] })) })
function De(e, t, { auto: n = !0 } = {}) {
  const s = (e) => {
    let i = Object.keys(e)
    const a = ((e) => !!e[Ue])(e)
    if (!a && i.length > 1 && !Ke(e)) return s(qe(e))
    if (((e) => !ae(e) && le(e) && !Ke(e))(e)) {
      const s = a ? e[Ue] : i[0],
        r = a ? e[We] : e[s]
      if (!re(r)) throw new Error(((e) => `Invalid value for key ${e}`)(s))
      const o = { keyId: ve(s), pattern: r }
      return n && (o.searcher = ze(r, t)), o
    }
    let r = { children: [], operator: i[0] }
    return (
      i.forEach((t) => {
        const n = e[t]
        ae(n) &&
          n.forEach((e) => {
            r.children.push(s(e))
          })
      }),
      r
    )
  }
  return Ke(e) || (e = qe(e)), s(e)
}
function Je(e, t) {
  const n = e.matches
  ;(t.matches = []),
    he(n) &&
      n.forEach((e) => {
        if (!he(e.indices) || !e.indices.length) return
        const { indices: n, value: s } = e
        let i = { indices: n, value: s }
        e.key && (i.key = e.key.src), e.idx > -1 && (i.refIndex = e.idx), t.matches.push(i)
      })
}
function Ve(e, t) {
  t.score = e.score
}
class Be {
  constructor(e, t = {}, n) {
    ;(this.options = o(o({}, be), t)),
      this.options.useExtendedSearch,
      (this._keyStore = new fe(this.options.keys)),
      this.setCollection(e, n)
  }
  setCollection(e, t) {
    if (((this._docs = e), t && !(t instanceof Me))) throw new Error("Incorrect 'index' type")
    this._myIndex = t || we(this.options.keys, this._docs, { getFn: this.options.getFn, fieldNormWeight: this.options.fieldNormWeight })
  }
  add(e) {
    he(e) && (this._docs.push(e), this._myIndex.add(e))
  }
  remove(e = () => !1) {
    const t = []
    for (let n = 0, s = this._docs.length; n < s; n += 1) {
      const i = this._docs[n]
      e(i, n) && (this.removeAt(n), (n -= 1), (s -= 1), t.push(i))
    }
    return t
  }
  removeAt(e) {
    this._docs.splice(e, 1), this._myIndex.removeAt(e)
  }
  getIndex() {
    return this._myIndex
  }
  search(e, { limit: t = -1 } = {}) {
    const { includeMatches: n, includeScore: s, shouldSort: i, sortFn: a, ignoreFieldNorm: r } = this.options
    let o = re(e) ? (re(this._docs[0]) ? this._searchStringList(e) : this._searchObjectList(e)) : this._searchLogical(e)
    return (
      (function (e, { ignoreFieldNorm: t = be.ignoreFieldNorm }) {
        e.forEach((e) => {
          let n = 1
          e.matches.forEach(({ key: e, norm: s, score: i }) => {
            const a = e ? e.weight : null
            n *= Math.pow(0 === i && a ? Number.EPSILON : i, (a || 1) * (t ? 1 : s))
          }),
            (e.score = n)
        })
      })(o, { ignoreFieldNorm: r }),
      i && o.sort(a),
      oe(t) && t > -1 && (o = o.slice(0, t)),
      (function (e, t, { includeMatches: n = be.includeMatches, includeScore: s = be.includeScore } = {}) {
        const i = []
        return (
          n && i.push(Je),
          s && i.push(Ve),
          e.map((e) => {
            const { idx: n } = e,
              s = { item: t[n], refIndex: n }
            return (
              i.length &&
                i.forEach((t) => {
                  t(e, s)
                }),
              s
            )
          })
        )
      })(o, this._docs, { includeMatches: n, includeScore: s })
    )
  }
  _searchStringList(e) {
    const t = ze(e, this.options),
      { records: n } = this._myIndex,
      s = []
    return (
      n.forEach(({ v: e, i: n, n: i }) => {
        if (!he(e)) return
        const { isMatch: a, score: r, indices: o } = t.searchIn(e)
        a && s.push({ item: e, idx: n, matches: [{ score: r, value: e, norm: i, indices: o }] })
      }),
      s
    )
  }
  _searchLogical(e) {
    const t = De(e, this.options),
      n = (e, t, s) => {
        if (!e.children) {
          const { keyId: n, searcher: i } = e,
            a = this._findMatches({ key: this._keyStore.get(n), value: this._myIndex.getValueForItemAtKeyId(t, n), searcher: i })
          return a && a.length ? [{ idx: s, item: t, matches: a }] : []
        }
        const i = []
        for (let a = 0, r = e.children.length; a < r; a += 1) {
          const r = e.children[a],
            o = n(r, t, s)
          if (o.length) i.push(...o)
          else if (e.operator === Ne) return []
        }
        return i
      },
      s = this._myIndex.records,
      i = {},
      a = []
    return (
      s.forEach(({ $: e, i: s }) => {
        if (he(e)) {
          let r = n(t, e, s)
          r.length &&
            (i[s] || ((i[s] = { idx: s, item: e, matches: [] }), a.push(i[s])),
            r.forEach(({ matches: e }) => {
              i[s].matches.push(...e)
            }))
        }
      }),
      a
    )
  }
  _searchObjectList(e) {
    const t = ze(e, this.options),
      { keys: n, records: s } = this._myIndex,
      i = []
    return (
      s.forEach(({ $: e, i: s }) => {
        if (!he(e)) return
        let a = []
        n.forEach((n, s) => {
          a.push(...this._findMatches({ key: n, value: e[s], searcher: t }))
        }),
          a.length && i.push({ idx: s, item: e, matches: a })
      }),
      i
    )
  }
  _findMatches({ key: e, value: t, searcher: n }) {
    if (!he(t)) return []
    let s = []
    if (ae(t))
      t.forEach(({ v: t, i: i, n: a }) => {
        if (!he(t)) return
        const { isMatch: r, score: o, indices: c } = n.searchIn(t)
        r && s.push({ score: o, key: e, value: t, idx: i, norm: a, indices: c })
      })
    else {
      const { v: i, n: a } = t,
        { isMatch: r, score: o, indices: c } = n.searchIn(i)
      r && s.push({ score: o, key: e, value: i, norm: a, indices: c })
    }
    return s
  }
}
function He(e) {
  if ('string' != typeof e) throw new TypeError('Path must be a string. Received ' + JSON.stringify(e))
}
function Qe(e, t) {
  for (var n, s = '', i = 0, a = -1, r = 0, o = 0; o <= e.length; ++o) {
    if (o < e.length) n = e.charCodeAt(o)
    else {
      if (47 === n) break
      n = 47
    }
    if (47 === n) {
      if (a === o - 1 || 1 === r);
      else if (a !== o - 1 && 2 === r) {
        if (s.length < 2 || 2 !== i || 46 !== s.charCodeAt(s.length - 1) || 46 !== s.charCodeAt(s.length - 2))
          if (s.length > 2) {
            var c = s.lastIndexOf('/')
            if (c !== s.length - 1) {
              ;-1 === c ? ((s = ''), (i = 0)) : (i = (s = s.slice(0, c)).length - 1 - s.lastIndexOf('/')), (a = o), (r = 0)
              continue
            }
          } else if (2 === s.length || 1 === s.length) {
            ;(s = ''), (i = 0), (a = o), (r = 0)
            continue
          }
        t && (s.length > 0 ? (s += '/..') : (s = '..'), (i = 2))
      } else s.length > 0 ? (s += '/' + e.slice(a + 1, o)) : (s = e.slice(a + 1, o)), (i = o - a - 1)
      ;(a = o), (r = 0)
    } else 46 === n && -1 !== r ? ++r : (r = -1)
  }
  return s
}
;(Be.version = '6.5.3'),
  (Be.createIndex = we),
  (Be.parseIndex = function (e, { getFn: t = be.getFn, fieldNormWeight: n = be.fieldNormWeight } = {}) {
    const { keys: s, records: i } = e,
      a = new Me({ getFn: t, fieldNormWeight: n })
    return a.setKeys(s), a.setIndexRecords(i), a
  }),
  (Be.config = be),
  (Be.parseQuery = De),
  (function (...e) {
    Re.push(...e)
  })(je)
var Xe = {
  resolve: function () {
    for (var e, t = '', n = !1, s = arguments.length - 1; s >= -1 && !n; s--) {
      var i
      s >= 0 ? (i = arguments[s]) : (void 0 === e && (e = process.cwd()), (i = e)),
        He(i),
        0 !== i.length && ((t = i + '/' + t), (n = 47 === i.charCodeAt(0)))
    }
    return (t = Qe(t, !n)), n ? (t.length > 0 ? '/' + t : '/') : t.length > 0 ? t : '.'
  },
  normalize: function (e) {
    if ((He(e), 0 === e.length)) return '.'
    var t = 47 === e.charCodeAt(0),
      n = 47 === e.charCodeAt(e.length - 1)
    return 0 !== (e = Qe(e, !t)).length || t || (e = '.'), e.length > 0 && n && (e += '/'), t ? '/' + e : e
  },
  isAbsolute: function (e) {
    return He(e), e.length > 0 && 47 === e.charCodeAt(0)
  },
  join: function () {
    if (0 === arguments.length) return '.'
    for (var e, t = 0; t < arguments.length; ++t) {
      var n = arguments[t]
      He(n), n.length > 0 && (void 0 === e ? (e = n) : (e += '/' + n))
    }
    return void 0 === e ? '.' : Xe.normalize(e)
  },
  relative: function (e, t) {
    if ((He(e), He(t), e === t)) return ''
    if ((e = Xe.resolve(e)) === (t = Xe.resolve(t))) return ''
    for (var n = 1; n < e.length && 47 === e.charCodeAt(n); ++n);
    for (var s = e.length, i = s - n, a = 1; a < t.length && 47 === t.charCodeAt(a); ++a);
    for (var r = t.length - a, o = i < r ? i : r, c = -1, l = 0; l <= o; ++l) {
      if (l === o) {
        if (r > o) {
          if (47 === t.charCodeAt(a + l)) return t.slice(a + l + 1)
          if (0 === l) return t.slice(a + l)
        } else i > o && (47 === e.charCodeAt(n + l) ? (c = l) : 0 === l && (c = 0))
        break
      }
      var h = e.charCodeAt(n + l)
      if (h !== t.charCodeAt(a + l)) break
      47 === h && (c = l)
    }
    var u = ''
    for (l = n + c + 1; l <= s; ++l) (l !== s && 47 !== e.charCodeAt(l)) || (0 === u.length ? (u += '..') : (u += '/..'))
    return u.length > 0 ? u + t.slice(a + c) : ((a += c), 47 === t.charCodeAt(a) && ++a, t.slice(a))
  },
  _makeLong: function (e) {
    return e
  },
  dirname: function (e) {
    if ((He(e), 0 === e.length)) return '.'
    for (var t = e.charCodeAt(0), n = 47 === t, s = -1, i = !0, a = e.length - 1; a >= 1; --a)
      if (47 === (t = e.charCodeAt(a))) {
        if (!i) {
          s = a
          break
        }
      } else i = !1
    return -1 === s ? (n ? '/' : '.') : n && 1 === s ? '//' : e.slice(0, s)
  },
  basename: function (e, t) {
    if (void 0 !== t && 'string' != typeof t) throw new TypeError('"ext" argument must be a string')
    He(e)
    var n,
      s = 0,
      i = -1,
      a = !0
    if (void 0 !== t && t.length > 0 && t.length <= e.length) {
      if (t.length === e.length && t === e) return ''
      var r = t.length - 1,
        o = -1
      for (n = e.length - 1; n >= 0; --n) {
        var c = e.charCodeAt(n)
        if (47 === c) {
          if (!a) {
            s = n + 1
            break
          }
        } else -1 === o && ((a = !1), (o = n + 1)), r >= 0 && (c === t.charCodeAt(r) ? -1 == --r && (i = n) : ((r = -1), (i = o)))
      }
      return s === i ? (i = o) : -1 === i && (i = e.length), e.slice(s, i)
    }
    for (n = e.length - 1; n >= 0; --n)
      if (47 === e.charCodeAt(n)) {
        if (!a) {
          s = n + 1
          break
        }
      } else -1 === i && ((a = !1), (i = n + 1))
    return -1 === i ? '' : e.slice(s, i)
  },
  extname: function (e) {
    He(e)
    for (var t = -1, n = 0, s = -1, i = !0, a = 0, r = e.length - 1; r >= 0; --r) {
      var o = e.charCodeAt(r)
      if (47 !== o) -1 === s && ((i = !1), (s = r + 1)), 46 === o ? (-1 === t ? (t = r) : 1 !== a && (a = 1)) : -1 !== t && (a = -1)
      else if (!i) {
        n = r + 1
        break
      }
    }
    return -1 === t || -1 === s || 0 === a || (1 === a && t === s - 1 && t === n + 1) ? '' : e.slice(t, s)
  },
  format: function (e) {
    if (null === e || 'object' != typeof e)
      throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e)
    return (function (e, t) {
      var n = t.dir || t.root,
        s = t.base || (t.name || '') + (t.ext || '')
      return n ? (n === t.root ? n + s : n + e + s) : s
    })('/', e)
  },
  parse: function (e) {
    He(e)
    var t = { root: '', dir: '', base: '', ext: '', name: '' }
    if (0 === e.length) return t
    var n,
      s = e.charCodeAt(0),
      i = 47 === s
    i ? ((t.root = '/'), (n = 1)) : (n = 0)
    for (var a = -1, r = 0, o = -1, c = !0, l = e.length - 1, h = 0; l >= n; --l)
      if (47 !== (s = e.charCodeAt(l)))
        -1 === o && ((c = !1), (o = l + 1)), 46 === s ? (-1 === a ? (a = l) : 1 !== h && (h = 1)) : -1 !== a && (h = -1)
      else if (!c) {
        r = l + 1
        break
      }
    return (
      -1 === a || -1 === o || 0 === h || (1 === h && a === o - 1 && a === r + 1)
        ? -1 !== o && (t.base = t.name = 0 === r && i ? e.slice(1, o) : e.slice(r, o))
        : (0 === r && i ? ((t.name = e.slice(1, a)), (t.base = e.slice(1, o))) : ((t.name = e.slice(r, a)), (t.base = e.slice(r, o))),
          (t.ext = e.slice(a, o))),
      r > 0 ? (t.dir = e.slice(0, r - 1)) : i && (t.dir = '/'),
      t
    )
  },
  sep: '/',
  delimiter: ':',
  win32: null,
  posix: null,
}
Xe.posix = Xe
var Ye = Xe
const Ze = (e, t = '/', n = []) => {
  e = T(e)
  let s = []
  for (const i of e) {
    const e = { path: Ye.resolve(t, i.path), title: [...n] },
      a = /.*\/:.*/
    if (i.meta && i.meta.title && !a.exec(i.path) && !s.find((t) => t.path === e.path)) {
      const t = j.global.t(`route.${i.meta.title}`)
      ;(e.title = [...e.title, t]), s.push(e)
    }
    if (i.children) {
      const t = Ze(i.children, e.path, e.title)
      t.length >= 1 && (s = [...s, ...t])
    }
  }
  return s
}
var Ge = l(
  h({
    setup(e) {
      const t = y(!1),
        n = y(!1),
        s = y(null),
        i = () => {
          var e
          ;(n.value = !n.value), null == (e = s.value) || e.focus()
        },
        a = y(''),
        r = y([]),
        o = (e) => {
          ;(t.value = !0),
            (r.value = '' !== e ? h.search(e).map((e) => ({ label: e.item.title.join(' > '), value: e.item })) : []),
            (t.value = !1)
        },
        c = (e) => {
          l.push(e.path), p()
        },
        l = w()
      let h,
        g = I(() => {
          const e = R(l.getRoutes())
          return Ze(e)
        })
      const f = (e) => {
        h = new Be(e, {
          shouldSort: !0,
          threshold: 0.4,
          minMatchCharLength: 1,
          keys: [
            { name: 'title', weight: 0.7 },
            { name: 'path', weight: 0.3 },
          ],
        })
      }
      f(g.value)
      const p = () => {
        var e
        null == (e = s.value) || e.blur(), (n.value = !1), (r.value = [])
      }
      return (
        M(n, (e) => {
          e ? document.body.addEventListener('click', p) : document.body.removeEventListener('click', p)
        }),
        z(() => {
          ;(g = I(() => {
            const e = R(l.getRoutes())
            return Ze(e)
          })),
            f(g.value)
        }),
        (e, l) => {
          const h = _('Search'),
            g = _('n-icon'),
            f = _('n-select')
          return (
            u(),
            d(
              'div',
              { class: P([{ show: n.value }, 'header-search']), onClick: l[1] || (l[1] = N((e) => (n.value = !0), ['stop'])) },
              [
                F(
                  g,
                  { id: 'guide-search', size: '0.24rem', class: 'search-icon', onClick: N(i, ['stop']) },
                  { default: $(() => [F(h)]), _: 1 },
                  8,
                  ['onClick']
                ),
                F(
                  f,
                  {
                    ref_key: 'headerSearchSelectRef',
                    ref: s,
                    value: a.value,
                    'onUpdate:value': [l[0] || (l[0] = (e) => (a.value = e)), c],
                    class: 'header-search-select',
                    filterable: '',
                    placeholder: '搜索内容',
                    options: r.value,
                    loading: t.value,
                    clearable: '',
                    remote: '',
                    onSearch: o,
                  },
                  null,
                  8,
                  ['value', 'options', 'loading']
                ),
              ],
              2
            )
          )
        }
      )
    },
  }),
  [['__scopeId', 'data-v-c8919348']]
)
const et = { class: 'header-container flex-container sb-c' },
  tt = ((e) => (f('data-v-01b3b0b2'), (e = e()), p(), e))(() => m('div', { class: 'left' }, null, -1)),
  nt = { class: 'right flex-container fe-c' }
var st = l(
  h({
    setup(e) {
      const t = [{ label: '退出登录', key: 'logout', icon: q.LogOutOutline }],
        n = U(),
        s = W(),
        i = E(),
        a = w(),
        r = b(),
        o = (e) => {
          if ('logout' === e)
            s.info({
              title: '提示',
              content: '您确定要退出登录吗',
              positiveText: '确定',
              negativeText: '取消',
              onPositiveClick: () => {
                n.logout().then(() => {
                  i.success('成功退出登录'), a.replace({ path: '/login', query: { redirect: r.fullPath } })
                })
              },
            })
        },
        c = y('FullscreenOutlined')
      document.addEventListener('fullscreenchange', () => {
        const e = 'FullscreenOutlined' === c.value
        c.value = e ? 'FullscreenExitOutlined' : 'FullscreenOutlined'
      })
      const l = () => {
        document.fullscreenElement ? document.exitFullscreen && document.exitFullscreen() : document.documentElement.requestFullscreen()
      }
      return (e, n) => {
        const s = _('n-icon'),
          i = _('PersonCircleOutline'),
          a = _('n-dropdown')
        return (
          u(),
          d('div', et, [
            tt,
            m('div', nt, [
              F(Ge),
              F(ie),
              F(s, { size: '0.24rem' }, { default: $(() => [(u(), S(K(c.value), { onClick: l }))]), _: 1 }),
              F(
                a,
                { trigger: 'click', options: t, onSelect: o },
                { default: $(() => [F(s, { size: '0.36rem' }, { default: $(() => [F(i)]), _: 1 })]), _: 1 }
              ),
            ]),
          ])
        )
      }
    },
  }),
  [['__scopeId', 'data-v-01b3b0b2']]
)
const it = [
  { value: 'zoom-fade', label: '渐变' },
  { value: 'zoom-out', label: '闪现' },
  { value: 'fade-slide', label: '滑动' },
  { value: 'fade', label: '消退' },
  { value: 'fade-bottom', label: '底部消退' },
  { value: 'fade-scale', label: '缩放消退' },
]
const at = (e) => (f('data-v-8e9be19c'), (e = e()), p(), e),
  rt = Q('主题配置'),
  ot = { class: 'setting-item flex-container sb-c theme-switch' },
  ct = at(() => m('div', { class: 'setting-item-title' }, '主题', -1)),
  lt = { class: 'setting-item-action', style: { 'font-size': '0' } },
  ht = { class: 'setting-item flex-container sb-c' },
  ut = at(() => m('div', { class: 'setting-item-title' }, '主题色', -1)),
  dt = { class: 'setting-item-action', style: { 'font-size': '0' } },
  gt = Q('导航栏模式'),
  ft = { class: 'setting-item flex-container sb-fs' },
  pt = { class: 'setting-item-style' },
  mt = at(() => m('span', null, '左侧菜单模式', -1)),
  vt = { class: 'setting-item-style' },
  yt = at(() => m('span', null, '顶部菜单模式', -1)),
  bt = { class: 'setting-item-style' },
  xt = at(() => m('span', null, '顶部菜单混合模式', -1)),
  Mt = Q('导航栏风格'),
  wt = { class: 'setting-item flex-container sb-fs' },
  kt = { class: 'setting-item-style' },
  _t = at(() => m('span', null, '暗色侧边栏', -1)),
  St = { class: 'setting-item-style' },
  Ct = at(() => m('span', null, '白色侧边栏', -1)),
  Lt = { class: 'setting-item-style' },
  At = at(() => m('span', null, '暗色顶栏', -1)),
  It = Q('界面配置'),
  Ot = { class: 'setting-item flex-container sb-c' },
  Et = at(() => m('div', { class: 'setting-item-title' }, '分割菜单', -1)),
  $t = { class: 'setting-item-action' },
  Ft = { class: 'setting-item flex-container sb-c' },
  Tt = at(() => m('div', { class: 'setting-item-title' }, '固定顶栏', -1)),
  jt = { class: 'setting-item-action' },
  Rt = { class: 'setting-item flex-container sb-c' },
  zt = at(() => m('div', { class: 'setting-item-title' }, '固定多页签', -1)),
  Nt = { class: 'setting-item-action' },
  Pt = { class: 'setting-item flex-container sb-c' },
  Ut = at(() => m('div', { class: 'setting-item-title' }, '显示重载页面按钮', -1)),
  Wt = { class: 'setting-item-action' },
  Kt = { class: 'setting-item flex-container sb-c' },
  qt = at(() => m('div', { class: 'setting-item-title' }, '显示面包屑导航', -1)),
  Dt = { class: 'setting-item-action' },
  Jt = { class: 'setting-item flex-container sb-c' },
  Vt = at(() => m('div', { class: 'setting-item-title' }, '显示面包屑显示图标', -1)),
  Bt = { class: 'setting-item-action' },
  Ht = { class: 'setting-item flex-container sb-c' },
  Qt = at(() => m('div', { class: 'setting-item-title' }, '显示多页签', -1)),
  Xt = { class: 'setting-item-action' },
  Yt = { class: 'setting-item flex-container sb-c' },
  Zt = at(() => m('div', { class: 'setting-item-title' }, '尺寸', -1)),
  Gt = { class: 'setting-item-action' },
  en = Q('动画配置'),
  tn = { class: 'setting-item flex-container sb-c' },
  nn = at(() => m('div', { class: 'setting-item-title' }, '禁用动画', -1)),
  sn = { class: 'setting-item-action' },
  an = { class: 'setting-item flex-container sb-c' },
  rn = at(() => m('div', { class: 'setting-item-title' }, '动画类型', -1)),
  on = { class: 'setting-item-select' }
var cn = l(
  h({
    props: { width: { default: '2.8rem' }, title: { default: '项目配置' } },
    setup(e, { expose: t }) {
      const n = A(),
        s = async (e) => {
          await n.setDarkTheme(e)
        },
        i = x({ color: n.getAppTheme, colorList: n.getAppThemeList }),
        { color: a, colorList: r } = D(i),
        l = async (e) => {
          await n.setAppTheme(e), X(e)
        },
        h = async (e) => {
          await n.setNavTheme(e)
        },
        d = async (e) => {
          await n.setNavMode(e)
          const t = c(o({}, n.menuSetting), { mixMenu: !1 })
          await n.setMenuSetting(t)
        },
        f = async (e) => {
          const t = c(o({}, n.menuSetting), { mixMenu: e })
          await n.setMenuSetting(t)
        },
        p = async (e) => {
          const t = c(o({}, n.headerSetting), { fixed: e })
          await n.setHeaderSetting(t)
        },
        v = async (e) => {
          const t = c(o({}, n.multiTabsSetting), { fixed: e })
          await n.setMultiTabsSetting(t)
        },
        b = async (e) => {
          const t = c(o({}, n.headerSetting), { isReload: e })
          await n.setHeaderSetting(t)
        },
        M = async (e) => {
          const t = c(o({}, n.crumbsSetting), { show: e })
          await n.setCrumbsSetting(t)
        },
        w = async (e) => {
          const t = c(o({}, n.crumbsSetting), { showIcon: e })
          await n.setCrumbsSetting(t)
        },
        k = async (e) => {
          const t = c(o({}, n.multiTabsSetting), { show: e })
          await n.setMultiTabsSetting(t)
        },
        L = async (e) => {
          await n.setSize(e)
        },
        I = async (e) => {
          await n.setIsPageAnimate(e)
        },
        O = async (e) => {
          await n.setPageAnimateType(e)
        },
        E = y(!1),
        T = y('right')
      return (
        t({
          openDrawer: () => {
            E.value = !0
          },
          closeDrawer: () => {
            E.value = !1
          },
        }),
        (t, i) => {
          const a = _('n-divider'),
            o = _('Moon'),
            c = _('n-icon'),
            y = _('SunnySharp'),
            x = _('n-switch'),
            A = _('n-tooltip'),
            j = _('n-color-picker'),
            R = _('svg-icon'),
            z = _('n-badge'),
            N = _('n-select'),
            P = _('n-drawer-content'),
            U = _('n-drawer')
          return (
            u(),
            S(
              U,
              { show: E.value, 'onUpdate:show': i[18] || (i[18] = (e) => (E.value = e)), width: e.width, placement: T.value },
              {
                default: $(() => [
                  F(
                    P,
                    { title: e.title, 'native-scrollbar': !1 },
                    {
                      default: $(() => [
                        F(a, { 'title-placement': 'center' }, { default: $(() => [rt]), _: 1 }),
                        m('div', ot, [
                          ct,
                          m('div', lt, [
                            F(
                              A,
                              { placement: 'bottom' },
                              {
                                trigger: $(() => [
                                  F(
                                    x,
                                    { value: C(n).darkTheme, 'onUpdate:value': [i[0] || (i[0] = (e) => (C(n).darkTheme = e)), s] },
                                    {
                                      checked: $(() => [F(c, { size: '0.14rem', color: '#ffd93b' }, { default: $(() => [F(o)]), _: 1 })]),
                                      unchecked: $(() => [F(c, { size: '0.14rem', color: '#ffd93b' }, { default: $(() => [F(y)]), _: 1 })]),
                                      _: 1,
                                    },
                                    8,
                                    ['value']
                                  ),
                                ]),
                                default: $(() => [m('span', null, J(C(n).darkTheme ? '深' : '浅') + '色主题', 1)]),
                                _: 1,
                              }
                            ),
                          ]),
                        ]),
                        m('div', ht, [
                          ut,
                          m('div', dt, [
                            F(
                              j,
                              { value: C(n).appTheme, 'onUpdate:value': [i[1] || (i[1] = (e) => (C(n).appTheme = e)), l], swatches: C(r) },
                              null,
                              8,
                              ['value', 'swatches']
                            ),
                          ]),
                        ]),
                        F(a, { 'title-placement': 'center' }, { default: $(() => [gt]), _: 1 }),
                        m('div', ft, [
                          m('div', pt, [
                            F(
                              A,
                              { placement: 'top' },
                              {
                                trigger: $(() => [
                                  F(R, {
                                    class: 'setting-item-style-img',
                                    name: 'nav-theme-dark',
                                    onClick: i[2] || (i[2] = (e) => d('vertical')),
                                  }),
                                ]),
                                default: $(() => [mt]),
                                _: 1,
                              }
                            ),
                            V(F(z, { dot: '', color: '#19be6b' }, null, 512), [[B, 'vertical' === C(n).navMode]]),
                          ]),
                          m('div', vt, [
                            F(
                              A,
                              { placement: 'top' },
                              {
                                trigger: $(() => [
                                  F(R, {
                                    class: 'setting-item-style-img',
                                    name: 'nav-horizontal',
                                    onClick: i[3] || (i[3] = (e) => d('horizontal')),
                                  }),
                                ]),
                                default: $(() => [yt]),
                                _: 1,
                              }
                            ),
                            V(F(z, { dot: '', color: '#19be6b' }, null, 512), [[B, 'horizontal' === C(n).navMode]]),
                          ]),
                          m('div', bt, [
                            F(
                              A,
                              { placement: 'top' },
                              {
                                trigger: $(() => [
                                  F(R, {
                                    class: 'setting-item-style-img',
                                    name: 'nav-horizontal-mix',
                                    onClick: i[4] || (i[4] = (e) => d('horizontal-mix')),
                                  }),
                                ]),
                                default: $(() => [xt]),
                                _: 1,
                              }
                            ),
                            V(F(z, { dot: '', color: '#19be6b' }, null, 512), [[B, 'horizontal-mix' === C(n).navMode]]),
                          ]),
                        ]),
                        F(a, { 'title-placement': 'center' }, { default: $(() => [Mt]), _: 1 }),
                        m('div', wt, [
                          m('div', kt, [
                            F(
                              A,
                              { placement: 'top' },
                              {
                                trigger: $(() => [
                                  F(R, {
                                    class: 'setting-item-style-img',
                                    name: 'nav-theme-dark',
                                    onClick: i[5] || (i[5] = (e) => h('dark')),
                                  }),
                                ]),
                                default: $(() => [_t]),
                                _: 1,
                              }
                            ),
                            'dark' === C(n).navTheme ? (u(), S(z, { key: 0, dot: '', color: '#19be6b' })) : g('', !0),
                          ]),
                          m('div', St, [
                            F(
                              A,
                              { placement: 'top' },
                              {
                                trigger: $(() => [
                                  F(R, {
                                    class: 'setting-item-style-img',
                                    name: 'nav-theme-light',
                                    onClick: i[6] || (i[6] = (e) => h('light')),
                                  }),
                                ]),
                                default: $(() => [Ct]),
                                _: 1,
                              }
                            ),
                            'light' === C(n).navTheme ? (u(), S(z, { key: 0, dot: '', color: '#19be6b' })) : g('', !0),
                          ]),
                          m('div', Lt, [
                            F(
                              A,
                              { placement: 'top' },
                              {
                                trigger: $(() => [
                                  F(R, {
                                    class: 'setting-item-style-img',
                                    name: 'header-theme-dark',
                                    onClick: i[7] || (i[7] = (e) => h('header-dark')),
                                  }),
                                ]),
                                default: $(() => [At]),
                                _: 1,
                              }
                            ),
                            'header-dark' === C(n).navTheme ? (u(), S(z, { key: 0, dot: '', color: '#19be6b' })) : g('', !0),
                          ]),
                        ]),
                        F(a, { 'title-placement': 'center' }, { default: $(() => [It]), _: 1 }),
                        m('div', Ot, [
                          Et,
                          m('div', $t, [
                            F(
                              x,
                              {
                                value: C(n).menuSetting.mixMenu,
                                'onUpdate:value': [i[8] || (i[8] = (e) => (C(n).menuSetting.mixMenu = e)), f],
                                disabled: 'horizontal-mix' !== C(n).navMode,
                              },
                              null,
                              8,
                              ['value', 'disabled']
                            ),
                          ]),
                        ]),
                        m('div', Ft, [
                          Tt,
                          m('div', jt, [
                            F(
                              x,
                              {
                                value: C(n).headerSetting.fixed,
                                'onUpdate:value': [i[9] || (i[9] = (e) => (C(n).headerSetting.fixed = e)), p],
                              },
                              null,
                              8,
                              ['value']
                            ),
                          ]),
                        ]),
                        m('div', Rt, [
                          zt,
                          m('div', Nt, [
                            F(
                              x,
                              {
                                value: C(n).multiTabsSetting.fixed,
                                'onUpdate:value': [i[10] || (i[10] = (e) => (C(n).multiTabsSetting.fixed = e)), v],
                              },
                              null,
                              8,
                              ['value']
                            ),
                          ]),
                        ]),
                        m('div', Pt, [
                          Ut,
                          m('div', Wt, [
                            F(
                              x,
                              {
                                value: C(n).headerSetting.isReload,
                                'onUpdate:value': [i[11] || (i[11] = (e) => (C(n).headerSetting.isReload = e)), b],
                              },
                              null,
                              8,
                              ['value']
                            ),
                          ]),
                        ]),
                        m('div', Kt, [
                          qt,
                          m('div', Dt, [
                            F(
                              x,
                              {
                                value: C(n).crumbsSetting.show,
                                'onUpdate:value': [i[12] || (i[12] = (e) => (C(n).crumbsSetting.show = e)), M],
                              },
                              null,
                              8,
                              ['value']
                            ),
                          ]),
                        ]),
                        m('div', Jt, [
                          Vt,
                          m('div', Bt, [
                            F(
                              x,
                              {
                                value: C(n).crumbsSetting.showIcon,
                                'onUpdate:value': [i[13] || (i[13] = (e) => (C(n).crumbsSetting.showIcon = e)), w],
                              },
                              null,
                              8,
                              ['value']
                            ),
                          ]),
                        ]),
                        m('div', Ht, [
                          Qt,
                          m('div', Xt, [
                            F(
                              x,
                              {
                                value: C(n).multiTabsSetting.show,
                                'onUpdate:value': [i[14] || (i[14] = (e) => (C(n).multiTabsSetting.show = e)), k],
                              },
                              null,
                              8,
                              ['value']
                            ),
                          ]),
                        ]),
                        m('div', Yt, [
                          Zt,
                          m('div', Gt, [
                            F(
                              N,
                              { value: C(n).size, 'onUpdate:value': [i[15] || (i[15] = (e) => (C(n).size = e)), L], options: C(H) },
                              null,
                              8,
                              ['value', 'options']
                            ),
                          ]),
                        ]),
                        F(a, { 'title-placement': 'center' }, { default: $(() => [en]), _: 1 }),
                        m('div', tn, [
                          nn,
                          m('div', sn, [
                            F(
                              x,
                              { value: C(n).isPageAnimate, 'onUpdate:value': [i[16] || (i[16] = (e) => (C(n).isPageAnimate = e)), I] },
                              null,
                              8,
                              ['value']
                            ),
                          ]),
                        ]),
                        m('div', an, [
                          rn,
                          m('div', on, [
                            F(
                              N,
                              {
                                value: C(n).pageAnimateType,
                                'onUpdate:value': [i[17] || (i[17] = (e) => (C(n).pageAnimateType = e)), O],
                                options: C(it),
                              },
                              null,
                              8,
                              ['value', 'options']
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
  }),
  [['__scopeId', 'data-v-8e9be19c']]
)
var ln = l(
  h({
    setup(e) {
      const t = A(),
        n = async (e) => {
          await t.setCollapsed(e)
        },
        s = y(null),
        i = () => {
          const { openDrawer: e } = s.value
          e()
        }
      return (e, a) => {
        const r = _('n-layout-sider'),
          o = _('n-layout-header'),
          c = _('router-view'),
          l = _('n-layout-content'),
          h = _('n-layout-footer'),
          g = _('n-layout'),
          f = _('SettingsOutline'),
          p = _('n-icon')
        return (
          u(),
          d(
            Y,
            null,
            [
              F(
                g,
                { class: 'page-container', 'has-sider': '' },
                {
                  default: $(() => [
                    F(
                      r,
                      {
                        bordered: '',
                        'show-trigger': '',
                        'collapse-mode': 'width',
                        collapsed: C(t).collapsed,
                        onCollapse: a[0] || (a[0] = (e) => n(!0)),
                        onExpand: a[1] || (a[1] = (e) => n(!1)),
                      },
                      { default: $(() => [F(ne, { collapsed: C(t).collapsed }, null, 8, ['collapsed']), F(se)]), _: 1 },
                      8,
                      ['collapsed']
                    ),
                    F(g, null, {
                      default: $(() => [
                        F(o, { class: 'layout-header', position: 'absolute', bordered: '' }, { default: $(() => [F(st)]), _: 1 }),
                        F(l, { class: 'layout-content', 'content-style': 'padding: 0.24rem;' }, { default: $(() => [F(c)]), _: 1 }),
                        F(h, { class: 'layout-footer', bordered: '', position: 'absolute' }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }
              ),
              m('span', { class: 'settings-btn', onClick: i }, [F(p, { size: '0.24rem' }, { default: $(() => [F(f)]), _: 1 })]),
              F(cn, { ref_key: 'drawerSetting', ref: s }, null, 512),
            ],
            64
          )
        )
      }
    },
  }),
  [['__scopeId', 'data-v-24338900']]
)
export { ln as default }
