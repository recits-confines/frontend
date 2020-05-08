export const state = () => ({
  isLoaded: false
})

export const mutations = {
  loaded (state) {
    state.isLoaded = true
  }
}
