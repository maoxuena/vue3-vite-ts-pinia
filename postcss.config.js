module.exports = {
  plugins: [
    // require('postcss-pxtorem')({
    //   rootValue: 37.5, // 1rem的大小
    //   propList: ['*'], // 需要转换的属性
    //   selectorBlackList: ['.norem', '.vc-*'], // 过滤掉不需要转换的类名
    //   exclude: /node_modules/i, // 过滤掉node_modules文件夹下的文件
    // }),
    require('postcss-prefix-selector')({
      prefix: '.base-app',
      transform: function (prefix, selector, prefixedSelector) {
        // 这里可以排除一些特定的选择器
        if (selector === 'body' || selector === 'html' || selector === '#app' || selector === ':root') {
          return selector
        }
        return prefixedSelector
      },
      // exclude: ['.global'], // 排除全局样式的前缀添加
    }),
    // 其他 PostCSS 插件...
    // 一些常用的插件与作用
    // autoprefixer：自动添加 CSS3 前缀。
    // cssnano：优化和压缩 CSS。
    // postcss-import：通过 @import 导入 CSS 文件。
    // postcss-custom-properties：使用自定义属性，类似于 Sass 中的变量。
    // postcss-nested：允许使用嵌套规则。
    // postcss-mixins：类似于 Sass 中的 mixin。
    // postcss-css-variables：支持 CSS 变量。
    // postcss-preset-env：使用最新的 CSS 语法，自动添加前缀，按需加载 polyfill。
    // postcss-normalize：添加浏览器默认样式的规则，以消除浏览器之间的差异。
    // postcss-pxtorem：将像素值转换成 rem 值，使得页面更好地适配不同大小的设备。
    // postcss-extend：类似于 Sass 中的 @extend。
    // postcss-flexbugs-fixes：修复 Flexbox 布局的一些 bug。
  ],
}
