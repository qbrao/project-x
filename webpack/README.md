# 一个简单的 webpack 项目

这是一个基于 webpack 的前端工程化项目，没有太复杂的内容，主要是为了有一个系统化的学习。

## 功能

因为 webpack 默认是只处理 JS 文件，所以需要通过配置 loader 来处理其他文件。

- 引用 css 文件。
- 引用 less 文件，编译 less 文件，使用 `postcss-loader` 自动添加前缀。
- 引用图片。
  - 让 css 中能引用背景图。
  - 让 html 中能引用图片。
- 引用字体和svg。
- 编译 js。使用 `babel` 让开发者可以使用最新的语法和 api。
- 代码检测。在编写代码的时候使用 `ESlint` 对代码进行检测。

当然还需要使用 plugins 来处理 loader 解决不了的问题。

- 使用 html 模版。
- 将内联代码拆分成文件。
- 打包前先清空 dist。
- 热更新。不是热刷新。

最后还要开启一个服务器环境 `devServer`。

- `host`。配置主机。
- `port`。配置端口。
- `open`。自动打开浏览器。