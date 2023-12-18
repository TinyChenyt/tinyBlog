### 关闭 nohup 进程

jps -l | grep youlai |awk '{print $1}'|xargs kill -9

### 启动 nohup

nohup java -jar youlai.jar > mylog.log 2>&1&
