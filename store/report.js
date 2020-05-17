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
    let date = new Date()
    if (type === 'daily') {
      date = new Date(date.toDateString())
    } else if (type === 'weekly') {
      date = new Date(new Date(date.setDate(date.getDate() + 7 - date.getDay())).toDateString())
    } else if (type === 'initial') {
      date = rootState.user.created_at
    }
    commit('date', date)
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
  }
}
