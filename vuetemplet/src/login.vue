<!--<template>-->
  <!--<div class="loginBody">-->
    <!--<div class="login-header">-->
      <!--<img>-->
      <!--<div class="navbar-bl">-->
        <!--<span v-text="languageList[il8Lan]"></span>-->
        <!--<span></span>-->
        <!--<ul class="navbar-box">-->
          <!--<li v-on:click="selectLanguage" data-val="zh-CN" v-bind:class="{'active': il8Lan == 'zh-CN'}" v-text="languageList['zh-CN']"></li>-->
          <!--<li v-on:click="selectLanguage" data-val="zh-CN" v-bind:class="{'active': il8Lan == 'zh-TW'}" v-text="languageList['zh-TW']"></li>-->
          <!--<li v-on:click="selectLanguage" data-val="zh-CN" v-bind:class="{'active': il8Lan == 'zh-HK'}" v-text="languageList['zh-HK']"></li>-->
        <!--</ul>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div class="login">-->
      <!--<div class="login-img"></div>-->
      <!--<div class="login-box">-->
        <!--<h5 v-text="il8n.userBox"></h5>-->
        <!--<div>-->
          <!--<g-form v-ref:loginform v-on:keydown="keyLogin">-->
            <!--<p>-->
              <!--<span></span>-->
              <!--<g-input name="loginname" :value="userValue" :placeholder="placeholder"></g-input>-->
            <!--</p>-->
            <!--<p>-->
              <!--<span></span>-->
              <!--<g-input-password name="password" :value="passwordValue"></g-input-password>-->
            <!--</p>-->
          <!--</g-form>-->
            <!--<p>-->
              <!--<button type="submit" v-on:click="loginEvent" v-text="il8n.loginBtn"></button>-->
            <!--</p>-->
            <!--<p>-->
              <!--<g-checkbox :checked.sync="rememberPwd">-->
                <!--<b slot="txt" v-text="il8n.rememberPwd"></b>-->
              <!--</g-checkbox>-->
              <!--<g-checkbox :checked.sync="isSassLogin" :onchange="checkbox_isSassLoginChange">-->
                <!--<b slot="txt" v-text="il8n.isSassLogin"></b>-->
              <!--</g-checkbox>-->
            <!--</p>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <!--<g-loadtips></g-loadtips>-->
    <!--<g-Tips-m></g-Tips-m>-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->
  <!--import LoginBiz from './views/biz/modulerequest/loginBiz'-->
  <!--import lan from './libs/base/lanLoader'-->
  <!--import Language from './libs/base/language'-->
  <!--import { util } from './libs/base/util'-->
  <!--import Cookie from './libs/base/cookieHelper'-->
  <!--import Store from './libs/base/store'-->
  <!--const store = new Store();-->
  <!--const cookie = new Cookie();-->

  <!--export default {-->
    <!--components: {-->
      <!--'gInput': require('./components/input/input-noempty.vue'),-->
      <!--'gInputpassword': require('./components/input/input-password.vue'),-->
      <!--'gLoadtips': require('./components/loadTips/loadTips.vue'),-->
      <!--'gTipsM': require('./components/tips/tips-m.vue'),-->
      <!--'gForm': require('./components/form/form.vue'),-->
      <!--'gCheckbox': require('./components/checkbox/input-checkbox.vue')-->

    <!--},-->
    <!--data () {-->
      <!--return {-->
        <!--il8n: {},-->
        <!--passwordValue: '',-->
        <!--userValue: '',-->
        <!--rememberPwd: false,-->
        <!--isSassLogin: true,-->
        <!--pwdInClient: '',-->
        <!--il8Lan: 'zh-CN',-->
        <!--languageList: {-->
          <!--'zh-CN': '简体中文',-->
          <!--'zh-TW': '繁体中文（台湾）',-->
          <!--'zh-HK': '繁体中文（香港）',-->
          <!--'en-US': 'English',-->
        <!--},-->
        <!--showLoadTips: false,-->
        <!--placeholder: ''-->
      <!--}-->
    <!--},-->
    <!--methods: {-->
      <!--selectLanguage: function (e) {-->
        <!--const language = e.currentTarget.attributes[0].value;-->
        <!--cookie.setCookie('language', language, window.SystemGlobe.devType.sessionTimeOut, 'localhost')-->
        <!--store.localSave('language', language)-->
        <!--window.location.reload()-->
      <!--},-->
      <!--loginEvent: function () {-->
        <!--const that = this-->
        <!--const biz = new LoginBiz()-->
        <!--const check = this.$ref.loginform.getData()-->
        <!--if (check.ischeck) {-->
            <!--biz.login({-->
              <!--loginname: check.data.loginname,-->
              <!--password: check.data.password-->
            <!--}).then(function (data) {-->
              <!--if (that.rememberPwd) {-->
                  <!--biz.saveCodePwd(check.data.password, check.data.loginname)-->
              <!--} else {-->
                  <!--biz.saveCodePwd('', '')-->
              <!--}-->
              <!--util.middleTipsShow({-->
                <!--ico: 2,-->
                <!--txt: that.il8n.success-->
              <!--})-->
              <!--setTimeout(() => {-->
                  <!--that.$route.router.go('/index')-->
              <!--}, 750)-->
            <!--}).catch(function (err) {-->
              <!--console.info('login err data', err)-->
              <!--if(err) {-->
                  <!--util.middleTipsShow({-->
                    <!--ico: 1,-->
                    <!--txt: err-->
                  <!--})-->
              <!--}-->
            <!--})-->
        <!--}-->
      <!--},-->
      <!--keyLogin: function (event) {-->
        <!--if (event.keyCode === 13) {-->
            <!--this.loginEvent()-->
        <!--}-->
      <!--},-->
      <!--checkbox_isSassLoginChange: function (e, value, checked, opt) {-->
        <!--console.info('e_isSaasLoginChange', e, value, checked, opt)-->
        <!--const that = this;-->
        <!--if (!checked) {-->
            <!--try {-->
                <!--util.middleTipsShow({-->
                  <!--ico: 1,-->
                  <!--txt: that.il8n.saasLoginTips,-->
                  <!--closeCallBack: function () {-->
                    <!--that.isSaasLogin = true-->
                  <!--}-->
                <!--})-->
            <!--} catch (err) {-->
                <!--console.error(err)-->
            <!--}-->
        <!--}-->

      <!--}-->
    <!--},-->
    <!--ready() {-->
      <!--const that = this-->
      <!--const biz = new LoginBiz()-->
      <!--const value = biz.getDecodePwd()-->
      <!--that.il8Lan = store.localGet('language')-->

      <!--if(value.password || value.userName) {-->
          <!--if (value.password !== '' && value.password !== undefined) {-->
            <!--that.rememberPwd = true-->
          <!--} else {-->
              <!--that.rememberPwd = false-->
          <!--}-->
          <!--that.passwordValue = value.password-->
          <!--that.userValue = value.userDisplayName-->
      <!--}-->
      <!--lan.getLan('v_login').then(function (d) {-->
        <!--that.il8n = d-->
        <!--that.placeholder = that.il8Lan.inputuser-->
      <!--})-->
      <!--const lang = new Language()-->
      <!--lang.setDefaultLanguage()-->
    <!--}-->
  <!--}-->
<!--</script>-->
