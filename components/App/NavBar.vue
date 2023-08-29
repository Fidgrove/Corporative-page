<script setup lang="ts">
const navigation = [
  { name: "Main Features", link: "/features" },
  { name: "Team Features", link: "/team" },
];
</script>

<template>
  <div class="flex justify-center">
    <NuxtLink
      v-for="item in navigation"
      :key="item.name"
      :to="item.link"
      class="text-black rounded-md px-3 py-2 font-medium navbar-item"
      >{{ item.name }}
    </NuxtLink>
  </div>
</template>

<style scoped></style>
