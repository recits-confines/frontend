<template>
  <Page title="Mon historique">
    <div class="flex items-center">
      <button
        class="bg-indigo-800 text-white rounded-full"
        @click="swingLeft"
      >
        Swing left
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
        class="bg-green-600 text-white rounded-full"
        @click="swingRight"
      >
        Swing right
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
