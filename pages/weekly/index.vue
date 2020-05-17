<template>
  <Page title="Les événements de la semaine">
    <nuxt-link
      v-for="(form, index) in forms"
      :key="form.title"
      :to="`/weekly/${index}`"
      class="bg-main hover:bg-transparent uppercase font-black text-background hover:text-main py-5 px-6 my-4 border border-transparent hover:border-main rounded-full"
    >
      {{ form.title }}
    </nuxt-link>
    <FormulateInput
      v-if="dataCount"
      label="Je soumets mon rapport hebdomadaire"
      type="submit"
      @click.prevent="submit"
    />
  </Page>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Page from '@/components/Page'
import forms from '@/forms/weekly.json'

export default {
  components: {
    Page
  },
  data () {
    return {
      forms
    }
  },
  computed: {
    ...mapState({
      lastReport: state => state.report.type,
      dataCount: state => Object.keys(state.report.data).length
    })
  },
  mounted () {
    if (this.lastReport !== 'weekly') {
      this.init('weekly')
    }
  },
  methods: {
    ...mapActions({
      init: 'report/init'
    }),
    async submit () {
      this.$nuxt.$loading.start()
      await this.store()
      this.$router.push('/weekly/end')
      this.$nuxt.$loading.finish()
    }
  }
}
</script>

<style>
</style>
