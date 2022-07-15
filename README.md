# vue3-vite-ts-pinia

vue3 + vite + typesript + pinia 搭建的前端框架项目 （[预览](https://maoxuena.github.io/vue3-vite-ts-pinia/dist/)）

## 创建项目

```
pnpm create vite project-name -- --template vue-ts
```

## 初始化项目

```
pnpm install
```

## 运行项目

```
pnpm run dev
```

## 编译项目

```
pnpm run build:pro
```

## Git 提交规范

### 约定式提交

Angular 团队规范延伸出来的 Conventional Commits Specification（约定式提交）
网址：https://www.conventionalcommits.org/zh-hans/v1.0.0/

**提交说明的结构如下所示：**

```
---------- 原文 ----------
<type>[optional scope]: <description>
[optional body]
[optional footer(s)]

---------- 译文 ----------
<类型>[可选 范围]: <描述>
[可选 正文]
[可选 脚注]
```

### Commitizen

- Github 仓库名：cz-li
- 当使用 commitizen 进行代码提交（git commit）时，commitizen 会提交你在提交时填写所有必需的提交字段

### 安装配置 Commitizen

1. 全局的安装 commitizen ：npm install -g commitizen
2. 安装并配置 cz-customizable 插件

- 使用 npm 下载 cz-customizable：pnpm i cz-customizable --save-dev
- 添加以下配置到 package.json 文件中

```
...
"config": {
  "commitizen": {
    "path": "node_modules/cz-customizable"
  }
}
```

3. 项目根目录下创建 .cz-config.js 自定义提示文件，设置 cz 的操作规范

```
module.exports = {
  // 可选类型
  types: [
    { value: 'feat', name: 'feat:     新功能' },
    { value: 'fix', name: 'fix:      修复' },
    { value: 'docs', name: 'docs:     文档变更' },
    { value: 'style', name: 'style:    代码格式(不影响代码运行的变动)' },
    {
      value: 'refactor',
      name: 'refactor: 重构(既不是增加feature，也不是修复bug)'
    },
    { value: 'perf', name: 'perf:     性能优化' },
    { value: 'test', name: 'test:     增加测试' },
    { value: 'chore', name: 'chore:    构建过程或辅助工具的变动' },
    { value: 'revert', name: 'revert:   回退' },
    { value: 'build', name: 'build:    打包' }
  ],
  // 消息步骤
  messages: {
    type: '请选择提交类型:',
    customScope: '请输入修改范围(可选):',
    subject: '请简要描述提交(必填):',
    body: '请输入详细描述(可选):',
    footer: '请输入要关闭的issue(可选):',
    confirmCommit: '确认使用以上信息提交？(y/n/e/h)'
  },
  // 跳过问题
  // skipQuestions: ['body', 'footer'],
  // subject文字长度默认是72
  subjectLimit: 72
}
```

输入 git cz 代替 git commit ，跟着控制台的提示输入内容提交即可

### 代码提交

- git add . // 将项目的所有文件添加到仓库中
- git cz // 将 add 的文件 commit 到仓库
- git remote add origin git 仓库地址 // 将本地的仓库关联到 github 上
- git pull origin 分支名称// 上传 github 之前，要先 pull 一下
- git push -u origin master // 上传代码到 github 远程仓库

### Git Hooks

需要使用这两个工具：

1. commitlint：用于检查提交信息
2. husky：是 git hooks 工具

#### commitlint

- 安装依赖：pnpm install --save-dev @commitlint/config-conventional @commitlint/cli
- 创建 commitlint.config.js 文件

```
// 注意：确保当前文件格式为 “UTF-8”的编码格式
module.exports = {
  // 继承的规则
  extends: ['@commitlint/config-conventional'],
  // 定义自己的规则
  roles: {
    // type 的类型定义：表示 git 提交的 type 必须在以下范围之内
    'type-enum': [
      // 当前验证的错误级别, 2: 错误级别的错误
      2,
      // 在什么情况袭进行验证
      'always', // 表示一直验证
      // 泛型内容 同cz-config.js中的types一样
      [
        'feat', // 新功能 feature
        'fix', // 修复 bug
        'docs', // 文档注释
        'style', // 代码格式（不影响代码运行的变动）
        'refactor', // 重构（既不增加新功能，也不是修复bug）
        'perf', // 性能优化
        'test', // 增加测试
        'chore', // 构建过程或辅助工具的变动
        'revert', // 回退
        'build' // 打包
      ]
    ],
    // subject 大小写不做校验
    'subject-case': [0]
  }
}
```

#### husky

1. 安装依赖

```
pnpm install husky --save-dev
```

2. 启动 hooks

```
npx husky install
```

3. 在 package.json 中生成 prepare 指令（需要 npm > 7.0 版本）

```
npm set-script prepare "husky install"
```

4. 执行命令

```
pnpm run prepare
```

5. 添加 commitlint 的 hook 到 husky 中，并要求在 commit-msg 的 hooks 下执行 npx --no-install commitlint --edit "$1" 指令

```
npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
```

6. 添加 commit 时的 hook（npx eslint --ext .js,.vue src 会在执行到该 hook 时运行）

```
npx husky add .husky/pre-commit "npx eslint --ext .js,.vue src"
```

#### lint-staged

1. package.json 配置

```
"gitHooks": {
  "pre-commit": "lint-staged"
},
"lint-staged": {
  "src/**/*.{js,vue}": [
    "eslint --fix",
    "git add"
  ]
}
```

2. 修改 .husky/pre-commit 文件

```
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
```

## 约束代码风格

### 安装 eslint、prettier

```
pnpm i eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
```

### 根目录下新建 .eslintrc.js

```
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: 'vue-eslint-parser',
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier', // eslint-config-prettier 的缩写
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'], // eslint-plugin-vue @typescript-eslint/eslint-plugin eslint-plugin-prettier的缩写
  rules: {
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'prettier/prettier': 'error',
    'no-console': 'warn', // 禁止出现console
    'no-debugger': 'warn', // 禁用debugger
    'no-duplicate-case': 'warn', // 禁止出现重复的 case 标签
    'no-empty': 'warn', // 禁止出现空语句块
    'no-extra-parens': 'off', // 禁止不必要的括号
    'no-func-assign': 'warn', // 禁止对 function 声明重新赋值
    'no-unreachable': 'warn', // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
    curly: 'warn', // 强制所有控制语句使用一致的括号风格
    'default-case': 'warn', // 要求 switch 语句中有 default 分支
    'dot-notation': 'warn', // 强制尽可能地使用点号
    eqeqeq: 'warn', // 要求使用 === 和 !==
    'no-else-return': 'warn', // 禁止 if 语句中 return 语句之后有 else 块
    'no-empty-function': 'warn', // 禁止出现空函数
    'no-lone-blocks': 'warn', // 禁用不必要的嵌套块
    'no-multi-spaces': 'warn', // 禁止使用多个空格
    'no-redeclare': 'warn', // 禁止多次声明同一变量
    'no-return-assign': 'warn', // 禁止在 return 语句中使用赋值语句
    'no-return-await': 'warn', // 禁用不必要的 return await
    'no-self-assign': 'warn', // 禁止自我赋值
    'no-self-compare': 'warn', // 禁止自身比较
    'no-useless-catch': 'warn', // 禁止不必要的 catch 子句
    'no-useless-return': 'warn', // 禁止多余的 return 语句
    'no-shadow': 'off', // 禁止变量声明与外层作用域的变量同名
    'no-delete-var': 'off', // 允许delete变量
    'array-bracket-spacing': 'warn', // 强制数组方括号中使用一致的空格
    'brace-style': 'warn', // 强制在代码块中使用一致的大括号风格
    camelcase: 'warn', // 强制使用骆驼拼写法命名约定
    indent: 'off', // 强制使用一致的缩进
    // 'jsx-quotes': 'warn', // 强制在 JSX 属性中一致地使用双引号或单引号
    'max-depth': 'warn', // 强制可嵌套的块的最大深度4
    // "max-lines": ["warn", { "max": 1200 }], // 强制最大行数 300
    // 'max-lines-per-function': ['warn', { max: 70 }], // 强制函数最大代码行数 50
    'max-statements': ['warn', 100], // 强制函数块最多允许的的语句数量20
    'max-nested-callbacks': ['warn', 3], // 强制回调函数最大嵌套深度
    'max-params': ['warn', 3], // 强制函数定义中最多允许的参数数量
    'max-statements-per-line': ['warn', { max: 1 }], // 强制每一行中所允许的最大语句数量
    'newline-per-chained-call': ['warn', { ignoreChainWithDepth: 3 }], // 要求方法链中每个调用都有一个换行符
    'no-lonely-if': 'warn', // 禁止 if 作为唯一的语句出现在 else 语句中
    'no-mixed-spaces-and-tabs': 'warn', // 禁止空格和 tab 的混合缩进
    'no-multiple-empty-lines': 'warn', // 禁止出现多行空行
    semi: ['warn', 'never'], // 禁止出现;
    'space-before-blocks': 'warn', // 强制在块之前使用一致的空格
    // 'space-before-function-paren': ['warn', 'never'], // 强制在 function的左括号之前使用一致的空格
    'space-in-parens': 'warn', // 强制在圆括号内使用一致的空格
    'space-infix-ops': 'warn', // 要求操作符周围有空格
    'space-unary-ops': 'warn', // 强制在一元操作符前后使用一致的空格
    // "spaced-comment": "warn", // 强制在注释中 // 或 /* 使用一致的空格
    'switch-colon-spacing': 'warn', // 强制在 switch 的冒号左右有空格
    'arrow-spacing': 'warn', // 强制箭头函数的箭头前后使用一致的空格
    'no-var': 'warn',
    'prefer-const': 'warn',
    'prefer-rest-params': 'warn',
    'no-useless-escape': 'warn',
    'no-irregular-whitespace': 'warn',
    'no-prototype-builtins': 'warn',
    'no-fallthrough': 'warn',
    'no-extra-boolean-cast': 'warn',
    'no-case-declarations': 'warn',
    'no-async-promise-executor': 'warn',
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
}
```

### 根目录下新建 .eslintignore

```
# eslint 忽略检查 (根据项目需要自行添加)
node_modules
dist
```

### 根目录下新建 prettier.config.js

```
module.exports = {
  trailingComma: 'es5', // 在ES5中有效的结尾逗号（对象，数组等）
  useTabs: false, // 不使用缩进符，而使用空格
  tabWidth: 2, // 一个tab代表几个空格数
  quoteProps: 'as-needed', // 对象的 key 仅在必要时用引号
  jsxSingleQuote: true, // jsx语法中使用单引号
  bracketSameLine: true, // >（反尖括号）多行JSX元素放在最后一行的末尾，而不是单独放在下一行
  bracketSpacing: true, // 大括号内的首尾需要空格
  printWidth: 140, // 一行的字符数，如果超过会进行换行，默认为80
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
  endOfLine: 'lf', // 换行符使用 lf
}
```

### 根目录下新建 .prettierignore

```
# 忽略格式化文件 (根据项目需要自行添加)
node_modules
dist
```

### package.json 配置

```
{
  "script": {
    "lint": "eslint src --fix --ext .ts,.tsx,.vue,.js,.jsx",
    "prettier": "prettier --write ."
  }
}
```

上面配置完成后,可以运行以下命令测试下代码检查个格式化效果:

```
# eslint 检查
pnpm lint
# prettier 自动格式化
pnpm prettier
```

## 配置文件引用别名 alias

### vite.config.ts

```
...
import path from 'path'

export default defineConfig({
  ...
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
```

### tsconfig.json

```
{
  "compilerOptions": {
    ...
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"]
}
```

## 配置 css 预处理器 scss

### 安装

```
pnpm i dart-sass sass --save-dev
```

### 配置全局 scss 样式文件

1. 在 src 下新增 styles 文件夹，用于存放全局样式文件
2. 新建 index.scss，设置一个用于测试的颜色变量：

```
$test-color: red;
```

3. 配置 Vite

```
css: {
  preprocessorOptions: {
    scss: {
      additionalData: '@import "@/styles/index.scss";',
    },
  },
},
```

4. 组件中使用

```
.test{
  color: $test-color;
}
```

## 路由

vue-router 官方文档: https://next.router.vuejs.org/zh/guide/

### 安装

```
pnpm i vue-router
```

## 统一请求封装

### 安装 axios

```
pnpm i axios
```

### 安装 nprogress 用于请求 loading

```
pnpm i nprogress
```

### 类型声明，或者添加一个包含 `declare module 'nprogress'

```
pnpm i @types/nprogress --save-dev
```

## 状态管理 pinia

### 安装

```
pnpm i pinia@next
```

### main.ts 中引入

```
# 引入
import { createPinia } from "pinia"
# 创建根存储库并将其传递给应用程序
app.use(createPinia())
```

### 创建 store/mian.ts

```
import { defineStore } from 'pinia'

export const useMainStore = defineStore({
  id: 'mian',
  state: () => ({
    name: '超级管理员',
  }),
})
```

### 组建中获取 store

```
<template>
  <div>{{ mainStore.name }}</div>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store/mian'
const mainStore = useMainStore()
</script>
```

### getters 用法

```
import { defineStore } from 'pinia'

export const useMainStore = defineStore({
  '''
  getters: {
    nameLength: (state) => state.name.length,
  },
})
```

### 组件中使用 getters

```
<template>
  <div>用户名:{{ mainStore.name }}<br />长度:{{ mainStore.nameLength }}</div>
  <hr />
  <button @click="updateName">修改store中的name</button>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store/mian'

const mainStore = useMainStore()

const updateName = () => {
  // $patch 修改 store 中的数据
  mainStore.$patch({
    name: '名称被修改了,nameLength也随之改变了',
  })
}
</script>
```

### actions 用法

```
import { defineStore } from 'pinia'

export const useMainStore = defineStore({
  ...
  actions: {
    async insertPost(data: string) {
      // 可以做异步
      // await doAjaxRequest(data);
      this.name = data
    },
  },
})
```

## 环境变量配置

1. 项目根目录新建:.env.development

```
NODE_ENV=development

VITE_APP_WEB_URL= 'YOUR WEB URL'
```

2. 项目根目录新建:.env.production

```
NODE_ENV=production

VITE_APP_WEB_URL= 'YOUR WEB URL'
```

3. 组件中使用

```
import.meta.env.VITE_APP_WEB_URL
```

4. 配置 package.json

```
"build:dev": "vite build --mode development",
"build:pro": "vite build --mode production",
```

## Vite 常用基础配置

### 运行、代理、打包配置

```
server: {
    host: '0.0.0.0',
    port: 3000,
    open: true,
    https: false,
    proxy: {}
},
```

### 生产环境去除 console、debugger

```
build:{
  ...
  terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
  }
}
```

### 生产环境生成 .gz 文件

1. 安装

```
pnpm i vite-plugin-compression --save-dev
```

plugins 中添加

```
import viteCompression from 'vite-plugin-compression'

// gzip压缩 生产环境生成 .gz 文件
viteCompression({
  verbose: true,
  disable: false,
  threshold: 10240,
  algorithm: 'gzip',
  ext: '.gz',
}),
```

## mock 数据

在线 mock：https://www.fastmock.site/#/login
