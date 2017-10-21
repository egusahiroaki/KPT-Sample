import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  username: 'test user',
  members: ['test userA', 'test userB'],
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

const ADD_MEMBERS = 'ADD_MEMBERS'
const DELETE_MEMBER = 'DELETE_MEMBER'

const ADD_ITEMS = 'ADD_ITEMS'
const DELETE_ITEM = 'DELETE_ITEM'

const actions = {
  add: ({ commit }, { items }) => {
    commit(ADD_ITEMS, { items })
  },
  delete: ({ commit }, { label, item }) => {
    commit(DELETE_ITEM, { label, item })
  },

  addMembers: ({ commit }, { members }) => {
    commit(ADD_MEMBERS, { members })
  },

  deleteMember: ({ commit }, { member }) => {
    commit(DELETE_MEMBER, { member })
  }
}

const mutations = {
  [ADD_ITEMS] (state, { items }) {
    items.forEach((item) => {
      console.log(item)
      state.dashboard.map(elm => {
        if (elm.title === item.type) {
          console.log(item.name)
          elm.items.push({title: item.title, name: item.name})
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
  getDashboard: state => state.dashboard,
  getAllPeople: state => {
    let all = []
    all.push(state.username)
    state.members.forEach((elm) => all.push(elm))
    return all
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
