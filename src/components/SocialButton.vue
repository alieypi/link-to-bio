<script setup lang="ts">
import { reactive } from "vue";

interface Props {
  icon: string;
  link: string;
  color?: string;
}

withDefaults(defineProps<Props>(), {
  color: "#EAECF1",
});
</script>

<template>
  <a :href="link" class="flex justify-center items-center rounded-[20px] h-[60px] w-[60px]" :style="{ backgroundColor: `${color}26`, color }">
    <Icon :icon width="26" height="26" />
  </a>
</template>

<!-- <style scoped>
a {
  background-color: v-bind(colorSettings);
  color: v-bind(fontColor);
}
</style> -->
