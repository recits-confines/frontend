<template>
  <Page title="Mon humeur initiale">
    <FormulateForm
      class="pb-20"
      :values="values"
      @submit="submit"
    >
      <FormulateInput
        type="date"
        name="debutCarnet"
        label="Carnet commencé le"
        :validation="[['required'], ['after', '2020-01-01'], ['before', new Date()]]"
        min="2020-01-01"
        :validation-messages="{
          required: 'La date de début est obligatoire',
          after: 'La date est trop ancienne',
          before: 'La date doit être passée'
        }"
        error-behavior="live"
      />
      <FormulateInput
        name="lieuCarnet"
        type="text"
        label="à"
      />
      <FormulateInput
        name="paysConfine"
        type="text"
        label="dans le pays"
      />
      <FormulateInput
        name="residencePrinc"
        type="text"
        inputmode="decimal"
        pattern="[0-9]*"
        label="Commune de résidence principale"
      />
      <FormulateInput
        name="nationalite"
        type="text"
        label="Nationalité"
      />
      <FormulateInput
        name="profession"
        type="text"
        label="Activité professionnelle principale"
      />
      <FormulateInput
        name="tempsTravailOrig"
        type="number"
        label="Volume horaire hebdomadaire travaillé avant le confinement"
        min="0"
        max="168"
      />
      <FormulateInput
        name="autorisation1"
        type="checkbox"
        label="J’accepte librement et volontairement de participer au projet de recherche intitulé « Récits Confinés »."
      />
      <FormulateInput
        name="autorisation2"
        type="checkbox"
        label="Je suis informé.e. qu’à tout moment, je peux interrompre ma participation dans cette étude, sans que cela me porte préjudice."
      />
      <FormulateInput
        name="autorisation3"
        type="checkbox"
        label="J’ai été informé.e de la protection et de la confidentialité des informations et j’y consens."
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
      this.$router.push('/user/edit')
      loader.hide()
    }
  }
}
</script>

<style scoped>
</style>
