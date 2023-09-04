<script setup lang="ts">
const navigation = [
  { name: "Main Features", link: "/features" },
  { name: "Team Features", link: "/team" },
];
</script>

<template>
  <div class="flex flex-col items-center">
    <NuxtLink to="/">
      <img src="/img/logo.png" alt="Fidgrove" class="w-60" />
    </NuxtLink>
    <div class="flex mt-6">
      <NuxtLink
        v-for="item in navigation"
        :key="item.name"
        :to="item.link"
        class="text-black rounded-md px-3 py-2 font-medium navbar-item"
        >{{ item.name }}
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
