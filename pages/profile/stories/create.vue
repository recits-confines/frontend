<template>
  <Page title="Mon humeur initiale">
    <FormulateForm
      class="pb-20"
      @submit="submit"
    >
      <FormulateInput
        v-model="title"
        type="text"
        label="Titre de mon anecdote"
        validation="required"
      />
      <FormulateInput
        v-model="body"
        type="textarea"
        label="Je raconte mon anecdote"
        validation="required"
      />

      <FormulateInput
        type="submit"
        label="Je valide"
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
      body: null,
      title: null
    }
  },
  methods: {
    async submit () {
      const loader = this.$loading.show()
      await this.$db.stories.add({
        title: this.title,
        body: this.body
      })
      this.$router.push('/profile/stories')
      loader.hide()
    }
  }
}
</script>

<style scoped>
</style>
