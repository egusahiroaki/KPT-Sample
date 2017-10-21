<template>
  <div>
      <ul v-for='(elm, index) in people'>
        <li>
          {{elm.name}}
<!-- 
          <div v-if="!elm.edit" class="display" v-text="elm.name" @click="elm.edit = true"></div>
          <input v-if="elm.edit" type="text" v-model="elm.name" ref="textInput" @keyup.enter="submit(elm)" />
 -->
        </li>
      </ul>

    <div>
      <el-button @click="submit">Primary Button</el-button>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Member',
  data () {
    return {
      members: [] // {id: 0, name: 'test user', edit: false},
    }
  },
    // membersAddedEditState () {
    //   console.log('aaa')
    //   this.getAllPeople.forEach((member) => {
    //     member.edit = false
    //     this.members.push(member)
    //   })
    //   return this.members
    // }
  computed: mapGetters({
    people: 'getAllPeople'
  }),
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
