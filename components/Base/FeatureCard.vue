<script setup lang="ts">
import { Feature } from "~/types";
interface FeatureProps {
  item: Feature;
}
const props = defineProps<FeatureProps>();
</script>

<template>
  <div class="h-full transition-colors hover:text-blue">
    <img
      :src="`/img/minified/${item.image}`"
      :alt="item.title"
      class="border border-blue"
    />
    <h3 class="my-4" v-text="item.title" />
  </div>
</template>

<style scoped></style>
