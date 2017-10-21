<template>
  <div>
      <ul v-for='(elm, index) in members'>
        <li>
          <div v-if="!elm.edit" class="display" v-text="elm.name" @click="elm.edit = true"></div>
          <input v-if="elm.edit" type="text" v-model="elm.name" ref="textInput" @keyup.enter="submit(elm)" />
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
      members: [
        {name: 'test user', edit: false},
        {name: 'test userA', edit: false},
        {name: 'test userB', edit: false}
      ]
    }
  },
  methods: {
    submit (member) {
      member.edit = !member.edit
    }
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
