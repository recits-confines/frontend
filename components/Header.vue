<template>
  <h2 class="w-100 bg-main text-center text-background uppercase font-black text-background py-5 px-6 mb-6">
    {{ title }}
  </h2>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
