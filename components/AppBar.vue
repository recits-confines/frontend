<template>
  <nav class="w-100 bg-white sticky bottom-0 shadow">
    <ul class="flex container mx-auto">
      <li class="flex-1 mr-2">
        <nuxt-link
          class="text-center block border-b-4 text-main py-3 px-2"
          active-class="border-main"
          to="/user"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72.63 79.23" class="fill-current w-10 h-10 mx-auto">
            <path d="M36.32 39.86a19.93 19.93 0 10-19.94-19.93 20 20 0 0019.94 19.93zm0-31.57a11.64 11.64 0 11-11.64 11.64A11.64 11.64 0 0136.32 8.3zM8.3 79.23a28 28 0 1156 0h8.3a36.32 36.32 0 00-72.6 0z" />
          </svg>
        </nuxt-link>
      </li>
      <li class="flex-1 mr-2">
        <nuxt-link
          class="text-center block border-b-4 text-main py-3 px-2"
          active-class="border-main"
          to="/daily"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85.47 81.06" class="fill-current w-10 h-10 mx-auto">
            <path d="M76.92 8.55H66.24V4.27a4.28 4.28 0 00-8.55 0v4.28H47V4.27a4.28 4.28 0 00-8.55 0v4.28H27.78V4.27a4.28 4.28 0 00-8.55 0v4.28H8.55A8.57 8.57 0 000 17.09v55.42a8.58 8.58 0 008.55 8.55h68.37a8.58 8.58 0 008.55-8.55V17.09a8.57 8.57 0 00-8.55-8.54zm0 64H8.55V17.09h10.68v2.14a4.28 4.28 0 008.55 0v-2.14h10.68v2.14a4.28 4.28 0 008.55 0v-2.14h10.68v2.14a4.28 4.28 0 008.55 0v-2.14h10.68z" />
            <path d="M55.77 33.59L36.65 52.71l-6.95-7a4.31 4.31 0 00-6.09 6.09l9.94 9.94a4.13 4.13 0 006 0l22.1-22.06a4.27 4.27 0 000-6.09 4 4 0 00-5.88 0z" />
          </svg>
        </nuxt-link>
      </li>
      <li class="flex-1 mr-2">
        <nuxt-link
          class="text-center block border-b-4 text-main py-3 px-2"
          active-class="border-main"
          to="/dashboard"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 284.87 260.36" class="fill-current w-10 h-10 mx-auto">
            <path d="M153.17 0A132.1 132.1 0 0031.76 79.33L23 63.94A12.21 12.21 0 101.64 75.77l22.37 40a12.19 12.19 0 0016.27 4.83l39.79-20.3A12.2 12.2 0 1069.9 78.11c-.3.14-.6.29-.89.45L55.92 85.3a107.54 107.54 0 0197.25-60.89c59.52 0 107.3 47.3 107.3 105.77S212.69 236 153.17 236c-50.91 0-93.32-35-104.5-81.49a12.22 12.22 0 10-23.77 5.72c13.8 57.45 66.19 100.18 128.27 100.18 72.54 0 131.7-58.34 131.7-130.18S225.71 0 153.17 0zm1.4 52.63A12.21 12.21 0 00142.49 65v65.22a12.19 12.19 0 004.58 9.53l40.68 32.55A12.21 12.21 0 00203 153.2l-36.1-28.86V65.09a12.21 12.21 0 00-12-12.46z" />
          </svg>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  components: {}
}
</script>

<style scoped>

</style>
