//index.js
Page({
  data: {
    r: 50,
    g: 100,
    b: 150,
    a: 1
  },
  colorChanging(e) {
    let color = e.currentTarget.dataset.color //获取当前slider组件的data-color值
    let value = e.detail.value; //获取当前slider组件的value值
    console.log(color, value) //在console中显示信息
    this.setData({
      [color]: value //将value值赋值给数组color
    })
  }
})