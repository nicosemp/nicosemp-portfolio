<script setup lang="ts">
import { RouterLink } from "vue-router";
const props =
  defineProps<{ width: number; height: number; position: string }>();
</script>

<template>
  <div>
    <div
      class="absolute"
      :class="position"
      :style="{
        width: props.width + 'px',
        height: props.height + 'px',
      }"
    >
      <div class="container py-16 md:py-40 px-8 md:px-0 h-full">
        <div class="flex flex-col justify-between h-full">
          <div>
            <div class="mb-12 md:mb-24">
              <h1 class="mb-4">Nicolò Maria Semprini</h1>
              <h2>Full Stack Software Developer</h2>
            </div>
            <div>
              <a
                href="mailto:info@nicosemp.com"
                target="_blank"
                rel="noopener"
                class="special-link md:text-4xl"
                >info@nicosemp.com</a
              >
            </div>
          </div>
          <div>
            <RouterLink :to="{ name: 'curriculum-vitae' }" class="special-link"
              >CV</RouterLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
