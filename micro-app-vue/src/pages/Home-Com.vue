<template>
  <a-layout class="s-layout">
    <a-layout-sider theme="light">
      <a-menu
          class="mic-app-vue-menu"
          :default-selected-keys="current"
          :open-keys.sync="openKeys"
          mode="inline"
          @click="handleClick"
      >
        <a-menu-item key="/home">
          <a-icon type="home" />
          首页
        </a-menu-item>
        <a-menu-item key="/home/form">
          <a-icon type="home" />
          表单
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout-content class="mic-app-vue-content">
      <a-card>
        <router-view />
      </a-card>
    </a-layout-content>
  </a-layout>
</template>

<script>
export default{
  mounted() {
    console.log(localStorage.getItem('user'))
  },
  data() {
    return {
      current: ['/home'],
      openKeys: [],
    };
  },
  watch: {
    openKeys(val) {
      console.log('openKeys', val);
    },
  },
  methods: {
    handleClick(e) {
      console.log('click', e);
      this.$router.push(e.key)
    }
  },
}
</script>

<style scoped>
.s-layout{
  height: 100%;
}
.mic-app-vue-menu{
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
.mic-app-vue-content{
  padding: 20px;
  overflow: hidden auto;
}
</style>
