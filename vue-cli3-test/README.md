# 如何使用 vue-cli 3.x

使用[官方脚手架](https://cli.vuejs.org/zh/) vue-cli 快速搭建环境。

## 安装

- 如果已经安装老版本的 vue-cli 需要先卸载。
- 通过 `npm install -g @vue/cli` 安装 3.x 版本。
- 使用 `vue --version` 查看是否安装成功。

## 快速原型开发

- 需要额外全局安装一个扩展 `npm install -g @vue/cli-service-global`。
- 通过 `vue serve` 和 `vue build` 可以快速搭建一个项目。

这个快速原型开发的用途还没搞清楚，好像不太重要，先跳过。

## 使用 `vue create` 创建一个项目

```sh
# 使用 vue create vue-cli3-test 创建项目会提示下面两个选项
Vue CLI v3.0.3
? Please pick a preset:
> default (babel, eslint)
  Manually select features
```

### 默认预设

选择第一个 `default (babel, eslint)`。创建完成后会发现文件比老版本 vue-cli 少很多。

- `static` 变成了 `public`，入口文件 `index.html` 放在了 `public` 文件夹中。
- 只有 `babel.config.js` 和 `pagekage.json` 可配置。其他配置在哪里？

打开 `babel.config.js` 文件。

```js
module.exports = {
  presets: [
    '@vue/app'
  ]
}
```

这个是 vue-cli 的默认 babel 预设。在 `node_modules\@vue\babel-preset-app` 文件夹下，`app` 是 `babel-preset-app` 的缩写，`babel-preset-`可以省略，跟通常配置的 `env` 一样。

打开 `package.json` 文件，会发现 `eslint`、`postcss`、`browserslist` 的配置都放在这里。

```json
{
  "name": "vue-cli3-test",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
  "dependencies": {
    "vue": "^2.5.17"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "^3.0.1",
    "@vue/cli-plugin-eslint": "^3.0.1",
    "@vue/cli-service": "^3.0.1",
    "babel-eslint": "^10.0.1",
    "eslint": "^5.8.0",
    "eslint-plugin-vue": "^5.0.0-0",
    "vue-template-compiler": "^2.5.17"
  },
  "eslintConfig": {
    "root": true,
    "env": {
      "node": true
    },
    "extends": [
      "plugin:vue/essential",
      "eslint:recommended"
    ],
    "rules": {},
    "parserOptions": {
      "parser": "babel-eslint"
    }
  },
  "postcss": {
    "plugins": {
      "autoprefixer": {}
    }
  },
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not ie <= 8"
  ]
}
```

### 用户自定义设置

选择第二个 `Manually select features`。会出现下面这些配置提示，使用数字键来选择。

```sh
? Please pick a preset: Manually select features
? Check the features needed for your project: (Press <space> to select, <a> to toggle all, <i> to invert selection)
>(*) Babel
 ( ) TypeScript
 ( ) Progressive Web App (PWA) Support
 (*) Router
 (*) Vuex
 (*) CSS Pre-processors
 (*) Linter / Formatter
 (*) Unit Testing
 ( ) E2E Testing
 ```

 最有有两个注意的地方：

1. 选择 postcss、browserslist、eslintConfig 等一些配置的位置，放在 package.json 中还是各自独立成文件。
2. 最后会让选择是否设置为自定义预设，需要设置一个名字，下次使用 `vue create` 创建项目时，就会多一个选项，这个选项就是上次自定义的预设，可以使用 `vue config` 命令来审查或修改全局的 CLI 配置。

## vue config

> `vue.config.js` 是一个可选的配置文件，如果项目的 (和 `package.json` 同级的) 根目录中存在这个文件，那么它会被 `@vue/cli-service` 自动加载。你也可以使用 `package.json` 中的 `vue` 字段，但是注意这种写法需要你严格遵照 JSON 的格式来写。
>
> -- [vue.config.js 配置参考](https://cli.vuejs.org/zh/config/#vue-config-js)

## Project setup

```sh
npm install
```

### Compiles and hot-reloads for development

```sh
npm run serve
```

### Compiles and minifies for production

```sh
npm run build
```

### Lints and fixes files

```sh
npm run lint
```