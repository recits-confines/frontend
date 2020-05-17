<template>
  <Page title="État initial">
    <Report
      :inputs="inputs"
      :values="values"
      :do-init="true"
      :do-store="true"
      type="initial"
      end="/user/end"
    />
    <img
      class="w-4/12 mx-auto my-10"
      src="@/static/images/map.svg"
    >
  </Page>
</template>

<script>
import { mapState } from 'vuex'
import Page from '@/components/Page'
import Report from '@/components/Report'
import inputs from '@/forms/initial.json'

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
  computed: {
    ...mapState({
      values: state => state.user.initial
    })
  }
}
</script>

<style scoped>
</style>
