var urlid = ''
var urlmap = new Map()
var urlstrmap = new Map()
urlmap.set('pride-run', 'https://mp.weixin.qq.com/s/o6VXM4M4Dv8JdG2ek5TI8g')
urlstrmap.set('pride-run', 'https://mp.weixin.qq.com/s/\no6VXM4M4Dv8JdG2ek5TI8g')
urlmap.set('rainbow-family', 'https://mp.weixin.qq.com/s/UtYE_sztLzcrSJXRKfP7GA')
urlstrmap.set('rainbow-family', 'https://mp.weixin.qq.com/s/\nUtYE_sztLzcrSJXRKfP7GA')
urlmap.set('pflag', 'https://mp.weixin.qq.com/s/n7Y1hJpwSFYYtajRqAo44w')
urlstrmap.set('pflag', 'https://mp.weixin.qq.com/s/\nn7Y1hJpwSFYYtajRqAo44w')

Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  copy: function (e) {
    var url = urlmap.get(urlid)
    if (typeof (url) == "undefined") {
      url = ''
      console.log('no link defined')
    } 
    wx.setClipboardData({
      data: url,
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            console.log(res.data) // data
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    urlid = options.id
    console.log(urlid)
    var urlstr = urlstrmap.get(urlid)
    if (typeof (urlstr) == "undefined") {
      urlstr = '暂无活动链接'
      console.log('no link defined')
    } 
    this.setData({
      urltext: urlstr
    })
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