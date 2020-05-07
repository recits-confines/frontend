export const state = () => ({
  date: null,
  answers: {}
})

export const mutations = {
  init (state, data) {
    const date = data ?? new Date((new Date()).toDateString())
    if (state.date !== date) {
      state.answers = {}
    }
    state.date = date
  },
  set (state, answers) {
    state.answers = Object.assign(state.answers, answers)
  }
}
