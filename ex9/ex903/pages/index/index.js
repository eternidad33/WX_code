// index.js
Page({
  onReady: function() {
    this.animation = wx.createAnimation() //创建动画实例
  },

  rotate: function() { //旋转动画
    this.animation.rotate(Math.random() * 720 - 360).step()
    this.setData({
      animation: this.animation.export()
    })
  },

  scale: function() { //缩放动画
    this.animation.scale(Math.random() * 2).step()
    this.setData({
      animation: this.animation.export()
    })
  },

  translate: function() { //平移动画
    this.animation.translate(Math.random() * 100 - 50, Math.random() * 100 - 50).step()
    this.setData({
      animation: this.animation.export()
    })
  },

  skew: function() { //偏斜动画
    this.animation.skew(Math.random() * 90, Math.random() * 90).step()
    this.setData({
      animation: this.animation.export()
    })
  },

  rotateAndScale: function() { //旋转并缩放
    this.animation.rotate(Math.random() * 720 - 360)
      .scale(Math.random() * 2)
      .step()
    this.setData({
      animation: this.animation.export()
    })
  },

  rotateThenScale: function() { //旋转后缩放
    this.animation.rotate(Math.random() * 720 - 360).step()
      .scale(Math.random() * 2).step()
    this.setData({
      animation: this.animation.export()
    })
  },

  all: function() { //同时展示全部动画
    this.animation.rotate(Math.random() * 720 - 360)
      .scale(Math.random() * 2)
      .translate(Math.random() * 100 - 50, Math.random() * 100 - 50)
      .skew(Math.random() * 90, Math.random() * 90)
      .step()
    this.setData({
      animation: this.animation.export()
    })
  },

  allInQueue: function() { //顺序展示全部动画
    this.animation.rotate(Math.random() * 720 - 360).step()
      .scale(Math.random() * 2).step()
      .translate(Math.random() * 100 - 50, Math.random() * 100 - 50).step()
      .skew(Math.random() * 90, Math.random() * 90).step()
    this.setData({
      animation: this.animation.export()
    })
  },

  reset: function() { //还原动画
    this.animation.rotate(0, 0)
      .scale(1)
      .translate(0, 0)
      .skew(0, 0)
      .step({
        duration: 0
      })
    this.setData({
      animation: this.animation.export()
    })
  }
})