// pages/API/Storage/index.js
Page({
  data: {
    msg: '', //设置文本显示的初始信息为空
    hidden: true //案例运行时隐藏文本显示区
  },

  Student: function(id, name, Chinese, Math, English) { //定义类的构造函数
    this.id = id; //将函数参数id（学号）赋值给对象属性id
    this.name = name; //将函数参数name（姓名）赋值给对象属性name
    this.Chinese = Chinese; //将函数参数Chinese（语文成绩）赋值给对象属性Chinese
    this.Math = Math; //将函数参数Math（数学成绩）赋值给对象属性Math
    this.English = English; //将函数参数English（英语成绩）赋值给对象属性English
  },

  loadStudents: function() {
    var Students = new Array(); //创建学生数组
    var stu1 = new this.Student('1', 'TOM', 95, 87, 72); //创建对象实例赋值给stu1
    var stu2 = new this.Student('2', 'Kevin', 75, 97, 79); //创建对象实例赋值给stu2
    Students.push(stu1); //将stu1加入学生数组
    Students.push(stu2); //将stu2加入学生数组
    return Students; //返回学生数组
  },

/////////////////////////////////////////////////////////

  setStorage: function() { //定义异步存储数据的函数
    var that = this
    wx.setStorage({ //调用异步存储数据函数
      key: '高一', //本地缓存中指定的 key
      data: this.loadStudents(), //需要存储的内容。
      success: function() {
        that.setData({
          hidden: false, //设置文本区可见
          msg: '异步存储数据成功！' //设置text组件显示的信息
        })
      }
    })
  },

  setStorageSync: function() { //定义同步存储数据的函数
    var that = this;
    wx.setStorageSync('高二', this.loadStudents()); //同步存储数据
    that.setData({
      hidden: false,
      msg: '同步存储数据成功！'
    });
  },

  getStorage: function() { //定义异步获取缓存数据函数
    var that = this;
    wx.getStorage({ //异步获取缓存数据
      key: '高一',
      success: function(res) {
        var length = res.data.length; //获取学生数量
        if (length > 1) {
          that.setData({
            hidden: false,
            msg: '异步获取缓存数据成功，学生1为：' +
              '\n学号：' + res.data[length - 2].id +
              '\n姓名：' + res.data[length - 2].name +
              '\n语文成绩：' + res.data[length - 2].Chinese +
              '\n数学成绩：' + res.data[length - 2].Math +
              '\n英语成绩：' + res.data[length - 2].English
          })
          console.log(res.data)
        }
      },
      fail: function() {
        that.setData({
          hidden: false,
          msg: '异步获取缓存数据失败！'
        })
      }
    })
  },

  getStorageSync: function() { //定义同步获取缓存数据的函数
    var that = this;
    try {
      var value = wx.getStorageSync('高二'); //同步获取缓存数据
      var length = value.length;
      if (length > 1) {
        that.setData({
          hidden: false,
          msg: '同步获取缓存数据成功，学生2为：' +
            '\n学号：' + value[length - 1].id +
            '\n姓名：' + value[length - 1].name +
            '\n语文成绩：' + value[length - 1].Chinese +
            '\n数学成绩：' + value[length - 1].Math +
            '\n英语成绩：' + value[length - 1].English
        })
        console.log(value);
      }
    } catch (e) {
      that.setData({
        hidden: false,
        msg: '同步获取缓存数据失败！'
      })
      console.log(e);
    }
  },

  getStorageInfo: function() { //定义异步获取缓存信息的函数
    var that = this;
    wx.getStorageInfo({ //异步获取缓存信息
      success: function(res) {
        that.setData({
          hidden: false,
          msg: '异步获取缓存信息成功！' +
            '\n已使用空间：' + res.currentSize +
            '\n最大空间为：' + res.limitSize
        })
        console.log(res)
      },
      fail: function() {
        that.setData({
          hidden: false,
          msg: '异步获取缓存信息失败！'
        })
      }
    })
  },

  getStorageInfoSync: function() { //定义同步获取缓存信息的函数
    var that = this;
    try {
      var res = wx.getStorageInfoSync() //同步获取缓存信息
      that.setData({
        hidden: false,
        msg: '同步获取缓存信息成功！' +
          '\n已使用空间：' + res.currentSize +
          '\n最大空间为：' + res.limitSize
      })
      console.log(res)
    } catch (e) { //发生异常时的处理
      that.setData({
        hidden: false,
        msg: '同步获取缓存信息失败！'
      })
      console.log(e)
    }
  },

  removeStorage: function() { //异步删除缓存数据
    var that = this;
    wx.removeStorage({ //异步删除缓存数据
      key: '高一',
      success: function(res) {
        that.setData({
          hidden: false,
          msg: '异步删除缓存数据成功！'
        })
        console.log(res.data)
      },
      fail: function() {
        that.setData({
          hidden: false,
          msg: '异步删除缓存数据失败！'
        })
      }
    })
  },

  removeStorageSync: function() { //定义同步删除缓存数据函数
    var that = this;
    try {
      wx.removeStorageSync('高二'); //同步删除缓存数据
      that.setData({
        hidden: false,
        msg: '同步删除缓存数据成功！'
      })
    } catch (e) { //发生异常时的处理
      that.setData({
        hidden: false,
        msg: '同步删除缓存数据失败！'
      })
      console.log(e)
    }
  }
})