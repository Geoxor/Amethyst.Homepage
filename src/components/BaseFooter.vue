<template>
  <footer class="relative w-full flex flex-col text-white gap-12 px-16 xl:px-32 py-20 text-[#E1D1FE] bg-[#08080B]">
    <amethyst-logo-button />

    <amethyst-logo-footer class="absolute-xy" />

    <div class="flex gap-32 z-1">
      <base-footer-list name="Links" :links="[
        {link: 'https://amethyst.geoxor.moe/guides/installation#installing-precompiled-packages', name: 'Downloads'},
        {link: 'https://amethyst.geoxor.moe/user-manual', name: 'Documentation'},
        {link: 'https://github.com/Geoxor/amethyst', name: 'GitHub'},
        {link: 'https://discord.gg/geoxor', name: 'Discord'},
      ]" />   

      <base-footer-list name="Support" :links="[
        {link: 'https://github.com/sponsors/Geoxor', name: 'Donate'},
        {link: 'https://github.com/sponsors/Geoxor', name: 'Sponsor'},
      ]" />  
    </div>

    <p class="text-[#E1D1FE] text-opacity-75 font-semibold">MIT License - designed by Geoxor</p>
  </footer>
</template>

<script setup lang="ts">
import AmethystLogoButton from './AmethystLogoButton.vue';
import AmethystLogoFooter from './AmethystLogoFooter.vue';
import BaseFooterList from './BaseFooterList.vue';
</script>