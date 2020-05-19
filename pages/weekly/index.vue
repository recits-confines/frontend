<template>
  <Page title="Les événements de la semaine">
    <p class="text-center mb-3">
      Semaine du
      <span class="font-bold">
        {{ new Intl.DateTimeFormat(undefined, { dateStyle: 'full' }).format(weekDate()) }}
      </span>
    </p>
    <nuxt-link
      v-for="(form, index) in forms"
      :key="form.title"
      :to="`/weekly/${index}`"
      class="flex items-center justify-between bg-secondary hover:bg-transparent uppercase font-black text-background hover:text-secondary py-5 px-6 my-4 border border-transparent hover:border-secondary rounded-full"
    >
      {{ form.title }}
      <svg class="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
      </svg>
    </nuxt-link>
    <button
      v-if="dataCount"
      class="bg-main hover:bg-transparent uppercase font-black text-background hover:text-main py-5 px-6 my-4 border border-transparent hover:border-main rounded-full"
      @click="submit"
    >
      Je soumets mon rapport hebdomadaire
    </button>
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
      init: 'report/init',
      store: 'report/store'
    }),
    async submit () {
      this.$nuxt.$loading.start()
      await this.store()
      this.$router.push('/weekly/end')
      this.$nuxt.$loading.finish()
    },
    weekDate () {
      return new Date(new Date().setDate(new Date().getDate() - new Date().getDay() + (new Date().getDay() === 0 ? -6 : 1)))
    }
  }
}
</script>

<style>
</style>
