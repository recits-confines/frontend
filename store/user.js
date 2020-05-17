export const state = () => ({
  id: null,
  name: null,
  lastDaily: null,
  lastWeekly: null,

  created_at: null,
  carnet_location: null,
  carnet_country: null,
  usual_location: null,
  usual_country: null,
  nationality: null,
  job_title: null,
  job_week_hours: null,

  initial: {}
})

export const mutations = {
  setId (state, userId) {
    state.id = userId
  },
  setName (state, userName) {
    if (userName) {
      state.name = userName
    } else {
      state.name = Math.random().toString(36).substr(2, 9)
    }
  },
  data (state, data) {
    state = Object.assign(state, data)
  },
  initial (state, data) {
    state.initial = data
  },
  daily (state, date) {
    state.lastDaily = date
  },
  weekly (state, date) {
    state.lastWeekly = date
  }
}

export const actions = {
  async obtainId ({ commit, state }) {
    let user
    try {
      user = await this.$axios.$get(`/users/${state.name}`)
    } catch (e) {
      const oldName = state.name
      commit('setName')
      user = await this.$axios.$post('/users', {
        name: state.name,
        old_name: oldName
      })
    }
    commit('setId', user.id)
  },
  async setUser ({ commit, dispatch, state }, userName) {
    if (state.name) {
      throw new Error('Un utilisateur a déjà été paramétré')
    }
    commit('setName', userName)
    await dispatch('obtainId')
  },
  save ({ commit, state, dispatch }, data) {
    if (!state.name) {
      dispatch('setUser')
    }
    commit('data', data)
  },
  async store ({ state, dispatch, rootState }) {
    await this.$axios.$put(`/users/${state.id}`, state)
  },
  submit ({ commit, dispatch, state }, { type, date, data }) {
    if (!state.id) {
      dispatch('obtainId')
    }
    if (type === 'initial') {
      commit(type, data)
    } else {
      commit(type, date)
    }
  }
}
