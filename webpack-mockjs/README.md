# 如何使用 Mock.js

使用上次搭建的一个 webpack 工程，进行 mock.js 开发。

## 使用 jsonp

axios 不支持 jsonp，所以需要安装另外一个插件来支持 [jsonp](https://github.com/axios/axios/blob/master/COOKBOOK.md#jsonp)。

这里有一些免费的在线 [API 接口](http://www.bejson.com/knownjson/webInterface/)，做异步测试的时候用会非常方便。

先使用 jsonp 获取 `http://suggest.taobao.com/sug?code=utf-8&q=商品关键字&callback=cb` 接口的响应数据。

当然这个跟 mock 数据没什么太大的关系。

## 配置 Mock.js

参考 [axios](https://github.com/axios/axios) 官网，进行安装。

安装 [mockjs-webpack-plugin](https://github.com/soon08/mockjs-webpack-plugin/blob/HEAD/readme-zh.md) 插件，按照官方的步骤来配置。

配置完后，假设 API 端口为 `3001`，本地服务器端口为 `3000`，使用 `localhost:3001` 可以打开接口文档，接口一目了然，非常方便。

接口具体怎么配置需要看下 [52cik/express-mockjs](https://github.com/52cik/express-mockjs/blob/master/README.zh-CN.md)，因为作者也是参考这个项目。

## 问题

一、`@natural` 失效不知道是什么原因。

```js
[
  "相再重适原条路就车些离何提",
  55518,
  "@natural"
],
```

二、编写接口的时候不能及时刷新，项目需要重启

暂时还没有发现解决方法，所以建议先把接口规则配置好。在官网[示例](http://mockjs.com/examples.html)页面打开 `console` ，配置好规则在复制到 mock 文件中，其实也算方便。