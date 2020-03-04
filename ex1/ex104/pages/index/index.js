//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgSrc: "/images/kitty.png"
  },
  tapCat: function() {
    let audio = wx.createInnerAudioContext(); // 创建音频上下文，创建音频的环境变量
    audio.src = 'audios/meow.mp3';
    audio.play();
  }
})