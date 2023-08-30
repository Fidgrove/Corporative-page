<script setup lang="ts">
import { features } from "~/public/utils";
const formattedSlug = (text: string) => text.toLowerCase().split(" ").join("-");
</script>

<template>
  <div class="container mx-auto">
    <h1 class="text-2xl font-semibold mb-6">Main Features</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-7">
      <NuxtLink
        v-for="item in features"
        :key="item.id"
        :to="{
          name: 'features-slug',
          params: {
            slug: formattedSlug(item.title),
          },
        }"
        class="transition-transform duration-300 hover:scale-105"
      >
        <BaseFeatureCard :item="item" />
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
