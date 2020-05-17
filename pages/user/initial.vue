<template>
  <Page title="État initial">
    <FormulateForm
      v-if="loaded"
      class="pb-20"
      :values="values"
      @submit="submit"
    >
      <FormulateInput
        v-for="input in inputs"
        :key="input.name"
        v-bind="input"
      />
      <img
        class="w-4/12 mx-auto my-10"
        src="@/static/images/map.svg"
      >
    </FormulateForm>
  </Page>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Page from '@/components/Page'
import inputs from '@/forms/initial.json'

export default {
  components: {
    Page
  },
  data () {
    return {
      inputs
    }
  },
  computed: {
    ...mapState({
      values: state => state.user.initial,
      loaded: state => state.isLoaded
    })
  },
  methods: {
    ...mapActions({
      init: 'report/init',
      save: 'report/save',
      store: 'report/store'
    }),
    async submit (data) {
      this.$nuxt.$loading.start()
      await this.init('initial')
      await this.save(data)
      await this.store(data)
      this.$router.push('/user/end')
      this.$nuxt.$loading.finish()
    }
  }
}
</script>

<style scoped>
</style>
