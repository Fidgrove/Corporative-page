<script setup lang="ts">
import { Feature } from "~/types";
interface FeatureProps {
  item: Feature;
}
const props = defineProps<FeatureProps>();
</script>

<template>
  <article class="mt-8 mb-6 lg:mb-16">
    <h1 class="text-3xl font-medium mb-6" v-text="item?.title" />
    <img
      :src="`/img/${item?.image}`"
      :alt="item?.title"
      class="lg:w-4/6 object-cover mx-auto border-blue border rounded"
    />
    <template v-if="item?.text">
      <section class="mt-6" v-html="item?.text" />
    </template>
    <template v-if="item?.list">
      <section class="mt-6">
        <ul class="list-disc list-outside ml-6">
          <li v-for="el in item?.list" :key="el" class="pb-4" v-text="el" />
        </ul>
      </section>
    </template>
  </article>
</template>
