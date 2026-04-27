import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useThemeStore = defineStore("theme", () => {
  const isDark = ref(true);

  const toggleTheme = () => {
    isDark.value = !isDark.value;
  };

  const setTheme = (dark: boolean) => {
    isDark.value = dark;
  };

  const saveTheme = () => {
    try {
      localStorage.setItem("blog-theme", JSON.stringify(isDark.value));
    } catch (e) {
      console.error("Failed to save theme:", e);
    }
  };

  const loadTheme = () => {
    try {
      const saved = localStorage.getItem("blog-theme");
      if (saved !== null) {
        isDark.value = JSON.parse(saved);
      }
    } catch (e) {
      console.error("Failed to load theme:", e);
    }
  };

  watch(isDark, () => {
    saveTheme();
    updateDOMTheme();
  });

  const updateDOMTheme = () => {
    document.documentElement.classList.toggle("dark", isDark.value);
    document.documentElement.classList.toggle("light", !isDark.value);
  };

  if (typeof window !== "undefined") {
    loadTheme();
    updateDOMTheme();
  }

  return {
    isDark,
    toggleTheme,
    setTheme,
  };
});
