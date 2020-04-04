//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    flag: true,
    name: '',
    chinese_score: '',
    math_score: '',
    average: ''
  },
  //事件处理函数
  nameInput: function(e) {
    this.setData({
      name: e.detail.value
    });
  },
  chineseInput: function(e) {
    this.setData({
      chinese_score: e.detail.value
    });
  },
  mathInput: function(e) {
    this.setData({
      math_score: e.detail.value
    });
  },
  mySubmit: function() {
    if (this.data.name == '' || this.data.chinese_score == '' || this.data.math_score == '') {
      return;
    } else {
      var avg = (this.data.chinese_score * 1 + this.data.math_score * 1) / 2;
      this.setData({
        flag: false,
        average: avg,
      })
    }
  }

})