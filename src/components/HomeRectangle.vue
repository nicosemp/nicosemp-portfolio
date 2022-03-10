<script setup lang="ts">
import { onMounted, ref } from "vue";

const windowHeight = ref(window.innerHeight);
const windowWidth = ref(window.innerWidth);

onMounted(() => {
  window.addEventListener("resize", () => {
    windowHeight.value = window.innerHeight;
    windowWidth.value = window.innerWidth;
  });
});
</script>

<template>
  <div
    class="absolute"
    :style="{ height: windowHeight + 'px', width: windowWidth + 'px' }"
  >
    <div class="container py-40 px-8 md:px-0">
      <div class="mb-24">
        <h1 class="mb-4">Nicolò Maria Semprini</h1>
        <h2>Full Stack Software Developer</h2>
      </div>

      <div>
        <a
          href="mailto:info@nicosemp.com"
          target="_blank"
          rel="noopener"
          class="text-3xl md:text-4xl special-link"
          >info@nicosemp.com</a
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-sky-200 .special-link:after {
  @apply bg-sky-500;
}
.bg-green-200 .special-link:after {
  @apply bg-green-500;
}
.bg-amber-200 .special-link:after {
  @apply bg-amber-500;
}
.bg-red-200 .special-link:after {
  @apply bg-red-500;
}
.special-link {
  &:after {
    content: "";
    width: calc(100% + 1rem);
    @apply absolute -left-2 bottom-1 h-3 -z-10 transition-all;
  }
  &:hover:after {
    @apply bottom-0 h-10;
  }
}
</style>
