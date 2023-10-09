<script>
export default {
  name: "vFormInput",
  props: {
    value: String
  },
  data() {
    return {
      model:  this.modelValue
    }
  },
  methods: {
    onblur(e) {
      this.$emit('input', e.target.value)
      this.$parent.$emit('validate')
    }
  }
}
</script>

<template>
  <div>
    <input v-model="model" @blur="onblur">
  </div>
</template>

<style scoped>

</style>
