//index.js

//定义全局变量
var rand, sum;

//自定义全局函数
function createRand() {
  //初始化
  rand = [];
  sum = 0;
  for (var i = 0; i < 6; i++) {
    //产生100以内的随机数，保留两位小数
    var r = (Math.random() * 100).toFixed(2) * 1;
    //将产生的随机数添加到数组中
    rand.push(r);
    sum += rand[i];
    console.log(rand[i]);
  }
  console.log(sum);
};

Page({
  //一开始运行时调用的函数
  onLoad: function() {
    createRand();
    this.setData({
      rand: rand,
      sum: sum
    })
  },
  newRand: function() {
    createRand();
    this.setData({
      rand: rand,
      sum: sum
    })
  }
})