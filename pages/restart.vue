<template>
  <div>
    <Header title="Reprise" />
    <div class="container mx-auto px-5 py-1 lg:px-64">
      <FormulateForm
        @submit="submitHandler"
      >
        <FormulateInput
          v-model="userId"
          name="userId"
          type="text"
          label="Identifiant"
          help="Entrer votre identifiant unique à la première participation"
          validation="required"
        />
        <FormulateErrors />
        <FormulateInput
          type="submit"
          label="Valider"
        />
      </FormulateForm>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header'

export default {
  components: {
    Header
  },
  data () {
    return {
      userId: ''
    }
  },
  methods: {
    async submitHandler (data) {
      const loader = this.$loading.show()
      await this.$store.commit('user/setId', data.userId)
      this.$router.push('/daily')
      loader.hide()
    }
  }
}
</script>

<style scoped>

</style>
