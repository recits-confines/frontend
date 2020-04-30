import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      key: 'user',
      paths: ['user'],
      fetchBeforeUse: true
    })(store)
    createPersistedState({
      key: 'day',
      paths: ['day']
    })(store)
  })
}
