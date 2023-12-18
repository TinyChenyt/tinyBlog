---
title: ES6-入门
date: 2023-12-14
tags:
  - 前端
  - javaScript
categories:
  - JavaScript
---

# ES6 新增变量声明方式--- let，const

---

- let 和 const 不能进行变量提升（不能在声明前使用变量）
- let 禁止重复声明变量；var 则可以重复声明
- const 在变量声明时必须初始化，在后面出现的代码中不能再修改该常量的值
- var 的作用域为方法作用域，如果在方法中定义，则后面的代码都可以使用
- let 和 const 为的作用域块级作用域，只能在定义的代码块内进行使用
- var 在变量未赋值时，声明的变量值为 undefined

```js
// let和const不会进行变量提升
// 不会报错,输出undefined
console.log(boyName)
// 会报错
console.log(sex)
console.log(age)
var boyName = '小李'
let sex = '男'
const age = 18
```

## 作用域--- 块级作用域，全局作用域，函数作用域

```js
// 作用域
// 全局作用域
var boyName = '小李'
let sex = '男'
const age = 18
function say() {
  // 函数作用域
  var girlName = '小红'
  let home = '广州'
  const school = '仲恺'
  let i = 18

  if (age >= i) {
    // 块级作用域
    let adult = '成年'
    // 在作用域内，可以正常输出
    console.log(adult)
  } else {
    const underAge = '未成年'
    // 在作用域内，可以正常输出
    console.log(underAge)
  }
  // 在adult的作用域之外，会报错
  console.log(adult)
  // 在underAge的作用域之外，会报错
  console.log(underAge)
  // 在函数作用域内，可以正常输出
  console.log(`我叫${girlName}，家在${home}，学校是${school}`)
  // 变量为全局作用域，可以正常输出
  console.log(`我叫${boyName}，性别${sex}，今年${age}岁`)
}

function comeback() {
  // 在函数作用域外，不能正常输出，报错
  console.log(`我叫${girlName}，家在${home}，学校是${school}`)
}

say()
comeback()
```

# 解构赋值

## 数组解构赋值

```js
let [a, b, c] = [1, 2, 3]
// 1,2,3
let [d, e] = [4]
// 4, undefined
let [f, , g] = [5, 6, 7]
// 5,7
let [h = 1, i = h] = [8]
// 8,8
```

## 对象解构赋值

```js
let Match = {
  sin: 'sin',
  cos: 'cos',
  tan: 'tan',
}

let { sin, cos, tan } = Match
// sin cos tan
```

### 重命名 :前面为匹配模式，后面为变量

```js
let { sin: s, tan: t } = Match
// sin tan
let { foo: ct } = { foo: 'foo' }
// foo: error ct:foo
```

### 嵌套

```js
let obj = {
  p: ['xy', { y: 'yx' }],
}
// let {p:[x,{y}]} = obj;
// x:xy, y:yx
let { p, p: px } = obj
// p和px都是 [ 'xy', { y: 'yx' } ]
```

## 函数参数解构赋值

```js
let add = function ([x, y]) {
  return x + y
}
add([1, 3])
// 4
```

# 对象的拓展

## 返回某个对象属性的描述对象

```js
let obj = { foo: 123 }
let data = Object.getOwnPropertyDescriptor(obj, 'foo')
```

## 合并对象

```js
Object.assign(obj, { bar: 'abc' })

const DEFAULTS = {
  logLevel: 0,
  outputFormat: 'html',
}

function processContent(options) {
  options = Object.assign({}, DEFAULTS, options)
  console.log(options)
}

processContent({})
```

## 用来设置一个对象的原型对象

```js
function Rectangle() {}
const rec = new Rectangle()
Object.setPrototypeOf(rec, Object.prototype)
console.log(Object.getPrototypeOf(rec) === Object.prototype) // true
```

# 运算符的拓展

## \*\*运算符

```js
let b = 4

b **= 3 // 4*4*4;
```

## 链判断运算符

```js
const message = {
  body: {
    user: {
      firstName: 'John',
    },
  },
}

// 判断属性的上层对象是否存在
const firstName = message?.body?.user?.firstName || 'default'
```

## Null 判断运算符??

```js
// 只有运算符左侧的值为null或undefined时
const nullText = false

const nullRes = nullText ?? '123'
```

# Proxy

## 简单的 proxy 实现

```js
let person = {
  name: 'John',
  age: 30,
  job: 'programmer',
}

let animal = {
  name: 'Dog',
  age: 20,
  job: 'player',
}

let proxy = function (target) {
  return new Proxy(target, {
    get: function (target, propKey) {
      if (propKey in target) {
        return target[propKey]
      } else {
        throw new ReferenceError('error getting proxy')
      }
    },
    set: function (target, propKey, value, receiver) {
      target[propKey] = value
      console.log('setting')
      return true
    },
  })
}

let personProxy = proxy(person)

let animalProxy = proxy(animal)

personProxy.age = 20

console.log(personProxy.age)
console.log(personProxy.name)
console.log(animalProxy.name)
```
