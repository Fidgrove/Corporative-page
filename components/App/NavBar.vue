<script setup lang="ts">
import { navigation } from "~/public/utils";
</script>

<template>
  <div class="flex flex-col mt-2 px-4">
    <div class="flex justify-center items-center">
      <div>
        <NuxtLink to="/#home">
          <img src="/img/logo.png" alt="Fidgrove" class="w-40 lg:w-45" />
        </NuxtLink>
      </div>
      <div class="flex absolute right-4">
        <Nuxt-link
          target="_blank"
          rel="noopener noreferrer"
          href="https://discord.gg/PcuaKYMs8Y"
          class="navbar-button w-6 ml-4"
        >
          <svg-icon name="twitter" />
        </Nuxt-link>
        <Nuxt-link
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/fidgrove"
          class="navbar-button w-8 ml-4"
        >
          <svg-icon name="discord" />
        </Nuxt-link>
        <Nuxt-link
          target="_blank"
          href="https://station.fidgrove.com/login"
          class="ml-4 transition-colors rounded border border-blue px-3 py-1.5 text-sm font-medium hover:text-white hover:bg-blue bg-white text-blue"
        >
          Login
        </Nuxt-link>
        <Nuxt-link
          to="/membership"
          class="ml-4 transition-colors rounded border border-blue px-3 py-1.5 text-sm font-medium hover:text-white hover:bg-blue bg-white text-blue"
        >
          Sign Up
        </Nuxt-link>
      </div>
    </div>
    <div class="flex justify-center mt-2">
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
