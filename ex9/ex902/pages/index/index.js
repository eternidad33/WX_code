// pages/API/FreeDrawing/index.js
Page({
  isClear: false, //不启用擦除

  data: {
    pen: 5, //画笔粗细默认值
    color: '#000000' //画笔颜色默认值
  },

  onLoad: function() {
    this.ctx = wx.createCanvasContext('myCanvas', this); //创建画布绘图环境
  },

  touchStart: function(e) { //开始触摸屏幕
    this.x1 = e.changedTouches[0].x; //将开始触摸屏幕点x坐标赋值给x1
    this.y1 = e.changedTouches[0].y; //将开始触摸屏幕点x坐标赋值给x1    
    if (this.isClear) { //如果是擦除模式（点击了擦除按钮）
      this.ctx.setStrokeStyle('#FFFFFF'); //设置画布颜色为背景颜色（白色）
      this.ctx.setLineCap('round'); //设置线条端点样式
      this.ctx.setLineJoin('round'); //设置线条交点样式
      this.ctx.setLineWidth(20); //设置线条宽度
      this.ctx.beginPath(); //开始一个路径
    } else { //如果是绘图模式（默认模式，没有点击擦除按钮）
      this.ctx.setStrokeStyle(this.data.color);
      this.ctx.setLineWidth(this.data.pen);
      this.ctx.setLineCap('round');
      this.ctx.beginPath();
    }
  },

  touchMove: function(e) { //触摸屏幕后移动
    var x2 = e.changedTouches[0].x; //将当前点的x坐标赋值给x2
    var y2 = e.changedTouches[0].y; //将当前点的y坐标赋值给y2
    if (this.isClear) { //擦除模式
      this.ctx.moveTo(this.x1, this.y1); //将画笔移动到起点
      this.ctx.lineTo(x2, y2); //在起点与当前点之间画线
      this.ctx.stroke();
      this.x1 = x2; //将当前点x坐标赋值给起点x坐标
      this.y1 = y2; //将当前点y坐标赋值给起点y坐标
    } else { //画线模式
      this.ctx.moveTo(this.x1, this.y1);
      this.ctx.lineTo(x2, y2);
      this.ctx.stroke();
      this.x1 = x2;
      this.y1 = y2;
    }
    this.ctx.draw(true);
  },

  touchEnd: function() {},

  penSelect: function(e) {
    this.setData({
      pen: parseInt(e.currentTarget.dataset.param) //根据data-param设置pen值
    })
    this.isClear = false;
  },

  colorSelect: function(e) {
    this.setData({
      color: e.currentTarget.dataset.param //根据data-param设置color值
    });
    this.isClear = false;
  },

  clear: function() { //擦除图形
    this.isClear = true;
  },

  clearAll: function() {
    this.setData({
      pen: 5, //恢复画笔粗细默认值
      color: '#000000' //恢复画笔颜色默认值
    })
    this.ctx.draw();
  }
})