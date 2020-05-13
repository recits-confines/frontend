<template>
  <div>
    <div class="text-center px-1">
      <Logo class="text-main mx-auto my-4" :width="100" />
      <h1 class="uppercase text-main font-black text-4xl leading-none">
        Récits<br>confinés
      </h1>
      <hr class="border-secondary my-10">
      <p class="font-bold">
        <q>Mon journal de bord en période de Coronavirus.</q>
      </p>
      <hr class="border-secondary w-3 mx-auto my-2">
      <p>
        Racontez votre récit au jour le jour, et aidez les historiens à comprendre ce que le monde a vécu.
      </p>
      <hr class="border-secondary w-3 mx-auto my-2">
      <p>
        <b>Vos données sont protégées</b>
        <nuxt-link
          to="/privacy"
          class="block text-main hover:text-black"
        >
          En savoir plus
        </nuxt-link>
      </p>
      <hr class="border-secondary w-3 mx-auto my-2">
      <div
        class="pt-5 flex flex-col"
        @click="onInit"
      >
        <nuxt-link
          v-if="initial"
          to="/user/profile"
          class="bg-main hover:bg-transparent uppercase font-black text-background hover:text-main py-5 px-6 my-4 border border-transparent hover:border-main rounded-full"
        >
          Commencer mon journal
        </nuxt-link>
        <nuxt-link
          v-if="initial"
          to="/restart"
          class="bg-transparent hover:bg-main text-main hover:text-background py-2 px-6 rounded-full"
        >
          J’ai déjà un identifiant
        </nuxt-link>
        <nuxt-link
          v-else-if="dailyToday"
          to="/dashboard"
          class="bg-main hover:bg-transparent uppercase font-black text-background hover:text-main py-5 px-6 my-4 border border-transparent hover:border-main rounded-full"
        >
          Voir mon tableau de bord
        </nuxt-link>
        <nuxt-link
          v-else
          to="/daily"
          class="bg-main hover:bg-transparent uppercase font-black text-background hover:text-main py-5 px-6 my-4 border border-transparent hover:border-main rounded-full"
        >
          Continuer mon journal
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Logo from '~/components/Logo.vue'

export default {
  layout: 'index',
  components: {
    Logo
  },
  computed: {
    ...mapState({
      initial: state => !state.user.id,
      dailyToday: state => state.user.lastDaily === new Date((new Date()).toDateString()),
      loaded: state => state.isLoaded
    })
  },
  methods: {
    onInit () {
      this.$store.commit('loaded')
    }
  }
}
</script>

<style>
</style>
