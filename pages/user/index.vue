<template>
  <Page title="Mon profil confiné">
    <div class="flex-grow flex flex-col text-center">
      <p>
        <b>Vos données sont protégées</b>
        <nuxt-link
          to="/privacy"
          class="block text-main hover:text-black"
        >
          En savoir plus
        </nuxt-link>
      </p>
      <nuxt-link
        to="/user/stories/create"
        class="bg-main hover:bg-transparent uppercase font-black text-background hover:text-main py-5 px-6 my-4 border border-transparent hover:border-main rounded-full"
      >
        Ajouter un anecdote
      </nuxt-link>
      <nuxt-link
        to="/user/stories"
        class="bg-main hover:bg-transparent uppercase font-black text-background hover:text-main py-5 px-6 my-4 border border-transparent hover:border-main rounded-full"
      >
        Visualiser mes anecdotes
      </nuxt-link>
      <nuxt-link
        to="/user/edit"
        class="bg-main hover:bg-transparent uppercase font-black text-background hover:text-main py-5 px-6 my-4 border border-transparent hover:border-main rounded-full"
      >
        Modifier mon profil
      </nuxt-link>
      <nuxt-link
        to="/user/initial"
        class="bg-main hover:bg-transparent uppercase font-black text-background hover:text-main py-5 px-6 my-4 border border-transparent hover:border-main rounded-full"
      >
        Modifier mon état initial
      </nuxt-link>
    </div>
  </Page>
</template>

<script>
import Page from '@/components/Page'

export default {
  components: {
    Page
  }
}
</script>

<style scoped>

</style>
