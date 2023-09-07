<script setup lang="ts">
import { navigation } from "~/public/utils";

const showMenu: Ref<Boolean> = ref(false);
const toggleNav = () => (showMenu.value = !showMenu.value);
</script>

<template>
  <div class="flex flex-col pt-2 px-4 md:relative fixed w-full bg-bckg">
    <div class="flex justify-center items-center">
      <div>
        <NuxtLink to="/#home">
          <img src="/img/logo.png" alt="Fidgrove" class="w-40 md:w-45" />
        </NuxtLink>
        <div class="flex md:hidden absolute right-4 top-6" @click="toggleNav">
          <button type="button">
            <span
              class="block w-6 h-0.5 bg-gray-600 transition-all origin-top-left duration-300"
              :class="{ 'rotate-[44deg]': showMenu }"
            />
            <span
              class="block w-6 h-0.5 bg-gray-600 mt-1.5"
              :class="{ 'opacity-0': showMenu }"
            />
            <span
              class="block w-6 h-0.5 bg-gray-600 mt-1.5 origin-bottom-left transition-all duration-300"
              :class="{ '-rotate-[44deg]': showMenu }"
            />
          </button>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col shadow-md md:shadow-none md:justify-center justify-start pb-4 -z-10 md:z-0 md:pb-0 md:mt-2 md:flex-row absolute md:static top-14 pl-4 md:pl-0 left-0 w-full bg-bckg transition-transform duration-500"
      :class="[
        showMenu ? 'translate-y-0' : '-translate-y-[140%] md:translate-y-0',
      ]"
    >
      <NuxtLink
        v-for="item in navigation"
        :key="item.name"
        :to="item.link"
        class="text-black rounded-md px-3 pt-7 pb-3 md:pb-0 md:py-2 font-normal navbar-item"
        @click="toggleNav"
        >{{ item.name }}
      </NuxtLink>
      <div class="flex pt-9 md:pt-1 md:absolute right-4 -top-14">
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
  </div>
</template>

<style scoped></style>
