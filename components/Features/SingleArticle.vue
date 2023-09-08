<script setup lang="ts">
import { Feature } from "~/types";
interface FeatureProps {
  item: Feature;
}
const props = defineProps<FeatureProps>();
</script>

<template>
  <article>
    <img
      :src="`/img/${item?.image}`"
      :alt="item?.title"
      class="lg:w-4/6 object-cover mx-auto border-blue border rounded mb-6"
    />
    <h1 class="text-3xl font-normal mb-6 text-left" v-text="item?.title" />
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
