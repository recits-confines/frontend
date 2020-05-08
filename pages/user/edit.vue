<template>
  <Page title="Mon humeur initiale">
    <FormulateForm
      v-if="loaded"
      class="pb-20"
      :values="values"
      @submit="submit"
    >
      <FormulateInput
        name="espaceConf"
        type="textarea"
        label="Description de l'espace de confinement"
        help="Type, surface, état du logement, environnement extérieur, chez qui ?"
      />
      <FormulateInput
        name="persConf"
        type="textarea"
        label="Personnes confinées avec vous"
        help="Nombre, lien, âge"
      />
      <FormulateInput
        name="moralInit"
        type="emojirange"
        label="Moral initial"
        show-value="true"
      />
      <FormulateInput
        name="stockInit"
        type="number"
        label="Provisions initiales estimée"
        help="En jours"
        min="0"
      />
      <FormulateInput
        name="stockInitD"
        type="textarea"
        label="Avez-vous fait des stocks ? qu’avez-vous acheté en priorité ?"
      />
      <img
        class="w-4/12 mx-auto my-10"
        src="@/static/images/map.svg"
      >

      <FormulateErrors />
      <FormulateInput
        type="submit"
        label="Je valide mon état initial"
      />
    </FormulateForm>
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
      values: state => state.user,
      loaded: state => state.isLoaded
    })
  },
  methods: {
    submit (data) {
      const loader = this.$loading.show()
      this.$store.commit('user/init', data)
      this.$router.push('/user/end')
      loader.hide()
    }
  }
}
</script>

<style scoped>
</style>
