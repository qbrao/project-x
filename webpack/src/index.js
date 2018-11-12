import './css/style.css';   // 引入css
import './less/style.less'; // 引入less
import docCookies from './utils/cookies'

console.log('这里是打包文件入口-index.js');

let a = 'hello world';
let p = document.getElementsByTagName('P');

let b = a.padStart(14, '123');
p[0].innerText = b;

setTimeout(() => {
  console.log('this:', this)
  console.log('setTimeout11')
})

docCookies.setItem('name', 'qbrao')
console.log(docCookies.hasItem('name'))