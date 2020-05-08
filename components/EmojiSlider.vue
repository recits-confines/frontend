<template>
  <div
    class="formulate-input-element formulate-input-element--range flex-col"
    data-type="range"
  >
    <div
      class="block text-4xl mb-3"
      v-text="emoji"
    />
    <input
      v-model="context.model"
      type="range"
      v-bind="attributes"
      min="1"
      max="10"
      class="block"
    >
  </div>
</template>

<script>
export default {
  props: {
    context: {
      type: Object,
      required: true
    }
  },
  computed: {
    type () {
      return this.context.type
    },
    id () {
      return this.context.id
    },
    attributes () {
      return this.context.attributes || {}
    },
    emoji () {
      if (!this.context.model) {
        return '😶'
      }
      switch (Math.floor((Number(this.context.model) + 1) / 2)) {
        case 1:
          return '☹️'
        case 2:
          return '😕'
        case 3:
          return '😐'
        case 4:
          return '🙂'
        case 5:
          return '😃'
      }
      return '😶'
    }
  }
}
</script>
