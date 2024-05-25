<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";

const props = withDefaults(
  defineProps<{
    open: boolean;
  }>(),
  {
    open: false,
  },
);

const emit = defineEmits(["close"]);

const actionSeetStatus = computed(() => props.open);
watch(actionSeetStatus, () => {
  if (!actionSeetStatus.value) {
    (document.querySelector("body") as HTMLBodyElement).style.overflowY = "auto";
  } else {
    (document.querySelector("body") as HTMLBodyElement).style.overflowY = "hidden";
  }
});

const sheet = ref<HTMLDivElement | null>(null);
const sheetHeader = ref<HTMLDivElement | null>(null);

const sheetDefaultTop = ref<number>(0);
const sheetTop = ref<number>(0);
const dragStart = () => {
  const { top } = window.getComputedStyle(sheet.value as HTMLDivElement);
  sheetDefaultTop.value = parseInt(top);
  sheetHeader.value?.addEventListener("touchmove", dragging);
};

const dragging = (event: TouchEvent) => {
  sheetTop.value = event.touches[0].clientY - (sheetHeader.value as HTMLDivElement).clientHeight / 2;

  if (sheetTop.value >= sheetDefaultTop.value) {
    (sheet.value as HTMLDivElement).style.top = `${sheetTop.value}px`;
  }

  sheetHeader.value?.addEventListener("touchend", dragEnd);
};

const dragEnd = () => {
  if (sheetTop.value > sheetDefaultTop.value) emit("close");
};
</script>

<template>
  <Transition name="fade" mode="out-in">
    <div class="fixed top-0 left-0 right-0 m-auto w-full max-w-[430px] h-screen bg-[#00000090] z-[10]" v-show="open" @click.self="$emit('close')">
      <Transition name="slide" mode="out-in">
        <div
          ref="sheet"
          class="absolute flex flex-col justify-between bottom-0 gap-[18px] w-full h-[500px] bg-white rounded-t-[40px] px-[32px] z-[11]"
          v-if="open"
        >
          <div ref="sheetHeader" class="flex justify-center py-[16px] cursor-grab" @touchstart="dragStart">
            <svg width="46" height="6" viewBox="0 0 46 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M43 3H23H3" stroke="#6C8091" stroke-opacity="0.4" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <div class="flex flex-col items-center gap-[12px]">
            <span class="text-[20px] font-bold text-[#5C5F82]">اشتراک گذاری صفحه</span>
            <span class="text-[14px] text-[#5C5F82]">کد زیر را اسکن کنید</span>
          </div>
          <div class="m-auto">
            <img src="/qr.svg" alt="" width="250" height="250" class="fill-[#5C5F82]" />
          </div>
          <div class="w-full text-center mb-[100px]">
            <span class="text-[20px] font-bold text-[#5C5F82]">find.me/alieypi</span>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active {
  transition: all 0.3s cubic-bezier(0.12, 0.63, 0.55, 1);
}

.slide-leave-active {
  transition: all 0.3s ease-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(600px);
}
</style>
