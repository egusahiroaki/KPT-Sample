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
}

const mutations = {
}

const getters = {
  getAll: state => state.list
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
