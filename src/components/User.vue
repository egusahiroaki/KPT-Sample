<template>
  <div>
    user
  </div>
</template>

<script>
export default {
  name: 'User',
  data () {
    return {
      activeName: 'first',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  method: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style scoped>
</style>
