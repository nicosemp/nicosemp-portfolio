<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useDraggable } from "@vueuse/core";
import { useInnerSize } from "@/composables/innerSize";
import HomeRectangle from "@/components/HomeRectangle.vue";

const { width, height } = useInnerSize();

const draggableSize = ref(112);

const threshold = 20;
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
    x: Math.ceil((width.value / 4) * 3 - draggableSize.value / 2),
    y: Math.ceil((height.value / 4) * 3 - draggableSize.value / 2),
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

watch([width, height], () => {
  adjustDraggable();
});
</script>

<template>
  <main class="">
    <HomeRectangle
      class="skin-sky"
      position="top-0 left-0"
      :height="height"
      :width="width"
      :style="{ width: x + 56 + 'px', height: y + 56 + 'px' }"
    />
    <HomeRectangle
      class="skin-green"
      position="top-0 right-0"
      :height="height"
      :width="width"
      :style="{ width: width - x - 56 + 'px', height: y + 56 + 'px' }"
    />

    <HomeRectangle
      class="skin-amber"
      position="bottom-0 left-0"
      :height="height"
      :width="width"
      :style="{ width: x + 56 + 'px', height: height - y - 56 + 'px' }"
    />

    <HomeRectangle
      class="skin-red"
      position="bottom-0 right-0"
      :height="height"
      :width="width"
      :style="{ width: width - x - 56 + 'px', height: height - y - 56 + 'px' }"
    />

    <div
      ref="draggable"
      :style="style"
      id="draggable"
      class="h-28 w-28 rounded-full bg-slate-700 flex justify-center items-center fixed cursor-pointer hover:bg-slate-600 hover:scale-110 touch-none"
    >
      <p class="select-none text-white"><strong>Drag me!</strong></p>
    </div>
  </main>
</template>

<style scoped>
#draggable {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
