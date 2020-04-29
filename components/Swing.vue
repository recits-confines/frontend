<template>
  <div class="relative flex-shrink-0 w-10/12 sm:w-64 h-30">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    config: {
      type: Object,
      default: () => {}
    }
  },

  data () {
    return {
      stack: null,
      cards: [],
      observer: null
    }
  },

  mounted () {
    this.stack = this.$swing.Stack(this.config || {})
    const children = Array.prototype.slice.call(this.$el.children)
    children.forEach((el) => {
      this.cards.push(this.stack.createCard(el, false))
    })

    // Observe changes in DOM
    this.observer = new MutationObserver((mutations) => {
      const addedElements = []
      const removedElements = []
      mutations.forEach(({ addedNodes, removedNodes }) => {
        addedElements.push(...addedNodes)
        removedElements.push(...removedNodes)
      })

      // Create a new card for each new element
      addedElements.forEach((el) => {
        // Ignore if the added element is also removed
        const i = removedElements.indexOf(el)
        if (i !== -1) {
          removedElements.splice(i, 1)
          return
        }

        const card = this.stack.getCard(el)
        if (card === null) {
          this.cards.push(this.stack.createCard(el, false))
        }
      })

      // Remove the card if the element is gone
      removedElements.forEach((el) => {
        const card = this.stack.getCard(el)
        if (card !== null) {
          this.cards.splice(this.cards.indexOf(card), 1)
          this.stack.destroyCard(card)
        }
      })
    })
    this.observer.observe(this.$el, { childList: true })

    // Register events
    const events = [
      'throwout',
      'throwoutend',
      'throwoutdown',
      'throwoutleft',
      'throwoutright',
      'throwoutup',
      'throwin',
      'throwinend',
      'dragstart',
      'dragmove',
      'dragend',
      'destroyCard'
    ]

    for (const event of events) {
      this.stack.on(event, (e) => {
        this.$emit(event, e)
      })
    }
  },

  beforeDestroy () {
    this.observer.disconnect()
  }
}
</script>

<style scoped>
.h-30 {
  height: 30rem;
}
</style>
