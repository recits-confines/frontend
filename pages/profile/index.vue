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
        to="/profile/edit"
        class="bg-main hover:bg-transparent uppercase font-black text-background hover:text-main py-5 px-6 my-4 border border-transparent hover:border-main rounded-full"
      >
        Modifier mon profil
      </nuxt-link>
      <nuxt-link
        to="/profile/stories/create"
        class="bg-main hover:bg-transparent uppercase font-black text-background hover:text-main py-5 px-6 my-4 border border-transparent hover:border-main rounded-full"
      >
        Ajouter un anecdote
      </nuxt-link>
      <nuxt-link
        to="/profile/stories"
        class="bg-main hover:bg-transparent uppercase font-black text-background hover:text-main py-5 px-6 my-4 border border-transparent hover:border-main rounded-full"
      >
        Visualiser mes anecdotes
      </nuxt-link>
    </div>
  </Page>
</template>

<script>
import Page from '@/components/Page'

export default {
  components: {
    Page
  },
  data () {
    return {
      dates: []
    }
  },
  async mounted () {
    this.dates = await this.$db.daily.keys()
  }
}
</script>

<style scoped>

</style>
