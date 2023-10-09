<script>
import Schema from 'async-validator';
export default {
  name: 'vFormItem',
  props: {
    label: String,
    prop: String
  },
  inject: ['form'],
  data(){
    return {
      errorMsg: ''
    }
  },
  created() {
    if (this.prop) {
      this.form.add(this)
    }
  },
  mounted () {
    this.$on('validate', () => {
      this.validate()
    })
  },
  methods:{
    validate() {
      const rules = this.form.rules[this.prop]
      const value = this.form.model[this.prop]
      const schema = new Schema({[this.prop]: rules})
      // 3.执行校验，校验对象, 回掉函数
      return schema.validate({[this.prop]: value}, (errors) => {
        if (errors) {
          this.errorMsg = errors[0].message
        } else {
          this.errorMsg = ''
        }
      })
    }
  }
}
</script>

<template>
  <div style="margin-bottom: 10px">
    <span v-if="label">{{label}}</span>
    <div style="display: flex;align-items: center;">
      <slot />
      <p v-if="errorMsg" style="color:#f00;margin-left:10px;margin-bottom:0;">{{errorMsg}}</p>
    </div>
  </div>
</template>

<style scoped>

</style>
