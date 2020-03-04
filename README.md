# WX_code

## 初识微信小程序

微信小程序的基本目录结构为：
```powershell
F:\WX>tree/f
Folder PATH listing for volume 文件
Volume serial number is 10E3-916A
F:.
│  app.js
│  app.json
│  app.wxss
│  project.config.json
│  sitemap.json
│
├─pages
│  ├─index
│  │      index.js
│  │      index.json
│  │      index.wxml
│  │      index.wxss
│  │
│  └─logs
│          logs.js
│          logs.json
│          logs.wxml
│          logs.wxss
│
└─utils
        util.js
```

小程序页面显示内容用`view`标签包括起来

```html
<view>Hello World!</view>
```

## 字体样式设置

字体样式可以在标签中通过`style`设置，也可以通过`class`设置

`font-family`设置字体

`font-size`设置字体大小

`font-style`设置字体倾斜

`font-weight`设置字体是否加粗

|   属性名称    |   含义   |                  说明                  |
| :-----------: | :------: | :------------------------------------: |
| `font-family` | 字体类型 |   `Serif`、`Sans-serif`、`Cursive`…    |
|  `font-size`  | 字体大小 | `5px/rpx/cm`,`large`,`small`,`medium`… |
| `font-style`  | 字体倾斜 |      `italic`,`normal`,`oblique`…      |
| `font-weight` | 字体加粗 |       `bold`,`bolder`,`lighter`…       |

view组件支持使用style,class属性来设置组件的样式，静态的样式一般写到class中，动态的样式一般写到style中，这样可以提高渲染速度。

- 在 `app.wxss`中定义的样式类属于全局样式类，可以在项目的任何文件中使用

- 在`index.wxss`中定义的样式类一般只在`index wxml`中使用。

## 文本样式设置


|        属性名称         |            含义            |
| :---------------------: | :------------------------: |
|         `color`         |          字体颜色          |
|      `text-align`       |       文本的对齐方式       |
|      `text-indent`      |          首行缩进          |
|    `letter-spacing`     |       字母之间的距离       |
|     `word-spacing`      | 单词间距，以空格来区分单词 |
|      `white-space`      |       文档中的空白处       |
|    `text-decoration`    |        文本修饰样式        |
| `text-decoration-color` |        文本修饰颜色        |
