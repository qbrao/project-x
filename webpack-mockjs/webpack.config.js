const path = require('path');
// 插件都是一个类，所以我们命名的时候尽量用大写开头
let HtmlWebpackPlugin = require('html-webpack-plugin');
// 拆分css样式的插件，将css样式用link的方式外联，如果不用这个插件的话，css样式都是内联在html中。
let ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let webpack = require('webpack');
// mockjs
const MockjsWebpackPlugin = require("mockjs-webpack-plugin");

module.exports = {
  entry: './src/index.js',               // 入口文件
  output: {                              // 出口文件
    filename: 'bundle.[hash:4].js',      // 添加hash可以防止文件缓存，每次都会生成4位的hash串      
    path: path.resolve(__dirname, 'dist')           // 打包后的目录，必须是绝对路径
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: [            
      //     {loader: 'style-loader'}, // 这里采用的是对象配置loader的写法
      //     {loader: 'css-loader'},
      //     {loader: 'postcss-loader'} // 使用postcss-loader
      //   ]
      // },
      {
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract({
          // 将css用link的方式引入就不再需要style-loader了
          use: ['css-loader', 'postcss-loader']       
        })
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader'] // 从右向左解析
      },
      { // 让css中能够引用图片
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,              // 小于8k的图片自动转成base64格式，并且不会存在实体图片
              outputPath: 'images/',    // 图片打包后存放的目录
              publicPath: '../images/', // 指定获取图片的路径
              name: '[name].[hash:8].[ext]' // 图片名称规则
            }
          }
        ]
      },
      { // 让html页面可以引用图片
        test: /\.(htm|html)$/,
        use: 'html-withimg-loader'
      },
      { // 字体和svg
        test: /\.(eot|ttf|woff|svg)$/,
        use: 'file-loader'
      },
      {
        test:/(\.jsx|\.js)$/,
        use: {
          loader: 'babel-loader',
        },
        include: /src/,          // 只转化src目录下的js
        exclude: /node_modules/  // 排除掉node_modules，优化打包速度
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 用哪个html作为模板
      // 在src目录下创建一个index.html页面当做模板来用
      template: './src/index.html',
      hash: true // 会在打包好的bundle.js后面加上hash串
    }),
    // 拆分后会把css文件放到dist目录下的css/style.css
    new ExtractTextWebpackPlugin('css/style.css'),
    // 打包前先清空dist
    new CleanWebpackPlugin('dist'),
    // 热更新，热更新不是刷新
    new webpack.HotModuleReplacementPlugin(),
    new MockjsWebpackPlugin({
      path: path.join(__dirname, "./mock"),
      port: 3001
    })
  ],
  devServer: {
    contentBase: './dist',
    proxy: {
      '/': 'http://localhost:3001/' // 配置匹配服务的url规则，以及其代理的服务地址，即mock服务的地址
    },
    host: 'localhost',      // 默认是localhost
    port: 3000,             // 端口
    open: true,             // 自动打开浏览器
    hot: true               // 开启热更新
  },
  mode: 'development'
}