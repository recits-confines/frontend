import Vue from 'vue'
import VueFormulate from '@braid/vue-formulate'
import { fr } from '@braid/vue-formulate-i18n'

Vue.use(VueFormulate, {
  plugins: [fr],
  locale: 'fr'
})
