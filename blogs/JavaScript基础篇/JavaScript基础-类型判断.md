---
title: JavaScript基础-类型判断
date: 2023-12-30
tags:
  - JavaScript
categories:
  - JavaScript
---
# JavaScript基础-类型判断

## 1.通用用法

### 1.1typeof

```javascript
const str = '123';

const arr = [123,123];

typeof str; // string
typeof arr; // object
```

**typeof只能判断基`number` ，`string`， `object`， `boolean`， `function`， `undefined`， `symbol`，引用数据类型都会返回object**

### 1.2instanceof

```javascript
let str = '123';

str instanceof Number; // false
```

**instanceof用于判断，但无法知道参数具体属于什么类型**

### 1.3Object.prototype.toString.call()

```javascript
let str = '123';

let arr = [1, 2, 3, 4, 5];

Object.prototype.toString.call(arr); // [object Array]
```

**可以获取到参数的详细类型**

### 1.4constructor

```javascript
let arr = [1, 2, 3, 4, 5];

arr.constructor // [Function: Array]
```

**获取参数类型，也可以访问构造函数**

## 判断数组

### Array.isArray()

```javascript
let arr = [1, 2, 3, 4, 5];

let res = Array.isArray(arr); // true
```

### arr.\__proto__ === Array.prototype

```javascript
let arr = [1, 2, 3, 4, 5];

let res = arr.__proto__ === Array.prototype // true
```

**原理参考JavaScript进阶-原型与原型链**

### Array.prototype.isPrototypeOf

```javascript
let arr = [1, 2, 3, 4, 5];

let res = Array.prototype.isPrototypeOf(arr) // true
```

## 判断null和undefined

## 判断NaN