<script setup lang="ts">
import { Feature } from "~/types";
interface FeatureProps {
  item: Feature;
}
const props = defineProps<FeatureProps>();
</script>

<template>
  <div class="mt-8 mb-6 lg:mb-16">
    <h1 class="text-3xl font-medium mb-6" v-text="item?.title" />
    <img :src="`/img/${item?.image}`" :alt="item?.title" />
    <template v-if="item?.text">
      <p class="mt-6" v-html="item?.text" />
    </template>
    <template v-else>
      <ul class="list-disc list-outside mt-6 ml-6">
        <li v-for="el in item?.list" :key="el" v-text="el" class="pb-4" />
      </ul>
    </template>
  </div>
</template>
