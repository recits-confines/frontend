<template>
  <div>
    <div
      v-shortkey="{up: ['arrowup'], right: ['arrowright'], left: ['arrowleft']}"
      class="flex overflow-x-hidden items-center justify-center"
      @shortkey="keySwing"
    >
      <button
        class="flex-1 flex-grow-0 -mr-2 z-10 bg-indigo-800 text-white rounded-full p-5"
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
        class="flex-1 flex-grow-0 -ml-2 z-10 bg-green-600 text-white rounded-full p-5"
        @click="swingRight"
      >
        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 46.22 43.34">
          <path d="M42.62.37C28.87 9 15.49 25.4 15.49 25.4a105.79 105.79 0 00-8.62-8 4.19 4.19 0 00-6 5.78A107.32 107.32 0 0112 41.05a4.13 4.13 0 005.54 1.85 4.08 4.08 0 001.81-1.77C27.94 25 35.35 16 45.66 3.85a2.34 2.34 0 00-3-3.48z" />
        </svg>
      </button>
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
  data () {
    return {
      config: {
        allowedDirections: [],
        throwOutDistance: () => 500
      },
      answers: {},
      cards: [
        {
          name: 'inquiet',
          description: 'Je suis inquiet',
          icon: '🤞🏼'
        },
        {
          name: 'inquietProches',
          description: 'Pour la santé de mes proches',
          icon: '👨‍👩‍👧‍👦',
          relates: 'inquiet'
        },
        {
          name: 'inquietFinances',
          description: 'Pour mes conditions financières',
          icon: '💵',
          relates: 'inquiet'
        },
        {
          name: 'inquietSanitaire',
          description: 'Pour la situation sanitaire globale',
          icon: '😷',
          relates: 'inquiet'
        },
        {
          name: 'alcool',
          description: 'J’ai consommé de l’alcool',
          icon: '🍻'
        },
        {
          name: 'sommeil',
          description: 'Cette nuit, j’ai bien dormi',
          icon: '🛏'
        },
        {
          name: 'sortie',
          description: 'Je suis sorti',
          icon: '🌳'
        },
        {
          name: 'sortieSport',
          description: 'Pour faire du sport',
          icon: '🏃',
          relates: 'sortie'
        },
        {
          name: 'sortieCourses',
          description: 'Pour acheter des provision',
          icon: '🛒',
          relates: 'sortie'
        },
        {
          name: 'sortieChien',
          description: 'Pour promener le chien',
          icon: '🐶',
          relates: 'sortie'
        },
        {
          name: 'sortieTravail',
          description: 'Pour aller travailler',
          icon: '🚗',
          relates: 'sortie'
        },
        {
          name: 'sortieAutre',
          description: 'Pour une autre raison',
          icon: '🏙',
          relates: 'sortie'
        },
        {
          name: 'livraison',
          description: 'J’ai été livré à domicile',
          icon: '📦'
        },
        {
          name: 'routineDouche',
          description: 'Je me suis douché/habillé',
          icon: '🚿'
        },
        {
          name: 'devoir',
          description: 'J’ai aidé aux devoirs des enfants',
          icon: '📚'
        },
        {
          name: 'menageBrico',
          description: 'J’ai bricolé ou fais le ménage',
          icon: '🧽'
        },
        {
          name: 'sportDomicile',
          description: 'J’ai fait du sport à la maison',
          icon: '🤸'
        }
      ].reverse()
    }
  },
  beforeMount () {
    this.config.allowedDirections = [
      this.$swing.Direction.UP,
      // this.$swing.Direction.DOWN,
      this.$swing.Direction.LEFT,
      this.$swing.Direction.RIGHT
    ]
    this.answers = this.cards.reduce((obj, card) => {
      obj[card.name] = null
      return obj
    }, {})
  },
  methods: {
    onThrowOut ({ target, throwDirection }) {
      switch (throwDirection) {
        case this.$swing.Direction.UP:
          this.answers[target.__vue__.$props.name] = null
          this.cards = this.cards.filter(card => card.relates !== target.__vue__.$props.name)
          break
        case this.$swing.Direction.LEFT:
          this.answers[target.__vue__.$props.name] = false
          this.cards = this.cards.filter(card => card.relates !== target.__vue__.$props.name)
          break
        case this.$swing.Direction.RIGHT:
          this.answers[target.__vue__.$props.name] = true
      }
    },
    onThrowOutEnd () {
      this.cards.pop()
      if (this.cards.length < 1) {
        this.$router.push('/thanks')
      }
    },
    keySwing (event) {
      switch (event.srcKey) {
        case 'up':
          this.swingUp()
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
      cards[cards.length - 1].throwOut(0, 0, this.$swing.Direction.LEFT)
    },
    swingUp () {
      const cards = this.$refs.swing.cards
      cards[cards.length - 1].throwOut(0, 0, this.$swing.Direction.UP)
    }
  }
}
</script>

<style scoped>
</style>
