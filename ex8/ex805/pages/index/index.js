// pages/API/Deformation/index.js
Page({
  onReady: function() {
    this.ctx = wx.createCanvasContext('myCanvas', this) //创建绘图上下文
  },
  drawRect: function() {
    var ctx = this.ctx;
    ctx.rect(0, 0, 50, 50) //创建一个矩形路径
    ctx.stroke() //画出当前路径的边框。默认颜色色为黑色
    ctx.draw(true) //刷新屏幕后绘图（参数为true，表示保留以前画布图形）
  },
  scale: function() {
    this.ctx.scale(2, 2) //缩放图形
    this.drawRect()
  },

  translate: function() {
    this.ctx.translate(20, 20) //移动图形
    this.drawRect()
  },
  rotate: function() {
    this.ctx.rotate(30 * Math.PI / 180) 
    //旋转图形
    this.drawRect()
  }
})