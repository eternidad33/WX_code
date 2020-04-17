[Toc]

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

### 字体样式设置

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

view 组件支持使用 style,class 属性来设置组件的样式，静态的样式一般写到 class 中，动态的样式一般写到 style 中，这样可以提高渲染速度。

- 在 `app.wxss`中定义的样式类属于全局样式类，可以在项目的任何文件中使用

- 在`index.wxss`中定义的样式类一般只在`index wxml`中使用。

### 文本样式设置

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

### 图片和声音

`image`标签通过`src`设置路径，`bindtap`绑定事件函数

`<image src="{{imgSrc}}" bindtap="tapCat"></image>`

然后在 JS 文件中对`imgSrc`赋值，编写`tapCat`函数

1. 使用音频

   首先要利用 API 函数`wx.createInnerAudioContext()`创建音频上下文，然后设置该上下文的`src`，并利用`play()`函数播放音频。

2. 数据绑定
   WXML 文件中的动态数据通过`{{}}`符号与 JS 文件中的数据进行绑定，这样 JS 中的数据就可以传给 WXML 文件。这种传递是单向的。

3. 事件绑定。在 WXML 文件组件标签内利用`bind…=函数名`，绑定组件事件与函数，并在 JS 文件中定义该事件函数。

## 盒模型

所有`WXML`元素都可以看作盒子，在`WXSS`中`box model`这一术语是用来设计和布局时使用。盒模型本质上是一个盒子，封装周围的`WXML`元素，它包括：边距，边框，填充和实际内容。

### 边框

**边框样式**

`border- style`属性用来定义边框的样式

| 边框样式 |                      说明                      |
| :------: | :--------------------------------------------: |
|  `none`  |                   默认无边框                   |
| `dotted` |                定义一个点线边框                |
| `dashed` |                定义一个虚线边框                |
| `solid`  |                  定义实线边框                  |
| `double` |                  定义两个边框                  |
| `groove` |    定义 3D 沟槽边框。效果取决于边框的颜色值    |
| `ridge`  |     定义 3D 脊边框。效果取决于边框的颜色值     |
| `inset`  | 定义一个 3D 的嵌入边框。效果取决于边框的颜色值 |
| `outset` |  定义一个 3D 突出边框。效果取决于边框的颜色值  |

**边框宽度**

`border- width`属性用了设置边框宽度。

**边框颜色**

`border-color`属性用于设置边框的颜色。

**单独设置各边**

可以通过 `border-top`、 `border-right`、 `border-bottom`、`border -left`属性设置不同的侧面具有不同的边框。

**一次性设置边框属性**

可以利用 border 属性一次性设置边框宽度、边框样式和边框颜色。如：`border：1px solid #fff`

---

### Flex 弹性盒模型布局

Flex 是 Flexible Box 的缩写，意为”弹性布局”，用来对盒状模型进行布局

<img src="https://cdn.jsdelivr.net/gh/eternidad33/picbed@master/img/Flex.png" style="zoom:80%;" />

**Flex 容器布局**

| 属性            | 含义                                 | 合法值                                                            |
| :-------------- | :----------------------------------- | :---------------------------------------------------------------- |
| flex-direction  | 设置主轴方向（即项目排列方向）       | row,row- reverse, column,column-reverse                           |
| flex-wrap       | 如果一条轴线排不下，如何换行         | `nowrap`, wrap, wrap-reverse                                      |
| justify-content | 项目沿主轴方向的对齐方式             | flex-start, flex-end,`center`,space-between space-around          |
| align-items     | 项目在交叉轴上的对齐方式             | flex-start,flex-end,`center`,baseline ,stretch                    |
| align- content  | 项目在交叉轴上有多根轴线时的对齐方式 | flex-start.,flex-end.,`center`,space-between,space-around,stretch |

**Flex 项目布局**

| 属性        | 说明                                                                                                                                                    |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
| order       | 项目的排列顺序。数值越小，排列越靠前，默认为 0                                                                                                          |
| flex-grow   | 各项目宽度之和小于容器宽度时，各项目分配容器剩余宽度的放大比例，默认为 0，即不放大。                                                                    |
| flex-shrink | 各项目宽度之和大于容器宽度时，各项目缩小自己宽度的比例，默认为 1，即该项目将缩小。                                                                      |
| flex-basis  | 元素宽度的属性，和 width 功能相同，但比 width 的优先级高。                                                                                              |
| flex        | 是 flex-grow,flex- shrink 和 flex-basis 的简写，默认值为`0 1 auto`。后两个属性可选。                                                                    |
| align-self  | 允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性。默认值为 auto，表示继承父元素的 align-items 属性，如果没有父元素，则等同于 stretch。 |
|             |                                                                                                                                                         |

