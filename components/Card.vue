<template>
  <div class="card">
    <div class="card-inner">
      <div class="card-content">
        <slot>
          <p class="text-xs font-semibold">
            {{ context }}
          </p>
          <p v-if="icon" class="text-xl font-light my-2">
            {{ body }}
          </p>
          <div
            v-else
            class="text-xl font-light my-2"
            v-html="body"
          />
          <p v-if="icon" class="text-6xl">
            {{ icon }}
          </p>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    context: {
      type: String,
      default: 'Aujourd\'hui,'
    },
    body: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.card {
  @apply hidden absolute top-0 w-full duration-1000 ease-out;
  transition-property: padding-top;
}

.card-inner {
  @apply flex flex-col w-full rounded-lg bg-white mx-auto p-10 transition-transform duration-1000 ease-out;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  height: 24rem;
}

.card-content {
  @apply flex flex-col flex-grow justify-around items-center text-center opacity-0 transition-opacity duration-1000 ease-out;
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
  @apply opacity-100;
  transform: scale(0.9);
}

.card:last-of-type {
  @apply flex pt-16;
}

.card:last-of-type .card-content {
  @apply opacity-100;
}
</style>
