module.exports = {
  // 标记当前代码的运行环境
  env: {
    browser: true,
    es2021: true
  },
  // 继承共享的配置
  extends: ['standard'],
  // 设置语法解析器，是否使用某个版本的 es 语法
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'no-alert': 'error'
  },
  // 新版本的 已经没有了
  globals: {
    jQuery: 'readonly'
  }
}
