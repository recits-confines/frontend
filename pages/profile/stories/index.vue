<template>
  <Page title="Mes anecdotes confinées">
    <div
      v-for="story in stories"
      :key="story.date.toString()"
      class="bg-white rounded-lg shadow-lg p-10 min-h-5 my-4"
    >
      <p class="text-xs font-semibold text-center">
        Le <time>{{ new Intl.DateTimeFormat(undefined, { dateStyle: 'full' }).format(story.date) }}</time>
      </p>
      <h3 class="text-2xl font-light text-center">
        {{ story.title }}
      </h3>
      <p>
        {{ story.body }}
      </p>
    </div>
    <nuxt-link
      to="/profile/stories/create"
      class="bg-main hover:bg-transparent uppercase font-black text-center text-background hover:text-main py-2 px-6 my-4 border border-transparent hover:border-main rounded-full"
    >
      + Nouvelle anecdote
    </nuxt-link>
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
      stories: []
    }
  },
  async mounted () {
    this.stories = (await this.$db.stories.getAll()).reverse()
  }
}
</script>

<style scoped>

</style>
