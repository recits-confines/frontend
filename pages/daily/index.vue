<template>
  <Page title="Les événements du jour">
    <Report
      :inputs="inputs"
      :do-init="true"
      :do-store="false"
      type="daily"
      end="/daily/swipe"
    />
  </Page>
</template>

<script>
import Page from '@/components/Page'
import Report from '@/components/Report'
import inputs from '@/forms/daily.json'

export default {
  components: {
    Report,
    Page
  },
  data () {
    return {
      inputs
    }
  },
  async beforeMount () {
    if (await this.$db.daily.get()) {
      this.$router.push('/daily/end')
    }
  }
}
</script>

<style scoped>
</style>
