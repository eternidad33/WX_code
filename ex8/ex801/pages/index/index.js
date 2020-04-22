// pages/zj/FacialMakeup/index.js
function createRandomIndex() { //定义产生随机数的全局函数
  return Math.floor(Math.random() * 10); //产生0—9之间的随机整数
}

Page({
  data: {
    index: 0, //初始化脸谱图片数组下标为0
    imgArr: [ //脸谱图片数组
      '../images/01.jpg',
      '../images/02.jpg',
      '../images/03.jpg',
      '../images/04.jpg',
      '../images/05.jpg',
      '../images/06.jpg',
      '../images/07.jpg',
      '../images/08.jpg',
      '../images/09.jpg',
      '../images/10.jpg',
    ],
  },

  changeFace: function() { //点击脸谱图片事件函数
    this.setData({
      index: createRandomIndex() //调用全局函数产生随机数
    })
  },

  onShow: function() { //生命周期函数，界面显示时调用
    var that = this;
    wx.onAccelerometerChange(function(res) { //加速度变化监听函数
      if (res.x > 0.5 || res.y > 0.5 || res.z > 0.5) { //设置加速度在某个坐标轴方向达到的数值
        wx.showToast({ //消息提示框函数
          title: '摇一摇成功', //消息框标题
          icon: 'success', //消息框图标
          duration: 2000 //消息框显示的时间
        })
        that.changeFace() //调用函数进行变脸
      }
    })
  }
})