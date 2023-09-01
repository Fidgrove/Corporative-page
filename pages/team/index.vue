<script setup lang="ts">
import { teamsFeatures } from "~/public/utils";
</script>

<template>
  <div class="container mx-auto px-4 mt-6">
    <h1 class="text-2xl font-semibold mb-6">Team Features</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-7">
      <NuxtLink
        v-for="item in teamsFeatures"
        :key="item.title"
        :to="{
          name: 'team-slug',
          params: {
            slug: item.title,
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
