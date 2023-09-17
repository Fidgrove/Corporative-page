<script setup lang="ts">
const searchQuery: Ref<string> = ref("");
const racePaces: Ref<boolean> = ref(false);
const dry: Ref<boolean> = ref(true);

const route = useRoute();
watch(
  () => route.path,
  () => {
    searchQuery.value = "";
  },
  { immediate: true, deep: true },
);
</script>

<template>
  <section class="mt-8 mb-6 lg:mb-16 mx-auto">
    <div
      class="flex justify-between mb-6 flex-col md:flex-row space-y-4 md:space-y-0"
    >
      <input
        v-model="searchQuery"
        class="md:w-60 w-full h-10 px-2 rounded-md focus:outline-blue focus:shadow-blue placeholder-dark bg-white placeholder-opacity-50"
        type="search"
        name="search"
        autofocus
        autocomplete="off"
        placeholder="Search"
      />
      <BaseToggler
        label="Dry"
        right-label="Wet"
        :value="dry"
        @toggle="dry = !dry"
      />
      <BaseToggler
        label="1 Lap"
        right-label="10 Laps"
        :value="!racePaces"
        @toggle="racePaces = !racePaces"
      />
    </div>
    <NuxtPage :search="searchQuery" :dry="dry" :race-paces="racePaces" />
  </section>
</template>
