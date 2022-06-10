module.exports = {
  trailingComma: 'es5', // 行尾逗号，默认none，可选 none|es5|all，es5：在ES5中有效的结尾逗号（对象，数组等），all：包括函数对象等所有可选
  useTabs: false, // 缩进不使用tab，使用空格，默认false(false为空2，true为空4)
  tabWidth: 2, // 缩进字节数，一个tab代表几个空格数
  quoteProps: 'as-needed', // 对象的 key 仅在必要时用引号，可选值"<as-needed|consistent|preserve>"
  jsxSingleQuote: true, // jsx语法中使用单引号
  bracketSameLine: true, // >（反尖括号）多行JSX元素放在最后一行的末尾，而不是单独放在下一行
  bracketSpacing: true, // 大括号内的首尾需要空格
  printWidth: 140, // 一行的字符数，如果超过会进行换行，默认为80
  singleQuote: true, // 是否使用单引号，默认为false，使用双引号
  semi: false, // 结尾是否需要分号，false 仅在语法可能出现错误的时候才会添加分号，默认true
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200,
      },
    },
  ],
  arrowParens: 'always', // 箭头函数，只有一个参数的时候，也需要括号，avoid：省略括号，always：不省略括号
  rangeStart: 0, // 每个文件格式化的范围是文件的全部内容
  rangeEnd: Infinity, // 这两个选项可用于格式化以给定字符偏移量（分别包括和不包括）开始和结束的代码
  requirePragma: false, // 指定要使用的解析器，若为true，文件顶部加了 /*** @prettier */或/*** @format */的文件才会被格式化
  insertPragma: false, // 当requirePragma参数为true时，此参数为true，将向@format标记后面添加一个换行符
  proseWrap: 'preserve', // 使用默认的折行标准，因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
  htmlWhitespaceSensitivity: 'css', // 根据显示样式决定 html 要不要折行（在html中空格是否是敏感的，css：遵守CSS显示属性的默认值，strict：空格被认为是敏感的，ignore：空格被认为是不敏感的）
  endOfLine: 'lf', // 换行符使用 可选值"<auto|lf|crlf|cr>"
}
