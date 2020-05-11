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
import { mapState } from 'vuex'
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
      values: state => state.user,
      loaded: state => state.isLoaded
    })
  },
  methods: {
    submit (data) {
      const loader = this.$loading.show()
      this.$store.commit('user/init', data)
      this.$router.push('/user/end')
      loader.hide()
    }
  }
}
</script>

<style scoped>
</style>
