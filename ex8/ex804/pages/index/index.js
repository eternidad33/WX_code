// pages/API/ParamDrawing/index.js
Page({
  onLoad: function() {
    this.ctx = wx.createCanvasContext('myCanvas', this); //创建绘图上下文
  },
  drawCircle: function(e) {
    var x = e.detail.value.x; //获取圆心x坐标
    var y = e.detail.value.y; //获取圆心y坐标
    var radius = e.detail.value.radius; //获取圆半径
    this.ctx.arc(x, y, radius, 0, 2 * Math.PI); //创建圆
    this.ctx.stroke(); //画出当前路径的边框
    this.ctx.draw(true); //刷新屏幕（保留画布内容）
  },
  clear: function() {
    this.ctx.draw(); //刷新屏幕（清空画布内容）
  }
})