/**
 * banner数据
 */
function getBannerData() {
  var arr = ['../../images/banner_01.png', '../../images/banner_02.png', '../../images/banner_03.png', '../../images/banner_04.png']
  return arr
}

/*
 * 首页 navnav 数据
 */
function getIndexNavData() {
  var arr = [
    {
      id: 1,
      icon: "../../images/relax.png",
      title: "休闲放松"
    },
    {
      id: 2,
      icon: "../../images/internalnurse.png",
      title: "内科调理"
    },
    {
      id: 3,
      icon: "../../images/women.png",
      title: "女性专区"
    },
    {
      id: 4,
      icon: "../../images/pain.png",
      title: "身体疼痛"
    }
  ]
  return arr
}

/*
 * 首页 对应 标签 数据项
 */
function getIndexNavSectionData() {
  var arr = [
    [
      {

        subject: "秋季自然特价美甲",
        coverpath: "../../images/recommend_img_01.png",
        price: '¥198',
        message: '我们追求的是没有最长只有更长！'
      },
      {

        subject: "睫毛稀疏 种睫毛来帮忙",
        coverpath: "../../images/recommend_img_02.png",
        price: '¥1888',
        message: '我们追求的是没有最长只有更长！'
      },
      {

        subject: "爱丽克EircParisSalon",
        coverpath: "../../images/recommend_img_03.png",
        price: '¥1588',
        message: '我们追求的是没有最长只有更长！'
      },
      {

        subject: "伊本造型",
        coverpath: "../../images/recommend_img_05.png",
        price: '¥198',
        message: '伊本造型是由著名形象设计师杨进先生创办。'
      },
      {

        subject: " 画对了妆，微微一笑颜值倍儿高！",
        coverpath: "../../images/recommend_img_06.png",
        price: '¥198',
        message: '《微微一笑很倾城》的剧照简直美腻到不要不要的'
      }
    ],
    [
      {
        artype: 'nails',
        subject: "秋季自然特价美甲",
        coverpath: "../../images/recommend_img_01.png",
        price: '¥198',
        message: '我们追求的是没有最长只有更长！'
      }
    ],
    [
      {
        artype: 'beauty',
        subject: "爱丽克EircParisSalon",
        coverpath: "../../images/recommend_img_03.png",
        price: '¥1588',
        message: '我们追求的是没有最长只有更长！'
      },
      {
        artype: 'beauty',
        subject: " 画对了妆，微微一笑颜值倍儿高！",
        coverpath: "../../images/recommend_img_06.png",
        price: '¥198',
        message: '《微微一笑很倾城》的剧照简直美腻到不要不要的'
      }
    ],
    [

      {
        artype: 'hair',
        subject: "伊本造型",
        coverpath: "../../images/recommend_img_05.png",
        price: '¥1588',
        message: '伊本造型是由著名形象设计师杨进先生创办。'
      }
    ],
    [
      {
        artype: 'eyelash',
        subject: "睫毛稀疏 种睫毛来帮忙",
        coverpath: "../../images/recommend_img_02.png",
        price: '¥1888',
        message: '我们追求的是没有最长只有更长！'
      }
    ]
  ]
  return arr
}
/**
 * 技师 数据
 * */
function getSkilledData() {
  var arr = [
    {
      company: "西狮独品美容美发有限公司",
      avatar: "../../images/skilledt_img_01.png",
      nickname: '张技师',
      price: '¥500',
      message: '从事美发行业60余年，有丰富经验',
      distance: '100m'
    },
    {
      company: "圆月亮美甲沙龙",
      avatar: "../../images/skilledt_img_02.png",
      nickname: '包技师',
      price: '¥800',
      message: '从事美发行业60余年，有丰富经验',
      distance: '200m'
    },
    {
      company: "璀璨美睫会所",
      avatar: "../../images/skilledt_img_03.png",
      nickname: '王技师',
      price: '¥600',
      message: '从事美发行业60余年，有丰富经验',
      distance: '100m'
    },
    {
      company: "柔丝妮美容养生馆",
      avatar: "../../images/skilledt_img_04.png",
      nickname: '黄技师',
      price: '¥800',
      message: '从事美发行业60余年，有丰富经验',
      distance: '400m'
    }
  ]
  return arr
}

module.exports = {
  getBannerData: getBannerData,
  getIndexNavData: getIndexNavData,
  getIndexNavSectionData: getIndexNavSectionData,
  // getPickerData: getPickerData,
  // getSkilledData: getSkilledData,
  // userData: userData,
  // provinceData: provinceData,
  // cityData: cityData,
  // searchAddrFromAddrs: searchAddrFromAddrs

}