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
  // items [{user: '', type: '', title: ''}, {user: '', type: '', title: ''}]
  [ADD_ITEMS] (state, { items }) {
    items.forEach((item) => {
      console.log(item)
      state.dashboard.map(elm => {
        if (elm.title === item.type) {
          elm.items.push({title: item.title, userId: item.userId})
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
  getDashboard: state => {
    const keepBoardItems = state.dashboard[0].items.map((item) => {
      if (item.userId === 0) {
        item.user = state.user
      }

      if (item.userId !== 0) {
        item.user = state.members.find(member => item.userId === member.id)
      }
      return item
    })

    const problemBoardItems = state.dashboard[1].items.map((item) => {
      if (item.userId === 0) {
        item.user = state.user
      }

      if (item.userId !== 0) {
        item.user = state.members.find(member => item.userId === member.id)
      }
      return item
    })

    const tryBoardItems = state.dashboard[2].items.map((item) => {
      if (item.userId === 0) {
        item.user = state.user
      }

      if (item.userId !== 0) {
        item.user = state.members.find(member => item.userId === member.id)
      }
      return item
    })

    let dashboardReplacedByUser = []
    dashboardReplacedByUser.push({title: 'KEEP', items: keepBoardItems})
    dashboardReplacedByUser.push({title: 'PROBLEM', items: problemBoardItems})
    dashboardReplacedByUser.push({title: 'TRY', items: tryBoardItems})
    return dashboardReplacedByUser
  },
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
