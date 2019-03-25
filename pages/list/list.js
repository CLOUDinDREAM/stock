// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    colorType: 1,
    moneys:[ 
      { 'id': '5', 'money': '105', 'date': '2019-03-13', 'state': '-', 'num': '5' },
      { 'id': '4', 'money': '110', 'date': '2019-03-12', 'state': '+', 'num': '5' },
      { 'id': '3', 'money': '105', 'date': '2019-03-11', 'state': '+', 'num': '5' },
      { 'id': '5', 'money': '105', 'date': '2019-03-10', 'state': '-','num':'5' },
      { 'id': '4', 'money': '110', 'date': '2019-03-09', 'state': '+', 'num': '5' },
      { 'id': '3', 'money': '105', 'date': '2019-03-08', 'state': '+', 'num': '5' },
      { 'id': '2', 'money': '101', 'date': '2019-03-07', 'state': '+', 'num': '5' },
      { 'id': '1', 'money': '100', 'date': '2019-03-06', 'state': '', 'num': '0' },
      { 'id': '5', 'money': '105', 'date': '2019-03-05', 'state': '-', 'num': '5' },
      { 'id': '4', 'money': '110', 'date': '2019-03-04', 'state': '+', 'num': '5' },
      { 'id': '3', 'money': '105', 'date': '2019-03-03', 'state': '+', 'num': '5' },
      { 'id': '2', 'money': '101', 'date': '2019-03-02', 'state': '-', 'num': '5' },
      { 'id': '1', 'money': '100', 'date': '2019-03-01', 'state': '', 'num': '0' },
      ],
    total:'累计增加5'

  },
  goCanvas:function(params){
    wx.navigateTo({
      url: '/pages/canvas/canvas',
    })
  },
  goAdd: function (params) {
    wx.navigateTo({
      url: '/pages/add/add',
    })
  },
  changeColor: function (params) {
    console.log(this.data.colorType);
    if (this.data.colorType == 1){
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#ff0000',
        animation: {
          duration: 400,
          timingFunc: 'easeIn'
        }
      });
      this.data.colorType = 2;
    }else{
      wx.setNavigationBarColor({
        frontColor: '#000000',
        backgroundColor: 'white',
        animation: {
          duration: 400,
          timingFunc: 'easeIn'
        }
      });
      this.data.colorType = 1;
    }
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})