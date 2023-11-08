<template>
  <div>
    <a-form :model="form" layout="inline" class="search-form">
      <a-form-item label="用户名">
        <a-input v-model="form.username" placeholder="请输入"/>
      </a-form-item>
      <a-form-item label="用户身份">
        <a-select v-model="form.role_id" placeholder="请选择" style="width: 120px">
          <a-select-option :value="1">管理员</a-select-option>
          <a-select-option :value="2">游客</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" style="margin-right: 10px;">查询</a-button>
        <a-button>新增</a-button>
      </a-form-item>
    </a-form>
    <a-table row-key="id" bordered  :columns="columns" :data-source="data" size="middle">
      <template slot="action">
        <a-button type="link" @click="visible=true">
          配置角色
        </a-button>
        <a-button type="link" @click="application = true">
          配置子应用
        </a-button>
      </template>
    </a-table>
    <a-modal
      title="配置角色"
      :visible="visible"
      @cancel="visible = false"
      @ok="visible=false"
    >
      <a-form layout="inline">
        <a-form-item label="角色">
          <a-select v-model="role" style="width: 200px;">
            <a-select-option :value="1">管理员</a-select-option>
            <a-select-option :value="2">游客</a-select-option>
          </a-select>
        </a-form-item>
      </a-form>
    </a-modal>
    <a-modal
        :visible="application"
        title="配置子应用"
        @cancel="application = false"
        @ok="application=false"
    >
      <a-tree
          v-model="checkedKeys"
          checkable
          :auto-expand-parent="true"
          :tree-data="treeData"
      />
    </a-modal>
  </div>
</template>

<script>
export default {
  data( ) {
    return {
      visible: false,
      application: false,
      role: '',
      form: {},
      checkedKeys: [],
      treeData: [{
        key: 'VueMicroApp',
        title: 'Vue',
        entry: 'http://localhost:10200',
        activeRule: '/microApp/vue'
      },{
        key: "ReactMicroApp",
        title: 'React',
        entry: 'http://localhost:10300',
        activeRule: "/microApp/react",
      }],
      data: [{
        id: 1,
        username: '张三',
        role_name: '游客'
      },{
        id: 2,
        username: 'admin',
        role_name: '管理员'
      }],
      columns: [{
        title: '用户ID',
        dataIndex: 'id'
      },{
        title: '用户名',
        dataIndex: 'username'
      },{
        title: '用户身份',
        dataIndex: 'role_name'
      },{
        title: '操作',
        dataIndex: 'action',
        scopedSlots: {customRender: 'action'}
      }]
    }
  }
}
</script>

<style scoped>
.search-form{
  margin-bottom: 10px;
}
</style>
