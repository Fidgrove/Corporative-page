<script setup lang="ts">
import { features } from "~/public/utils";
const route = useRoute();
const feature = computed(() =>
  features.find((el) => el.title === route.params.slug),
);
</script>

<template>
  <FeaturesSingleArticle
    v-if="feature"
    :item="feature"
    class="lg:w-4/6 mx-auto"
  />
</template>
