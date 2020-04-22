<template>
  <Page title="Mon humeur initiale">
    <FormulateForm
      @submit="submitHandler"
    >
      <FormulateInput
        name="space_description"
        type="textarea"
        label="Description de l'espace de confinement"
        help="Type, surface, état du logement, environnement extérieur, chez qui ?"
      />
      <FormulateInput
        name="people"
        type="textarea"
        label="Personnes confinées avec vous"
        help="Nombre, type de relation, âge"
      />
      <FormulateInput
        name="moral"
        type="range"
        label="Moral inital"
        min="1"
        max="10"
        show-value="true"
      />
      <FormulateInput
        name="provision_quantity"
        type="number"
        label="Provisions initiales estimée"
        help="En jours"
        min="0"
      />
      <FormulateInput
        name="provision_description"
        type="textarea"
        label="Vous avez fait des stocks ? Si oui de quoi en priorité ?"
      />
      <FormulateInput
        name="_gotcha"
        type="text"
        label="Vous avez fait du rien ? Ce champs doit rester vide"
        style="display:none"
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
import Page from '@/components/Page'

export default {
  components: {
    Page
  },
  methods: {
    async submitHandler (data) {
      const loader = this.$loading.show()
      this.$store.commit('user/init', data)
      data.userId = this.$store.state.user.id
      data._subject = 'Récits confinés - Inscription'
      if (!data._gotcha) {
        await this.$axios.$post('https://formspree.io/mnqbkgyr', data)
      }
      this.$router.push('/daily')
      loader.hide()
    }
  }
}
</script>

<style scoped>
</style>
