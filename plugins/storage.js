import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      key: 'user',
      paths: ['user']
    })(store)
    createPersistedState({
      key: 'day',
      paths: ['day']
    })(store)
  })
}
