#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd public

# 如果是发布到自定义域名
# echo 'www.yourwebsite.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果你想要部署到 https://USERNAME.github.io
# git push -f git@github.com:AirHua-byte/AirHua-byte.github.io.git master

git remote add origin https://github.com/TinyChenyt/tinyBlog.git
 
git branch -M gh-pages

git push -f origin gh-pages

# 如果发布到 https://USERNAME.github.io/<REPO>  REPO=github上的项目
# git push -f git@github.com:Miodan/zionBlog.github.io.git master:gh-pages
# git push -f git@github.com:TinyChenyt/tinyBlog.github.io.git main:gh-pages

cd -