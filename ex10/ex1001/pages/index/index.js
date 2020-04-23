// pages/API/File/index.js
var tempFilePaths, tempFilePath; //定义存放所有文件和单个文件路径的全局变量
Page({
  data: {
    msg: '', //小程序运行时没有文件信息
    hidden: true //小程序运行时隐藏文件信息显示区域
  },
  openFile: function() { //定义打开文件函数
    var that = this;
    wx.chooseImage({ //打开图片文件
      success(res) {
        tempFilePaths = res.tempFilePaths //获取所有打开图片文件的路径
        console.log('打开文件路径：' + tempFilePaths)
        that.setData({
          imgPath: tempFilePaths[0], //显示打开的第一张图片
          hidden: false, //显示文件信息区域
          msg: '文件打开成功！' //显示文件操作信息
        })
      }
    })
  },

  saveFile: function() { //保存文件
    var that = this;
    wx.saveFile({ //调用保存文件的API函数
      tempFilePath: tempFilePaths[0], //获取打开的第1个文件路径
      success(res) { //将打开的第1个文件保存到res.savedFilePath
        console.log('保存文件路径：' + res.savedFilePath); //显示保存文件的路径
        that.setData({
          hidden: false, //显示文件操作信息
          msg: '文件保存成功!', //文件操作信息
        })
      }
    })
  },
  getSavedFileInfo: function() { //获取已经保存的文件信息
    var i, file;
    var that = this;
    wx.getSavedFileList({ //获取所有已保存的文件
      success: function(res) { //将获取的所有文件赋值给res.fileList
        if (res.fileList.length == 0) { //如果没有保存的文件
          that.setData({
            hidden: false, //显示文件信息
            msg: '没有文件信息' //文件信息
          })
        } else {
          for (i = 0; i < res.fileList.length; i++) {
            file = res.fileList[i];
            console.log('第' + (i + 1) + '个文件路径：' + file.filePath)
            wx.getSavedFileInfo({ //获取已保存的文件信息
              filePath: file.filePath,
              success: function(res) { //将文件信息赋值给res
                console.log('第' + i + '个文件大小为：' + res.size)
                that.setData({
                  hidden: false, //显示文件信息
                  msg: '文件数量：' + i + '\n最后一个文件的大小：' + res.size +
                    '\n最后一个文件的创建时间：' + res.createTime
                })
              }
            })
          }
        }
      }
    })
  },
  removedSavedFile: function() { //删除文件
    var i, file;
    var that = this;
    wx.getSavedFileList({ //获取已保存文件的列表
      success: function(res) { //将所有文件赋值给res.fileList
        for (i = 0; i < res.fileList.length; i++) { //遍历文件列表
          file = res.fileList[i];
          wx.removeSavedFile({ //删除已经保存的文件
            filePath: file.filePath,
          })
          console.log('第' + (i + 1) + '个文件被删除！')
        }
        that.setData({
          hidden: false,
          msg: '文件被全部删除'
        })
      }
    })
  }
})