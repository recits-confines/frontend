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
        type="emojirange"
        label="Etat des provisions de nourriture"
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
        type="emojirange"
        label="Niveau du moral du jour"
        show-value="true"
      />
      <FormulateInput
        name="sante"
        type="emojirange"
        label="Etat de santé physique"
        show-value="true"
      />
      <FormulateInput
        name="hygiene"
        type="emojirange"
        label="Niveau d'hygiène du corps"
        show-value="true"
      />
      <FormulateInput
        name="relations"
        type="emojirange"
        label="Etat des relations avec les co-confiné.e.s"
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
