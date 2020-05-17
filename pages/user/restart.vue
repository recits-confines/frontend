<template>
  <Page title="Reprise">
    <FormulateForm
      @submit="submitHandler"
    >
      <FormulateInput
        v-model="name"
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
import { mapActions } from 'vuex'
import Page from '@/components/Page'

export default {
  components: {
    Page
  },
  data () {
    return {
      name: ''
    }
  },
  methods: {
    ...mapActions({
      set: 'user/setUser'
    }),
    async submitHandler (data) {
      this.$nuxt.$loading.start()
      await this.set(data.name)
      this.$router.push('/user/end')
      this.$nuxt.$loading.finish()
    }
  }
}
</script>

<style scoped>

</style>
