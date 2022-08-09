<template>
  <a-config-provider prefixCls="cns">
    <section id="cns-main-app">
      <section class="cns-menu-wrapper">
        <a-menu
          style="width: 256px"
          mode="inline"
          theme="dark"
        >
          <a-sub-menu v-for="item in menus" :key="item.key" @titleClick="titleClick(item)">
            <span slot="title"><a-icon type="mail" /><span>{{ item.title }}</span></span>
          </a-sub-menu>
        </a-menu>
      </section>
      <section class="cns-frame-wrapper">
        <!-- 主应用渲染区，用于挂载主应用路由触发的组件 -->
        <router-view v-show="$route.name" />

        <!-- 子应用渲染区，用于挂载子应用节点 -->
        <section v-show="!$route.name" id="frame"></section>
      </section>
    </section>
  </a-config-provider>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          key: "Home",
          title: "主应用",
          path: "/"
        },
        {
          key: "VueMicroApp",
          title: "Vue微应用",
          path: "/microApp/vue"
        },
        {
          key: "ReactMicroApp",
          title: "React微应用",
          path: "/microApp/react"
        }
      ]
    }
  },
  methods: {
    titleClick(router){
      this.$router.push(router.path)
    }
  }
}
</script>

<style lang="css" scoped>
#cns-main-app {
  height: 100%;
  position: relative;
}
  
.cns-nav-wrapper {
    position: fixed;
    width: 100%;
    min-width: 1060px;
    padding-left: 172px;
    left: 0;
    top: 0;
    z-index: 30;
  }
.cns-menu-wrapper {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 40;
    width: 172px;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #001529;
  }
.cns-frame-wrapper {
  padding-left: 172px;
  flex-grow: 1;
  height: 100%;
  width: 100%;
  position: relative;
}

#cns-frame {
  width: 100%;
  height: 100%;
}
#cns-frame:first-child {
    height: 100%;
  }
</style>