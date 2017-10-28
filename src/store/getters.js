export const initailState = state => state

export const getDashboard = state => {
  console.log('getdashstate')
  console.log(state.dashboard)
  console.log(state.dashboard[0])

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

  console.log('dashboardReplacedByUser')
  console.log(dashboardReplacedByUser)
  return dashboardReplacedByUser
}

export const getAllPeople = state => {
  let all = []
  all.push(state.user)
  state.members.forEach((elm) => all.push(elm))
  console.log('all')
  console.log(all)
  return all
}

export const getLastUserId = state => {
  return state.lastUserId
}
