<template>
  <Page title="Merci">
    <div class="flex flex-col text-center items-center justify-center">
      <h2 class="subtitle font-medium">
        C’est tout pour aujourd’hui.
      </h2>
      <p class="my-5">
        Maintenant, je peux visualiser mon historique de confinement.
      </p>
      <nuxt-link
        to="/dashboard"
        class="bg-main hover:bg-transparent uppercase font-black text-background hover:text-main py-5 px-6 my-4 border border-transparent hover:border-main rounded-full"
      >
        Voir mon tableau de bord
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
