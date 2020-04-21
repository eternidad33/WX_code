// pages/zj/index.js/demo202-TriangleArea/index.js
Page({
  formSubmit: function(e) {
    var a = parseFloat(e.detail.value.a); //将input组件的value值转换为实数类型并赋值给变量a
    var b = parseFloat(e.detail.value.b); //将input组件中的value值转换为实数类型并赋值给变量b
    var c = parseFloat(e.detail.value.c); //将input组件中的value值转换为实数类型并赋值给变量c
    var area; //定义存放面积的变量
    if (a + b <= c || a + c <= b || b + c <= a) { //如果三角形的两边之和小于第三边
      wx.showToast({ //调用API函数显示提示对话框
        title: '三角形的两边之和小于第三边！', //对话框标题
        icon: 'none', //对话框图标
        duration: 2000, //对话框显示时长
      });
      this.clear(); //调用函数清空input组件中的数据
      return;
    } else { //计算三角形面积
      var s = (a + b + c) / 2;
      area = Math.sqrt(s * (s - a) * (s - b) * (s - c))
    }
    this.setData({
      result: area //将三角形面积渲染到视图层
    });
  },
  clear: function() { //清空input组件中输入的数据
    this.setData({
      a: '',
      b: '',
      c: '',
      result: ''
    })
  }
})