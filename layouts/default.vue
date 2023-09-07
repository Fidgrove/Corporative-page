<script setup lang="ts"></script>

<template>
  <div class="min-h-screen flex flex-col">
    <AppNavBar />
    <div class="grow container mx-auto px-4 mt-12">
      <slot />
    </div>
    <AppMainFooter />
  </div>
</template>

<style scoped></style>
