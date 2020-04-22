<template>
  <Page title="Reprise">
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
