---
title: 云服务器部署java项目
date: 2024-4-28
tags:
  - 云服务器
categories:
  - 云服务器
---

### 关闭 nohup 进程

```
jps -l | grep youlai |awk '{print $1}'|xargs kill -9
```

### 启动 nohup

```shell
nohup java -jar youlai.jar > mylog.log 2>&1&
```
