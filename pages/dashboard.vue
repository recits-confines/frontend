<template>
  <Page title="Mon historique confirmé">
    <div
      class="bg-white rounded-lg shadow-lg p-10 min-h-5 my-4"
    >
      <h3 class="text-4xl text-center">
        🌳
      </h3>
      <p class="text-2xl font-medium text-center">
        Depuis que je suis confiné
      </p>
      <p class="text-3xl font-medium text-center">
        je suis sorti.e<br><span class="text-6xl font-hairline">{{ dates.filter(day => day.sortie).length }}</span>
        <span class="text-xl font-bold">jours</span>
      </p>
      <ul class="text-2xl font-light text-center">
        <li>
          <span class="text-xl font-bold">{{ dates.filter(day => day.sortieChien).length }}</span> fois pour sortir le 🐶
        </li>
        <li>
          <span class="text-xl font-bold">{{ dates.filter(day => day.sortieCourses).length }}</span> fois pour faire les 🛒
        </li>
      </ul>
      <p
        v-if="latestMoral"
        class="text-2xl font-light text-center mt-2"
      >
        Hier, <b>le moral</b> était {{ latestMoral }}
      </p>
    </div>
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
      dates: [],
      cards: []
    }
  },
  computed: {
    latestMoral () {
      if (this.dates.length < 1 || !this.dates[0].moral_daily) {
        return 'non renseigné'
      }
      const value = this.dates[0].moral_daily
      if (value < 3) {
        return 'mauvais'
      } else if (value < 5) {
        return 'plutôt bas'
      } else if (value < 7) {
        return 'moyen'
      } else if (value < 9) {
        return 'bon'
      } else {
        return 'excellent'
      }
    }
  },
  async mounted () {
    // this.dates = (await this.$db.daily.keys()).reverse()
    this.dates = await this.$db.daily.getAll()
    // reports.filter(day => day.sortie)
    // this.cards = [
    //   {
    //     context: 'Pendant le confinement',
    //     description: `J'ai fais une sortie ${reports.filter(day => day.sortie).length} jours`
    //   }
    // ]
  }
}
</script>

<style scoped>

</style>
