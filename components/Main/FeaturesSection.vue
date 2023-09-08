<script setup lang="ts">
import { features } from "~/public/utils";
</script>

<template>
  <section class="mt-8 mb-6 lg:mb-16">
    <h2 class="text-2xl text-center font-semibold mb-6" v-text="'Features'" />
    <FeaturesArticleGrid
      :features="features"
      title="Main Features"
      link="features-slug"
    />
  </section>
</template>
