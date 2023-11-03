<template>
  <div>
    <a-form :model="form" layout="inline" class="search-form">
      <a-form-item label="角色名">
        <a-input v-model="form.role_name" placeholder="请输入"/>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" style="margin-right: 10px;">查询</a-button>
        <a-button>新增</a-button>
      </a-form-item>
    </a-form>
    <a-table row-key="id" bordered  :columns="columns" :data-source="data" size="middle">
      <template slot="action">
        <a-button type="link" size="small">
          配置权限
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
        title: '角色ID',
        dataIndex: 'id'
      },{
        title: '角色名',
        dataIndex: 'role_name'
      },{
        title:'操作',
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
