export const state = () => ({
  id: null,
  space: null,
  // people: {
  //   number: null,
  //   body: null
  // },
  peopleNumber: null,
  peopleBody: null,
  moral: null,
  // provisions: {
  //   number: null,
  //   body: null
  // }
  provisionsNumber: null,
  provisionsBody: null
})

export const mutations = {
  init (state, data) {
    state = Object.assign(state, data)
    if (!state.id) {
      state.id = Math.random().toString(36).substr(2, 9)
    }
  },
  setId (state, userId) {
    if (state.id) {
      throw new Error('Un utilisateur a déjà été paramétré')
    }
    state.id = userId
  },
  update (state, userId) {
    // tt
  }
}
