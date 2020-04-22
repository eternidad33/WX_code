Page({
  getInput: function(e) {
    this.inputVal = e.detail.value //定义对象属性并把输入框数据赋值给它
  },
  onShow: function() { //生命周期函数，小程序界面显示时调用
    var that = this;
    that.isShow = true; //定义对象属性并赋值
    wx.onAccelerometerChange(function(e) { //调用加速度改变函数
      if (!that.isShow) { //判断小程序界面是否显示
        return
      }
      if (e.x > 0.5 || e.y > 0.5 || e.z > 0.5) { //判断手机晃动是否达到一定程度
        wx.showToast({ //显示消息框
          title: '摇一摇成功', //消息框标题
          icon: 'success', //消息框图标
          duration: 2000 //消息框存在的时间
        })
        var result = 1;
        for (var i = 1; i <= that.inputVal; i++) { //计算阶乘
          result = result * i
        }
        that.setData({
          result: result
        })
      }
    })
  },
  onHide: function() { //屏幕隐藏时调用
    this.isShow = false;
  },
})