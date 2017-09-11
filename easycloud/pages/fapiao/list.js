// list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: 'init data',
    array: [
      {msg: '1'},
      {msg: '2'}
    ]
  },

  bindViewHome: function(){
    wx.switchTab({
      url: '../index/index'
    });
  },

  viewTap: function(){
    console.info('click me !');
    this.setData({
      'text':'clicked'
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onload: ' + options);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onready');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onshow');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onhide');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onunload');
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('on pull down refresh');
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('on reach bottom');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('on share app message');
    return {
      title: 'logs',
      path: '/pages/fapiao/list?id=111'
    }
  }
})