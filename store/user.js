export const state = () => ({
  id: null
})

export const mutations = {
  setId (state, userId) {
    state.id = userId
  }
}
