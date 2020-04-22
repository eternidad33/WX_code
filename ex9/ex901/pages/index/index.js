// pages/API/SinX/index.js
var ctx = wx.createCanvasContext('myCanvas');
Page({
  onLoad: function(options) {
    this.drawSinX(); //调用绘制正弦曲线函数
  },
  drawDot: function(x, y) { //绘制实心圆点
    ctx.arc(x, y, 5, 0, 2 * Math.PI) //绘制圆形
    ctx.setFillStyle('black') //设置填充样式
    ctx.fill()
    ctx.draw(true)
  },
  drawSinX: function() { //绘制正弦曲线
    for (var x = 0; x < 2 * Math.PI; x += Math.PI / 30) {
      //利用x坐标循环
      var y = Math.sin(x); //根据x坐标求y坐标值
      this.drawDot(10 + 50 * x, 60 + 50 * y); //调用绘制实心点绘制正弦曲线
    }
  }
})