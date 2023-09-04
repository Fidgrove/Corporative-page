<script setup lang="ts">
import { teamsFeatures } from "~/public/utils";
const route = useRoute();
const feature = computed(() =>
  teamsFeatures.find((el) => el.title === route.params.slug),
);
</script>

<template>
  <div class="mt-8 mb-6 lg:mb-16">
    <h1 class="text-3xl font-medium mb-6" v-text="feature?.title" />
    <img :src="`/img/${feature?.image}`" :alt="feature?.title" />
    <template v-if="feature?.text">
      <p class="mt-6" v-html="feature?.text" />
    </template>
    <template v-else>
      <ul class="list-disc list-outside mt-6">
        <li v-for="el in feature?.list" :key="el" v-text="el" class="pb-4" />
      </ul>
    </template>
  </div>
</template>

<style scoped></style>
