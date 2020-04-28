<template>
  <Page title="Les événements du jour">
    <FormulateForm
      @submit="submitHandler"
    >
      <FormulateInput
        name="weather"
        type="select"
        :options="{soleil: 'Soleil', nuages: 'Nuages', pluie: 'Pluie', orages: 'Orages'}"
        label="Météo du jour"
        placeholder="Sélectionner"
      />
      <FormulateInput
        name="vivres"
        type="range"
        label="Quantité de vivres"
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
        label="Etat de danté physique"
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
      <FormulateInput
        name="opinion"
        :options="{
          self_health: 'Ma santé personnelle',
          other_health: 'La santé de mes proches',
          financial: 'Mes conditions financières',
          criris: 'La situation sanitaire globale'
        }"
        type="checkbox"
        label="Je m’inquiète pour..."
      />
      <FormulateInput
        name="alcohol"
        :options="{more: '+ (en augmentation)', stable: '= (stable)', less: '- (en diminution)', none: '0 (aucune)'}"
        type="radio"
        label="Consommation d’alcool"
      />
      <FormulateInput
        name="tabaco"
        :options="{more: '+ (en augmentation)', stable: '= (stable)', less: '- (en diminution)', none: '0 (aucune)'}"
        type="radio"
        label="Consommation de tabac"
      />
      <FormulateInput
        name="sleep"
        :options="{more: 'Bon', stable: 'Moyen', less: 'Mauvais'}"
        type="radio"
        label="Etat du sommeil"
      />
      <FormulateInput
        v-model="sorties"
        name="sorties"
        type="number"
        label="Nombres de sorties"
        min="0"
      />
      <FormulateInput
        v-if="sorties > 0"
        name="sorties_goal"
        :options="{
          sport: 'faire du sport',
          food: 'achat de nourriture',
          pets: 'promener le chien',
          work: 'le travail'
        }"
        type="checkbox"
        label="Sorties pour..."
      />
      <FormulateInput
        name="delivery"
        :options="{true: 'Oui', false: 'Non'}"
        type="radio"
        label="Livraison de nourriture à domicile"
      />
      <FormulateInput
        name="routine"
        :options="{true: 'Oui', false: 'Non'}"
        type="radio"
        label="Routine quotidienne (douche, habillement…)"
      />
      <FormulateInput
        name="work"
        type="number"
        label="Nombres d'heures de travail"
        min="0"
        max="24"
      />
      <FormulateInput
        name="school"
        :options="{true: 'Oui', false: 'Non'}"
        type="radio"
        label="Ecole / devoirs des enfants"
      />
      <FormulateInput
        name="extra_cleanup"
        :options="{true: 'Oui', false: 'Non'}"
        type="radio"
        label="Etat du sommeil"
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
  data () {
    return {
      // weather: '',
      // vivres: null,
      // collations: null,
      // moral_daily: null,
      // sante: null,
      // hygiene: null,
      // relations: null,
      // opinion: [],
      // alcohol: null,
      // tabaco: null,
      // sleep: null,
      sorties: null
      // sorties_goal: [],
      // delivery: null,
      // routine: null,
      // work: null,
      // school: null,
      // extra_cleanup: null
    }
  },
  computed: {
    userId () {
      return this.$store.state.user.id
    },
    initial () {
      return !this.$store.state.user.id
    }
  },
  methods: {
    async submitHandler (data) {
      const loader = this.$loading.show()
      await this.$db.add(data)
      data._subject = 'Récits confinés - Rapport journée'
      if (!data._gotcha) {
        // await this.$axios.$post('https://formspree.io/mnqbkgyr', data)
      }
      this.$router.push('/thanks')
      loader.hide()
    }
  }
}
</script>

<style scoped>
</style>
