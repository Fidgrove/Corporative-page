<script setup lang="ts">
interface tagProps {
  title: string;
  value: string;
}

const props = defineProps<tagProps>();
</script>

<template>
  <div class="flex overflow-hidden text-xs text-white">
    <span class="rounded-l bg-black px-2 py-1" v-text="title" />
    <span class="rounded-r bg-blue px-2 py-1" v-text="value" />
  </div>
</template>
