module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "singleQuote": true, // 使用单引号
    "bracketSpacing": false // 大括号前后不要加空格
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};