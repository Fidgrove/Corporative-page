<script setup lang="ts">
import { Feature } from "~/types";
interface ArticlesProps {
  features: Feature[];
  title: string;
  link: string;
}
const props = defineProps<ArticlesProps>();
</script>

<template>
  <div class="mt-8 mb-6 lg:mb-16">
    <h1 class="text-2xl font-semibold mb-6" v-text="title" />
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
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
  </div>
</template>
