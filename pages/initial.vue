<template>
  <div>
    <FormulateForm
      @submit="submitHandler"
    >
      <h2 class="text-xl text-center mb-5">
        Initialisation
      </h2>
      <p class="italic">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus dolorum, fuga fugiat itaque perferendis tenetur vero voluptatem. Aliquam assumenda distinctio doloremque doloribus esse, incidunt itaque, labore odit quae quis temporibus!
      </p>
      <hr class="my-10">
      <FormulateInput
        v-model="space"
        type="textarea"
        label="Description de l'espace de confinement"
        help="Type, surface, état du logement, environnement extérieur, chez qui ?"
        validation="required"
      />
      <FormulateInput
        v-model="people"
        type="textarea"
        label="Personnes confinées avec vous"
        help="Nombre, type de relation, âge"
        validation="required"
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
        v-model="provision_quantity"
        type="number"
        label="Provisions initiales estimée"
        help="En jours"
      />
      <FormulateInput
        v-model="provision_description"
        type="textarea"
        label="Vous avez fait des stocks ? Si oui de quoi en priorité ?"
      />
      <hr class="my-10">
      <h2 class="text-xl text-center mb-5">
        Les événements du jour
      </h2>
      <p class="italic">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus dolorum, fuga fugiat itaque perferendis tenetur vero voluptatem. Aliquam assumenda distinctio doloremque doloribus esse, incidunt itaque, labore odit quae quis temporibus!
      </p>
      <hr class="my-10">
      <FormulateInput
        v-model="weather"
        type="select"
        :options="{soleil: 'Soleil', nuages: 'Nuages', pluie: 'Pluie', orages: 'Orages'}"
        label="Météo du jour"
        placeholder="Sélectionner"
      />
      <FormulateInput
        v-model="vivres"
        type="range"
        label="Quantité de vivres"
        min="1"
        max="10"
        show-value="true"
      />
      <FormulateInput
        v-model="collations"
        type="number"
        label="Nombres de collations dans la journée"
      />
      <FormulateInput
        v-model="moral_daily"
        type="range"
        label="Niveau du moral du jour"
        min="1"
        max="10"
        show-value="true"
      />
      <FormulateInput
        v-model="sante"
        type="range"
        label="Etat de danté physique"
        min="1"
        max="10"
        show-value="true"
      />
      <FormulateInput
        v-model="hygiene"
        type="range"
        label="Niveau d'hygiène du corps"
        min="1"
        max="10"
        show-value="true"
      />
      <FormulateInput
        v-model="relations"
        type="range"
        label="Etat des relations avec les co-confiné.e.s"
        min="1"
        max="10"
        show-value="true"
      />
      <FormulateInput
        v-model="opinion"
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
        v-model="alcohol"
        :options="{more: '+ (en augmentation)', stable: '= (stable)', less: '- (en diminution)', none: '0 (aucune)'}"
        type="radio"
        label="Consommation d’alcool"
      />
      <FormulateInput
        v-model="tabaco"
        :options="{more: '+ (en augmentation)', stable: '= (stable)', less: '- (en diminution)', none: '0 (aucune)'}"
        type="radio"
        label="Consommation de tabac"
      />
      <FormulateInput
        v-model="sleep"
        :options="{more: 'Bon', stable: 'Moyen', less: 'Mauvais'}"
        type="radio"
        label="Etat du sommeil"
      />
      <FormulateInput
        v-model="sorties"
        type="number"
        label="Nombres de sorties"
      />
      <FormulateInput
        v-model="sorties_goal"
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
        v-model="delivery"
        type="checkbox"
        label="Livraison de nourriture à domicile"
      />
      <FormulateInput
        v-model="routine"
        type="checkbox"
        label="Routine quotidienne (douche, habillement…)"
      />
      <FormulateInput
        v-model="work"
        type="number"
        label="Nombres d'heures de travail"
      />
      <FormulateInput
        v-model="school"
        type="checkbox"
        label="Ecole / devoirs des enfants"
      />
      <FormulateInput
        v-model="extra_cleanup"
        type="checkbox"
        label="Nettoyage ou bricolage (autres qu’habituels)"
      />

      <FormulateErrors />
      <FormulateInput
        type="submit"
        label="Valider"
      />
    </FormulateForm>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      formValues: {},
      space: '',
      people: '',
      moral: null,
      provision_quantity: null,
      provision_description: '',
      weather: '',
      vivres: null,
      collations: null,
      moral_daily: null,
      sante: null,
      hygiene: null,
      relations: null,
      opinion: [],
      alcohol: null,
      tabaco: null,
      sleep: null,
      sorties: null,
      sorties_goal: [],
      delivery: null,
      routine: null,
      work: null,
      school: null,
      extra_cleanup: null
    }
  },
  methods: {
    submitHandler (data) {
      alert('Soumis, merci !')
    }
  }
}
</script>

<style>
.formulate-input[data-classification='button'] button {
  @apply w-full text-xl text-white text-center font-bold py-5 px-5 my-10 rounded;
}
</style>
