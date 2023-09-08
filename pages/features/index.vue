<script setup lang="ts">
import { features } from "~/public/utils";
</script>

<template>
  <section class="mt-0 mb-6 lg:mb-16 lg:mt-8 lg:w-4/6 mx-auto">
    <h1 class="text-4xl text-left font-semibold mb-6" v-text="'Features'" />
    <FeaturesArticleGrid :features="features" link="features-slug" />
  </section>
</template>
