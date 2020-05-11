<template>
  <nav class="flex text-main items-center justify-center flex-wrap bg-background p-6 border-main border-b sticky top-0 z-50">
    <nuxt-link
      to="/"
      class="flex items-center flex-shrink-0 mr-6"
    >
      <Logo :height="40" />
      <span class="uppercase font-black text-xl leading-none tracking-tight mx-2">Récits<br>confinés</span>
    </nuxt-link>
  </nav>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style scoped>

</style>
