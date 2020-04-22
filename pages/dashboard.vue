<template>
  <Page title="Tableau de bord">
    <ul>
      <li
        v-for="date in dates"
        :key="date.toString()"
      >
        {{ new Intl.DateTimeFormat(undefined, { dateStyle: 'full' }).format(date) }}
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
    this.dates = await this.$db.keys()
  }
}
</script>

<style scoped>

</style>
