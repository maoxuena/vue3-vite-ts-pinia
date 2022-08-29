import {
  _ as e,
  d as l,
  D as a,
  o as u,
  g as t,
  j as s,
  t as v,
  n as o,
  z as d,
  u as n,
  r as p,
  f as i,
  h as r,
  w as f,
  i as b,
  B as c,
} from './index.9a0ced8a.js'
const g = { class: 'badge-tag-wrap' }
var m = e(
  l({
    props: {
      text: { default: '暂无内容' },
      placement: { default: 'left' },
      size: { default: 'medium' },
      textColor: { default: '#fff' },
      bgColor: { default: '#ea3447' },
    },
    setup: (e) => (
      a((l) => ({ '15d3ee80': e.textColor, '016e0b28': e.bgColor })),
      (l, a) => (
        u(),
        t('div', g, [
          s('div', { class: o(['badge-tag', `badge-tag-${e.placement} badge-tag-${e.size}`]) }, v(e.text || '暂无文本'), 3),
          d(l.$slots, 'default', {}, void 0, !0),
        ])
      )
    ),
  }),
  [['__scopeId', 'data-v-1b603d59']]
)
const z = s('div', { style: { height: '100%', background: '#000' } }, null, -1),
  h = l({
    setup(e) {
      const l = n(),
        a = p(1),
        v = p(100),
        o = p(150),
        d = p(''),
        g = p('leftTop'),
        h = p('small'),
        x = p('#fff'),
        _ = p('#ea3447')
      return (e, n) => {
        const p = i('n-input-number'),
          U = i('n-form-item-gi'),
          w = i('n-input'),
          $ = i('n-color-picker'),
          C = i('n-select'),
          y = i('n-grid'),
          T = i('n-form')
        return (
          u(),
          t('div', null, [
            r(
              T,
              { ref: 'formRef', 'label-width': 80, size: b(l).size },
              {
                default: f(() => [
                  r(
                    y,
                    { cols: 24, 'x-gap': 24 },
                    {
                      default: f(() => [
                        r(
                          U,
                          { span: 6, label: '宽度' },
                          {
                            default: f(() => [
                              r(
                                p,
                                { value: v.value, 'onUpdate:value': n[0] || (n[0] = (e) => (v.value = e)), placeholder: '输入宽度' },
                                null,
                                8,
                                ['value']
                              ),
                            ]),
                            _: 1,
                          }
                        ),
                        r(
                          U,
                          { span: 6, label: '高度' },
                          {
                            default: f(() => [
                              r(
                                p,
                                { value: o.value, 'onUpdate:value': n[1] || (n[1] = (e) => (o.value = e)), placeholder: '输入高度' },
                                null,
                                8,
                                ['value']
                              ),
                            ]),
                            _: 1,
                          }
                        ),
                        r(
                          U,
                          { span: 6, label: '类型（1-2之间的整数，包含1、2）' },
                          {
                            default: f(() => [
                              r(
                                p,
                                { value: a.value, 'onUpdate:value': n[2] || (n[2] = (e) => (a.value = e)), placeholder: '输入类型' },
                                null,
                                8,
                                ['value']
                              ),
                            ]),
                            _: 1,
                          }
                        ),
                        r(
                          U,
                          { span: 6, label: '文本' },
                          {
                            default: f(() => [
                              r(
                                w,
                                {
                                  value: d.value,
                                  'onUpdate:value': n[3] || (n[3] = (e) => (d.value = e)),
                                  type: 'text',
                                  size: b(l).size,
                                  placeholder: '输入文本',
                                },
                                null,
                                8,
                                ['value', 'size']
                              ),
                            ]),
                            _: 1,
                          }
                        ),
                        r(
                          U,
                          { span: 3, label: '文本颜色' },
                          {
                            default: f(() => [
                              r(
                                $,
                                {
                                  value: x.value,
                                  'onUpdate:value': n[4] || (n[4] = (e) => (x.value = e)),
                                  'show-alpha': !1,
                                  size: b(l).size,
                                },
                                null,
                                8,
                                ['value', 'size']
                              ),
                            ]),
                            _: 1,
                          }
                        ),
                        r(
                          U,
                          { span: 3, label: '背景颜色' },
                          {
                            default: f(() => [
                              r(
                                $,
                                {
                                  value: _.value,
                                  'onUpdate:value': n[5] || (n[5] = (e) => (_.value = e)),
                                  'show-alpha': !1,
                                  size: b(l).size,
                                },
                                null,
                                8,
                                ['value', 'size']
                              ),
                            ]),
                            _: 1,
                          }
                        ),
                        r(
                          U,
                          { span: 6, label: '尺寸大小' },
                          {
                            default: f(() => [
                              r(
                                C,
                                {
                                  value: h.value,
                                  'onUpdate:value': n[6] || (n[6] = (e) => (h.value = e)),
                                  size: 'small',
                                  options: [
                                    { label: 'small', value: 'small' },
                                    { label: 'medium', value: 'medium' },
                                    { label: 'large', value: 'large' },
                                  ],
                                },
                                null,
                                8,
                                ['value']
                              ),
                            ]),
                            _: 1,
                          }
                        ),
                        r(
                          U,
                          { span: 6, label: '位置' },
                          {
                            default: f(() => [
                              r(
                                C,
                                {
                                  value: g.value,
                                  'onUpdate:value': n[7] || (n[7] = (e) => (g.value = e)),
                                  size: 'small',
                                  options: [
                                    { label: '左上', value: 'leftTop' },
                                    { label: '右上', value: 'rightTop' },
                                  ],
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
                    }
                  ),
                ]),
                _: 1,
              },
              8,
              ['size']
            ),
            s(
              'div',
              { style: c({ width: `${v.value}px`, height: `${o.value}px` }) },
              [
                r(
                  m,
                  { text: d.value, placement: g.value, size: h.value, 'bg-color': _.value, 'text-color': x.value },
                  { default: f(() => [z]), _: 1 },
                  8,
                  ['text', 'placement', 'size', 'bg-color', 'text-color']
                ),
              ],
              4
            ),
          ])
        )
      }
    },
  })
export { h as default }
