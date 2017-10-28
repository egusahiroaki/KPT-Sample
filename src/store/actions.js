import * as types from './mutation-types'
import * as api from '../api/mock-data'

export const getInitialData = ({commit}) => {
  api.get(d => {
    commit(types.RECEIVE_ALL, { d })
  })
}

// add item
export const add = ({ commit }, { items }) => {
  commit(types.ADD_ITEMS, { items })
}

export const deleteItem = ({ commit }, { label, item }) => {
  commit(types.DELETE_ITEM, { label, item })
}

// add member
export const addMember = ({ commit }, { member }) => {
  commit(types.ADD_MEMBER, { member })
}

export const editMember = ({ commit }, { member }) => {
  commit(types.EDIT_MEMBER, { member })
}

export const deleteMember = ({ commit }, { member }) => {
  commit(types.DELETE_MEMBER, { member })
}

export const hasDashboardItem = ({ commit, state }, { user }) => {
  return state.dashboard.some((elm) => {
    return elm.items.some((item) => item.userId === user.id)
  })
}
