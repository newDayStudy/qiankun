<template>
  <a-layout class="slide">
    <a-layout-sider class="slide">
      <a-menu
        :default-selected-keys="['v-dashboard']"
        :open-keys.sync="openKeys"
        mode="inline"
        @click="handleClick"
        class="slide-menu"
      >
        <a-menu-item key="v-dashboard">
          <a-icon type="home" /><span>控制台</span>
        </a-menu-item>
        <a-sub-menu key="sub2">
          <span slot="title"><a-icon type="user" /><span>用户管理</span></span>
          <a-menu-item key="v-user">
            用户列表
          </a-menu-item>
          <a-menu-item key="v-role">
            角色列表
          </a-menu-item>
        </a-sub-menu>
		<a-menu-item key="v-application">
			<a-icon type="appstore" />子应用管理
		</a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout class="content">
      <a-layout-content class="main">
          <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      current: ['v-dashboard'],
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
      if (this.$route.name == e.key) return
      this.$router.push({name: e.key})
    }
  },
};
</script>

<style scoped>
.slide, .slide-menu, .content{
  height: 100%;
}
.content{
  padding: 15px;
  overflow-y: auto;
}
.main{
  background-color: #fff;
  padding: 20px;
}
</style>
