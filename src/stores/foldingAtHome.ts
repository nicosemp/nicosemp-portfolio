import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

// TODO: read and print FAH score

export const useFahStore = defineStore({
  id: "counter",
  state: () => ({
    workUnits: useStorage("workUnits", 0),
    totalScore: useStorage("totalScore", 0),
  }),
  getters: {},
  actions: {
    increment() {
      this.workUnits++;
    },
  },
});
