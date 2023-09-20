<script setup lang="ts">
interface ImageProps {
  imgSrc: string;
  alt: string;
  addClass?: string;
}
const props = defineProps<ImageProps>();

const zoomImage: Ref<boolean> = ref(false);
</script>

<template>
  <section
    class="cursor-pointer z-10"
    :class="[
      zoomImage
        ? 'absolute flex items-center justify-center bg-black px-4 md:px-10 top-0 left-0 w-full h-full'
        : `border-blue border rounded overflow-hidden ${addClass || ''}`,
    ]"
    @click="zoomImage = !zoomImage"
  >
    <button
      v-if="zoomImage"
      class="absolute right-4 top-4 md:top-10 md:right-10 h-8"
    >
      <span class="block w-8 h-0.5 bg-gray-600 rotate-[45deg]" />
      <span class="block w-8 h-0.5 bg-gray-600 -mt-0.5 -rotate-[45deg]" />
    </button>
    <img
      :src="`/img/${imgSrc}`"
      :alt="alt"
      class="object-cover mx-auto"
      :class="{ 'w-full h-full': !zoomImage }"
    />
  </section>
</template>
