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
        v-if="!!status"
        class="pt-5 flex flex-col"
      >
        <nuxt-link
          v-if="status === 'initial'"
          to="/initial"
          class="bg-main hover:bg-transparent uppercase font-black text-background hover:text-main py-5 px-6 my-4 border border-transparent hover:border-main rounded-full"
        >
          Commencer mon journal
        </nuxt-link>
        <nuxt-link
          v-if="status === 'initial'"
          to="/restart"
          class="bg-transparent hover:bg-main text-main hover:text-background py-2 px-6 rounded-full"
        >
          J’ai déjà un identifiant
        </nuxt-link>
        <nuxt-link
          v-if="status === 'ready'"
          to="/daily"
          class="bg-main hover:bg-transparent uppercase font-black text-background hover:text-main py-5 px-6 my-4 border border-transparent hover:border-main rounded-full"
        >
          Continuer mon journal
        </nuxt-link>
        <nuxt-link
          v-if="status === 'done'"
          to="/dashboard"
          class="bg-main hover:bg-transparent uppercase font-black text-background hover:text-main py-5 px-6 my-4 border border-transparent hover:border-main rounded-full"
        >
          Voir mon tableau de bord
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  layout: 'index',
  components: {
    Logo
  },
  computed: {
    status () {
      if (!this.$store.state.user.id) {
        return 'initial'
      }
      // if (await this.$db.daily.get()) {
      //   return 'done'
      // }
      return 'ready'
    }
  }
}
</script>

<style>
</style>
