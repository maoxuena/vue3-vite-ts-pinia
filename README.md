# vue3-vite-ts-pinia
vue3 + vite + typesript + pinia 搭建的前端框架项目



## 创建项目

```
pnpm create vite project-name -- --template vue-ts
```



## Git提交规范

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

3. 项目根目录下创建 .cz-config.js 自定义提示文件，设置cz的操作规范
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
- git cz // 将add的文件commit到仓库
- git remote add origin git仓库地址 // 将本地的仓库关联到github上
- git pull origin 分支名称// 上传github之前，要先pull一下
- git push -u origin master // 上传代码到github远程仓库


### Git Hooks
需要使用这两个工具：
1. commitlint：用于检查提交信息
2. husky：是git hooks工具

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