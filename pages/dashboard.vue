<template>
  <Page title="Tableau de bord">
    <Swipe
      v-if="cards.length"
      :carrousel="true"
      :card-list="cards"
    />
    <!--    <ul class="list-disc list-inside">-->
    <!--      <li-->
    <!--        v-for="date in dates"-->
    <!--        :key="date.toString()"-->
    <!--      >-->
    <!--        Le <time>{{ new Intl.DateTimeFormat(undefined, { dateStyle: 'full' }).format(date) }}</time>-->
    <!--      </li>-->
    <!--    </ul>-->
  </Page>
</template>

<script>
import Page from '@/components/Page'
import Swipe from '@/components/Swipe'

export default {
  components: {
    Swipe,
    Page
  },
  data () {
    return {
      dates: [],
      cards: []
    }
  },
  async mounted () {
    // this.dates = (await this.$db.daily.keys()).reverse()
    const reports = await this.$db.daily.getAll()
    reports.filter(day => day.sortie)
    this.cards = [
      {
        context: 'Pendant le confinement',
        description: `J'ai fais une sortie ${reports.filter(day => day.sortie).length} jours`
      }
    ]
  }
}
</script>

<style scoped>

</style>
