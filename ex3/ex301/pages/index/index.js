//index.js
//获取应用实例
const app = getApp()

Page({
  calc: function(e) {
    //定义局部变量x,y
    var x, y;
    //获取input组件的值
    var x = e.detail.value;

    if (x < 0) {
      y = Math.abs(x);
    } else if (x < 10) {
      y = Math.sin(x);
    } else if (x < 20) {
      y = Math.pow(x, 3);
    } else {
      y = 100 + Math.log(x);
    }

    this.setData({
      //将局部变量赋值
      y:y
    })
  }
})