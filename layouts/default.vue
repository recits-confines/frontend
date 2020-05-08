<template>
  <div class="flex flex-col justify-between min-h-screen">
    <NavBar />
    <div class="flex-grow flex flex-col justify-center overflow-hidden">
      <nuxt />
    </div>
    <AppBar v-if="initiated" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NavBar from '@/components/NavBar'
import AppBar from '@/components/AppBar'

export default {
  components: {
    AppBar,
    NavBar
  },
  computed: {
    ...mapState({
      initiated: state => !!state.user.id
    })
  }
}
</script>

<style>
</style>
