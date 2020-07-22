<template>
  <Page title="Mon profil confiné">
    <div class="flex-grow flex flex-col text-center">
      <p class="mb-3">
        <b>Vos données sont protégées</b>
        <nuxt-link
          to="/privacy"
          class="block text-main hover:text-black"
        >
          En savoir plus
        </nuxt-link>
      </p>
      <p v-if="userName">
        Identifiant
        <span class="font-bold font-mono">
          {{ userName }}
        </span>
      </p>
      <nuxt-link
        to="/user/stories/create"
        class="bg-main hover:bg-transparent uppercase font-black text-background hover:text-main py-5 px-6 my-4 border border-transparent hover:border-main rounded-full"
      >
        Ajouter une anecdote
      </nuxt-link>
      <nuxt-link
        to="/user/stories"
        class="bg-main hover:bg-transparent uppercase font-black text-background hover:text-main py-5 px-6 my-4 border border-transparent hover:border-main rounded-full"
      >
        Visualiser mes anecdotes
      </nuxt-link>
      <nuxt-link
        to="/user/profile"
        class="bg-main hover:bg-transparent uppercase font-black text-background hover:text-main py-5 px-6 my-4 border border-transparent hover:border-main rounded-full"
      >
        Visualiser/Modifier mon profil
      </nuxt-link>
      <nuxt-link
        to="/user/initial"
        class="bg-main hover:bg-transparent uppercase font-black text-background hover:text-main py-5 px-6 my-4 border border-transparent hover:border-main rounded-full"
      >
        Visualiser/Modifier mon état initial
      </nuxt-link>
    </div>
  </Page>
</template>

<script>
import { mapState } from 'vuex'
import Page from '@/components/Page'

export default {
  components: {
    Page
  },
  computed: {
    ...mapState({
      userName: state => state.user.name
    })
  }
}
</script>

<style scoped>

</style>