利用 1ine- height 设置文本垂直居中对齐

> line- height 可以理解为每行文字所占的高度。比如说有一行高度为 20px 的文字，如果设置为 line-height：50px，那就是说，这行文字的高度会占 50x，由于每个字的高度只有 20px，于是浏览器就把多出来的 30px（50px-
> 20px）在这行文字的上面加上了 15px，下面加上了 15px，这样文字就在这 50px 的空间内是居中的了。

---

### 导航与布局

`navigator`组件能够实现页面导航

`navigator`组件的属性

| 属性      | 说明                                                                  |
| --------- | --------------------------------------------------------------------- |
| target    | 在哪个目标上发生跳转，其合法值为`self`和`miniProgram`，默认值为`self` |
| `url`     | 当前小程序内的跳转地址                                                |
| open-type | 跳转方式                                                              |
| delta     | 当 open-type 为 `navigateBack`时有效，表示回退的层数                  |
| app-id    | 当 `atarget=" miniProgram"`时有效，要打开的小程序`appId`              |
| path      | 当 `itarget=" miniProgram"`时有效，打开的页面路径，如果为空则打开首页 |

open-type 的合法值

| 值             | 说明                                             |
| -------------- | ------------------------------------------------ |
| `navigate`     | 保留当前页面，跳转到应用内的某个页面             |
| `redirect`     | 关闭当前页面，跳转到应用内的某个页面             |
| `switchTab`    | 跳转到`tabBar`页面，并关闭其他所有非`tabBar`页面 |
| `reLaunch`     | 关闭所有页面，打开应用内的某个页面               |
| `navigateBack` | 关闭当前页面，返回上一页面或多级页面             |
| `exit`         | 退出小程序， `target="miniProgram"`时生效        |

`icon`组件显示一个图标

Icon 图标组件的主要属性

| 属性名  | 说明                                                                                                |
| :------ | :-------------------------------------------------------------------------------------------------- |
| type    | icon 的类型，有效值：success, success_no_circle, info, warn, waiting, cancel,download,search. clear |
| size    | icon 的大小                                                                                         |
| `color` | icon 的颜色                                                                                         |

---

### Float 页面布局

**float 属性**

浮动的框可以向左或向右移动，直到它的外边缘碰到包含框或另一个浮动框的边框为止。

Float 属性的合法值

| 值      | 描述                                               |
| ------- | -------------------------------------------------- |
| left    | 元素向左浮动。                                     |
| right   | 元素向右浮动。                                     |
| none    | 默认值。元素不浮动，并会显示其在文本中出现的位置。 |
| inherit | 规定应该从父元素继承 float 属性的值。              |

**clear 属性**

清除浮动

clear 属性的合法值

| 值      | 描述                                 |
| ------- | ------------------------------------ |
| left    | 在左侧不允许有浮动元素。             |
| right   | 在右侧不允许有浮动元素。             |
| both    | 在左右两侧均不允许有浮动元素。       |
| none    | 默认值。允许浮动元素出现在左右两侧。 |
| inherit | 继承父元素 clear 属性的值            |

利用 margin 属性实现水平居中对齐

> 如果要实现块元素的水平居中对齐，可以通过让 margin 左右边距为 auto 的方式来实现，这样块元素将平均分配左右边距，从而实现水平居中对齐

## 流程控制结构和函数

### 条件结构和数学函数

条件语句

1. if
2. if … else if …else
3. if … else
4. switch

Math 对象

| 属性和方法   | 说明                   |
| ------------ | ---------------------- |
| `E`          | 算术常量               |
| `PI`         | 圆周率                 |
| `abs(x)`     | 绝对值                 |
| `ceil(x)`    | 向上取整               |
| `cos(x)`     | 余弦                   |
| `exp(x)`     | e 的指数               |
| `floor(x)`   | 向下取整               |
| `log(x)`     | 对数                   |
| `max(x,y)`   | x,y 中的最大值         |
| `min(x,y)`   | x,y 中的最小值         |
| `pow(x,y)`   | x 的 y 次幂            |
| `random()`   | 返回 0~1 之间的随机数  |
| `round(x)`   | 四舍五入               |
| `sin(x)`     | 正弦                   |
| `sqrt(x)`    | 平方根                 |
| `tan(x)`     | 正切                   |
| `valueOf(x)` | 返回 Math 对象的原始值 |

