<style>
  #pageChartsLine {
    position: relative;
    width: 800px;
    height: 600px;
  }
</style>
<template>
  <div class="content-wrap">
    <div class="pageChartsLine">
      <chart-line
        :chart-id="'pageChartsLine'"
        :chart-time="pageChartsLineTime"
        :chart-data="pageChartsLineData"></chart-line>
    </div>
  </div>
</template>
<script type="text/javascript">
  import chartline from '../../components/chartLine.vue'
  export default {
    data () {
      return {
        pageChartsLineTime: [
          '2009/6/12 2:00',
          '2009/6/12 3:00',
          '2009/6/12 4:00',
          '2009/6/12 5:00',
          '2009/6/12 6:00',
          '2009/6/12 7:00',
          '2009/6/12 8:00'],
        pageChartsLineData: [
          {
            name: '邮件营销',
            type: 'line',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '散点图',
            type: 'scatter',
            data: [['2009/6/12 5:00', 234]],
            itemStyle: {
              normal: {
                color: 'rgba(255, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    },
    components: {
      'chart-line': chartline
    }
  }
</script>
