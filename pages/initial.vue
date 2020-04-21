<template>
  <div>
    <Header title="Mon humeur initiale" />
    <div class="container mx-auto px-5 py-1 lg:px-64">
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

        <FormulateErrors />
        <FormulateInput
          type="submit"
          label="Je valide mon état initial"
        />
      </FormulateForm>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header'

export default {
  components: {
    Header
  },
  methods: {
    async submitHandler (data) {
      const loader = this.$loading.show()
      this.$store.commit('user/setId', Math.random().toString(36).substr(2, 9))
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
