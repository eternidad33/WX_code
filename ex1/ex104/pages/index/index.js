//index.js


Page({
  data: {
    imgSrc:'/images/kitty.png'
  },
  cattap:function(){
    let audio=wx.createInnerAudioContext();
    audio.src='audios/'+'meow.mp3';
    audio.play();

  }
})

