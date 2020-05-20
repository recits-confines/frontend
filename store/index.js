export const state = () => ({
  isLoaded: false
})

export const mutations = {
  loaded (state) {
    state.isLoaded = true
  }
}

export const actions = {
  async hydrate ({ commit, dispatch }) {
    commit('loaded')
    await dispatch('user/sentry')
  }
}
