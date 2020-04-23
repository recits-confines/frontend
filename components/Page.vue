<template>
  <div>
    <Header :title="title" />
    <div class="container mx-auto px-5 py-1 lg:px-64">
      <slot />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  components: {
    Header
  },
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
