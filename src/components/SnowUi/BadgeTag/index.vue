<template>
  <div class="badge-tag-wrap">
    <div class="badge-tag" :class="`badge-tag-${placement} badge-tag-${size}`">{{ text || '暂无文本' }}</div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
// 接收父组件参数（采用ts专有声明，有默认值）
interface ParentProps {
  text: string
  placement: string
  size: string // 'small' | 'medium' | 'large'
  textColor: string
  bgColor: string
}
const props = withDefaults(defineProps<ParentProps>(), {
  text: '暂无内容',
  placement: 'left',
  size: 'medium',
  textColor: '#fff',
  bgColor: '#ea3447',
})
</script>

<style scoped>
.badge-tag-wrap {
  position: relative;
  width: 100%;
  height: 100%;
}
.badge-tag {
  position: absolute;
  display: inline-block;
  color: v-bind(textColor);
  background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.4), transparent) v-bind(bgColor);
  background-blend-mode: soft-light;
}
.badge-tag::before {
  content: '';
  position: absolute;
  background-color: inherit;
  filter: brightness(0.7);
}

/* 尺寸 */
.badge-tag-small {
  padding: 4px 8px;
  font-size: 12px;
  line-height: 16px;
}
.badge-tag-small::before {
  width: 3px;
  height: 3px;
}
.badge-tag-medium {
  padding: 5px 9px;
  font-size: 14px;
  line-height: 18px;
}
.badge-tag-medium::before {
  width: 4px;
  height: 4px;
}
.badge-tag-large {
  padding: 6px 10px;
  font-size: 16px;
  line-height: 20px;
}
.badge-tag-large::before {
  width: 5px;
  height: 5px;
}

/* 左上方 */
.badge-tag-leftTop::before {
  clip-path: polygon(0 0, 100% 0, 100% 100%);
}
.badge-tag-leftTop.badge-tag-small {
  border-radius: 4px 4px 4px 0px;
  left: -3px;
  top: -3px;
}
.badge-tag-leftTop.badge-tag-small::before {
  left: 0;
  bottom: -3px;
}
.badge-tag-leftTop.badge-tag-medium {
  border-radius: 6px 6px 6px 0px;
  left: -4px;
  top: -4px;
}
.badge-tag-leftTop.badge-tag-medium::before {
  left: 0;
  bottom: -4px;
}
.badge-tag-leftTop.badge-tag-large {
  border-radius: 8px 8px 8px 0px;
  left: -5px;
  top: -5px;
}
.badge-tag-leftTop.badge-tag-large::before {
  left: 0;
  bottom: -5px;
}
/* 右上方 */
.badge-tag-rightTop::before {
  clip-path: polygon(0 0, 100% 0, 0 100%);
}
.badge-tag-rightTop.badge-tag-small {
  border-radius: 4px 4px 0px 4px;
  right: -3px;
  top: -3px;
}
.badge-tag-rightTop.badge-tag-small::before {
  right: 0;
  bottom: -3px;
}
.badge-tag-rightTop.badge-tag-medium {
  border-radius: 6px 6px 0px 6px;
  right: -4px;
  top: -4px;
}
.badge-tag-rightTop.badge-tag-medium::before {
  right: 0;
  bottom: -4px;
}
.badge-tag-rightTop.badge-tag-large {
  border-radius: 8px 8px 0px 8px;
  right: -5px;
  top: -5px;
}
.badge-tag-rightTop.badge-tag-large::before {
  right: 0;
  bottom: -5px;
}
</style>
