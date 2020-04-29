<template>
  <Page title="Tableau de bord">
    <ul class="list-disc list-inside">
      <li
        v-for="date in dates"
        :key="date.toString()"
      >
        Le <time>{{ new Intl.DateTimeFormat(undefined, { dateStyle: 'full' }).format(date) }}</time>
      </li>
    </ul>
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
      dates: []
    }
  },
  async mounted () {
    this.dates = (await this.$db.daily.keys()).reverse()
  }
}
</script>

<style scoped>

</style>
