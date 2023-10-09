<template>
  <div id="app">
    <a-config-provider :locale="zh_CN" prefixCls="yourPrefix">
      <router-view></router-view>
    </a-config-provider>
  </div>
</template>

<script>
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN';
// import moment from 'moment';
import 'moment/locale/zh-cn';
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      zh_CN,
    };
  },
  mounted(){
    // console.log(this.$route)
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
</style>
