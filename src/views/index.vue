<template>
  <main class="m-auto max-w-[430px] pt-[170px]">
    <div class="w-full h-screen bg-white rounded-t-[40px] px-[32px]">
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
      <div class="flex flex-col items-center">
        <h1 class="text-[22px] font-bold text-[#5C5F82]">علیرضا امانی پور</h1>
        <span dir="ltr" class="text-[18px] font-regular text-[#6C8091] tracking-[2px]">@alieypi</span>
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
