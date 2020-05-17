<template>
  <Swipe
    :card-list="cards"
    @submit="onSubmit"
  />
</template>

<script>
import { mapActions } from 'vuex'
import Swipe from '@/components/Swipe'
import stack from '@/forms/swipe.json'

export default {
  components: {
    Swipe
  },
  data () {
    return {
      cards: stack.reverse()
    }
  },
  async beforeMount () {
    if (await this.$db.daily.get()) {
      this.$router.push('/daily/end')
    } else if (this.$store.state.report.type !== 'daily') {
      this.$router.push('/daily')
    }
  },
  methods: {
    ...mapActions({
      save: 'report/save',
      store: 'report/store'
    }),
    async onSubmit (data) {
      this.$nuxt.$loading.start()
      await this.save(data)
      await this.store()
      this.$router.push('/daily/end')
      this.$nuxt.$loading.finish()
    }
  }
}
</script>

<style scoped>
</style>
