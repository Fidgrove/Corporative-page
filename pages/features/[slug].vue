<script setup lang="ts">
import { features } from "~/public/utils";
const route = useRoute();
const feature = computed(() =>
  features.find((el) => el.title === route.params.slug),
);
</script>

<template>
  <section class="mt-8 mb-6 lg:mb-16 mx-auto">
    <FeaturesSingleArticle
      v-if="feature"
      :item="feature"
      class="lg:w-4/6 mx-auto"
    />
  </section>
</template>
