import Vue from 'vue'
import VueFormulate from '@braid/vue-formulate'
import { fr } from '@braid/vue-formulate-i18n'

import EmojiSlider from '@/components/EmojiSlider'

Vue.component('EmojiSlider', EmojiSlider)

Vue.use(VueFormulate, {
  plugins: [fr],
  locale: 'fr',
  library: {
    emojirange: {
      classification: 'slider',
      component: 'EmojiSlider'
    }
  }
})
