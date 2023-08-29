<script setup lang="ts">
const props = defineProps(["item"]);
</script>

<template>
  <div class="shadow-md p-6">
    <h3 class="text-xl font-medium mb-2">{{ item.title }}</h3>
    <p>{{ item.body }}</p>
  </div>
</template>

<style scoped></style>
