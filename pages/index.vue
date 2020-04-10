<template>
  <div>
    <div class="text-center px-1">
      <logo />
      <h1 class="title">
        Récits confinés
      </h1>
      <h2 class="subtitle">
        Un projet de recherche scientifique participatif
      </h2>
      <div class="links">
        <nuxt-link
          to="/initial"
          class="button--green"
        >
          Participer
        </nuxt-link>
      </div>
    </div>
    <hr>
    <p>
      La période de confinement dans laquelle nous sommes entré.e.s est inédite. Nous souhaitons la documenter sur le vif en sollicitant ceux qui le souhaitent à tenir un carnet de confinement.
    </p>
    <hr>
    <h3 class="text-center text-xl mb-5">
      Le principe
    </h3>
    <ul class="list-inside list-disc">
      <li class="mb-3">
        Une trame à remplir une fois par jour pour enregistrer en un clin d'œil les variables qui racontent votre quotidien.
      </li>
      <li class="mb-3">
        Une fois par semaine des questions pour vous aider à faire le bilan des changements – ou non – intervenus dans vos habitudes.
      </li>
    </ul>
    <p>
      On a envie de savoir, entre autres, comment la situation a changé votre façon de faire vos courses, ou encore si vous participez à des apéro-skype !
    </p>
    <hr>
    <h3 class="text-center text-xl mb-5">
      Ça concerne qui ?
    </h3>
    <p>
      Tous les discours et tous les cas de confinement nous intéressent ! L’objectif de cette démarche de recherche est de recueillir au fur et à mesure les points de vue de confiné.e.s. On entend déjà la voix de certains, journalistes, écrivains, humoristes. Nous voulons aussi entendre celles qui portent moins .
    </p>
    <p>
      Nous souhaitons lire et entendre des confiné.e.s aux configurations spatiales et géographiques différentes dans des aires géographiques et culturelles variées en Europe, en Afrique, et dans le monde.
    </p>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 30px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 20px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

hr {
  @apply my-10;
}

</style>
