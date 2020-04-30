import Vue from 'vue'
import { openDB } from 'idb'

Vue.use({
  install (Vue, options) {
    Vue.db = openDB('reports', 3, {
      upgrade (db, oldVersion) {
        if (oldVersion < 1) {
          db.createObjectStore('daily', {
            keyPath: 'date'
          })
          db.createObjectStore('weekly', {
            keyPath: 'date'
          })
        }
        if (oldVersion < 3) {
          db.createObjectStore('stories', {
            keyPath: 'date'
          })
        }
      }
    })

    Vue.prototype.$db = {
      daily: {
        async get (key) {
          if (!key) {
            key = new Date((new Date()).toDateString())
          }
          return (await Vue.db).get('daily', key)
        },
        async add (val) {
          val.date = new Date((new Date()).toDateString())
          return (await Vue.db).put('daily', val)
        },
        async delete (key) {
          return (await Vue.db).delete('daily', key)
        },
        async clear () {
          return (await Vue.db).clear('daily')
        },
        async keys () {
          return (await Vue.db).getAllKeys('daily')
        },
        async getAll () {
          return (await Vue.db).getAll('daily')
        }
      },
      weekly: {
        async get (key) {
          if (!key) {
            key = new Date((new Date()).toDateString())
          }
          return (await Vue.db).get('weekly', key)
        },
        async add (val) {
          val.date = new Date((new Date()).toDateString())
          return (await Vue.db).put('weekly', val)
        },
        async delete (key) {
          return (await Vue.db).delete('weekly', key)
        },
        async clear () {
          return (await Vue.db).clear('weekly')
        },
        async keys () {
          return (await Vue.db).getAllKeys('weekly')
        }
      },
      stories: {
        async get (key) {
          if (!key) {
            throw new Error('Date required')
          }
          return (await Vue.db).get('stories', key)
        },
        async add (val) {
          val.date = new Date()
          return (await Vue.db).put('stories', val)
        },
        async delete (key) {
          return (await Vue.db).delete('stories', key)
        },
        async clear () {
          return (await Vue.db).clear('stories')
        },
        async keys () {
          return (await Vue.db).getAllKeys('stories')
        },
        async getAll () {
          return (await Vue.db).getAll('stories')
        }
      }
    }
  }
})
