//index.js

var start, end, result;
Page({
  startNum: function(e) {
    start = parseInt(e.detail.value);
  },
  endNum: function(e) {
    end = parseInt(e.detail.value);
  },
  calc: function() {
    result = 0;
    for (var i = start; i <= end; i++) {
      result += i;
    }
    this.setData({
      result: result
    })
  }

})