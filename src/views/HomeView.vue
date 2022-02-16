<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useDraggable, useWindowSize } from "@vueuse/core";

const draggableSize = ref(112);

const { width, height } = useWindowSize();
const threshold = 100;
const xLimits = computed(() => {
  return {
    left: threshold,
    right: width.value - threshold - draggableSize.value,
  };
});
const yLimits = computed(() => {
  return {
    top: threshold,
    bottom: height.value - threshold - draggableSize.value,
  };
});

const draggable = ref<HTMLElement | null>(null);

const { x, y, style } = useDraggable(draggable, {
  initialValue: {
    x: (width.value / 4) * 3 - draggableSize.value / 2,
    y: (height.value / 4) * 3 - draggableSize.value / 2,
  },
  onMove() {
    adjustDraggable();
  },
});

const adjustDraggable = () => {
  if (x.value < xLimits.value.left) x.value = xLimits.value.left;
  else if (x.value > xLimits.value.right) x.value = xLimits.value.right;

  if (y.value < yLimits.value.top) y.value = yLimits.value.top;
  else if (y.value > yLimits.value.bottom) y.value = yLimits.value.bottom;
};

watch(width, () => {
  adjustDraggable();
});
</script>

<template>
  <main class="relative">
    <div
      class="bg-sky-900 fixed top-0 left-0 overflow-hidden"
      :style="{ width: x + 56 + 'px', height: y + 56 + 'px' }"
    >
      <div class="h-screen w-screen absolute top-0 left-0">
        <div class="container py-40">
          <div class="mb-24">
            <h1 class="mb-4">Nicolò Maria Semprini</h1>
            <h2>Full Stack Software Developer</h2>
          </div>

          <div class="text-center">
            <a
              href="mailto:info@nicosemp.com"
              target="_blank"
              rel="noopener"
              class="text-4xl special-link"
              >info@nicosemp.com</a
            >
          </div>
        </div>
      </div>
    </div>
    <div
      class="bg-green-900 text-red-300 fixed top-0 right-0 overflow-hidden"
      :style="{ width: width - x - 56 + 'px', height: y + 56 + 'px' }"
    >
      <div class="h-screen w-screen absolute right-0">
        <div class="container py-40">
          <div class="mb-24">
            <h1 class="mb-4">Nicolò Maria Semprini</h1>
            <h2>Full Stack Software Developer</h2>
          </div>

          <div class="text-center">
            <a
              href="mailto:info@nicosemp.com"
              target="_blank"
              rel="noopener"
              class="text-4xl special-link"
              >info@nicosemp.com</a
            >
          </div>
        </div>
      </div>
    </div>
    <div
      class="bg-amber-900 fixed left-0 bottom-0 overflow-hidden"
      :style="{ width: x + 56 + 'px', height: height - y - 56 + 'px' }"
    >
      <div class="h-screen w-screen absolute bottom-0">
        <div class="container py-40">
          <div class="mb-24">
            <h1 class="mb-4">Nicolò Maria Semprini</h1>
            <h2>Full Stack Software Developer</h2>
          </div>

          <div class="text-center">
            <a
              href="mailto:info@nicosemp.com"
              target="_blank"
              rel="noopener"
              class="text-4xl special-link"
              >info@nicosemp.com</a
            >
          </div>
        </div>
      </div>
    </div>
    <div
      class="bg-red-900 fixed right-0 bottom-0 overflow-hidden"
      :style="{ width: width - x - 56 + 'px', height: height - y - 56 + 'px' }"
    >
      <div class="h-screen w-screen absolute right-0 bottom-0">
        <div class="container py-40">
          <div class="mb-24">
            <h1 class="mb-4">Nicolò Maria Semprini</h1>
            <h2>Full Stack Software Developer</h2>
          </div>

          <div class="text-center">
            <a
              href="mailto:info@nicosemp.com"
              target="_blank"
              rel="noopener"
              class="text-4xl special-link"
              >info@nicosemp.com</a
            >
          </div>
        </div>
      </div>
    </div>

    <div
      ref="draggable"
      :style="style"
      id="draggable"
      class="h-28 w-28 rounded-full bg-teal-700 flex justify-center items-center fixed cursor-pointer hover:bg-teal-600 hover:scale-110"
    >
      <p class="select-none">Drag me!</p>
    </div>
  </main>
</template>

<style scoped>
#draggable {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.special-link {
  &:after {
    content: "";
    @apply absolute left-0 bottom-2 h-1 bg-yellow-300 w-full -z-10 transition-all;
  }
  &:hover:after {
    @apply bottom-0 h-10;
  }
}
</style>
