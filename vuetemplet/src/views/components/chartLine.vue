<template>
  <div :id="chartId" :style="{width: '800px', height: '600px'}"></div>
</template>
<script type="text/javascript">
  import echarts from 'echarts'

  export default {
    data () {
      return {
        chartInstance: null,
        chartOption: {
          tooltip: {
            trigger: 'item'
          },
          legend: {
            data: ['邮件营销', '联盟广告']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: []
          },
          yAxis: {
            type: 'value'
          },
          series: []
        }
      }
    },
    props: {
      chartId: {
        type: String,
        default: ''
      },
      chartData: {
        type: Array,
        default: function () {
          return []
        }
      },
      chartTime: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    methods: {
      chartsInit () {
        if (document.getElementById(this.chartId)) {
          this.chartInstance = echarts.init(document.getElementById(this.chartId))
          this.chartOption.xAxis.data = this.chartTime
          this.chartOption.series = this.chartData
          this.chartInstance.setOption(this.chartOption)
        }
      }
    },
    mounted () {
      this.chartsInit()
    }
  }
</script>
