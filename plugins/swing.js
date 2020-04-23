import Vue from 'vue'
import { Card, Stack, Direction } from 'swing'

Vue.use({
  install (Vue, options) {
    Vue.prototype.$swing = {
      Card,
      Stack,
      Direction
    }
  }
})
