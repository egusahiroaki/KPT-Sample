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

const ADD_ITEMS = 'ADD_ITEMS'
const DELETE_ITEM = 'DELETE_ITEM'

const actions = {
  add: ({ commit }, { items }) => {
    commit(ADD_ITEMS, { items })
  },
  delete: ({ commit }, { label, item }) => {
    commit(DELETE_ITEM, { label, item })
  }
}

const mutations = {
  [ADD_ITEMS] (state, { items }) {
    items.forEach((item) => {
      state.dashboard.map(elm => {
        if (elm.title === item.type) {
          elm.items.push({title: item.title, name: 'test user'})
        }
      })
    })
  },
  [DELETE_ITEM] (state, { label, item }) {
    let i, j
    state.dashboard.forEach((elm, index) => {
      if (elm.title === label.title) {
        i = index
        j = elm.items.findIndex(e => e.title === item.title)
      }
    })
    state.dashboard[i].items.splice(j, 1)
  }
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
