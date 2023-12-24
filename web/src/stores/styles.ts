// Path: web/src/stores/styles.ts
import { writable, get } from "svelte/store";

export const styles = writable({
  mode: "light", // Estado inicial neutro
  color: "orange",
  theme: "uno",
});

export const toggleMode = () => {
  styles.update((s) => {
    const newMode = s.mode === "light" ? "dark" : "light";
    s.mode = newMode;
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark", newMode === "dark");
      localStorage.setItem("darkMode", newMode === "dark");
    }
    return s;
  });
};

export const setMode = (mode) => {
  styles.set({ ...get(styles), mode });
  if (typeof window !== "undefined") {
    document.documentElement.classList.toggle("dark", mode === "dark");
    localStorage.setItem("darkMode", mode === "dark");
  }
};