### 学生成绩计算器

**JavaScript 中的逻辑运算符**

| 运算符 | 描述 |
| ------ | ---- |
| `&&`   | and  |
| `\|\|` | or   |
| `!`    | not  |

**`button`组件常用属性**

| 属性      | 说明                       |
| --------- | -------------------------- |
| size      | 大小                       |
| type      | 类型                       |
| plain     | 背景色是否透明             |
| disabled  | 是否禁用                   |
| loading   | 是否带 loading 图标        |
| form-type | 用于<form>组件的提交或重置 |

**属性合法值**

| 属性        | 合法值                                          | 说明               |
| ----------- | ----------------------------------------------- | ------------------ |
| `size`      | `default`,`mini`                                | 默认大小，小尺寸   |
| `type`      | ` primary``,default `,`warn` | 绿色，白色，红色 |
| `form-type` | `submit`,`reset`                                | 提交表单，重置表单 |

### 循环求和计算器

**JavaScript 支持的循环类型**

- for
- for/in
- while
- do/while

**JavaScript 全局对象**

全局的属性

| 属性        | 说明               |
| ----------- | ------------------ |
| `Infinity`  | 正无穷大           |
| `NaN`       | 某个值是不是数字值 |
| `undefined` | 未定义的值         |

全局的方法

| 方法           | 说明                           |
| -------------- | ------------------------------ |
| `isFinite()`   | 检查某个值是否为有无穷大的数   |
| `isNaN()`      | 检查某个值是否为数字           |
| `Number()`     | 把对象的值转换成数字           |
| `parseFloat()` | 解析一个字符串并返回一个浮点数 |
| `parseInt()`   | 解析一个字符串并返回一个整数   |
| `String()`     | 把对象的值转换成字符串         |

### 随机数求和

**Array 对象**

| 属性和方法         | 说明                                             |
| ------------------ | ------------------------------------------------ |
| `length`           | 元素个数                                         |
| `concat()`         | 连接多个数组                                     |
| `join()`           | 把所有元素放进一个字符串，并用指定分隔符进行分割 |
| `pop()`            | 删除并返回数组的最后一个元素                     |
| `push()`           | 向数组的末尾添加一个或多个元素，并返回新的长度   |
| `reverse()`        | 逆序                                             |
| `shift()`          | 删除并返回数组的第一个元素                       |
| `slice()`          | 从某个已有的数组返回选定的元素                   |
| `sort()`           | 排序                                             |
| `splice()`         | 删除元素并向数组中添加新的元素                   |
| `toSource()`       | 返回该对象的源码                                 |
| `toString()`       | 把数组转为字符串，并返回结果                     |
| `toLocaleString()` | 把数组转换为本地数组，并返回结果                 |
| `unshift()`        | 向数组的开头添加一个或多个元素，并返回新的长度   |
| `valueOf()`        | 返回数组对象的原始值                             |

**Number 对象**

| 属性                | 说明     |
| ------------------- | -------- |
| `MAX_VALUE`         | 最大的数 |
| `MIN_VALUE`         | 最小的数 |
| `NaN`               | 非数值   |
| `NEGATIVE_INFINITY` | 负无穷   |
| `POSITIVE_INFINITY` | 正无穷   |

| 方法               | 说明                                               |
| ------------------ | -------------------------------------------------- |
| `toString()`       | 把数字转换为字符串                                 |
| `toLocaleString()` | 把数字转换为字符串，使用本地数字格式顺序           |
| `toFixed()`        | 把数字转换为字符串，结果的小数点后有指定位数的数字 |
| `toExponential()`  | 把对象的值转换为指数计数法                         |
| `toPrecision()`    | 把数字格式化为指定的长度                           |
| `valueOf()`        | 返回一个 Number 对象的基本数字值                   |

### 计时器

**setTimeOut()**

函数 `number setTimeout(function callback,number delay, any rest)`。设定一个计时器，在计时到期以后执行注册的回调函数。

**clearTimeOut()**

函数 `clearTimeout(number timeoutID)`。取消由`setTimeout`设置的计时器。参数 `timeoutID`为要取消的计时器的 ID。

**setInterval()**

函数`number setInterval(function callback, number delay, any rest)`。设定一个计时器，按照指定的周期（以毫秒计）来执行注册的回调函数。

**clearInterval()**

函数 `clearInterval(number intervalID)`。取消由 `setInterval`设置的计时器。参数`intervalID`为要取消的计时器的 ID。

## 小程序基本架构

## 渲染与引用
