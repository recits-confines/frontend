<template>
  <Page title="Les événements du jour">
    <FormulateForm
      @submit="submitHandler"
    >
      <FormulateInput
        v-for="input in inputs"
        :key="input.name"
        v-bind="input"
      />
    </FormulateForm>
  </Page>
</template>

<script>
import { mapState } from 'vuex'
import Page from '@/components/Page'
import inputs from '@/forms/daily.json'

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
      alone: state => state.user.alone
    })
  },
  async beforeMount () {
    if (await this.$db.daily.get()) {
      this.$router.push('/daily/end')
    }
  },
  methods: {
    async submitHandler (data) {
      await this.$store.commit('day/init')
      await this.$store.commit('day/set', data)
      this.$router.push('/daily/two')
    }
  }
}
</script>

<style scoped>
</style>
