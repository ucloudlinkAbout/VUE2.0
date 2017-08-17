// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'

Vue.config.productionTip = false

/* eslint-disable no-new */

// 全局事件代理
window.$$vueEvent = new Vue()
// 全局路由记录器
window.$$vueRouter = {}
window.SystemGlobe = {
  url: {
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
    }
  },
  devType: {},
  GlobeOption: {},
  component: {}
}

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
