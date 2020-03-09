//index.js
//获取应用实例


Page({
  calc:function(e){
    var C,F;
    C=e.detail.value;//获取输入框中的值
    //求华氏温度，并传入数据
    this.setData({
      F:C*9/5+32     
    });
  }
})
