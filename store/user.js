export const state = () => ({
  id: null,
  space: null,
  people: {
    number: null,
    description: null
  }
})

export const mutations = {
  init (state, data) {
    if (state.id) {
      throw new Error('Un utilisateur a déjà été paramétré')
    }
    state.id = Math.random().toString(36).substr(2, 9)
    // state = Object.assign(state, data)
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
