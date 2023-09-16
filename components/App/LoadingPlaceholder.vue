<script setup lang="ts">
import { Table } from "~/types";

interface LoaderProps {
  type: string;
  columns: Table["header"];
}
const props = defineProps<LoaderProps>();
</script>

<template>
  <template v-if="type === 'table'">
    <table class="w-full">
      <thead>
        <tr class="h-8">
          <th
            v-for="column in columns"
            v-show="!column.hidden"
            :key="column.name"
          >
            <div
              :class="column.class"
              class="animate-loading rounded-xl bg-white h-3 bg-gradient-to-r from-white from-[10px] via-neutral-200 via-[40px] to-white to-[90px]"
              :style="`width: ${Math.floor(Math.random() * 51) + 50}%;`"
            />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="index in 10" :key="index" class="h-8">
          <td
            v-for="column in columns"
            v-show="!column.hidden"
            :key="column.name"
          >
            <div
              class="animate-loading rounded-xl bg-white h-3 bg-gradient-to-r from-white via-neutral-200 to-white"
              :style="`width: ${Math.floor(Math.random() * 51) + 50}%;`"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </template>
</template>
