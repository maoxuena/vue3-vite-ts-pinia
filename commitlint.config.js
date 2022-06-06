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
        'build', // 打包
      ],
    ],
    // subject 大小写不做校验
    'subject-case': [0],
  },
}
