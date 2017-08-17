/**
 * Created by wang.ding on 2017/8/8.
 */
var SystemGlobe = window.SystemGlobe || {};
//扫描开始标记
//@scanStart

SystemGlobe.url = {
  // 查询字典
  // 暂定项目名为 @projectname
  dictionary: {
    queryByCode: '/project/dictionary/queryDicByCode',
    queryByType: '/project/distionary/queryDictionaryType'
  },
  // 登录相关
  loginforoms: {
    loginByBssaccount: '/project/partner/SassLogin',
    login: '',
    logout: ''
  },
  // 各个页面相关接口
  // page1
  page1: {
    getPageinfo: '/projectname/pageinfo',
    deletePageInfo: '/projectname/pageinfo/delete',
    changePageInfo: '/projectname/pageinfo/update',
    addPageInfo: '/projectname/pageinfo/save'
  },
  pagen: {
    getPageinfon: '/projectname/pageinfon',
    deletePageInfon: '/projectname/pageinfon/delete',
    changePageInfon: '/projectname/pageinfon/update',
    addPageInfon: '/projectname/pageinfon/save'
  },
  pageChartsBar: {
    getpageChartsBar: '/projectname/pageChartsBar'
  }
}
//@scanEnd
//扫描结束标记
