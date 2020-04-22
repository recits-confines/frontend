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
        class="w-4/12"
      >
        <img
          src="@/static/images/history.svg"
          alt="History"
        >
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
