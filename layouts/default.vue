<script setup lang="ts"></script>

<template>
  <div class="min-h-screen flex flex-col">
    <AppNavBar />
    <div class="grow container mx-auto px-4">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>

<style scoped></style>
