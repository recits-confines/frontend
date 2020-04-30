<template>
  <Swipe
    :card-list="cards"
    @submit="onSubmit"
  />
</template>

<script>
import Swipe from '@/components/Swipe'

export default {
  components: {
    Swipe
  },
  data () {
    return {
      cards: [
        {
          name: 'training',
          context: 'Pour répondre',
          description: 'Oui en glissant à droite. Non à gauche.',
          icon: '↔️'
        },
        {
          name: 'inquiet',
          description: 'Je suis inquiet',
          icon: '🤞🏼'
        },
        {
          name: 'inquietProches',
          description: 'Pour la santé de mes proches',
          icon: '👨‍👩‍👧‍👦',
          relates: 'inquiet'
        },
        {
          name: 'inquietFinances',
          description: 'Pour mes conditions financières',
          icon: '💵',
          relates: 'inquiet'
        },
        {
          name: 'inquietSanitaire',
          description: 'Pour la situation sanitaire globale',
          icon: '😷',
          relates: 'inquiet'
        },
        {
          name: 'alcool',
          description: 'J’ai consommé de l’alcool',
          icon: '🍻'
        },
        {
          name: 'sommeil',
          description: 'Cette nuit, j’ai bien dormi',
          icon: '🛏'
        },
        {
          name: 'sortie',
          description: 'Je suis sorti',
          icon: '🌳'
        },
        {
          name: 'sortieSport',
          description: 'Pour faire du sport',
          icon: '🏃',
          relates: 'sortie'
        },
        {
          name: 'sortieCourses',
          description: 'Pour acheter des provision',
          icon: '🛒',
          relates: 'sortie'
        },
        {
          name: 'sortieChien',
          description: 'Pour promener le chien',
          icon: '🐶',
          relates: 'sortie'
        },
        {
          name: 'sortieTravail',
          description: 'Pour aller travailler',
          icon: '🚗',
          relates: 'sortie'
        },
        {
          name: 'sortieAutre',
          description: 'Pour une autre raison',
          icon: '🏙',
          relates: 'sortie'
        },
        {
          name: 'livraison',
          description: 'J’ai été livré à domicile',
          icon: '📦'
        },
        {
          name: 'routineDouche',
          description: 'Je me suis douché/habillé',
          icon: '🚿'
        },
        {
          name: 'devoir',
          description: 'J’ai aidé aux devoirs des enfants',
          icon: '📚'
        },
        {
          name: 'menageBrico',
          description: 'J’ai bricolé ou fais le ménage',
          icon: '🧽'
        },
        {
          name: 'sportDomicile',
          description: 'J’ai fait du sport à la maison',
          icon: '🤸'
        }
      ].reverse()
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
      this.$router.push('/daily/end')
      loader.hide()
    }
  }
}
</script>

<style scoped>
</style>
