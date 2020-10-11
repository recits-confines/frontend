<template>
  <Page title="Mon historique confiné">
    <p class="my-5 text-center">
      Pensez à faire la revue de votre semaine !
    </p>
    <nuxt-link
      to="/weekly"
      class="bg-main hover:bg-transparent uppercase font-black text-center text-background hover:text-main py-2 px-6 my-4 border border-transparent hover:border-main rounded-full"
    >
      Faire une revue de ma semaine
    </nuxt-link>
    <a
      :href="`mailto:recitsconfines@gmail.com?subject=%5BR%C3%A9cits%20confin%C3%A9s%5D%20Participation%20aux%20entretiens&body=Identifiant%20%3A%20${userName}%0D%0A%0D%0A---%0D%0A%0D%0AVotre%20message%20(optionnel)`"
      class="bg-main hover:bg-transparent uppercase font-black text-xs text-center text-background hover:text-main py-2 px-6 my-4 border border-transparent hover:border-main rounded-full"
    >
      <span class="rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-2">Tip</span>
      Participer aux entretiens
    </a>
    <div
      v-for="date in dates"
      :key="date.date.toDateString()"
      class="bg-white rounded-lg shadow-lg p-10 pt-4 min-h-5 my-4"
    >
      <p class="text-2xl text-center">
        {{ weather(date.data) }}
      </p>
      <h3 class="text-xs font-semibold text-center">
        {{ new Intl.DateTimeFormat(undefined, { dateStyle: 'full' }).format(date.date) }}
      </h3>
      <p v-if="debutCarnet" class="text-2xl font-light text-center">
        Jour <b class="font-bold">{{ dateDiff(Date.parse(debutCarnet), date.date) }}</b> du carnet
      </p>
      <hr class="border-secondary w-3 mx-auto my-2">

      <p>
        <em class="text-xl font-light">Ce jour là,</em>
        <span v-if="date.data.moral_daily">le moral est <b>{{ moral(date.data) }}</b>,</span>
        <span v-if="date.data.sante">je me sens <b>{{ sante(date.data) }}</b>,</span>
        <span v-if="date.data.inquiet !== null">
          je <b>{{ inquiet(date.data) }} inquiet</b><span v-if="date.data.inquiet"> pour <b>{{ formater.format(Object.entries({
            inquietProches: 'la santé de mes proches',
            inquietFinances: 'mes conditions financières',
            inquietSanitaire: 'la situation sanitaire globale'
          }).filter(el => date.data[el[0]]).map(el => el[1])) }}</b></span>,
        </span>
        <span v-if="date.data.alcohol"><b>j'ai consommé de l’alcool</b>,</span>
        <span v-if="date.data.sommeil !== null">et j'ai plutôt <b>{{ sommeil(date.data) }} dormi</b></span>.
      </p>
      <p v-if="date.data.sortie">
        Je <b>suis</b> sorti, pour <b>{{ formater.format(Object.entries({
          sortieCourses: 'acheter de la nourriture',
          sortieTravail: 'aller travailler',
          sortieAutre: 'd\'autres raisons'
        }).filter(el => date.data[el[0]]).map(el => el[1])) }}</b>.
      </p>
      <p v-else>
        Je <b>ne suis pas</b> sorti.
      </p>
      <p>
        <span v-if="date.data.routineDouche !== null">Je <b>{{ routine(date.data.routineDouche) }} douché</b>,</span>
        <span v-if="date.data.routineHabiller !== null">je <b>{{ routine(date.data.routineHabiller) }} habillé</b>,</span>
        <span v-if="date.data.sportDomicile !== null">{{ taches(date.data.sportDomicile) }} fait du <b>sport</b> et </span>
        <span v-if="date.data.travauxChamp !== null"><b>{{ taches(date.data.travauxChamp) }} travaillé dans mon champs</b></span>.
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
      dates: [],
      formater: ('ListFormat' in Intl) ? new Intl.ListFormat(undefined, { style: 'long', type: 'conjunction' }) : {
        format (list) {
          return list.join(', ')
        }
      }
    }
  },
  computed: {
    ...mapState({
      userName: state => state.user.name,
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
    weather ({ weather }) {
      switch (weather) {
        case 'soleil':
          return '☀'
        case 'nuages':
          return '☁'
        case 'pluie':
          return '🌧'
        case 'orages':
          return '🌩'
        default:
          return ''
      }
    },
    moral ({ moral_daily }) {
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
    sante ({ sante }) {
      if (sante < 3) {
        return 'très mal'
      } else if (sante < 5) {
        return 'plutôt mal'
      } else if (sante < 7) {
        return 'ni bien ni mal'
      } else if (sante < 9) {
        return 'plutôt bien'
      } else {
        return 'très bien'
      }
    },
    sommeil ({ sommeil }) {
      return sommeil ? 'bien' : 'mal'
    },
    routine (isRoutine) {
      return isRoutine ? 'me suis' : 'ne me suis pas'
    },
    inquiet ({ inquiet }) {
      return inquiet ? 'suis' : 'ne suis pas'
    },
    taches (isDone) {
      return isDone ? 'j\'ai' : 'je n\'ai pas'
    }
  }
}
</script>

<style scoped>
</style>
