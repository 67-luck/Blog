<script setup lang="ts">
import { computed, ref } from "vue";
import { useAvatarProfile } from "../composables/useAvatarProfile";

const props = withDefaults(
  defineProps<{
    size?: number;
  }>(),
  {
    size: 116,
  },
);

const fileInputRef = ref<HTMLInputElement | null>(null);
const { avatarSrc, setAvatar } = useAvatarProfile();

const avatarStyle = computed(() => ({
  width: `${props.size}px`,
  height: `${props.size}px`,
}));

function openFilePicker() {
  fileInputRef.value?.click();
}

function handleFileChange(event: Event) {
  const input = event.target as HTMLInputElement;
  const file = input.files?.[0];

  if (!file) {
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    const result = typeof reader.result === "string" ? reader.result : "";

    setAvatar(result);
    input.value = "";
  };
  reader.readAsDataURL(file);
}
</script>

<template>
  <div class="avatar-uploader" :style="avatarStyle" @click="openFilePicker">
    <img v-if="avatarSrc" :src="avatarSrc" alt="avatar" class="avatar-image" />
    <div v-else class="avatar-fallback">L</div>
    <button class="avatar-edit" type="button">Upload</button>
    <input
      ref="fileInputRef"
      class="avatar-input"
      type="file"
      accept="image/*"
      @change="handleFileChange"
    />
  </div>
</template>

<style scoped>
.avatar-uploader {
  position: relative;
  flex-shrink: 0;
  border-radius: 28px;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: 0 22px 48px rgba(0, 0, 0, 0.22);
  background: linear-gradient(135deg, #273256, #141c35);
}

.avatar-image,
.avatar-fallback {
  width: 100%;
  height: 100%;
}

.avatar-image {
  object-fit: cover;
}

.avatar-fallback {
  display: grid;
  place-items: center;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: #eff4ff;
  background:
    radial-gradient(circle at top, rgba(120, 139, 255, 0.28), transparent 42%),
    linear-gradient(135deg, #1a2340, #0f1730);
}

.avatar-edit {
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 10px;
  min-height: 32px;
  border: none;
  border-radius: 999px;
  background: rgba(6, 10, 24, 0.72);
  color: #f8fbff;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  pointer-events: none;
}

.avatar-input {
  display: none;
}

:global(.light) .avatar-uploader {
  border-color: rgba(75, 95, 146, 0.14);
  box-shadow: 0 18px 36px rgba(99, 118, 170, 0.16);
}

:global(.light) .avatar-edit {
  background: rgba(255, 255, 255, 0.78);
  color: #162033;
}
</style>
