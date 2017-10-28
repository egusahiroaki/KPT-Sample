<template>
  <div>
      <ul v-for='(elm, index) in allMembers' :key="elm">

        <li @mouseover='mouseOver($event)' @mouseleave='mouseLeave($event)'>
          <div style="display: inline;" v-if="!elm.edit" class="display" v-text="elm.name" @click="elm.edit = true"></div>
          <input style="display: inline;" v-if="elm.edit" type="text" v-model="elm.name" @keyup.enter="edit(elm)" @focus="isButtonDisabled = true" v-on:blur="elm.edit = false; isButtonDisabled = false" ref="textInput" v-focus @input='isButtonDisabled = true'/>
          <!-- delete button -->
          <el-button class="delete" type="primary" icon="close" size="mini" @click="deleteMember(elm)"></el-button>
        </li>

        <!-- editing form -->
        <li v-if="index === allMembers.length - 1">
          <el-button :disabled="isButtonDisabled" size="mini" class="" icon="plus" @click="addMemberForm"></el-button>
        </li>

      </ul>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

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
    allMembers: 'getAllallMembers',
    lastUserId: 'getLastUserId'
  }),
  methods: {
    ...mapActions({
      hasDashboardItem: 'hasDashboardItem'
    }),
    mouseOver (event) {
      const deleteObj = event.currentTarget.lastElementChild
      if (deleteObj.style !== null) {
        deleteObj.style.display = 'inline-block'
      }
    },
    mouseLeave (event) {
      const deleteObj = event.currentTarget.lastElementChild
      if (deleteObj.style !== null) {
        deleteObj.style.display = 'none'
      }
    },
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
    },
    deleteMember (elm) {
      // check whether this user has the item
      this.hasDashboardItem({ user: elm }).then(isExist => {
        console.log(isExist)
        if (!isExist) { // delete
          this.$store.dispatch('deleteMember', { member: elm })
        } else { // alert
          alert('this user has item')
        }
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

.delete {
  display: none;
  float: right;
}

</style>
