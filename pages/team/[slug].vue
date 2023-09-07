<script setup lang="ts">
import { teamsFeatures } from "~/public/utils";
const route = useRoute();
const feature = computed(() =>
  teamsFeatures.find((el) => el.title === route.params.slug),
);
</script>

<template>
  <FeaturesSingleArticle :item="feature" v-if="feature" />
</template>
