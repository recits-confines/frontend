<template>
  <Page title="Merci">
    <div class="flex flex-col text-center items-center justify-center">
      <h2 class="subtitle font-medium">
        C’est tout pour cette semaine.
      </h2>
      <p class="my-5">
        Maintenant, je peux visualiser mon historique confiné.
      </p>
      <nuxt-link
        to="/dashboard"
        class="bg-main hover:bg-transparent uppercase font-black text-background hover:text-main py-5 px-6 my-4 border border-transparent hover:border-main rounded-full"
      >
        Mon historique confiné
      </nuxt-link>
      <button
        v-if="scheduleAvailable"
        class="bg-main hover:bg-transparent uppercase font-black text-xs text-center text-background hover:text-main py-2 px-6 my-4 border border-transparent hover:border-main rounded-full"
        @click="schedule"
      >
        <span class="rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-2">Tip</span>
        Programmer un notification pour la semaine prochaine
      </button>
    </div>
  </Page>
</template>

<script>
import Page from '@/components/Page'
import icon from '@/static/icon.png'

export default {
  components: {
    Page
  },
  data () {
    return {
      scheduleAvailable: false
    }
  },
  beforeMount () {
    this.scheduleAvailable = Notification && 'showTrigger' in Notification.prototype
  },
  methods: {
    async schedule () {
      const reg = await navigator.serviceWorker.getRegistration()
      const permission = await Notification.requestPermission()
      if (permission === 'granted') {
        // const timestamp = new Date().setDate(new Date().getDate() + 1)
        const timestamp = new Date().getTime() + 5 * 1000
        await reg.showNotification(
          'Récits confinés',
          {
            tag: timestamp,
            body: 'C\'est le moment du récit de la semaine !',
            // eslint-disable-next-line
            showTrigger: new TimestampTrigger(timestamp),
            data: {
              type: 'daily'
            },
            icon
          }
        )
      }
    }
  }
}
</script>

<style scoped>

</style>
