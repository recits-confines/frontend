<template>
  <div>
    <Header title="Protection des données" />
    <div class="container mx-auto px-5 py-1 lg:px-64">
      <p>
        Toutes les données récoltées dans le cadre de cette recherche resteront strictement confidentielles et pourront
        faire l’objet de publications scientifiques en respectant l’anonymat des participants.
      </p>
      <p>
        Les données récoltées dans ce projet seront uniquement utilisées à des fins de recherches scientifique et ne
        seront en aucun cas publiées sur les réseaux sociaux.
      </p>
      <p>
        La participation au projet de recherche <q>Récits confinés</q> est bénévole et volontaire. Vous pouvez arrêter
        votre participation à tout moment.
      </p>
      <p>
        Les données feront l’objet d’un traitement par les deux promoteurs de l’étude en conformité avec la législation
        de la loi 78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés de la loi subséquente
        qui l’ont modifiée. A tout moment, vous pouvez exercer auprès des responsables de la recherche, le droit d’accès
        prévu par la loi informatique et liberté modifiée par la loi n° 94-548 du 1er juillet 1994 (40) ainsi que votre
        droit de rectification (article 36). La récolte et le stockage des données est en conformité avec le règlement
        européen RGPD.
      </p>
      <p>
        Lors de votre participation au projet de recherche <q>Récits confinés</q>, veillez à compléter explicitement la
        ligne de consentement, présent sur le questionnaire :
        <q>J’accepte librement et volontairement de participer au
          projet de recherche intitulé <q>Récits confinés</q>. Je suis informé qu’à tout moment, je peux interrompre ma
          participation dans cette étude, sans que cela me porte préjudice. J’ai été informé de la protection et de la
          confidentialité des informations et j’y consens</q>.
      </p>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header'

export default {
  components: {
    Header
  }
}
</script>

<style scoped>
p {
  @apply my-5;
}
</style>
