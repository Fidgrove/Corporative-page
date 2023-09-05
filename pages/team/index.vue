<script setup lang="ts">
import { teamsFeatures } from "~/public/utils";
</script>

<template>
  <FeaturesArticleGrid
    :features="teamsFeatures"
    title="Team Features"
    link="team-slug"
  />
</template>
