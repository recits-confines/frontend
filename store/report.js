export const state = () => ({
  date: null,
  type: null,
  data: {}
})

export const mutations = {
  date (state, date) {
    if (state.date !== date) {
      state.data = {}
    }
    state.date = date
  },
  type (state, type) {
    state.type = type
  },
  data (state, data) {
    state.data = data
  }
}

export const actions = {
  init ({ commit, rootState }, type) {
    commit('type', type)
    switch (type) {
      case 'daily':
        commit('date', new Date(new Date().toDateString()))
        break
      case 'weekly':
        commit('date', new Date(new Date(new Date().setDate(new Date().getDate() - new Date().getDay() + (new Date().getDay() === 0 ? -6 : 1))).toDateString()))
        break
      case 'initial':
        commit('date', rootState.user.created_at)
        break
      default:
        commit('date', new Date())
        break
    }
  },
  save ({ commit, state }, data) {
    commit('data', Object.assign(state.data, data))
  },
  async store ({ state, dispatch, rootState }) {
    await dispatch('user/submit', { ...state }, { root: true })
    if (state.type !== 'initial') {
      await this._vm.$db[state.type].add(state)
    }
    await this.$axios.$post('/reports', {
      user_id: rootState.user.id,
      ...state
    })
    await dispatch('init', null)
  },
  async load ({ state, dispatch }) {
    const date = await this._vm.$db[state.type].get()
    if (!date) {
      return
    }
    dispatch('save', date.data)
  }
}
