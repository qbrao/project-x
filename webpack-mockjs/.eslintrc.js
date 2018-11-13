module.exports = {
  // true 停止在父级目录中寻找。
  root: true, 
   // 设置解析器
  parser: 'babel-eslint',
   // 解析器配置
  parserOptions: {
    ecmaVersion: 2017, // 使用 ECMAScript 版本
    sourceType: 'module', // 是否使用 ECMAScript 模块
    ecmaFeatures: {
      experimentalObjectRestSpread: true, // 启用实验性的特性
      jsx: true // 启用jsx
    }
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true // 这个设置会同时自动启用 ES6 语法支持
  }
}