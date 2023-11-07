<template>
	<div>
    <a-form :model="form" layout="inline" class="search-form">
      <a-form-item label="应用编码">
        <a-input v-model="form.code" placeholder="请输入"/>
      </a-form-item>
      <a-form-item label="应用名称">
        <a-input v-model="form.name" placeholder="请输入"/>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" style="margin-right: 10px;">查询</a-button>
        <a-button>新增</a-button>
      </a-form-item>
    </a-form>
    <a-table row-key="code"  bordered  :columns="columns" :data-source="data" size="middle"></a-table>
	</div>
</template>

<script>
export default {
  data( ) {
    return {
      form: {},
      data: [{
        code: 'VueMicroApp',
        name: 'Vue',
        entry: 'http://localhost:10200',
        activeRule: '/microApp/vue'
      },{
        code: "ReactMicroApp",
        name: 'React',
        entry: 'http://localhost:10300',
        activeRule: "/microApp/react",
      }],
      columns: [{
        title: '应用编码',
        dataIndex: 'code'
      },{
        title: '应用名称',
        dataIndex: 'name'
      },{
        title: '应用入口',
        dataIndex: 'entry'
      },{
        title: '应用规则',
        dataIndex: 'activeRule'
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
