import * as types from './mutation-types'

export default {
  [types.RECEIVE_ALL] (state, { data }) {
    state = data
  },

  [types.ADD_ITEMS] (state, { items }) {
    items.forEach((item) => {
      state.dashboard.map(elm => {
        if (elm.title === item.type) {
          elm.items.push({title: item.title, userId: item.userId})
        }
      })
    })
  },

  [types.DELETE_ITEM] (state, { label, item }) {
    let i, j
    state.dashboard.forEach((elm, index) => {
      if (elm.title === label.title) {
        i = index
        j = elm.items.findIndex(e => e.title === item.title)
      }
    })
    state.dashboard[i].items.splice(j, 1)
  },

  [types.ADD_MEMBER] (state, { member }) {
    this.state.members.push(member)
    this.state.lastUserId++
  },

  [types.EDIT_MEMBER] (state, { member }) {
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
  },

  [types.DELETE_MEMBER] (state, { member }) {
    // delete by id
    const targetUserIndex = state.members.findIndex(elm => elm.id === member.id)
    state.members.splice(targetUserIndex, 1)
  }
}

// export const [RECEIVE_ALL] = (state, { data }) => {
//   state = data
// }

// export const [ADD_ITEMS] = (state, { items }) => {
//   items.forEach((item) => {
//     state.dashboard.map(elm => {
//       if (elm.title === item.type) {
//         elm.items.push({title: item.title, userId: item.userId})
//       }
//     })
//   })
// }

// export const [DELETE_ITEM] = (state, { label, item }) => {
//   let i, j
//   state.dashboard.forEach((elm, index) => {
//     if (elm.title === label.title) {
//       i = index
//       j = elm.items.findIndex(e => e.title === item.title)
//     }
//   })
//   state.dashboard[i].items.splice(j, 1)
// }

// export const [ADD_MEMBER] = (state, { member }) => {
//   this.state.members.push(member)
//   this.state.lastUserId++
// }

// export const [EDIT_MEMBER] = (state, { member }) => {
//   if (member.id === 0) {
//     this.state.user = member
//   }
//   // members
//   if (member.id !== 0) {
//     this.state.members.forEach((m) => {
//       if (m.id === member.id) {
//         m = member
//       }
//     })
//   }
// }

// export const [DELETE_MEMBER] = (state, { member }) => {
//   // delete by id
//   const targetUserIndex = state.members.findIndex(elm => elm.id === member.id)
//   state.members.splice(targetUserIndex, 1)
// }
