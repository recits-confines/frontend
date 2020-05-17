<template>
  <Page :title="title">
    <Report
      :inputs="inputs"
      :do-init="false"
      :do-store="false"
      type="weekly"
      end="/weekly"
    />
  </Page>
</template>

<script>
import Page from '@/components/Page'
import Report from '@/components/Report'
import weekly from '@/forms/weekly.json'

export default {
  components: {
    Report,
    Page
  },
  data () {
    return {
      title: weekly[this.$route.params.id].title,
      inputs: weekly[this.$route.params.id].inputs
    }
  }
}
</script>

<style>
</style>
