<script>
import * as echarts from 'echarts'
import china from '@/assets/china.json'
console.log('china', china)
export default {
  name: "v-map",
  mounted(){
    echarts.registerMap('china', {geoJSON: china})
    const chart = echarts.init(document.querySelector('#map'), null, {renderer: 'svg'})
    chart.setOption({
      geo: {
        map: 'china',
        label: {
          show: true,
          position: 'left'
        }
        // itemStyle: {
        //   areaColor: {
        //     type: 'linear',
        //     x: 0,
        //     y: 0,
        //     x2: 0,
        //     y2: 1,
        //     colorStops: [{
        //       offset: 0, color: 'rgba(0, 186, 255, 0.8)' // 0% 处的颜色
        //     }, {
        //       offset: 1, color: 'rgba(0, 186, 255, 1)' // 100% 处的颜色
        //     }]
        //   }
        // },
      },
    })
  }
}
</script>

<template>
  <div id="map"></div>
</template>

<style scoped>
#map{
  width: 100%;
  height: 500px;
}
</style>
