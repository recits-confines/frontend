<template>
  <Page title="Mon historique">
    <div class="flex items-center">
      <button
        class="bg-indigo-800 text-white rounded-full p-5"
        @click="swingLeft"
      >
        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 41.93 41.93">
          <rect
            width="55.02"
            height="10.32"
            x="-6.55"
            y="15.8"
            rx="5.16"
            transform="rotate(-45 20.97 20.96)"
          />
          <rect
            width="10.32"
            height="55.02"
            x="15.8"
            y="-6.55"
            rx="5.16"
            transform="rotate(-45 20.97 20.96)"
          />
        </svg>
      </button>
      <Swing
        ref="swing"
        :config="config"
        @throwoutend="onThrowout"
      >
        <Card
          v-for="card in cards"
          :key="card"
        >
          <FormulateInput
            :label="card"
            type="text"
          />
        </Card>
        <Card>
          <p class="text-xs font-semibold">
            Aujourd'hui,
          </p>
          <p class="text-xl font-light my-2">
            Je me sens inquiet pour la de mes proches
          </p>
          <p class="text-6xl">
            👨‍👩‍👧‍👦
          </p>
        </Card>
        <Card>
          <p class="text-xs font-semibold">
            Aujourd'hui,
          </p>
          <p class="text-xl font-light my-2">
            Je me sens inquiet pour ma santé personnelle
          </p>
          <p class="text-6xl">
            😷
          </p>
        </Card>
      </Swing>
      <button
        class="bg-green-600 text-white rounded-full p-5"
        @click="swingRight"
      >
        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 46.22 43.34">
          <path d="M42.62.37C28.87 9 15.49 25.4 15.49 25.4a105.79 105.79 0 00-8.62-8 4.19 4.19 0 00-6 5.78A107.32 107.32 0 0112 41.05a4.13 4.13 0 005.54 1.85 4.08 4.08 0 001.81-1.77C27.94 25 35.35 16 45.66 3.85a2.34 2.34 0 00-3-3.48z" />
        </svg>
      </button>
    </div>
  </Page>
</template>

<script>
import Page from '@/components/Page'
import Swing from '@/components/Swing'
import Card from '@/components/Card'

export default {
  components: {
    Swing,
    Page,
    Card
  },
  data () {
    return {
      config: {
        allowedDirections: [],
        minThrowOutDistance: 250,
        maxThrowOutDistance: 300
      },
      cards: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
    }
  },
  beforeMount () {
    this.config.allowedDirections = [
      // this.$swing.Direction.UP,
      // this.$swing.Direction.DOWN,
      this.$swing.Direction.LEFT,
      this.$swing.Direction.RIGHT
    ]
  },
  methods: {
    onThrowout ({ target, throwDirection }) {
      // const cards = this.$refs.swing.cards
      // cards[cards.length - 1].destroy()
      target.parentNode.removeChild(target)
    },
    swingRight () {
      const cards = this.$refs.swing.cards
      cards[cards.length - 1].throwOut(0, 0, this.$swing.Direction.RIGHT)
    },
    swingLeft () {
      const cards = this.$refs.swing.cards
      cards[cards.length - 1].throwOut(0, 0, this.$swing.Direction.LEFT)
    }
  }
}
</script>

<style scoped>
</style>
