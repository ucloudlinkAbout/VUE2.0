/**
 * Created by wang.ding on 2017/7/12.
 */

/**
 * 负责人：dingwang
 * 基础ajax方法
 * @param {object} opt ajax参数
 * @return {promise} promise对象
 */
import $ from 'jquery'

const ajax = function (opt) {
  let promise = new Promise(function (resolve, reject) {
    if ($) {
      if (opt.json) {
        opt.data = JSON.stringify(opt.data)
      }
      if (opt.async === undefined) {
        opt.async = true
      }
      $.ajax({
        dataType: 'json',
        async: opt.async,
        data: opt.data,
        url: opt.url,
        type: opt.method,
        beforeSend: function (request) {
          // 通常在HTTP协议里，客户端像服务器取得某个网页的时候，必须发送一个HTTP协议的头文件
          request.setRequestHeader('Accept-Language', 'zh-CN')
        },
        success: function (data) {
          resolve(data)
        },
        error: function (err) {
          if (reject) {
            reject(err)
          }
        }
      })
    } else {
      reject('没有引入jquery库，代码无法执行！')
    }
  })

  return promise
}

export default ajax

