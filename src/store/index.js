import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  username: 'test user',
  dashboard: [
    {
      title: 'KEEP',
      items: [
        {title: 'keep1', name: 'test user', createdAt: ''},
        {title: 'keep2', name: 'test user', createdAt: ''}
      ]
    },
    {
      title: 'PROBLEM',
      items: [
        {title: 'problem1', name: 'test user', createdAt: ''},
        {title: 'problem2', name: 'test user', createdAt: ''}
      ]
    },
    {
      title: 'TRY',
      items: [
        {title: 'try1', name: 'test user', createdAt: ''},
        {title: 'try2', name: 'test user', createdAt: ''}
      ]
    }
  ]
}

const actions = {
}

const mutations = {
}

const getters = {
  getDashboard: state => state.dashboard
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
