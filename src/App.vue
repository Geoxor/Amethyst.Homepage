<script setup lang="ts">
import BaseHeader from './components/BaseHeader.vue';
</script>

<template>
  <base-header />

  <div class="bg-[#08080B] flex flex-col"> 
    <div class="overflow-hidden w-full h-screen relative bg-[#A68CDA]">
      <video src="./assets/castrice.mp4" autoplay disableRemotePlayback loop muted class="w-3/4 z-1 rotate-30 object-cover absolute -left-1/7 top-32 " />
      <div class="bg-[#08080B] w-full h-2/3"/>
      <img src="./assets/app1.png" alt="amethyst" class="absolute-xy w-1/2 z-2" />
    </div>
    <div class="overflow-hidden w-full h-screen relative bg-[#E1D1FE]">
     
    </div>
  </div>
</template>

<style lang="postcss">
@import url(style.css);
</style>
