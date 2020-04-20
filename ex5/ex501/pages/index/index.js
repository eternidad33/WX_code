//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    score: 0,
    grade: "及格"
  },
  scoreInput: function(e) {
    var score = e.detail.value;
    var grade;
    if (score > 100 || score < 0) {
      grade = '成绩输入有误!'
    } else if (score > 90) {
      grade = '优秀!';
    } else if (score > 80) {
      grade = '良好!';
    } else if (score > 70) {
      grade = '中等!';
    } else if (score >= 60) {
      grade = '及格!';
    } else {
      grade = '不及格！';
    }
    this.setData({
      score: score,
      grade: grade
    })
  }
})