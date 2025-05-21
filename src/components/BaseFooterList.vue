<template>
  <section>
    <h1>{{name}}</h1>
    <ul>
      <li
      v-for="link in links"
      :key="link.name"
      ><a class="text-opacity-75 hover:text-opacity-100" target="_blank" :href="link.link">{{link.name}}</a></li>
    </ul>
  </section>
</template>

<script setup lang="ts">
defineProps<{name: string, links: ({link: string, name: string})[]}>();
</script>

<style scoped lang="postcss">
section {
  @apply flex flex-col gap-4 text-[#E1D1FE];
}

a {
  @apply text-[#E1D1FE] text-opacity-50 hover:text-opacity-100
}

ul {
  @apply flex flex-col gap-2 decoration-none list-none;
}
</style>