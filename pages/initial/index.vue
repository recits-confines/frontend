<template>
  <Page title="Mon humeur initiale">
    <FormulateForm
      class="pb-20"
      @submit="submit"
    >
      <FormulateInput
        v-model="spaceDescription"
        type="textarea"
        label="Description de l'espace de confinement"
        help="Type, surface, état du logement, environnement extérieur, chez qui ?"
      />
      <FormulateInput
        v-model="people"
        type="textarea"
        label="Personnes confinées avec vous"
        help="Nombre, type de relation, âge"
      />
      <FormulateInput
        v-model="moral"
        type="range"
        label="Moral inital"
        min="1"
        max="10"
        show-value="true"
      />
      <FormulateInput
        v-model="provisionQuantity"
        type="number"
        label="Provisions initiales estimée"
        help="En jours"
        min="0"
      />
      <FormulateInput
        v-model="provisionDescription"
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
      spaceDescription: null,
      people: null,
      moral: null,
      provisionQuantity: null,
      provisionDescription: null
    }
  },
  methods: {
    submit (data) {
      const loader = this.$loading.show()
      this.$store.commit('user/init', data)
      this.$router.push('/initial/end')
      loader.hide()
    }
  }
}
</script>

<style scoped>
</style>
