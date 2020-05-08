<template>
  <Page title="Les événements du jour">
    <FormulateForm
      @submit="submitHandler"
    >
      <FormulateInput
        name="weather"
        type="select"
        :options="{soleil: 'Soleil', nuages: 'Nuages', pluie: 'Pluie', orages:'Orages'}"
        label="Météo du jour"
        placeholder="Sélectionner"
      />
      <FormulateInput
        name="vivres"
        type="range"
        label="Etat des provisions de nourriture"
        min="1"
        max="10"
        show-value="true"
      />
      <FormulateInput
        name="collations"
        type="number"
        label="Nombres de collations dans la journée"
        min="0"
      />
      <FormulateInput
        name="moral_daily"
        type="range"
        label="Niveau du moral du jour"
        min="1"
        max="10"
        show-value="true"
      />
      <FormulateInput
        name="sante"
        type="range"
        label="Etat de santé physique"
        min="1"
        max="10"
        show-value="true"
      />
      <FormulateInput
        name="hygiene"
        type="range"
        label="Niveau d'hygiène du corps"
        min="1"
        max="10"
        show-value="true"
      />
      <FormulateInput
        name="relations"
        type="range"
        label="Etat des relations avec les co-confiné.e.s"
        min="1"
        max="10"
        show-value="true"
      />

      <FormulateErrors />
      <FormulateInput
        type="submit"
        label="Valider"
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
  async beforeMount () {
    if (await this.$db.daily.get()) {
      this.$router.push('/daily/end')
    }
  },
  methods: {
    async submitHandler (data) {
      await this.$store.commit('day/init')
      await this.$store.commit('day/set', data)
      this.$router.push('/daily/two')
    }
  }
}
</script>

<style scoped>
</style>
