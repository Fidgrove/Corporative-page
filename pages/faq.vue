<script setup lang="ts">
import { faq } from "~/public/utils";
</script>

<template>
  <section class="mt-8 mb-6 lg:mb-16 lg:w-4/6 mx-auto">
    <h1 class="text-4xl text-left font-semibold mb-6" v-text="'FAQ'" />
    <div v-for="(el, idx) in faq" :key="el.question" class="mb-6">
      <h4 class="font-medium text-xl">
        <span class="pr-3" v-text="idx + 1" />
        <span v-text="el.question" />
      </h4>
      <div class="mt-4 ml-4" v-html="el.answer" />
      <template v-if="el.list">
        <ul
          class="list-outside ml-8"
          :class="{
            'list-disc': el.list.type === 'mark',
            'list-[lower-alpha]': el.list.type === 'letter',
          }"
        >
          <li
            v-for="item in el.list.items"
            :key="item"
            class="pb-2"
            v-html="item"
          />
        </ul>
      </template>
      <template v-if="el.addText">
        <div class="mt-4" v-html="el.addText" />
      </template>
    </div>
  </section>
</template>

<style scoped></style>
