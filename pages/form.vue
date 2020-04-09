<template>
  <div>
    <form @submit.prevent="submitHandler">
      <vue-form-generator :schema="schema" :model="model" :options="formOptions" />
      <button
        class="w-full text-2xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 px-5 rounded"
        type="submit"
      >
        Valider
      </button>
    </form>
  </div>
</template>

<script>
import VueFormGenerator from 'vue-form-generator'

export default {
  components: {
    'vue-form-generator': VueFormGenerator.component
  },
  asyncData () {
    return {
      model: {
        date: new Date()
      },
      schema: {
        groups: [
          {
            legend: 'Introduction',
            fields: [
              {
                type: 'label',
                label: 'Ce document comporte de quoi remplir une semaine de carnet de confinement.'
              }
            ]
          },
          {
            legend: 'Etat initial de confinement',
            fields: [
              {
                type: 'textArea',
                label: 'Décrivez-nous votre <b>espace de confinement</b>',
                model: 'space',
                hint: 'Type, surface, état du logement, environnement extérieur, chez qui ?',
                required: true
              },
              {
                type: 'textArea',
                label: '<b>Personnes confinées</b> avec vous',
                model: 'name',
                hint: 'Nombre, type de relation, âge',
                required: true
              }
            ]
          },
          {
            legend: 'Les événements du jour',
            fields: [
              {
                type: 'select',
                label: '<b>Météo</b> du jour',
                model: 'weather',
                values: [
                  'Soleil',
                  'Nuages',
                  'Pluie',
                  'Orages'
                ],
                selectOptions: {
                  noneSelectedText: 'Sélectionner',
                  hideNoneSelectedText: true
                }
              },
              {
                type: 'input',
                inputType: 'range',
                min: 1,
                max: 10,
                label: 'Quantité de <b>vivres</b> /10',
                model: 'vivres'
              },
              {
                type: 'input',
                inputType: 'number',
                min: 1,
                label: 'Nombre de <b>collations</b> dans la journée',
                model: 'collations'
              },
              {
                type: 'input',
                inputType: 'range',
                min: 1,
                max: 10,
                label: 'Niveau du <b>moral du jour</b> /10',
                model: 'moral'
              },
              {
                type: 'input',
                inputType: 'range',
                min: 1,
                max: 10,
                label: 'Etat de <b>danté physique</b> /10',
                model: 'sante'
              },
              {
                type: 'input',
                inputType: 'range',
                min: 1,
                max: 10,
                label: 'Niveau d\'<b>hygiène du corps</b> /10',
                model: 'hygiene'
              },
              {
                type: 'input',
                inputType: 'range',
                min: 1,
                max: 10,
                label: 'Etat des <b>relations avec les co-confiné.e.s</b> /10',
                model: 'relation'
              }
            ]
          }
        ]
      },
      formOptions: {
        validateAfterChanged: true,
        validateAsync: true
      }
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
.vue-form-generator .form-control {
  @apply py-3 px-4 mb-5 leading-tight;
}
fieldset {
  @apply mb-16 pb-8 border-b-4 border-gray-200;
}
.form-group {
  margin-bottom: 2em;
}
legend {
  @apply mb-2 text-2xl;
}
</style>
