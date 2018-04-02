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


module.exports = {
  getBannerData: getBannerData,
  getIndexNavData: getIndexNavData,
  // getIndexNavSectionData: getIndexNavSectionData,
  // getPickerData: getPickerData,
  // getSkilledData: getSkilledData,
  // userData: userData,
  // provinceData: provinceData,
  // cityData: cityData,
  // searchAddrFromAddrs: searchAddrFromAddrs

}