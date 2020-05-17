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
    if (!state.created_at) {
      state.created_at = new Date()
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
  async obtainId ({ commit, state, dispatch }) {
    try {
      const user = await this.$axios.$get(`/users/${state.name}`)
      commit('setId', user.id)
    } catch (e) {
      await dispatch('createUser')
    }
  },
  async setUser ({ commit, dispatch, state }, userName) {
    if (state.name) {
      throw new Error('Un utilisateur a déjà été paramétré')
    } else if (userName) {
      commit('setName', userName)
      await dispatch('obtainId')
    } else {
      await dispatch('createUser')
    }
  },
  async createUser ({ commit, state }) {
    const oldName = state.name
    commit('setName')
    const user = await this.$axios.$post('/users', {
      name: state.name,
      old_name: oldName,
      created_at: state.created_at
    })
    commit('setId', user.id)
  },
  async save ({ commit, state, dispatch }, data) {
    commit('data', data)
    if (!state.name) {
      await dispatch('setUser')
    }
  },
  async store ({ state }) {
    await this.$axios.$put(`/users/${state.id}`, state)
  },
  async submit ({ commit, dispatch, state }, { type, date, data }) {
    if (!state.id) {
      await dispatch('obtainId')
    }
    if (type === 'initial') {
      commit(type, data)
    } else {
      commit(type, date)
    }
  }
}
