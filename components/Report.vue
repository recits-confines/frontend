<template>
  <FormulateForm
    v-if="loaded"
    class="pb-20"
    :values="values"
    @submit="submit"
  >
    <FormulateInput
      v-for="input in inputs"
      :key="input.name"
      v-bind="input"
    />
    <slot />
    <FormulateInput
      label="Je valide"
      type="submit"
    />
  </FormulateForm>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  props: {
    inputs: {
      type: Array,
      default: () => []
    },
    values: {
      type: Object,
      default: () => ({})
    },
    type: {
      type: String,
      default: ''
    },
    doInit: {
      type: Boolean,
      default: false
    },
    doStore: {
      type: Boolean,
      default: true
    },
    end: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapState({
      loaded: state => state.isLoaded
    })
  },
  methods: {
    ...mapActions({
      init: 'report/init',
      save: 'report/save',
      store: 'report/store'
    }),
    async submit (data) {
      this.$nuxt.$loading.start()
      if (this.doInit) {
        await this.init(this.type)
      }
      await this.save(data)
      if (this.doStore) {
        await this.store()
      }
      this.$router.push(this.end)
      this.$nuxt.$loading.finish()
    }
  }
}
</script>

<style scoped>
</style>
