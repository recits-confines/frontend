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
    commit('date', new Date())
  },
  save ({ commit, state }, data) {
    commit('data', Object.assign(state.data, data))
  },
  async store ({ state, dispatch, rootState }) {
    await dispatch('user/submit', { ...state }, { root: true })
    if (state.type === 'daily') {
      state.date = new Date(state.date.toDateString())
    } else if (state.type === 'weekly') {
      state.date = new Date(new Date(state.date.setDate(state.date.getDate() + 7 - state.date.getDay())).toDateString())
    } else if (state.type === 'initial') {
      state.date = rootState.user.created_at
    }
    if (state.type !== 'initial') {
      await this._vm.$db[state.type].add(state)
    }
    await this.$axios.$post('/reports', {
      user_id: rootState.user.id,
      ...state
    })
    await dispatch('init', null)
  }
}
