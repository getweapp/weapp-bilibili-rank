Page({
  data: {
    videos: [],
    url: [
      "https://api.getweapp.com/vendor/bilibili/all-07.json",
      "https://api.getweapp.com/vendor/bilibili/all-7-33.json",
      "https://api.getweapp.com/vendor/bilibili/origin-07.json"
    ]
  },
  onLoad: function (params) {
    var that = this;
    var rankType = params.id || this.data.id;

    wx.request({
      url: this.data.url[rankType],
      success: function(res) {
        if (res.statusCode === 200) {
          that.setData({
            videos: res.data.rank.list.slice(0, 10)
          });
        }
      }
    });
  }
})