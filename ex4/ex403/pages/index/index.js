//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    a:10,
    b:20,
    c:30,
    student:{
      stuID:"20171004024",
      name:'张三',
      birthday:"1998-02-22"
    },
    array:[
      '2001','2002','2020'
    ]
  },
  modify:function(){
    this.setData({
      a:100,
      b:200,
      c:300,
      student:{
        stuID: "20201005235",
        name: '李四',
        birthday: "2017-10-6"
      },
      array:[
        '123','456','789'
      ]
    })
  }
})
