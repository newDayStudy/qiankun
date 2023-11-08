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
        <a-button type="link" size="small" @click="visible = true">
          菜单权限
        </a-button>
      </template>
    </a-table>
    <a-modal
        :visible="visible"
        title="菜单权限"
        @cancel="visible = false"
        @ok="visible = false"
    >
        <a-tree v-model="checkedKeys" checkStrictly autoExpandParent checkable :tree-data="treeData" :replace-fields="{key:'id',title: 'name'}"></a-tree>
    </a-modal>
  </div>
</template>

<script>
const data = [{"id":1,"name":"首页", pid: 0},{"id":2,"name":"用户管理",pid: 0},{"id":3,"name":"新增用户",pid: 2},{"id":4,"name":"编辑用户",pid: 2},{"id":5,"name":"新闻管理", pid: 0},{"id":6,"name":"新增新闻",pid: 5},{"id":7,"name":"编辑新闻",pid: 5},{"id":8,"name":"新闻分类",pid: 0},{"id":9,"name":"新增分类",pid: 8},{"id":10,"name":"编辑分类",pid: 8}]

const arrToTree = (arr) => {
  let result = []
  arr.forEach(item =>{
    if (!item.pid) {
      result.push(item)
    } else {
      const index = result.findIndex(a => a.id == item.pid)
      if (index > -1) {
        result[index].children = result[index].children || []
        result[index].children.push(item)
      }
    }
  })
  return result
}

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
      }],
      visible: false,
      checkedKeys: [],
      treeData: arrToTree(data)
    }
  }
}
</script>

<style scoped>
.search-form{
  margin-bottom: 10px;
}
</style>
