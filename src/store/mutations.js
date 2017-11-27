import * as types from './mutation-types'

export default {
  [types.RECEIVE_ALL] (state, { data }) {
    data.members.forEach(member => {
      state.members.push(member)
    })

    state.lastUserId = data.lastUserId

    data.dashboard.forEach(elm => {
      if (elm.title === 'KEEP') {
        elm.items.forEach(item => state.dashboard[0].items.push(item))
      }
      if (elm.title === 'PROBLEM') {
        elm.items.forEach(item => state.dashboard[1].items.push(item))
      }
      if (elm.title === 'TRY') {
        elm.items.forEach(item => state.dashboard[2].items.push(item))
      }
    })
  },

  [types.ADD_ITEM] (state, { item }) {
    // state.dashboard.map(elm => {
    //   if (elm.title === item.type) { // keep, problem, tryとiterationを回し、一致するものを移動させている。
    //     elm.items.push({title: item.title, userId: item.userId})
    //   }
    // })
    console.log('[ADD_ITEM] item')
    console.log(item)
    if (item.type === 'KEEP') {
      state.dashboard[0].items.push({title: item.title, userId: item.userId})
    }
    if (item.type === 'PROBLEM') {
      state.dashboard[1].items.push({title: item.title, userId: item.userId})
    }
    if (item.type === 'TRY') {
      state.dashboard[2].items.push({title: item.title, userId: item.userId})
    }
  },

  [types.ADD_ITEMS] (state, { items }) {
    items.forEach((item) => {
      console.log('[ADD_ITEMS] item')
      console.log(item)
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
      console.log('[DELETE_ITEM] label.title')
      console.log(elm.title)
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
