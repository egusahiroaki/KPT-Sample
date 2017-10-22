<template>
  <div>
      <ul v-for='(elm, index) in people'>
        <li>
          <div v-if="!elm.edit" class="display" v-text="elm.name" @click="elm.edit = true"></div>
          <input  v-if="elm.edit" type="text" v-model="elm.name" @keyup.enter="submit(elm)" v-on:blur="elm.edit = false" ref="textInput" v-focus />
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
      members: [] // {id: 0, name: 'test user', edit: false},
    }
  },
  computed: mapGetters({
    people: 'getAllPeople'
  }),
  methods: {
    submit (member) {
      member.edit = !member.edit
      this.$store.dispatch('addMember', {
        member: member
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
