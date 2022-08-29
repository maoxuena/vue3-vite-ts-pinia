import { u as e } from './useCurrentInstance.8edf2477.js'
import { d as l, u as a, r as u, f as n, o as t, g as s, k as r, t as o, i as p, h as i, j as c } from './index.9a0ced8a.js'
const d = r(' home '),
  g = c('br', null, null, -1),
  v = c('br', null, null, -1),
  m = c('h4', null, 'Naive UI国际化测试', -1),
  b = c('br', null, null, -1),
  z = c('br', null, null, -1),
  h = c('br', null, null, -1),
  k = c('br', null, null, -1),
  f = c('br', null, null, -1),
  x = c('h4', null, 'Element plus国际化测试', -1),
  y = c('br', null, null, -1),
  U = c('br', null, null, -1),
  j = c('h4', null, 'svg 图标使用', -1),
  P = { style: { 'font-size': '32px', color: '#155bcd' } },
  w = l({
    setup(l) {
      const w = a(),
        { proxy: V } = e(),
        I = V.$t('test.text'),
        q = u(118313526e4),
        C = u(2),
        E = u('2021-10-29'),
        N = u(4),
        $ = u(100)
      return (e, l) => {
        const a = n('n-date-picker'),
          u = n('n-switch'),
          V = n('n-pagination'),
          A = n('el-date-picker'),
          B = n('el-pagination'),
          D = n('svg-icon')
        return (
          t(),
          s('div', null, [
            d,
            g,
            r(' ' + o(p(I)) + ' ', 1),
            v,
            m,
            b,
            i(a, { value: q.value, 'onUpdate:value': l[0] || (l[0] = (e) => (q.value = e)), type: 'date', clearable: '' }, null, 8, [
              'value',
            ]),
            z,
            i(u, { size: p(w).size }, null, 8, ['size']),
            h,
            i(
              V,
              {
                page: C.value,
                'onUpdate:page': l[1] || (l[1] = (e) => (C.value = e)),
                'page-count': 100,
                'show-quick-jumper': '',
                'show-size-picker': '',
              },
              null,
              8,
              ['page']
            ),
            k,
            f,
            x,
            y,
            i(
              A,
              {
                modelValue: E.value,
                'onUpdate:modelValue': l[2] || (l[2] = (e) => (E.value = e)),
                type: 'date',
                placeholder: 'Pick a day',
              },
              null,
              8,
              ['modelValue']
            ),
            U,
            i(
              B,
              {
                currentPage: N.value,
                'onUpdate:currentPage': l[3] || (l[3] = (e) => (N.value = e)),
                'page-size': $.value,
                'onUpdate:page-size': l[4] || (l[4] = (e) => ($.value = e)),
                'page-sizes': [100, 200, 300, 400],
                layout: 'total, sizes, prev, pager, next, jumper',
                total: 400,
              },
              null,
              8,
              ['currentPage', 'page-size']
            ),
            j,
            c('i', P, [i(D, { name: 'logistics-track' })]),
          ])
        )
      }
    },
  })
export { w as default }
