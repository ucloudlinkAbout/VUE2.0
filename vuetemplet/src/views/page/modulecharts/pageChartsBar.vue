<style>
  #pageChartsBar {
    position: relative;
    width: 800px;
    height: 600px;
  }
</style>
<template>
  <div class="content-wrap">
    <div class="pageChartsBar">
      <chart-bar
        :chart-id="'pageChartsBar'"
        :chart-country="pageChartsBarCountry"
        :chart-data="pageChartsBarData"></chart-bar>
    </div>
  </div>
</template>
<script type="text/javascript">
  import chartbar from '../../components/chartBar.vue'
  import PageChartsBar from '../../biz/modulerequest/modulecharts/pageChartsBar'
  const biz = new PageChartsBar()

  export default {
    data () {
      return {
        pageChartsBarCountry: [],
        pageChartsBarData: []
      }
    },
    components: {
      'chart-bar': chartbar
    },
    methods: {
      getData () {
        const that = this
        biz.getpageChartsBar('').then(function (data) {
          // 数据处理 这里的data是个对象 有两个值{errno, data}
          console.info(data.errno)
          console.info(data.data)
          that.pageChartsBarData = data.data.data
          that.pageChartsBarCountry = data.data.country
        })
      }
    },
    created () { // 生命周期钩子created这个钩子在实例被创建之后被调用，this指向实例
      this.getData()
    }
  }
</script>
