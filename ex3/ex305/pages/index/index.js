//index.js
var num = 60;
var timeID;
Page({
  data: {
    hidden: true,
    num: num
  },
  onLoad: function(options) {
    var that = this;
    setTimeout(() => {
      that.show()
      // 两秒后显示计时界面
    }, 2000)
  },
  // 显示计时界面函数
  show: function() {
    var that = this;
    this.setData({
      hidden: false
    })
  },
  // 开始计时函数
  start: function() {
    var that = this;
    timeID = setInterval(() => {
      that.timer()
    }, 1000)
    // 每隔一秒调用一次timer函数
  },
  // 停止计时函数
  stop: function() {
    clearInterval(timeID)
  },
  // 计时函数
  timer: function() {
    var that = this;
    console.log(num);
    if (num > 0) {
      this.setData({
        num: num--
      })
    } else {
      this.setData({
        num: 0
      })
    }
    console.log(num)
  }

})