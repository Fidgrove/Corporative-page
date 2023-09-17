<script setup lang="ts">
import { faq } from "~/public/utils";

const faqSelected: Ref<number | null> = ref(0);
</script>

<template>
  <section class="mt-8 mb-6 lg:mb-16 lg:w-4/6 mx-auto">
    <h1 class="text-4xl text-left font-semibold mb-6" v-text="'FAQ'" />
    <div v-for="(el, idx) in faq" :key="el.question">
      <div
        class="flex justify-between cursor-pointer pb-6"
        @click="
          faqSelected !== idx ? (faqSelected = idx) : (faqSelected = null)
        "
      >
        <div>
          <h4 class="font-medium text-xl">
            <span class="pr-3" v-text="idx + 1" />
            <span v-text="el.question" />
          </h4>
        </div>
        <span
          class="w-4 h-4 block transition-transform duration-500"
          :class="{ 'rotate-180': faqSelected === idx }"
          ><svg-icon name="arrow"
        /></span>
      </div>
      <div
        class="grid overflow-hidden transition-all duration-300 ease-in-out"
        :class="[
          faqSelected === idx
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0',
        ]"
      >
        <div class="overflow-hidden" :class="{ 'mb-4': faqSelected === idx }">
          <div class="ml-4" v-html="el.answer" />
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
      </div>
    </div>
  </section>
</template>
