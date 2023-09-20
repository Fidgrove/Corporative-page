<script setup lang="ts">
import { onMounted } from "vue";

const searchQuery: Ref<string> = ref("");
const racePaces: Ref<boolean> = ref(false);
const dry: Ref<boolean> = ref(true);
const input: Ref<HTMLInputElement | null> = ref(null);

const route = useRoute();

onMounted(() => {
  input?.value?.focus();
});

watch(
  () => route.path,
  () => {
    searchQuery.value = "";
    input?.value?.focus();
  },
  { immediate: true, deep: true },
);
</script>

<template>
  <section class="mt-8 mb-6 lg:mb-16 mx-auto">
    <template v-if="route.name === 'track-records'">
      <div class="mb-8">
        While logging your data, you may opt-in to share lap times with
        Fidgrove’s community. Option is not on by default. Track records exist
        for hot laps / race pace (avg over 10 laps) and dry / wet track. rFactor
        2 track records are shown below. Click on a line to lock track and car.
      </div>
    </template>
    <div
      class="flex justify-between mb-6 flex-col md:flex-row space-y-4 md:space-y-0"
    >
      <input
        ref="input"
        v-model="searchQuery"
        class="md:w-60 text-sm w-full h-9 px-2 rounded-md focus:outline-blue focus:shadow-blue placeholder-dark bg-white placeholder-opacity-50"
        type="search"
        name="search"
        autocomplete="off"
        placeholder="Search"
      />
      <div class="flex space-x-10">
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
    </div>
    <NuxtPage :search="searchQuery" :dry="dry" :race-paces="racePaces" />
  </section>
</template>
