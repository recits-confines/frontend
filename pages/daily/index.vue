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
import { mapActions, mapState } from 'vuex'
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
    ...mapActions({
      init: 'report/init',
      save: 'report/save'
    }),
    async submitHandler (data) {
      await this.init('daily')
      await this.save(data)
      this.$router.push('/daily/swipe')
    }
  }
}
</script>

<style scoped>
</style>
