<template>
  <div class="data-types">
    <h1>数据类型</h1>
    <h2>原始数据类型：</h2>
    <p>自我介绍：{{name}}，{{age}}岁，男：{{isMale}}</p>
    <strong>null、undefined</strong>
    <p>兴趣爱好：{{hobby || '暂无'}}</p>
    <p>是否为管理员：{{isAdmin('qbrao') ? '是' : '否'}}</p>
    <button @click="alertMsg(name)">没有返回值的函数</button>
    <p>interface demo1：{{getStudent({name: 'bob', age: 15})}}</p>
    <p>interface demo2：学生id：{{student.id}}，姓名：{{student.name}}，年龄：{{student.age}}，爱好：{{student.hobby}}，地址：{{student.address}}</p>
    <p>使用接口表示数组：{{arrayList}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
/**
 * @todo string 类型的变量赋值为undefined会报错。已经在github中提了issue。
 * @todo 使用接口表示数组或者让接口属性可以是任意类型的 propName 是什么意思，可以随意更改？
 * @todo 函数的类型
 * @todo 类型断言
 * @todo 申明文件
 * @todo 内置对象
 */
export default class Home extends Vue {
  name: string = 'qbrao';
  age: number = 18;
  isMale: boolean = true;
  n: null = null; // 不初始化为 null 会报错
  u: undefined = undefined;
  isVoid: void = undefined; // 变量定义为void，就只能赋值为undefined和null。所以没太大的作用。
  hobby: string | (string | boolean)[] | number = ''; // 联合类型
  student: IPersonExtend = {
    id: 1,
    name: 'leo',
    age: 15,
    hobby: '吃饭',
    address: '深圳蛇口'
  };
  arrayList: IArray = [1, 2, 3, '4'];

  // 如果参数的类型是any，length就会报错。因为this.hobby的类型可能是number，但是number是没有length属性的。
  testUnionFunction(boby: string) {
    this.hobby = boby
    alert(this.hobby.length)
  }

  // 函数有返回值必须指的类型
  isAdmin(name: string): boolean {
    return name === 'qbrao'
  }

  // void表示函数没有返回值
  alertMsg(msg: string): void {
    alert(msg)
  }

  // 使用接口来实现对象类型的约束
  getStudent(person: IPerson) {
    return `学生的名字是：${person.name}，年龄为：${person.age}`
  }
}

interface IPerson {
  name: string;
  age: number;
}

interface IPersonExtend {
  readonly id: number;
  name: string;
  age: number;
  [propName: string]: any;
}

// 使用接口表示数组
interface IArray {
  [propName: number]: any
}
</script>