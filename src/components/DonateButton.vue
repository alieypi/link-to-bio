<script setup lang="ts">
defineProps<{
  amount: number;
  link: string;
}>();
</script>

<template>
  <a :href="link" class="fa-num m-auto flex line-clamp-1 gap-1 justify-center items-center rounded-[20px] w-full h-[60px] bg-[#EAECF1]">
    <span class="font-bold text-[22px] text-[#5C5F82]">{{ amount.toLocaleString() }}</span>
    <small class="text-[14px] text-[#5C5F82]">تومان</small>
  </a>
</template>
