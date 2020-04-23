<template>
  <Page title="Mon historique">
    <Swing
      ref="vueswing"
      :config="config"
      @throwoutend="onThrowout"
    >
      <div
        v-for="card in cards"
        :key="card"
        class="card"
      >
        <div class="card-inner">
          <FormulateInput
            :label="card"
            type="text"
          />
        </div>
      </div>
    </Swing>
  </Page>
</template>

<script>
import Page from '@/components/Page'
import Swing from '@/components/Swing'

export default {
  components: {
    Swing,
    Page
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
      target.parentNode.removeChild(target)
    }
  }
}
</script>

<style scoped>
</style>
