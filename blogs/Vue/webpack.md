---
title: webpack基础-配置
date: 2023-12-14
tags:
  - 前端
  - Vue
categories:
  - Vue
---

首先运行`npm init -y`初始化配置

安装开发依赖
运行

> cnpm i -D webpack webpack-cli typescript ts-loader

确定依赖安装完成
创建 webpack.config.js 文件

在 webpack.config.js 文件中

```js
const path = require('path')

module.exports = {
  // webpack中所有配置信息
  mode: 'production',
  // 指定入口文件
  entry: './src/index.ts',
  // 指定输出文件
  output: {
    // 指定打包文件的目录
    path: path.resolve(__dirname, 'dist'),
    // 打包后文件的文件
    filename: 'bundle.js',
  },
  // 指定webpack打包时要使用的模块
  module: {
    //    指定加载的规则
    rules: [
      {
        //    test 指定规则生效的文件
        test: /\.ts$/,
        //要使用的loader
        use: 'ts-loader',
        //     要排除的文件
        exclude: /node_modules/,
      },
    ],
  },
}
```

在 package.json 中加入
"build": "webpack"

其他配置
html 文件
html-webpack-plugin
安装之后要在 webpack 中的 plugin 中导入

开发服务器
webpack-dev-serve
安装之后在 package.json 中添加 start 属性

编译前，将原文件清空

clean-webpack-plugin

安装之后再在 webpack 中的 plugin 中导入

也可以安装该插件，在 output 中将 clean 属性设为 true

浏览器兼容

tsconfig 里的 target 只能转换成一些语法

安装 babel

> cnpm i -D @babel/core @babel/preset-env babel-loader core-js

在 webpack 中使用

```ts
use: [
    //配置babel
    {
        loader:'babel-loader',
        //设置babel
        options: {
        //    设置预定义环境
            ersets:[
            //指定环境插件
            [
                // 指定环境的插件
                "@babel/preset-env",
                //    配置信息
                {
                    // 要兼容的目标浏览器
                    targets: {
                                "chrome":"88"
                            },
                            // 指定corejs版本
                            "corejs":"3",
                            //    使用corejs的方式,usage表示按需加载
                            "useBuiltIns":"usage"
                            }
                        ]
                    ]
                }
    },'ts-loader'],
```

    为兼容老版本浏览器，避免打包之后出现箭头函数
    在output中添加属性
     environments:{
            arrowFunction:false
        }
