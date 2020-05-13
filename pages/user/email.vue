<template>
  <Page title="Profil">
    <FormulateForm
      v-if="loaded"
      class="pb-20"
      @submit="submit"
    >
      <FormulateInput
        name="email"
        type="email"
        label="Adresse email"
        validation="required"
      />
      <FormulateInput
        type="submit"
        label="Je soumet mon adresse"
      />
    </FormulateForm>
  </Page>
</template>

<script>
import { mapState } from 'vuex'
import Page from '@/components/Page'

export default {
  components: {
    Page
  },
  computed: {
    ...mapState({
      loaded: state => state.isLoaded
    })
  },
  methods: {
    submit (data) {
      const loader = this.$loading.show()
      const initiated = !!this.values.id
      this.$store.commit('user/init', data)
      this.$router.push(initiated ? '/user/end' : '/user/initial')
      loader.hide()
    }
  }
}
</script>

<style scoped>
</style>
