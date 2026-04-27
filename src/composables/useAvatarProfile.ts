import { ref } from "vue";

const STORAGE_KEY = "blog-avatar";
const avatarSrc = ref("");

if (typeof window !== "undefined") {
  avatarSrc.value = localStorage.getItem(STORAGE_KEY) ?? "";
}

export function useAvatarProfile() {
  function setAvatar(value: string) {
    avatarSrc.value = value;

    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, value);
    }
  }

  return {
    avatarSrc,
    setAvatar,
  };
}
