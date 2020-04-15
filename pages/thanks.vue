<template>
  <div>
    <div class="text-center px-1">
      <h1 class="title">
        Merci
      </h1>
      <h2 class="subtitle">
        Et à bientôt
      </h2>
    </div>
    <hr>
  </div>
</template>

<script>

export default {
  components: {}
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

hr {
  @apply my-10;
}
</style>
