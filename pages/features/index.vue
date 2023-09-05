<script setup lang="ts">
import { features } from "~/public/utils";
</script>

<template>
  <FeaturesArticleGrid
    :features="features"
    title="Main Features"
    link="features-slug"
  />
</template>
