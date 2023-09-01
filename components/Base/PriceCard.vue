<script setup lang="ts">
import { Plan } from "~/types";
interface PlanProps {
  plan: Plan;
}
const props = defineProps<PlanProps>();
</script>

<template>
  <div class="shadow-lg rounded-md flex flex-col">
    <div
      class="bg-black flex items-center justify-center p-5 rounded-t-md min-h-[7rem]"
    >
      <h5 class="text-white text-center font-normal" v-html="plan.title" />
    </div>
    <template v-if="plan.price">
      <div class="flex flex-col items-center mt-11">
        <div class="flex items-end">
          <h3 class="text-5xl font-semibold" v-text="plan.price.actual" />
          <span
            v-if="plan.price.period"
            class="mb-3 ml-3"
            v-text="plan.price.period"
          />
        </div>
        <template v-if="plan.price.origin">
          <s class="text-gray-400">{{ plan.price.origin }}</s>
        </template>
      </div>
    </template>
    <ul
      class="p-5 grow list-outside"
      :class="{ 'py-0 mt-6 pt-4': !plan.price.origin }"
    >
      <li
        v-for="item in plan.items"
        :key="item"
        v-text="item"
        class="before:content-['\2713'] before:-ml-8 before:mr-5 pl-8 pb-2"
      />
    </ul>
    <div class="flex justify-center pb-5">
      <NuxtLink
        tag="a"
        :href="plan.cta.link"
        target="_blank"
        class="rounded font-medium text-sky-400 border border-sky-400 px-4 py-2"
      >
        {{ plan.cta.text }}
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
