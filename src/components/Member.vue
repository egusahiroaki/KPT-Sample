<template>
  <div>
      <ul v-for='(elm, index) in members'>
        <li>
          {{elm}}
        </li>
      </ul>

    <div>
      <el-button @click="onSubmit">Primary Button</el-button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Member',
  data () {
    return {
      members: ['test user', 'test userA', 'test userB']
    }
  },
  methods: {
  }
}
</script>
<style scoped>
.wrapper {
  width: 40%;
  display: inline;
}

.el-col-12 {
  margin-bottom: 20px;
}

</style>
