<template>
  <header class="absolute-x text-14px z-10 items-center flex justify-center w-full py-8 gap-6">
    <div class="w-full flex justify-end">
      <a ref="link" class="text-[#08080B] text-14px font-semibold bg-[#A68CDA] rounded-full py-2 px-4 cursor-pointer" target="_blank" href="https://amethyst.geoxor.moe/guides/installation#installing-precompiled-packages">Download</a>
    </div>

    <amethyst-logo-button />

    <div class="w-full flex gap-6">
      <a class="text-[#E1D1FE] text-opacity-75 hover:text-opacity-100" target="_blank" href="https://github.com/Geoxor/amethyst">GitHub</a>
      <a class="text-[#E1D1FE] text-opacity-75 hover:text-opacity-100" target="_blank" href="https://amethyst.geoxor.moe/user-manual">Documentation</a>
    </div>

  </header>
</template>

<script setup lang="ts">
import AmethystLogoButton from './AmethystLogoButton.vue';
</script>