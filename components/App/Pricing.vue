<script setup lang="ts">
import { membershipPlans } from "~/public/utils";
</script>

<template>
  <div class="flex gap-6">
    <div v-for="plan in membershipPlans" :key="plan.id" class="grow basis-1">
      <BasePriceCard :plan="plan" class="h-full" />
    </div>
  </div>
</template>

<style scoped></style>
