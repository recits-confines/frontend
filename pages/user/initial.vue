<template>
  <Page title="État initial">
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
        validation="required"
      />
      <FormulateInput
        v-model="alone"
        name="alone"
        type="checkbox"
        label="Je suis confiné seul"
      />
      <FormulateInput
        v-if="!alone"
        name="persConf"
        type="textarea"
        label="Personnes confinées avec vous"
        help="Nombre, lien, âge"
      />
      <FormulateInput
        name="moralInit"
        type="emojirange"
        label="Moral initial au début du confinement"
        show-value="true"
        validation="required"
      />
      <FormulateInput
        name="stockInitD"
        type="textarea"
        label="Avez-vous fait des stocks ? Qu’avez-vous acheté en priorité ?"
        validation="required"
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
  data () {
    return {
      alone: false
    }
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
