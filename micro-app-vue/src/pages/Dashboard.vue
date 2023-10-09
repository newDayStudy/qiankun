<script>
import * as echarts from 'echarts'
export default {
  name: "dashBoard",
  mounted() {
    const chart = echarts.init(document.querySelector('#chart'))
    chart.setOption({
      title: {
        text: '自定义图表'
      },
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
        axisTick: {
          show: false
        }
      },
      yAxis: {
        min:0,
        scale: true
      },
      tooltip: {
        trigger: 'item'
      },
      series: [
        {
          type: 'custom',
          data: [5, 20, 36, 10, 15, 20],
          renderItem: function (params, api){
            const size = api.size([0, api.value(1)])
            const point = api.coord([api.value(0), api.value(1)]);
            return {
              type: 'rect',
              shape: {
                x: point[0] - size[0] / 4,
                y: point[1],
                width: size[0] / 2,
                height: size[1]
              },
              style: {
                fill: 'rgb(84, 112, 198)'
              }
            };
          },
          encode: {
            x: [0],
            y: 1,
          },
          label: {
            show: true,
            position: 'top'
          }
        },
        {
          type: 'line',
          data: [5, 20, 36, 10, 15, 20],
          lineStyle: {
            width: 1
          }
        }
      ]
    })
  }
}
</script>

<template>
  <div>
    <div id="chart" style="width: 400px;height: 300px"></div>
  </div>
</template>

<style lang="less" scoped>

</style>
