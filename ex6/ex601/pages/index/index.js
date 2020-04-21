// index.js
var C; //定义全局变量，用于存放人民币的值
Page({
  //事件处理函数
  calc: function(e) { //计算按钮事件函数
    C = parseInt(e.detail.value.cels); //将input组件的value值转化为整数类型并赋值给C
    this.setData({
      M: (C / 6.8801).toFixed(4), //货币转换位美元并保留小数点后4位
      Y: (C / 8.7873).toFixed(4), //货币转换位英镑并保留小数点后4位
      G: (C / 0.8805).toFixed(4), //货币转换位港元并保留小数点后4位
      O: (C / 7.8234).toFixed(4), //货币转换位欧元并保留小数点后4位
      H: (C / 0.0061).toFixed(4), //货币转换位韩元并保留小数点后4位
      R: (C / 0.0610).toFixed(4), //货币转换位日元并保留小数点后4位        
    })
  },
  reset: function() { //清空按钮事件函数
    this.setData({ //将变量设置为空字符并渲染到视图层
      M: '',
      Y: '',
      G: '',
      O: '',
      R: '',
      H: ''
    })
  }
})