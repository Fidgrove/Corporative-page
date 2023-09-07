<script setup lang="ts">
import { features } from "~/public/utils";
const route = useRoute();
const feature = computed(() =>
  features.find((el) => el.title === route.params.slug),
);
</script>

<template>
  <FeaturesSingleArticle :item="feature" v-if="feature" />
</template>
