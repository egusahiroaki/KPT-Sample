<template>
  <div style='width:300px;'>
    <el-form :model="form" label-width="120px">

      <el-form-item label="Type">
        <el-select v-model="form.target" placeholder="Select">
          <el-option label="KEEP" value="KEEP"></el-option>
          <el-option label="PROBLEM" value="PROBLEM"></el-option>
          <el-option label="TRY" value="TRY"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="Idea">
        <el-input v-model="form.content"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button @click="onSubmit">Primary Button</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
export default {
  name: 'User',
  data () {
    return {
      form: {
        target: '',
        content: ''
      }
    }
  },
  methods: {
    onSubmit () {
      // this.$nextTick(() => {
      this.$store.dispatch('add', {
        item: this.form
      })
      this.form.target = ''
      this.form.content = ''
      // })
    }
  }
}
</script>
<style scoped>
</style>
