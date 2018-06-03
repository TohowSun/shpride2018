// page/component/pages/pride-run/pride-run.js
var urlid = ''
var dataMap = new Map()
var prideRunInfo = {
  title: '骄傲跑',
  titleEn: 'Pride Run',
  time: '2018-06-09 9:00-11:00',
  place: '终点站：上海新天地安达仕酒店',
  placeEn: 'Desitination: Andaz Xintiandi, Shanghai',
  address: '黄浦区嵩山路88号（近太仓路）',
  addressEn: '88 Songshan Rd(near Taicang Rd), Huangpu District',
  price: '建议最低支持金额 RMB 180',
  priceEn: 'Suggested minimum donation RMB 180',
  other: '',
  otherEn: '',
}
dataMap.set('pride-run', prideRunInfo)

var rainbowFamilyInfo = {
  title: '彩虹家庭论坛',
  titleEn: 'Rainbow Family Forum',
  time: '2018-06-09 10:00-12:00',
  place: '上海新天地安达仕酒店5楼花园玻璃房',
  placeEn: 'Garden Pavilion, 5/F Andaz Xintiandi, Shanghai',
  address: '黄浦区嵩山路88号（近太仓路）',
  addressEn: '88 Songshan Rd(near Taicang Rd), Huangpu District',
  price: '免费预约',
  priceEn: 'Free Entry, RSVP Required',
  other: '着装要求：休闲装（请勿穿拖鞋入场）',
  otherEn: 'Dress Code: Smart Casual (No Slippers)',
}
dataMap.set('rainbow-family', rainbowFamilyInfo)

var pflagInfo = {
  title: '亲友会十周年特别恳谈会',
  titleEn: 'PFLAG Conference',
  time: '2018-06-09 10:00-18:00',
  place: '上海新天地安达仕酒店3楼',
  placeEn: '3/F Andaz Xintiandi, Shanghai',
  address: '黄浦区嵩山路88号（近太仓路）',
  addressEn: '88 Songshan Rd(near Taicang Rd), Huangpu District',
  price: '免费预约',
  priceEn: 'Free Entry, RSVP Required',
  other: '',
  otherEn: '',
}
dataMap.set('pflag', pflagInfo)

var andazPinkInfo = {
  title: '安达仕粉红早午餐',
  titleEn: 'Andaz Pink Brunch',
  time: '2018-06-09 11:00-14:00',
  place: '上海新天地安达仕酒店',
  placeEn: 'Andaz Xintiandi, Shanghai',
  address: '黄浦区嵩山路88号(近太仓路)',
  addressEn: '88 Songshan Rd(near Taicang Rd), Huangpu District',
  price: '费用: RMB 258 (自助餐)',
  priceEn: 'Price: RMB 258 (all you can eat)',
  other: '',
  otherEn: '',
}
dataMap.set('andaz-pink', andazPinkInfo)

var womenUpInfo = {
  title: '女众不同－反性骚扰论坛',
  titleEn: 'Andaz Pink Brunch',
  time: '2018-06-09 13:00-16:00',
  place: '上海新天地安达仕酒店',
  placeEn: 'Andaz Xintiandi, Shanghai',
  address: '黄浦区嵩山路88号(近太仓路)',
  addressEn: '88 Songshan Rd(near Taicang Rd), Huangpu District',
  price: '费用: RMB 258 (自助餐)',
  priceEn: 'Price: RMB 258 (all you can eat)',
  other: '',
  otherEn: '',
}
dataMap.set('women-up', womenUpInfo)

Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    urlid = options.id
    console.log(urlid)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var itemData = dataMap.get(urlid)
    if (typeof (itemData) == "undefined") {
      itemData = {
        title: '暂无活动信息',
        titleEn: 'Coming soon',
        time: '',
        place: '',
        placeEn: '',
        address: '',
        addressEn: '',
        price: '',
        priceEn: '',
      }
      console.log('no event-info page defined')
    }
    this.setData({
      item: itemData
    })
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