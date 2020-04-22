import Vue from 'vue'
import { openDB } from 'idb'

Vue.use({
  install (Vue, options) {
    Vue.db = openDB('reports', 2, {
      upgrade (db) {
        db.createObjectStore('daily', {
          keyPath: 'date'
        })
        db.createObjectStore('weekly', {
          keyPath: 'date'
        })
      }
    })

    Vue.prototype.$db = {
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
      }
    }
  }
})
