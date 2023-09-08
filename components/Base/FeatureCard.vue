<script setup lang="ts">
import { Feature } from "~/types";
interface FeatureProps {
  item: Feature;
}
const props = defineProps<FeatureProps>();
</script>

<template>
  <div
    class="border border-blue rounded p-6 transition-colors bg-white hover:text-blue"
  >
    <img :src="`/img/${item.image}`" :alt="item.title" />
    <h3 class="text-xl font-medium my-4" v-text="item.title" />
  </div>
</template>

<style scoped></style>
