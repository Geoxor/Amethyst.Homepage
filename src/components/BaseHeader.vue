<template>
  <header class="absolute-x z-10 items-center flex justify-center w-full py-8 gap-6">
    <button class="text-[#08080B] bg-[#A68CDA] rounded-full py-2 px-4 cursor-pointer "  >
      <a class='text-inherit no-underline' target="_blank" href="https://amethyst.geoxor.moe/guides/installation#installing-precompiled-packages">Download</a>
    </button>
    <button>
      <AmethystLogo />
    </button>
    <a class="text-[#E1D1FE] text-opacity-75 hover:text-opacity-100" target="_blank" href="https://github.com/Geoxor/amethyst">GitHub</a>
    <a class="text-[#E1D1FE] text-opacity-75 hover:text-opacity-100" target="_blank" href="https://amethyst.geoxor.moe/user-manual">Documentation</a>
  </header>
</template>

<script setup lang="ts">
import AmethystLogo from './AmethystLogo.vue';

</script>

<style scoped lang="postcss">

</style>