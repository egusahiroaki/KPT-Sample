import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  user: {id: 0, name: 'test user', edit: false},
  members: [
    {id: 1, name: 'test userA', edit: false},
    {id: 2, name: 'test userB', edit: false}
  ],
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

const ADD_MEMBER = 'ADD_MEMBER'
const DELETE_MEMBER = 'DELETE_MEMBER'

const ADD_ITEMS = 'ADD_ITEMS'
const DELETE_ITEM = 'DELETE_ITEM'

const actions = {
  // add item
  add: ({ commit }, { items }) => {
    commit(ADD_ITEMS, { items })
  },
  delete: ({ commit }, { label, item }) => {
    commit(DELETE_ITEM, { label, item })
  },
  // add member
  addMember: ({ commit }, { member }) => {
    commit(ADD_MEMBER, { member })
  },

  deleteMember: ({ commit }, { member }) => {
    commit(DELETE_MEMBER, { member })
  }
}

const mutations = {
  [ADD_ITEMS] (state, { items }) {
    items.forEach((item) => {
      state.dashboard.map(elm => {
        if (elm.title === item.type) {
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
  },
  [ADD_MEMBER] (state, { member }) {
    if (member.id === 0) {
      this.state.user = member
    }
    // members
    if (member.id !== 0) {
      this.state.members.forEach((m) => {
        if (m.id === member.id) {
          m = member
        }
      })
    }
  }
}

const getters = {
  getDashboard: state => state.dashboard,
  getAllPeople: state => {
    let all = []
    all.push(state.user)
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
