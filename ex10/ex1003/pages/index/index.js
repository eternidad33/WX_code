// pages/API/NetworkStatus/index.js
Page({
  data: {
    status: '获取中……'
  },
  onLoad: function(options) {
    var that = this
    wx.getNetworkType({ //调用获取网络类型函数
      success: function(res) {
        that.setData({
          status: res.networkType
        })
      },
    })
    wx.onNetworkStatusChange(function(res) { //调用监听网络状态变化的函数
      if (res.isConnected) {
        that.setData({
          status: res.networkType //如果联网状态，显示网络类型
        })
      } else {
        that.setData({
          status: '未联网！'
        })
      }
    })
  },

  wifiStatus: function() {
    var that = this
    wx.getConnectedWifi({ //获取已经连接的Wifi
      success: function(res) {
        that.setData({
          res: res.wifi
        })
      }
    })
  }
})