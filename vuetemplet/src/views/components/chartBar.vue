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
          color: ['#3398DB'],
          tooltip: {},
          xAxis: {
            data: []
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: []
          }]
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
      chartCountry: {
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
          this.chartOption.xAxis.data = this.chartCountry
          this.chartOption.series[0].data = this.chartData
          this.chartInstance.setOption(this.chartOption)
        }
      }
    },
    mounted () {
      const that = this
      // 这里一定要加延时，不然由于2.0生命周期的关系，数据还没过来图会先渲染
      window.setTimeout(function () {
        that.chartsInit()
      }, 3000)
    }
  }
</script>
