<template>
  <div class="hello">
    <v-form :model="form" :rules="rules" ref="ruleForm">
      <a-row>
        <a-col>
          <v-form-item label="姓名" prop="username">
            <v-form-input v-model="form.username"/>
          </v-form-item>
        </a-col>
      </a-row>
      <v-form-item label="密码" prop="password">
        <v-form-input v-model="form.password"/>
      </v-form-item>
      <v-form-item>
        <a-button @click="submit">提交</a-button>
      </v-form-item>
    </v-form>
  </div>
</template>

<script>
import vForm from '@/components/form/index.vue'
import vFormItem from '@/components/form/src/form-item.vue'
import vFormInput from '@/components/form/src/form-input.vue'
export default {
  name: 'HelloWorld',
  components: {vForm, vFormItem, vFormInput},
  data(){
    return {
      form: {},
      rules: {
        username: [{required: true, message: '姓名不能为空'}],
        password: [{required: true, message: '密码不能为空'}]
      }
    }
  },
  methods: {
    submit() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          console.log('验证通过')
        } else {
          console.log('验证失败')
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
</style>
