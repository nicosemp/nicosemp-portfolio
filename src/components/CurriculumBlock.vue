<script setup lang="ts">
const props = defineProps<{
  company: string;
  place: string;
  position: string;
  date: string;
}>();
</script>

<template>
  <div class="mb-4">
    <div class="flex justify-between">
      <h3 class="font-semibold">{{ props.company }}</h3>
      <h3 class="font-semibold text-right">{{ props.place }}</h3>
    </div>
    <div class="flex justify-between">
      <h3 class="font-semibold italic">{{ props.position }}</h3>
      <h3 class="italic text-right">{{ props.date }}</h3>
    </div>
    <slot></slot>
  </div>
</template>

<style scoped>
p {
  @apply mb-2;
}

ul {
  @apply list-disc list-inside;
}
</style>
