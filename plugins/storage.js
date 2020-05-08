import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      key: 'user',
      paths: ['user'],
      fetchBeforeUse: true,
      rehydrated: store => store.commit('loaded')
    })(store)
  })
}
