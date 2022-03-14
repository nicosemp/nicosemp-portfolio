import { ref, onMounted } from "vue";

export const useInnerSize = () => {
  const width = ref(window.innerWidth);
  const height = ref(window.innerHeight);

  onMounted(() => {
    window.addEventListener("resize", () => {
      width.value = window.innerWidth;
      height.value = window.innerHeight;
    });
  });

  return { width, height };
};
