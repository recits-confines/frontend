<template>
  <div>
    <NavBar />
    <div class="min-h-screen pb-20">
      <nuxt />
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>

<style>
html {
  @apply bg-background;
}
</style>
