//index.js
Page({
  data: {
    myFontSize: '25px' //设置字体初始大小
  },
  checkboxChange: function(e) { //checkbox组件事件函数
    var text = []; //定义存放checkbox选项的数组
    var mybold = ''; //定义是否加粗的变量
    var myitalic = ''; //定义是否倾斜的变量
    var myunderline = ''; //定义是否有下划线的变量
    text = e.detail.value; //将checkbox的所有选中项的value值赋值给text
    for (var i = 0; i < text.length; i++) { //利用循环判断选中了checkbox的哪些选项
      if (text[i] == 'isBold') { //如果加粗的checkbox组件被选中
        mybold = 'bold'; //将加粗的属性值bold赋值给局部变量mybold
      }
      if (text[i] == 'isItalic') { //如果倾斜的checkbox组件被选中
        myitalic = 'italic';
      }
      if (text[i] == 'isUnderline') { //如果下划线的checkbox组件被选中
        myunderline = 'underline';
      }
    }
    this.setData({
      myBold: mybold, //将局部变量赋值给绑定变量并渲染到视图层
      myItalic: myitalic,
      myUnderline: myunderline,
    })
    console.log(text) //在console中显示提示信息
  },
  radioChange: function(e) { //radio组件事件函数
    this.setData({
      myFontSize: e.detail.value, //将radio的value值赋值给绑定变量myFontSize
    })
    console.log(e.detail.value) //在console中显示提示信息
  }
})