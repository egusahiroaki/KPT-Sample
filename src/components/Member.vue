<template>
  <div>
      <ul v-for='(elm, index) in people'>
        <li>
          <div v-if="!elm.edit" class="display" v-text="elm.name" @click="elm.edit = true"></div>
          <input  v-if="elm.edit" type="text" v-model="elm.name" @keyup.enter="edit(elm)" v-on:blur="elm.edit = false; isButtonDisabled = false" ref="textInput" v-focus @input='isButtonDisabled = true'/>
        </li>
        <li v-if="index === people.length - 1">
          <el-button :disabled="isButtonDisabled" size="mini" class="delete" icon="plus" @click="addMemberForm"></el-button>
        </li>

      </ul>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Vue from 'vue'
const focus = {
  inserted (el) {
    Vue.nextTick(function () {
      el.focus()
    })
  }
}

export default {
  name: 'Member',
  data () {
    return {
      isButtonDisabled: false
    }
  },
  computed: mapGetters({
    people: 'getAllPeople',
    lastUserId: 'getLastUserId'
  }),
  methods: {
    edit (member) {
      member.edit = !member.edit

      // if no name, create dummy name
      if (member.name === '') {
        member.name = 'dummy name'
      }
      this.$store.dispatch('editMember', {
        member: member
      })
    },
    addMemberForm () {
      // add empty user
      const nextUserId = this.lastUserId + 1
      this.$store.dispatch('addMember', {
        member: {id: nextUserId, name: '', edit: true}
      })
    }
  },
  directives: {
    focus
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
