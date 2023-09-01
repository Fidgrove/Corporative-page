<script setup lang="ts">
import { Feature } from "~/types";
interface FeatureProps {
  item: Feature;
}
const props = defineProps<FeatureProps>();
const trimmedText = (text: string) => text.slice(0, 30) + "...";
</script>

<template>
  <div class="shadow-md p-6">
    <img :src="`/img/${item.image}`" :alt="item.title" />
    <h3 class="text-xl font-medium my-4" v-text="item.title" />
    <template v-if="item.text">
      <p>{{ trimmedText(item.text) }}</p>
    </template>
    <template v-else-if="item.list">
      <p>{{ trimmedText(item.list[0]) }}</p>
    </template>
  </div>
</template>

<style scoped></style>
