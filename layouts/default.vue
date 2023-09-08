<script setup lang="ts"></script>

<template>
  <div class="min-h-screen flex flex-col">
    <AppNavBar />
    <div class="grow container mx-auto px-4 mt-20 md:mt-8">
      <slot />
    </div>
    <AppMainFooter />
  </div>
</template>

<style scoped></style>
