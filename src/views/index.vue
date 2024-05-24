<script setup lang="ts">
import DonateButton from "@/components/DonateButton.vue";
import MainButton from "@/components/MainButton.vue";
import SocialButton from "@/components/SocialButton.vue";
</script>

<template>
  <main class="m-auto max-w-[430px] pt-[170px]">
    <div class="flex flex-col gap-[18px] w-full bg-white rounded-t-[40px] px-[32px]">
      <div class="flex flex-row">
        <div class="basis-1/6">
          <div class="flex justify-center py-[30px]">
            <button>
              <Icon icon="solar:qr-code-linear" width="28" height="28" color="#5C5F82" />
            </button>
          </div>
        </div>
        <div class="basis-4/6">
          <div class="overflow-hidden rounded-[50%] mx-auto mt-[-100px] w-[178px] h-[178px] border-8 border-white">
            <img src="/avatar.jpg" alt="avatar" class="w-full aspect-square" />
          </div>
        </div>
        <div class="basis-1/6">
          <div class="flex justify-center py-[30px]">
            <button>
              <Icon icon="solar:info-circle-linear" width="28" height="28" color="#5C5F82" />
            </button>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-[12px] items-center">
        <h1 class="text-[22px] font-bold text-[#5C5F82]">علیرضا امانی پور</h1>
        <span dir="ltr" class="text-[18px] font-regular text-[#6C8091] tracking-[2px]">@alieypi</span>
      </div>
      <div class="flex flex-col gap-[18px] py-[18px]">
        <MainButton icon="solar:phone-calling-linear" title="موبایل" subtitle="09395914874" link="call:+989395914874" />
        <MainButton icon="solar:point-on-map-perspective-linear" title="ایمیل" subtitle="eypidev@gmail.com" link="mailto:eypidev@gmail.com" />
        <MainButton icon="solar:earth-linear" title="وبسایت" subtitle="eypi.ir" link="https://eypi.ir" />
      </div>
      <div class="grid grid-cols-5 gap-[16px]">
        <SocialButton icon="bxl:instagram" link="/" color="#6C8091" />
        <SocialButton icon="bxl:telegram" link="/" color="#24A1DE" />
        <SocialButton icon="bxl:youtube" link="/" color="#FF0000" />
        <SocialButton icon="bxl:pinterest-alt" link="/" color="#E60023" />
        <SocialButton icon="bxl:linkedin" link="/" color="#0077B5" />
        <SocialButton icon="bxl:tiktok" link="/" color="#000000" />
        <SocialButton icon="bxl:facebook" link="/" color="#1877F2" />
        <SocialButton icon="bxl:discord-alt" link="/" color="#5865F2" />
        <SocialButton icon="bxl:github" link="/" color="#000000" />
        <SocialButton icon="fa6-brands:x-twitter" link="/" color="#000000" />
      </div>
      <div class="flex flex-col gap-[22px] mt-[50px]">
        <div class="w-full flex flex-col items-center gap-[10px]">
          <h2 class="text-[28px] font-bold text-[#5C5F82] drop-shadow-[-2px_2px_0_#5C5F8233]">حمایت مالی</h2>
          <hr class="w-[130px] border-[2px] border-[#F1A5A0]" />
        </div>
        <div class="grid grid-cols-2 gap-[16px]">
          <DonateButton :amount="1000" link="/" />
          <DonateButton :amount="5000" link="/" />
          <DonateButton :amount="10000" link="/" />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  background-image: url("/bg.png");
  background-position: center top;
  background-repeat: no-repeat;
  background-size: auto;
  background-attachment: fixed;
}
</style>
