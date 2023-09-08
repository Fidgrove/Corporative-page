<script setup lang="ts">
import { membershipPlans } from "public/utils";
</script>

<template>
  <section class="flex flex-col lg:flex-row gap-6 mt-8 mb-6 lg:mb-16">
    <div v-for="plan in membershipPlans" :key="plan.title" class="grow basis-1">
      <BasePriceCard :plan="plan" class="h-full" />
    </div>
  </section>
</template>

<style scoped></style>
