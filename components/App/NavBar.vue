<script setup lang="ts">
import { navigation } from "~/public/utils";

const showMenu: Ref<Boolean> = ref(false);
const toggleNav = () => (showMenu.value = !showMenu.value);
</script>

<template>
  <div class="flex flex-col pt-2 pb-4 px-4 fixed md:static w-full bg-bckg z-10">
    <div class="flex justify-center items-center">
      <div>
        <NuxtLink to="/" @click="showMenu = false">
          <img src="/img/logo.png" alt="Fidgrove" class="w-36" />
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
        class="text-black rounded-md px-2 pt-7 pb-3 md:pb-1 md:py-2 md:px-6 font-normal navbar-item"
        @click="showMenu = false"
        >{{ item.name }}
      </NuxtLink>
      <div class="flex pt-9 md:pt-1 md:absolute right-4 -top-14">
        <Nuxt-link
          target="_blank"
          rel="noopener noreferrer"
          href="https://x.com/fidgrove"
          class="navbar-button w-6 ml-4"
        >
          <svg-icon name="twitter" />
        </Nuxt-link>
        <Nuxt-link
          target="_blank"
          rel="noopener noreferrer"
          href="https://discord.gg/PcuaKYMs8Y"
          class="navbar-button w-8 ml-4"
        >
          <svg-icon name="discord" />
        </Nuxt-link>
        <Nuxt-link
          target="_blank"
          href="https://station.fidgrove.com/login"
          class="w-20 ml-4 transition-colors rounded border border-blue px-2 py-1.5 text-sm font-medium text-center hover:text-white hover:bg-blue bg-white text-blue"
        >
          Login
        </Nuxt-link>
        <Nuxt-link
          to="/membership"
          class="w-20 ml-4 transition-colors rounded border border-blue px-2 py-1.5 text-sm font-medium text-center hover:text-white hover:bg-blue bg-white text-blue"
          @click="showMenu = false"
        >
          Sign Up
        </Nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
