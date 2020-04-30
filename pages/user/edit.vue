<template>
  <Page title="Mon humeur initiale">
    <FormulateForm
      class="pb-20"
      :values="values"
      @submit="submit"
    >
      <FormulateInput
        name="space"
        type="textarea"
        label="Description de l'espace de confinement"
        help="Type, surface, état du logement, environnement extérieur, chez qui ?"
      />
      <FormulateInput
        name="people.body"
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
        name="provisions.number"
        type="number"
        label="Provisions initiales estimée"
        help="En jours"
        min="0"
      />
      <FormulateInput
        name="provisions.body"
        type="textarea"
        label="Vous avez fait des stocks ? Si oui de quoi en priorité ?"
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
  data () {
    return {
      values: this.$store.state.user
    }
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
