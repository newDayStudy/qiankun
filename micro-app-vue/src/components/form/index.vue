<script>
export default {
  name: 'vForm',
  props: {
    model: {
      type: Object,
      default: () => {}
    },
    rules: {
      type: Object,
      default: () => {}
    }
  },
  provide(){
    return {
      form: this
    }
  },
  data() {
    return {
      instances: []
    }
  },
  methods: {
    add(instance) {
      this.instances.push(instance)
    },
    validate(cb) {
      const tasks = this.instances.map(instance => instance.validate())
      Promise.all(tasks).then(() => cb(true)).catch(() => cb(false))
    }
  }
}
</script>

<template>
  <div>
    <slot/>
  </div>
</template>

<style scoped>

</style>
