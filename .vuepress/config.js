module.exports = {
  "title": "tinyBlog",
  "description": "tiny的学习笔记",
  "base": '/tinyBlog/',
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  plugins: [
    // [
    //   "@vuepress-reco/vuepress-plugin-bgm-player", {
    //     audios: [
    //       {
    //         name: '一路山程',
    //         artist: '毛不易',
    //         url: 'https://music.163.com/outchain/player?type=2&id=1417849873&auto=1&height=66',
    //         cover: 'http://p1.music.126.net/Z25vG8gwiYPpwttD9mD1ag==/109951166705090906.jpg?param=130y130'
    //       },
    //     ]
    //   }
    // ],
    [
      "vuepress-plugin-cursor-effects",
      {
        size: 2,                    // size of the particle, default: 2
        shape: 'circle',  // shape of the particle, default: 'star'
        zIndex: 999999999           // z-index property of the canvas, default: 999999999
      }
    ],
    // 趣味动态表
    [
      "dynamic-title",
      {
        showIcon: "/favicon.ico",
        showText: "好好学习 ~",
        hideIcon: "/favicon.ico",
        hideText: "快来学习 ~",
        recoverTime: 2000
      }
    ],
    // 复制弹窗插件
    ["vuepress-plugin-code-copy", true],  
    // 根据目录自动生成文件侧边栏
    ["vuepress-plugin-auto-sidebar", {}],
    [
      "permalink-pinyin",
      {
        lowercase: true, // Converted into lowercase, default: true
        separator: "-", // Separator of the slug, default: '-'
      },
    ],
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "GitHub",
        "link": "https://github.com/recoluan",
        "icon": "reco-github"
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
    ],
    "logo": "https://tiny-blog.oss-cn-guangzhou.aliyuncs.com/blog/avatar.jpg",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "tiny",
    "authorAvatar": "./avatar.png",
    "record": "2454046178@qq.com",
    "startYear": "2023",
    "subSidebar": 'auto', // 自动形成侧边导航
  },
  "markdown": {
    "lineNumbers": true
  }
}