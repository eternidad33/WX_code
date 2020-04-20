//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    score: 0
  },
  scoreInput: function(e) {
    this.setData({
      score: e.detail.value
    })
  }
})