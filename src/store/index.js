import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  user: {id: 0, name: 'test user', edit: false},
  members: [],
  lastUserId: '',
  dashboard: [
    {
      title: 'KEEP',
      items: []
    },
    {
      title: 'PROBLEM',
      items: []
    },
    {
      title: 'TRY',
      items: []
    }
  ]
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
