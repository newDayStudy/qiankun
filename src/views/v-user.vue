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
        <a-button type="link">
          配置角色
        </a-button>
        <a-button type="link">
          配置子应用
        </a-button>
      </template>
    </a-table>
  </div>
</template>

<script>
export default {
  data( ) {
    return {
      form: {},
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
