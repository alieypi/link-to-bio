<script setup lang="ts">
interface Props {
  icon?: string;
  title: string | number;
  subtitle?: string | number;
  link?: string;
  backgroundColor?: string;
  fontColor?: string;
}

withDefaults(defineProps<Props>(), {
  icon: "solar:info-circle-linear",
  link: "#",
  backgroundColor: "#EAECF1",
  fontColor: "#5C5F82",
});
</script>

<template>
  <a :href="link" class="flex flex-row justify-between items-center rounded-[20px] h-[70px] w-full duration-300 px-[20px] py-[18px]">
    <div class="flex flex-row gap-[10px] items-center">
      <Icon :icon width="22" height="22" />
      <span class="text-[18px] font-bold">{{ title }}</span>
    </div>
    <span class="fa-num">{{ subtitle }}</span>
  </a>
</template>

<style scoped>
a {
  background-color: v-bind(backgroundColor);
  color: v-bind(fontColor);
}
</style>
