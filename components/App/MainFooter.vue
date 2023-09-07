<script setup lang="ts">
const year = computed(() => new Date().getFullYear());
</script>

<template>
  <div class="bg-black py-6">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center">
        <NuxtLink to="/">
          <img src="/img/logo.png" alt="Fidgrove" class="w-40" />
        </NuxtLink>
        <p class="text-white">© Fidgrove, {{ year }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
