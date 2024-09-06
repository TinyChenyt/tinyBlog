---
title: python爬虫基础
date: 2024-9-6
tags:
  - Python
categories:
  - Python
---

# 01-需求： 用浏览器模拟浏览器。输入一个网址，从该网址中获取到资源或者内容

``` py
# 导入库
from urllib.request import urlopen

url = "http://www.baidu.com"
resp = urlopen(url)

with open("mybaidu.html", mode="w", encoding="utf-8") as f:
    f.write(resp.read().decode("utf-8"))  # 读取页面的源代码
print("over!")

resp.close()
```

# 02-request
# get请求
``` py
import requests

# query = input("请输入搜索内容")
url = f"http://120.25.241.31:9000/api/uaa/oauth/token"

# 请求头
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.124 Safari/537.36 Edg/102.0.1245.44"
}

data = {
    "client_id": "uuaClient",
    "client_secret": "Y7w0sI3L^UkWD1(ZXuZ",
    "grant_type": "password",
    "username": "root",
    "password": "123"
}

# {"data":{"client_id":"uuaClient","client_secret":"Y7w0sI3L^UkWD1(ZXuZ","grant_type":"password","username":"root","password":"123"}}

res = requests.post(url, headers=headers, data=data)

print(res.text)
res.close()
```

# 03-数据解析
```py
# re解析 bs4解析 xpath解析

# 正则表达式
# . 匹配除换行符以外的任意字符
# \w 匹配字母或数字或下划线
# \s 匹配任意的空白符
# \d 匹配数字
# \n 匹配一个换行符
# \t 匹配一个制表符
# ^ 开始 $ 结束

# re模块的使用
import re

# # findall 匹配字符串中所有的符合正则的内容
# ls = re.findall(r"\d+", "prind09102")
# print(ls)
#
# # finditer 匹配字符串中所有的内容[返回的是迭代器]
#
# it = re.finditer(r"\d+", "prind09102")
# for i in it:
#     print(i.group())

# search返回的结果是match对象，找到一个结果就返回
# s = re.search(r"\d+", "prind09102")
# print(s.group())

# match从头开始匹配
# s = re.match(r"\d+", "prind09102")

# 预加载正则表达式
# obj = re.compile(r"\d+")
#
# res = obj.finditer("prind09102")
# for r in res:
#     print(r.group())

s = """
<div class='lb'><span id='1'>李白</span></div>
<div class='df'><span id='2'>杜甫</span></div>
<div class='bjy'><span id='3'>白居易</span></div>
"""
# (?P<分组名>正则)
obj = re.compile(r"<div class='(?P<id>.*?)'><span id='\d+'>(?P<name>.*?)</span></div>", re.S)  # re.S 让.能匹配换行符

res = obj.finditer(s)
for i in res:
    print(i.group("id"))


import requests
import re
import csv
url = 'https://movie.douban.com/top250'

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36"
}
# 请求拿到页面源代码

res = requests.get(url, headers=headers)
strHtml = res.text
# 使用正则获取到想要的数据
obj = re.compile(r'<li>.*?<div class="item">.*?<span class="title">(?P<name>.*?)</span>.*?<p class="">.*?<br>(?P<year>.*?)&nbsp', re.S)
res1 = obj.finditer(strHtml)
f = open("data.csv", mode="w", encoding="utf-8")
csvWriter = csv.writer(f)
for s in res1:
    # print(s.group("name"))
    # print(s.group("year").strip())
    dic = s.groupdict()
    dic['year'] = dic['year'].strip()
    csvWriter.writerow(dic.values())
res.close()
print("over!")
```

# 04-bs4解析

```py
import requests
from bs4 import BeautifulSoup

# bs4 主要用于方便解析html文本

# url = "http://www.xinfadi.com.cn/getPriceData.html"
#
# res = requests.post(url)
# print(res.json())

url = 'https://movie.douban.com/top250'

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36"
}

res = requests.get(url, headers=headers)
# print(res.text)
page = BeautifulSoup(res.text, 'html.parser')
div = page.find_all("div", class_="item")
# span = div[0].find_all("span", class_="title")
# print(span)
span = {}
for item in range(len(div)):
    span[item] = div[item].find_all("span", class_="title")
for index in range(len(span)):
    print(span[index][0].text)
res.close()
```

# 05-request进阶
```py
# 模拟用户登录
# 获取cookie， 使用session进行请求
import requests

# 会话 使用会话请求可以保持cookies
session = requests.session()

# 登录
url = "https://passport.17k.com/ck/user/login"

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36"
}

data = {
    "loginName": "19820385795",
    "password": "chenyanting123"
}

res = session.post(url, headers=headers, data=data)
# print(res.cookies)

bookRes = session.get("https://user.17k.com/ck/author/shelf?page=1&appKey=2406394919", )
print(bookRes.json())
res.close()
```

# 06-防盗链处理
```py
import requests

url = "https://www.pearvideo.com/video_1760318"

constId = url.split("_")[1]

videoStatusUrl = f"https://www.pearvideo.com/videoStatus.jsp?contId={constId}&mrd=0.49270469920013404"

header = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
    # 防盗链，用于溯源，可以监听上一级的请求url
    "Referer": "https://www.pearvideo.com/video_1760318"
}

res = requests.get(videoStatusUrl,headers=header)

print(res.text)

res.close()
```