import { expect } from 'chai'
import * as mutations from '../../../../src/store/mutations'

describe('mutations test', () => {
  it('DELETE_MEMBER', () => {
    // state mock
    const state = { members: [{ id: 1 }, { id: 2 }] }
    const member = {id: 1}

    mutations.default.DELETE_MEMBER(state, { member })

    expect(state.members.length).to.equal(1)
  })
})
