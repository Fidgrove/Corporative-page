<script setup lang="ts">
import { membershipPlans } from "public/utils";
</script>

<template>
  <div id="membership" class="flex flex-col lg:flex-row gap-6 mb-6 lg:mb-16">
    <div v-for="plan in membershipPlans" :key="plan.title" class="grow basis-1">
      <BasePriceCard :plan="plan" class="h-full" />
    </div>
  </div>
</template>

<style scoped></style>
