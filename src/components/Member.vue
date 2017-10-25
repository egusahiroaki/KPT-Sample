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
    people: 'getAllPeople'
  }),
  methods: {
    edit (member) {
      member.edit = !member.edit
      this.$store.dispatch('editMember', {
        member: member
      })
    },
    addMemberForm () {
      // add empty user
      this.$store.dispatch('addMember', {
        member: {id: 100, name: '', edit: true}
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
