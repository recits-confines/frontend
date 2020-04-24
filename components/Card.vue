<template>
  <div class="card">
    <div class="card-inner">
      <slot />
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.card {
  @apply hidden absolute top-0 duration-1000 ease-out;
  transition-property: padding-top;
}

.card-inner {
  @apply flex flex-col justify-around items-center text-center rounded-lg bg-white mx-auto p-10 transition-transform duration-1000 ease-out;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  height: 24rem;
}

.card:nth-last-of-type(4),
.card:nth-last-of-type(3) {
  @apply flex pt-0;
}

.card:nth-last-of-type(4) .card-inner {
  transform: scale(0.7);
}

.card:nth-last-of-type(3) .card-inner {
  transform: scale(0.8);
}

.card:nth-last-of-type(2) {
  @apply flex pt-8;
}

.card:nth-last-of-type(2) .card-inner {
  transform: scale(0.9);
}

.card:last-of-type {
  @apply flex pt-16;
}

.card:last-of-type .card-inner {}
</style>
