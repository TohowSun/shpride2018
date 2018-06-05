// page/component/pages/pride-run/pride-run.js
var urlid = ''
var app = getApp()
var dataMap = new Map()
var galleryInfo = {
  title: '上海骄傲节十周年纪念展',
  titleEn: 'Pride 10 Anniversary Gallery',
  time: '2018-06-08 19：00-21：30',
  place: '北极熊画廊',
  placeEn: 'Polar Bear Gallery',
  address: '普陀区莫干山路50号M50创意园4B-102 (近西苏州路）',
  addressEn: '4B-102, M50 Creative Park, 50 Moganshan Rd(near West Suzhou Rd), Putuo District',
  price: '免费入场，导览需预约',
  priceEn: 'Free Entry, RSVP for guided tour',
  other: '',
  otherEn: '',
}
dataMap.set('gallery', galleryInfo)

var shptf4Info = {
  title: '上海骄傲戏剧节IV - 一场关于爱的演出',
  titleEn: 'ShanghaiPRIDE Theatre Festival IV - The Absence of Reason',
  time: '2018-06-07~10 20:00-21:30',
  place: '旮旯招待所',
  placeEn: 'Galleria',
  address: '黄浦区长乐路462号联合谷·集社',
  addressEn: 'United Valley, 462 Changle Road, Huangpu District',
  price: '早鸟票 RMB 180, 现场票 RMB 200',
  priceEn: 'Pre-sale RMB 180, At the door RMB 200',
  other: '',
  otherEn: '',
}
dataMap.set('shptf4', shptf4Info)

var shptf5Info = {
  title: '上海骄傲戏剧节V - 中文即兴表演',
  titleEn: 'ShanghaiPRIDE Theatre Festival V - Chinese Improv Show',
  time: '2018-06-15 20:00-22:00',
  place: '虎咖啡',
  placeEn: 'Tiger Café',
  address: '长宁区凯旋路164号（近长宁路）',
  addressEn: '164 Kaixuan Rd (near Changning Rd), Changning District',
  price: '免费入场，接受捐赠',
  priceEn: 'Pay what you like',
  other: '',
  otherEn: '',
}
dataMap.set('shptf5', shptf5Info)

var shptf6Info = {
  title: '上海骄傲戏剧节VI - 我是哪吒剧本朗读会',
  titleEn: 'ShanghaiPRIDE Theatre Festival VI - I Am Nezha Script Reading',
  time: '2018-06-16 14:00-16:00',
  place: 'Happiness42',
  placeEn: '',
  address: '长宁区幸福路42号（近法华镇路）',
  addressEn: '42 Xingfu Rd (near Fahuazhen Rd), Changning District',
  price: '免费预约',
  priceEn: 'Free entry, RSVP required',
  other: '',
  otherEn: '',
}
dataMap.set('shptf6', shptf6Info)

var shptf51Info = {
  title: '上海骄傲戏剧节V - 英文即兴表演',
  titleEn: 'ShanghaiPRIDE Theatre Festival V - English Improv Show',
  time: '2018-06-16 20:00-22:00',
  place: '虎咖啡',
  placeEn: 'Tiger Café',
  address: '长宁区凯旋路164号（近长宁路）',
  addressEn: '164 Kaixuan Rd (near Changning Rd), Changning District',
  price: '免费入场，接受捐赠',
  priceEn: 'Pay what you like',
  other: '',
  otherEn: '',
}
dataMap.set('shptf5-1', shptf51Info)

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

var choirInfo = {
  title: '「 与光同行 」- 首届中国酷儿合唱节联合音乐会',
  titleEn: '"The Journey of Light" The First National LGBT Choir Concert',
  time: '2018-06-09 19:30-21:30',
  place: '贺绿汀音乐厅',
  placeEn: 'He Lvting Concert Hall',
  address: '徐汇区汾阳路20号上海音乐学院（近复兴中路）',
  addressEn: '20 Fenyang Rd, Shanghai Conservatory of Music (near Middle Fuxing Rd), Xuhui District',
  price: '门票 Entry RMB 80/120/180/220/280/380',
  priceEn: '',
  other: '',
  otherEn: '',
}
dataMap.set('choir', choirInfo)

var blingInfo = {
  title: '上海骄傲节闪耀派对',
  titleEn: 'ShanghaiPRIDE Bling Party',
  time: '2018-06-09 21:00-2:00',
  place: '梨园',
  placeEn: 'The Pearl Shanghai',
  address: '虹口区乍浦路471号（近武进路）',
  addressEn: '471 Zhapu Rd (near Wujin Rd), Hongkou District',
  price: '门票 RMB 100 (含一瓶酒水 / 软饮)',
  priceEn: 'Entry RMB 100 (Include 1 drink)',
  other: '',
  otherEn: '',
}
dataMap.set('bling', blingInfo)

var queerTalkInfo = {
  title: '酷儿说 – 酷儿与残障人群',
  titleEn: 'Queer Talks - Queer & Disabilities',
  time: '2018-06-10 16:00-19:00',
  place: 'Happiness42',
  placeEn: '',
  address: '长宁区幸福路42号（近法华镇路）',
  addressEn: '42 Xingfu Rd (near Fahuazhen Rd), Changning District',
  price: '免费预约',
  priceEn: 'Free entry, RSVP required',
  other: '',
  otherEn: '',
}
dataMap.set('queer-talk', queerTalkInfo)

