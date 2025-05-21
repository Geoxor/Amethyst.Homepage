<script setup lang="ts">
import BaseHeader from './components/BaseHeader.vue';
</script>

<template>
  <base-header />

  <div class="bg-[#08080B] flex flex-col"> 
    <div class="overflow-hidden w-full h-screen relative bg-[#08080B]">
      <div class="w-260vh rotate-30 h-screen absolute origin-top-left -top-20 left-12 z-1 flex">
        <video src="./assets/castrice.mp4" class="w-1/2 h-min object-cover" autoplay disableRemotePlayback loop muted  />
        <img src="./assets/castrice-shadow.png" class="w-1/2 h-min scale-106 -translate-x-1 -translate-y-2 " alt="amethyst"  />
      </div>
      <div class="bg-[#A68CDA] origin-top-left w-full rotate-30 lg:w-1/2 absolute h-1/2 bottom-0 left-0"/>
      <img src="./assets/app1.png" alt="amethyst" class="w-6/7 absolute-y invisible lg:visible lg:w-1/2 max-w-240 right-1/16 z-2" />
    </div>
    <div class="overflow-hidden w-full h-screen relative bg-[#E1D1FE]">
     
    </div>
  </div>
</template>

<style lang="postcss">
@import url(style.css);
</style>
