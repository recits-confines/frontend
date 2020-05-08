<template>
  <Page>
    <div class="flex flex-col text-center items-center justify-center">
      <h2 class="subtitle font-medium">
        C’est parfait !
      </h2>
      <p class="my-5">
        Mon identifiant est le suivant.<br>
        Il doit être conservé si jamais je dois continuer le carnet sur un autre dispositif.<br>
        Une capture d'écran de cette page est une bonne manière de le conserver.
      </p>
      <p v-if="userId" class="text-5xl font-bold font-mono">
        {{ userId }}
      </p>
      <hr class="border-secondary w-3 mx-auto my-2">
      <p class="my-5">
        Maintenant, je peux commencer mon journal de confinement.
      </p>
      <nuxt-link
        to="/daily"
        class="bg-main hover:bg-transparent uppercase font-black text-background hover:text-main py-5 px-6 my-4 border border-transparent hover:border-main rounded-full"
      >
        C’est parti !
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
      userId: state => state.user.id
    })
  }
}
</script>

<style scoped>

</style>
