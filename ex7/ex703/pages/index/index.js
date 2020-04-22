// pages/zj/MultiMedia/audio/audio.js
Page({
  data: {
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000', //音频封面的图片资源地址
    name: '一曲相思',
    author: '半阳',
    src: '/audio/一曲相思.mp3',
  },

  onLoad: function (options) {
    // 页面初始化, options为页面跳转所带来的参数
    this.audioCtx = wx.createAudioContext('myAudio')  //创建音频上下文
  },
  audioPlay: function () {
    this.audioCtx.play()  //播放音频
  },
  audioPause: function () {
    this.audioCtx.pause()  //暂停播放
  },
  audio14: function () {
    this.audioCtx.seek(14)  //播放位置移动到14秒
  },
  audioStart: function () {
    this.audioCtx.seek(0)   //播放位置移动到开始
  }
})