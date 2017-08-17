/**
 * Created by wang.ding on 2017/8/15.
 */
import Encryption from '../../../libs/base/encryption'
import Store from '../../../libs/base/store'

const store = new Store()
class login {
  /**
   * 获取本地存储的密码和用户名
   * @param {string} data.loginname 登录用户名
   * @param {string} data.password 密码
   * @return {function} promise对象
   */
  login (data) {
  //  ajax传输 md5 加密的form用户名和密码给后台
  }
  loginOut() {}
  /**
   * 获取本地存储的密码和用户名
   * @param {string} data.loginname 登录用户名
   * @return {object} 本地存储的密码和用户名对象
   */
  getDeCodePwd() {
    const en = new Encryption()
    const pwd = store.localGet('pwd')
    const user = store.localGet('user')
    if (pwd !== '' && pwd !== undefined && pwd !== null && user !== '' && user !== undefined && user !== null) {
      return {
        userName: en.deEncryption(user),
        password: en.deEncryption(password)
      }
    }
    return {}
  }
  /**
   * 获取加密的密码和用户名到本地
   * @param {string} pwd 密码
   * @return {string} user 用户名
   */
  saveCodePwd(pwd, user) {
    const en = new Encryption()
    if (pwd === '') {
      store.localDelete('pwd')
    } else {
      store.localSave('pwd', en.encryption(pwd))
    }
    if (user === '') {
      store.localDelete('user')
    } else {
      store.localSave('user', en.encryption(user))
    }
  }
}
export  default login
