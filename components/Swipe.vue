<template>
  <div class="flex-grow flex flex-col justify-between">
    <div
      v-shortkey="{up: ['arrowup'], right: ['arrowright'], left: ['arrowleft']}"
      class="flex items-center justify-center"
      @shortkey="keySwing"
    >
      <div
        class="flex-1 flex-grow-0 flex flex-col items-end -mr-5 sm:mr-5 z-10"
      >
        <button
          v-if="!carrousel"
          class="mt-4 flex-1 flex-grow-0 bg-indigo-800 text-white focus:outline-none rounded-full py-10 pl-16 pr-4 sm:p-6"
          @click="swingLeft"
        >
          <svg
            class="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 41.93 41.93"
          >
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
        <button
          class="-mt-4 z-10 bg-indigo-800 text-white focus:outline-none rounded-full border-2 border-white p-2"
          @click="swingBack"
        >
          <svg
            class="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 26.12 43.5"
          >
            <path d="M21.72 43.5a4.21 4.21 0 01-3.06-1.28L1.27 24.84a4.4 4.4 0 010-6.18L18.66 1.27a4.37 4.37 0 016.18 6.18L10.51 21.77l14.33 14.32a4.4 4.4 0 010 6.18 4.58 4.58 0 01-3.12 1.23z" />
          </svg>
        </button>
      </div>
      <Swing
        ref="swing"
        :config="config"
        @throwout="onThrowOut"
        @throwoutend="onThrowOutEnd"
      >
        <Card
          v-for="card in cards"
          :key="card.name"
          v-bind="card"
        />
      </Swing>
      <button
        class="flex-1 flex-grow-0 -ml-5 sm:ml-5 z-10 bg-green-600 text-white focus:outline-none rounded-full py-10 pr-16 pl-4 sm:p-6"
        @click="swingRight"
      >
        <svg
          v-if="carrousel"
          class="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 46.22 43.34"
        >
          <path d="M42.62.37C28.87 9 15.49 25.4 15.49 25.4a105.79 105.79 0 00-8.62-8 4.19 4.19 0 00-6 5.78A107.32 107.32 0 0112 41.05a4.13 4.13 0 005.54 1.85 4.08 4.08 0 001.81-1.77C27.94 25 35.35 16 45.66 3.85a2.34 2.34 0 00-3-3.48z" />
        </svg>
        <svg
          v-else
          class="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 46.22 43.34"
        >
          <path d="M42.62.37C28.87 9 15.49 25.4 15.49 25.4a105.79 105.79 0 00-8.62-8 4.19 4.19 0 00-6 5.78A107.32 107.32 0 0112 41.05a4.13 4.13 0 005.54 1.85 4.08 4.08 0 001.81-1.77C27.94 25 35.35 16 45.66 3.85a2.34 2.34 0 00-3-3.48z" />
        </svg>
      </button>
    </div>
    <div class="flex justify-center py-5">
      <div
        v-for="c1 in previous"
        :key="c1.name"
        class="w-2 h-2 m-1 rounded-full bg-secondary"
      />
      <div
        v-for="(c2, index) in cards"
        :key="c2.name"
        class="w-2 h-2 m-1 rounded-full"
        :class="{ 'bg-white': index === 0, 'bg-secondary': index !== 0 }"
      />
    </div>
  </div>
</template>

<script>
import Swing from '@/components/Swing'
import Card from '@/components/Card'

export default {
  components: {
    Swing,
    Card
  },
  props: {
    cardList: {
      type: Array,
      default: () => []
    },
    carrousel: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      config: {
        allowedDirections: [],
        throwOutDistance: () => 500,
        throwOutConfidence: (xOffset, yOffset, element) => {
          const xConfidence = Math.min(Math.abs(xOffset) * 2 / element.offsetWidth, 1)
          const yConfidence = Math.min(Math.abs(yOffset) * 2 / element.offsetHeight, 1)

          return Math.max(xConfidence, yConfidence)
        }
      },
      current: {},
      answers: {},
      cards: this.cardList,
      previous: []
    }
  },
  beforeMount () {
    this.config.allowedDirections = [
      // this.$swing.Direction.UP,
      // this.$swing.Direction.DOWN,
      this.$swing.Direction.LEFT,
      this.$swing.Direction.RIGHT
    ]
    this.answers = this.cards.reduce((obj, card) => {
      obj[card.name] = null
      return obj
    }, {})
    this.current = this.cards[this.cards.length - 1]
  },
  methods: {
    onThrowOut ({ target, throwDirection }) {
      switch (throwDirection) {
        case this.$swing.Direction.UP:
          this.answers[this.current.name] = null
          this.previous.push(...this.cards.filter(card => card.relates === this.current.name))
          this.cards = this.cards.filter(card => card.relates !== this.current.name)
          break
        case this.$swing.Direction.LEFT:
          this.answers[this.current.name] = false
          this.previous.push(...this.cards.filter(card => card.relates === this.current.name))
          this.cards = this.cards.filter(card => card.relates !== this.current.name)
          break
        case this.$swing.Direction.RIGHT:
          this.answers[this.current.name] = true
      }
    },
    onThrowOutEnd () {
      this.previous.push(this.cards.pop())
      if (this.cards.length < 1) {
        if (this.carrousel) {
          this.cards = this.cardList
          this.previous = []
        } else {
          this.$emit('submit', this.answers)
        }
      } else {
        this.current = this.cards[this.cards.length - 1]
      }
    },
    keySwing (event) {
      switch (event.srcKey) {
        case 'up':
          // this.swingUp()
          break
        case 'right':
          this.swingRight()
          break
        case 'left':
          this.swingLeft()
      }
    },
    swingRight () {
      const cards = this.$refs.swing.cards
      cards[cards.length - 1].throwOut(0, 0, this.$swing.Direction.RIGHT)
    },
    swingLeft () {
      const cards = this.$refs.swing.cards
      if (this.carrousel) {
        this.swingBack()
      } else {
        cards[cards.length - 1].throwOut(0, 0, this.$swing.Direction.LEFT)
      }
    },
    swingUp () {
      const cards = this.$refs.swing.cards
      cards[cards.length - 1].throwOut(0, 0, this.$swing.Direction.UP)
    },
    swingBack () {
      if (this.previous.length > 0) {
        const cardBack = this.previous.pop()
        this.cards.push(...this.previous.filter(card => card.relates === cardBack.name))
        this.previous = this.previous.filter(card => card.relates !== cardBack.name)
        this.cards.push(cardBack)
        this.current = this.cards[this.cards.length - 1]
      }
    }
  }
}
</script>

<style scoped>
</style>
