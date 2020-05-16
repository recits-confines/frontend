<template>
  <Page title="Mon historique confiné">
    <nuxt-link
      to="/weekly"
      class="bg-main hover:bg-transparent uppercase font-black text-center text-background hover:text-main py-2 px-6 my-4 border border-transparent hover:border-main rounded-full"
    >
      Faire une revue de ma semaine
    </nuxt-link>
    <a
      :href="`mailto:recitsconfines@gmail.com?subject=%5BR%C3%A9cits%20confin%C3%A9s%5D%20Participation%20aux%20entretiens&body=Identifiant%20%3A%20${userId}%0D%0A%0D%0A---%0D%0A%0D%0AVotre%20message%20(optionnel)`"
      class="bg-main hover:bg-transparent uppercase font-black text-xs text-center text-background hover:text-main py-2 px-6 my-4 border border-transparent hover:border-main rounded-full"
    >
      <span class="rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-2">Tip</span>
      Participer aux entretiens
    </a>
    <div
      v-for="date in dates"
      :key="date.date.toDateString()"
      class="bg-white rounded-lg shadow-lg p-10 min-h-5 my-4"
    >
      <h3 class="text-xs font-semibold text-center">
        {{ new Intl.DateTimeFormat(undefined, { dateStyle: 'full' }).format(date.date) }}
      </h3>
      <p v-if="debutCarnet" class="text-2xl font-light text-center">
        Jour <b class="font-bold">{{ dateDiff(Date.parse(debutCarnet), date.date) }}</b> du carnet
      </p>
      <hr class="border-secondary w-3 mx-auto my-2">

      <p v-if="date.meteo">
        Météo du jour : <b>{{ date.meteo }}</b>
      </p>
      <p>
        Ce jour là,
        <span v-if="date.moral_daily">le moral est plutôt <b>{{ moral_daily(date) }}</b>,</span>
        <span v-if="date.sommeil !== null">j'ai <b>{{ sommeil(date) }} dormi</b>,</span>
        <span v-if="date.routineDouche !== null">je <b>{{ routineDouche(date) }} douché/habillé</b></span>.
        <span v-if="date.inquiet !== null">Je <b>{{ inquiet(date) }} inquiet</b> mais </span>
      </p>
      <p>
        <span v-if="date.collations">
          J’ai pris {{ date.collations }} repas dans la journée.
        </span>
        <span v-if="date.collations">
          J’ai pris {{ date.collations }} repas dans la journée.
        </span>
      </p>
      <div v-if="date.sortie">
        <p>Je suis sorti pour :</p>
        <ul class="list-disc list-inside">
          <li v-if="date.sortieSport">
            faire du sport
          </li>
          <li v-if="date.sortieCourses">
            acheter de la nourriture
          </li>
          <li v-if="date.sortieChien">
            promener le chien
          </li>
          <li v-if="date.sortieTravail">
            aller travailler
          </li>
          <li v-if="date.sortieAutre">
            une autre raison
          </li>
        </ul>
      </div>
      <p v-else>
        Je ne suis pas sorti.
      </p>
      <p>
        Je n’ai pas consommé d’alcool, et je n’ai pas fumé de tabac.
        <span v-if="date.travail">
          J’ai travaillé {{ date.travail }} h.
        </span>
      </p>
    </div>
  </Page>
</template>

<script>
/* eslint-disable camelcase */
import { mapState } from 'vuex'
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
  computed: {
    ...mapState({
      userId: state => state.user.id,
      debutCarnet: state => state.user.debutCarnet
    })
  },
  async mounted () {
    this.dates = (await this.$db.daily.getAll()).reverse()
    // this.dates = await this.$db.daily.getAll()
    // reports.filter(day => day.sortie)
    // this.cards = [
    //   {
    //     context: 'Pendant le confinement',
    //     description: `J'ai fais une sortie ${reports.filter(day => day.sortie).length} jours`
    //   }
    // ]
  },
  methods: {
    dateDiff (datePast, dateCompare) {
      return Math.floor((Date.UTC(
        dateCompare.getFullYear(),
        dateCompare.getMonth(),
        dateCompare.getDate()
      ) - datePast) / (1000 * 60 * 60 * 24))
    },
    moral_daily ({ moral_daily }) {
      if (moral_daily < 3) {
        return 'mauvais'
      } else if (moral_daily < 5) {
        return 'plutôt bas'
      } else if (moral_daily < 7) {
        return 'moyen'
      } else if (moral_daily < 9) {
        return 'bon'
      } else {
        return 'excellent'
      }
    },
    sommeil ({ sommeil }) {
      return sommeil ? 'bien' : 'mal'
    },
    routineDouche ({ routineDouche }) {
      return routineDouche ? 'me suis' : 'ne me suis pas'
    },
    inquiet ({ inquiet }) {
      return inquiet ? 'suis' : 'ne suis pas'
    }
  }
}
</script>

<style scoped>
</style>
