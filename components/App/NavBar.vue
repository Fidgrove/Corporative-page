<script setup lang="ts">
const navigation = [
  { name: "Main Features", link: "/features" },
  { name: "Team Features", link: "/team" },
];
</script>

<template>
  <div class="flex flex-col items-center mt-2">
    <NuxtLink to="/">
      <img src="/img/logo.png" alt="Fidgrove" class="w-40 lg:w-45" />
    </NuxtLink>
    <div class="flex mt-2">
      <NuxtLink
        v-for="item in navigation"
        :key="item.name"
        :to="item.link"
        class="text-black rounded-md px-3 py-2 font-normal navbar-item"
        >{{ item.name }}
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
