<template>
  <nav class="flex text-main items-center justify-center flex-wrap bg-background p-6 border-main border-b">
    <div class="flex items-center flex-shrink-0 mr-6">
      <Logo :height="40" />
      <span class="uppercase font-black text-xl leading-none tracking-tight mx-2">Récits<br>confinés</span>
    </div>
<!--    <div class="block lg:hidden">-->
<!--      <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">-->
<!--        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>-->
<!--      </button>-->
<!--    </div>-->
<!--    <div class="w-full block lg:flex lg:items-center">-->
<!--      <div class="text-sm lg:flex-grow">-->
<!--        <nuxt-link-->
<!--          to="/about"-->
<!--          class="block mt-4 lg:inline-block lg:mt-0 text-main hover:text-white mr-4"-->
<!--        >-->
<!--          A propos-->
<!--        </nuxt-link>-->
<!--        <nuxt-link-->
<!--          to="/privacy"-->
<!--          class="block mt-4 lg:inline-block lg:mt-0 text-main hover:text-white mr-4"-->
<!--        >-->
<!--          Confidentialité-->
<!--        </nuxt-link>-->
<!--      </div>-->
<!--    </div>-->
  </nav>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style scoped>

</style>
