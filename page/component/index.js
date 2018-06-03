Page({
  data: {
    list: [
      {
        id: '20180609',
        name: '2018-06-09 周六 SAT',
        open: false,
        pages: [
          {
            id: 'pride-run',
            name: '骄傲跑',
            nameEn: 'Pride Run',
            time: '9:00-11:00',
            address: '终点站：上海新天地安达仕酒店',
          },
          {
            id: 'rainbow-family',
            name: '彩虹家庭论坛',
            nameEn: 'Rainbow Family Forum',
            time: '10:00-12:00',
            address: '上海新天地安达仕酒店5楼花园玻璃房'
          },
          {
            id: 'pflag',
            name: '亲友会十周年特别恳谈会',
            nameEn: 'PFLAG Conference',
            time: '10:00-18:00',
            address: '上海新天地安达仕酒店3楼'
          },
          {
            id: 'andaz-pink',
            name: '安达仕粉红早午餐',
            nameEn: 'Andaz Pink Brunch',
            time: '11:00-14:00',
            address: '上海新天地安达仕酒店'
          },
          {
            id: 'women-up',
            name: '女众不同 – 反性骚扰论坛',
            nameEn: 'Women Up! - Anti-Sexual Harassment Panel',
            time: '13:00-16:00',
            address: '上海新天地安达仕酒店5楼花园玻璃房'
          },
          {
            id: 'view',
            name: '「 与光同行 」- 首届中国酷儿合唱节联合音乐会',
            time: '19:30-21:30',
            address: '贺绿汀音乐厅'
          },
          {
            id: 'view',
            name: '上海骄傲节闪耀派对',
            time: '21:00-2:00',
            address: '梨园'
          },
        ]
      }, 
      {
        id: '20180610',
        name: '2018-06-10 周日 SUN',
        open: false,
        pages: [
          {
            id: 'queer-talk',
            name: '酷儿说 – 酷儿与残障人群',
            time: '16:00-19:00',
            address: 'Happiness42',
          },
        ]
      },
      {
        id: '20180613',
        name: '2018-06-13 周三 WED',
        open: false,
        pages: [
          {
            id: 'trivial',
            name: '竞猜之夜',
            time: '20:00-23:00',
            address: 'Lucca Café & Lounge',
          },
        ]
      },
      {
        id: '20180614',
        name: '2018-06-14 周四 THU',
        open: false,
        pages: [
          {
            id: 'out-equal',
            name: 'Out & Equal 中国“圆桌派”',
            time: '10:00-19:00',
            address: '中国GE',
          },
          {
            id: 'girls-party',
            name: '女生派对',
            time: '21:00-24:00',
            address: 'HILO',
          },
        ]
      },
    ]
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  }
})

