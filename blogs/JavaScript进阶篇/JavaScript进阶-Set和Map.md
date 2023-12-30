---
title: JavaScript进阶-Set和Map
date: 2023-12-30
tags:
  - JavaScript
categories:
  - JavaScript
---
# JavaScript进阶-Set和Map

## Set

**set数据结构中不会有重复的元素**

### 添加元素

```javascript
let current = [1, 1, 3, 4, 5, 6]

let set = new Set([...current]);

set.add(7); // { 1, 3, 4, 5, 6, 7 }
```

### set长度

```javascript
let num = set.size;
```

### 是否还有元素

```javascript
let current = [1, 1, 3, 4, 5, 6]

let set = new Set([...current]);

set.add(7);

set.has(7); // true
```

### 删除元素

```javascript
let current = [1, 1, 3, 4, 5, 6]

let set = new Set([...current]);

set.add(7);

set.delete(7);

set.has(7); // false
```

### 删除全部元素

```javascript
let current = [1, 1, 3, 4, 5, 6]

let set = new Set([...current]);

set.add(7);

set.clear();

set.has(7); // false
```

### 遍历元素

```javascript
let current = [1, 1, 3, 4, 5, 6]

let set = new Set([...current]);

for (let i of set.keys()) {
  console.log(i); // 1 3 4 5 6
}

for (let i of set.values()) {
  console.log(i); // 1 3 4 5 6
}

for (let i of set.entries()) {
  console.log(i); // [1,1] [3,3] [4,4] [5,5] [6,6]
}
```

**可以使用forEach**

## weakSet

**WeakSet 结构与 Set 类似，但WeakSet只能是对象和 Symbol 值**

## Map