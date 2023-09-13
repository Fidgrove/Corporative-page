<script setup lang="ts">
interface TogglerProps {
  label: string;
  rightLabel?: string;
  value: boolean;
}
const props = defineProps<TogglerProps>();

const emit = defineEmits(["toggle"]);
</script>

<template>
  <div class="flex items-center">
    <span class="mr-3" v-text="label" />
    <label class="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        :value="value"
        class="sr-only peer"
        :checked="!value"
        @click="$emit('toggle')"
      />
      <span
        class="w-11 h-6 bg-black rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white peer-checked:after:left-2 after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all"
      ></span>
      <span class="ml-3" v-text="rightLabel" />
    </label>
  </div>
</template>
