import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

const state = {
  user: {id: 0, name: 'test user', edit: false},
  members: [
    {id: 1, name: 'test userA', edit: false},
    {id: 2, name: 'test userB', edit: false}
  ],
  lastUserId: 2,
  dashboard: [
    {
      title: 'KEEP',
      items: [
        {title: 'keep1', userId: 0, createdAt: ''},
        {title: 'keep2', userId: 1, createdAt: ''}
      ]
    },
    {
      title: 'PROBLEM',
      items: [
        {title: 'problem1', userId: 1, createdAt: ''},
        {title: 'problem2', userId: 2, createdAt: ''}
      ]
    },
    {
      title: 'TRY',
      items: [
        {title: 'try1', userId: 1, createdAt: ''},
        {title: 'try2', userId: 0, createdAt: ''}
      ]
    }
  ]
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
