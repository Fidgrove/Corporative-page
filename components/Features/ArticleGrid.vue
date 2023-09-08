<script setup lang="ts">
import { Feature } from "~/types";
interface ArticlesProps {
  features: Feature[];
  link: string;
}
const props = defineProps<ArticlesProps>();
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
    <NuxtLink
      v-for="item in features"
      :key="item.title"
      :to="{
        name: link,
        params: {
          slug: item.title,
        },
      }"
    >
      <BaseFeatureCard :item="item" />
    </NuxtLink>
  </div>
</template>
