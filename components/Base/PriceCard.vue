<script setup lang="ts">
import { Plan } from "~/types";
interface PlanProps {
  plan: Plan;
}
const props = defineProps<PlanProps>();

const checkTBD = (text: string) => text.includes("TBD");
</script>

<template>
  <div class="border border-blue rounded-md flex flex-col bg-white">
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
        class="before:content-['\2713'] before:-ml-8 before:mr-5 pl-8 pb-2"
        :class="[checkTBD(item) && 'text-gray-400']"
        v-text="item"
      />
    </ul>
    <div class="flex justify-center py-5">
      <template v-if="plan.cta">
        <NuxtLink
          tag="a"
          :href="plan.cta.link"
          target="_blank"
          class="w-64 flex flex-col items-center rounded transition-colors border border-blue px-4 py-2 font-medium text-center hover:text-white hover:bg-blue bg-white text-blue"
        >
          {{ plan.cta.text }}
        </NuxtLink>
      </template>
    </div>
  </div>
</template>