var trivialInfo = {
  title: '竞猜之夜',
  titleEn: 'Trivial Night',
  time: '2018-06-13 20:00-23:00',
  place: 'Lucca Café & Lounge',
  placeEn: '',
  address: '长宁区番禺路390号（近法华镇路）',
  addressEn: '390 Panyu Rd (near Fahuazhen Rd), Changning District',
  price: '免费入场，提供特别优惠',
  priceEn: 'Free Entry, Special deals available',
  other: '',
  otherEn: '',
}
dataMap.set('trivial', trivialInfo)

var outEqualInfo = {
  title: 'Out & Equal 中国"圆桌派"',
  titleEn: 'Out & Equal Roundtable',
  time: '2018-06-14 10:00-19:00',
  place: '中国GE',
  placeEn: 'GE China',
  address: '中国GE科技园 浦东新区华佗路1号',
  addressEn: 'GE China Technology Park, 1 Huatuo Rd, Pudong District',
  price: '仅限邀请',
  priceEn: 'By invitation only',
  other: '',
  otherEn: '',
}
dataMap.set('out-equal', outEqualInfo)

var ladiesPartyInfo = {
  title: '女生派对',
  titleEn: 'Ladies Party',
  time: '2018-06-14 21:00-24:00',
  place: 'HILO',
  placeEn: '',
  address: '黄浦区巨鹿路158号大同坊B1层（TAXX旁，近成都南路）',
  addressEn: 'B1/F FOUND 158 Jvlu Rd (next to TAXX, near South Chengdu Rd), Huangpu District',
  price: '免费入场',
  priceEn: 'Free entry',
  other: '仅限女生（欢迎男生变装，午夜之后向公众开放）',
  otherEn: 'Ladies only (men in drag are most welcome, doors open to the public after midnight)',
}
dataMap.set('ladies-party', ladiesPartyInfo)

var prideTalkInfo = {
  title: '彩虹说',
  titleEn: 'Pride Talk',
  time: '2018-06-16 14:00-17:00',
  place: '魅蓝',
  placeEn: 'M Glam',
  address: '黄浦区广东路20号外滩五号7楼（近中山东一路）',
  addressEn: '7/F Bund No. 5, 20 Guangdong Rd (near Zhongshan Dong Yi Rd ), Huangpu District',
  price: '免费预约',
  priceEn: 'Free entry, RSVP required',
  other: '',
  otherEn: '',
}
dataMap.set('pride-talk', prideTalkInfo)

var dragonInfo = {
  title: '上海骄傲节猛龙派对',
  titleEn: 'ShanghaiPRIDE Red Dragon Party',
  time: '2018-06-16 21:00-2:00',
  place: 'RIINK',
  placeEn: '',
  address: '黄浦区打浦路658弄1号绿地海外滩6-103室',
  addressEn: 'Unit 6-103, No. 01 Bund Square, 658 Dapu Rd (near East Longhua Rd), Huangpu District',
  price: '门票 RMB 100（含一杯酒水 / 软饮）',
  priceEn: 'Entry RMB 100（Include 1 drink）',
  other: '',
  otherEn: '',
}
dataMap.set('dragon', dragonInfo)

var wellbeingInfo = {
  title: '幸·感讨论会',
  titleEn: 'Well-Being Panel',
  time: '2018-06-17 11:00-13:00',
  place: 'Cotton\'s（新华路店）',
  placeEn: 'Cotton\'s（Xinhua Rd）',
  address: '长宁区新华路294号（近香花桥路）',
  addressEn: '294 Xinhua Rd (near Xianghuaqiao Rd), Changning District',
  price: '免费预约',
  priceEn: 'Free entry, RSVP required',
  other: '',
  otherEn: '',
}
dataMap.set('wellbeing', wellbeingInfo)

var bbqInfo = {
  title: '彩虹串串烧',
  titleEn: 'Rainbow BBQ',
  time: '2018-06-17 13:00-17:00',
  place: 'Cotton\'s（新华路店）',
  placeEn: 'Cotton\'s（Xinhua Rd）',
  address: '长宁区新华路294号（近香花桥路）',
  addressEn: '294 Xinhua Rd (near Xianghuaqiao Rd), Changning District',
  price: '套餐价格：RMB 198 烧烤套餐 (牛排、香肠、羊肉、虾、蔬菜), RMB 148 轻食套餐 (1份主菜+2份配菜) (牛排/香肠/羊肉/汉堡/热狗)',
  priceEn: 'Menu：RMB 198 Grill Set (Steak, Sausage, Lamb, Shrimp, Grilled Vegetables), RMB 148 Light Set (1 meat option + 2 side orders) (Steak/Sausage/Lamb/Burger/Hot Dog）',
  other: '早鸟票含一杯啤酒或桑格里厄汽酒 (06-16前)',
  otherEn: 'Early bird deal includes a beer or sangria (Before 06-16)',
}
dataMap.set('bbq', bbqInfo)

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