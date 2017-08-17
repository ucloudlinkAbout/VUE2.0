/**
 * Created by wang.ding on 2017/8/11.
 */
import ajax from '../../../../libs/base/ajax'

class pageChartsBar {
  /**
   * Created by wang.ding on 2017/8/11.
   * 柱形图数据
   * @param {object} data
   * @returns {Promise}
   */
  getpageChartsBar (data) {
    return new Promise(function (resolve, reject) {
      ajax({
        // url: window.SystemGlobe.url.pageChartsBar.getpageChartsBar,
        url: 'http://localhost:8080/api/chartdata',
        json: false,
        data: data,
        method: 'GET'
      }).then(function (data) {
        resolve(data)
      })
    })
  }

}

export default pageChartsBar
