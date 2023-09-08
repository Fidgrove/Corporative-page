<script setup lang="ts">
const year = computed(() => new Date().getFullYear());
</script>

<template>
  <div class="border-t border-blue py-6">
    <div class="container px-4 lg:w-4/6 mx-auto">
      <div class="flex justify-between items-center">
        <NuxtLink to="/">
          <img src="/img/logo.png" alt="Fidgrove" class="w-40" />
        </NuxtLink>
        <p>© Fidgrove, {{ year }}</p>
      </div>
    </div>
  </div>
</template>
