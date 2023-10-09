<template>
  <a-config-provider prefixCls="cns">
    <section id="cns-main-app">
      <section class="cns-menu-wrapper">
        <span class="title">Qian Kun</span>
        <a-menu
          theme="dark"
          mode="horizontal"
          v-model="selectedKeys"
        >
          <a-menu-item v-for="item in menus" :key="item.key">
            <span><a-icon type="mail" /><span>{{ item.title }}</span></span>
          </a-menu-item>
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
          title: "控制面板",
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
      ],
      selectedKeys: ['Home']
    }
  },
  watch: {
    selectedKeys: {
      deep: true,
      handler (v) {
        const route = this.menus.find(item => item.key == v)
        if (this.$route.fullPath == route.path) return
        this.$router.push(route.path)
      },
      immediate: true
    }
  }
}
</script>

<style lang="css">
#cns-main-app {
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.cns-menu-wrapper {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    background-color: #001529;
}
.cns-menu-wrapper span.title{
  padding: 0 40px;
  color: #fff;
}
.cns-frame-wrapper {
  flex: 1;
}

#frame{
  height: 100%;
}
#frame div:first-child{
  height: 100%;
}
</style>
