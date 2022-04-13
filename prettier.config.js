module.exports = {
  trailingComma: 'es5', // 在ES5中有效的结尾逗号（对象，数组等）
  useTabs: false, // 不使用缩进符，而使用空格
  tabWidth: 2, // 一个tab代表几个空格数
  quoteProps: 'as-needed', // 对象的 key 仅在必要时用引号
  jsxSingleQuote: true, // jsx语法中使用单引号
  bracketSameLine: true, // >（反尖括号）多行JSX元素放在最后一行的末尾，而不是单独放在下一行
  bracketSpacing: true, // 大括号内的首尾需要空格
  printWidth: 100, // 一行的字符数，如果超过会进行换行，默认为80
  singleQuote: true, // 是否使用单引号，默认为false，使用双引号
  semi: false, // 是否需要分号，false 仅在语法可能出现错误的时候才会添加分号，默认true
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200,
      },
    },
  ],
  arrowParens: 'always', // 箭头函数，只有一个参数的时候，也需要括号
  rangeStart: 0, // 每个文件格式化的范围是文件的全部内容
  rangeEnd: Infinity,
  requirePragma: false, // 不需要写文件开头的 @prettier
  insertPragma: false, // 不需要自动在文件开头插入 @prettier
  proseWrap: 'preserve', // 使用默认的折行标准
  htmlWhitespaceSensitivity: 'css', // 根据显示样式决定 html 要不要折行
  endOfLine: 'crlf', // 换行符使用 crlf
}
