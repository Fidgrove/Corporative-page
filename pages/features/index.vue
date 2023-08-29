<script setup lang="ts">
interface Post {
  id: number;
  title: string;
  body: string;
}
const features: Ref<[]> = ref([]);
const { data: posts } = await useAsyncData<Post[]>("posts", () =>
  $fetch("https://jsonplaceholder.typicode.com/posts/"),
);
features.value =
  !posts.value || !posts.value.length ? [] : posts.value.slice(0, 12);
</script>

<template>
  <div class="container mx-auto">
    <h1 class="text-2xl font-semibold mb-6">Main Features</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-7">
      <NuxtLink
        v-for="item in features"
        :key="item.id"
        :to="{
          name: 'features-slug',
          params: {
            slug: item.title,
          },
        }"
      >
        <BaseFeatureCard :item="item" />
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
