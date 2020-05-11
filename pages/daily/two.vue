<template>
  <Swipe
    :card-list="cards"
    @submit="onSubmit"
  />
</template>

<script>
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
    }
  },
  methods: {
    async onSubmit (answers) {
      const loader = this.$loading.show()
      await this.$db.daily.add(answers)
      this.$store.commit('user/submitDaily')
      this.$router.push('/daily/end')
      loader.hide()
    }
  }
}
</script>

<style scoped>
</style>
