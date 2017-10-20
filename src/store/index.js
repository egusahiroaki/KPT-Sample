import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  list: [
    { id: 1, title: 'title-1' },
    { id: 2, title: 'title-2' },
    { id: 3, title: 'title-3' },
    { id: 4, title: 'title-4' },
    { id: 5, title: 'title-5' }
  ]
}

const actions = {
  done ({ state, commit }) {
    // state.routeでアクセス可能
    console.log('actions:', state.route.params.id)
    commit('done')
  }
}

const mutations = {
  done (state) {
    // state.routeでアクセス可能
    console.log('mutations:', state.route.params.id)
  }
}

const getters = {
  list: state => state.list,
  detail: state => {
    // state.routeでアクセス可能
    return state.list.find(l => l.id.toString() === state.route.params.id.toString()) || {}
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
