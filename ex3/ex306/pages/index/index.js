//index.js

Page({
  createColor: function() {
    // 定义数组
    var color = [];
    var letters = '0123456789abcdef';
    for (var i = 0; i < 3; i++) {
      var c = '#';
      for (var j = 0; j < 6; j++) {
        c += letters[Math.floor(Math.random() * 16)]
      }
      color.push(c);
    }
    console.log(color);
    this.setData({
      color1: color[0],
      color2: color[1],
      color3: color[2],
    })
  },
  onLoad: function(e) {
    // 利用this调用本类定义的函数
    this.createColor();
    setInterval(() => {
      this.createColor();
      // 每隔五秒调用一次this.createColor();函数
    }, 5000);
  },
  changeColor: function(e) {
    this.createColor();
  }
})