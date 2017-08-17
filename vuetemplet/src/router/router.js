import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/page/index.vue'
import login from '../login.vue'
import fault from '../404.vue'
import pageone from '../views/page/moduleone/pageone.vue'
import pagetwo from '../views/page/moduletwo/pagetwo.vue'
import pagen from '../views/page/modulen/pagenn.vue'
import pageChartsBar from '../views/page/modulecharts/pageChartsBar.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      /*
      * 登录页面
      * 时间:2017-07-12
      * 负责人：dingwang
      * */
      path: '/',
      name: 'login',
      component: login
    },
    {
      /*
       * 主页面
       * 时间:2017-07-13
       * 负责人：dingwang
       * 设想这下面放嵌套路由
       * */
      path: '/index',
      name: 'index',
      component: index,
      children: [
        /*
         * page1页面
         * 时间:2017-07-13
         * 负责人：dingwang
         * */
        {
          path: 'pageone',
          name: 'pageone',
          component: pageone
        },
        /*
         * page2页面
         * 时间:2017-07-13
         * 负责人：dingwang
         * */
        {
          path: 'pagetwo',
          name: 'pagetwo',
          component: pagetwo
        },
        /*
         * pagen页面
         * 时间:2017-07-13
         * 负责人：dingwang
         * */
        {
          path: 'pagen',
          name: 'pagen',
          component: pagen
        },
        /*
         * pagen页面
         * 时间:2017-08-11
         * 负责人：dingwang
         * */
        {
          path: 'pageChartsBar',
          name: 'pageChartsBar',
          component: pageChartsBar
        },
        /*
         * pagen页面
         * 时间:2017-08-11
         * 负责人：dingwang
         * */
        {
          path: 'pageChartsLine',
          name: 'pageChartsLine',
          component: require('../views/page/modulecharts/pageChartsLine.vue')
        }
      ]
    },
    {
      /*
       * 404页面
       * 时间:2017-07-12
       * 负责人：dingwang
       * */
      path: '/404',
      name: 'fault',
      component: fault
    }
  ]
})
