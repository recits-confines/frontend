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
        v-model="provision_quantity"
        type="number"
        label="Provisions initiales estimée"
        help="En jours"
        min="0"
      />
      <FormulateInput
        v-model="provision_description"
        type="textarea"
        label="Vous avez fait des stocks ? Si oui de quoi en priorité ?"
      />

      <FormulateErrors />
      <FormulateInput
        type="submit"
        label="Valider"
        class="form-submit text-center"
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
      weather: ''
    }
  },
  methods: {
    submitHandler (data) {
      const loader = this.$loading.show()
      setTimeout(() => {
        this.$router.push('daily')
        loader.hide()
      }, 2000)
    }
  }
}
</script>

<style>
/* purgecss start ignore */
.formulate-input[data-classification='button'] button {
  @apply flex justify-center w-full text-xl text-white text-center font-bold py-5 px-5 my-10 rounded;
}
/* purgecss end ignore */
</style>
