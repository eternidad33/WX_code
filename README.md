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

## 图片和声音

`image`标签通过`src`设置路径，`bindtap`绑定事件函数

`<image src="{{imgSrc}}" bindtap="tapCat"></image>`

然后在JS文件中对`imgSrc`赋值，编写`tapCat`函数

1. 使用音频

   首先要利用API函数`wx.createInnerAudioContext()`创建音频上下文，然后设置该上下文的`src`，并利用`play()`函数播放音频。

2. 数据绑定
   WXM文件中的动态数据通过`{{}}`符号与JS文件中的数据进行绑定，这样JS中的数据就可以传给WXML文件。这种传递是单向的。

3. 事件绑定。在WXM文件组件标签内利用`bind…=函数名`，绑定组件事件与函数，并在JS文件中定义该事件函数。

