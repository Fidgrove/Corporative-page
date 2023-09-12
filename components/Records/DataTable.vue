<script setup lang="ts">
import { TableHandler, RecordsTableRow } from "~/types";

interface TableProps {
  list: RecordsTableRow[];
  handler: TableHandler;
}
const props = defineProps<TableProps>();
</script>

<template>
  <table
    v-if="list.length > 0"
    ref="table"
    class="mx-auto w-full divide-y divide-darkBlue text-darkBlue"
  >
    <thead class="sticky-header">
      <tr class="border-solid border-b border-neutral-300">
        <th
          v-for="header in handler.table.header"
          :key="header.property"
          class="font-medium py-1 px-2"
          :class="[header.class || 'text-right', header.hidden ? 'hidden' : '']"
        >
          <abbr class="no-underline" :title="header.name">
            {{ header.name }}
          </abbr>
        </th>
      </tr>
    </thead>
    <tbody class="text-center font-light">
      <tr
        v-for="(row, idx) in list"
        :key="idx"
        class="cursor-pointer hover:bg-blue hover:text-white even:bg-neutral-300"
      >
        <td
          v-for="(val, key, i) in row"
          :key="`support_${val}`"
          class="py-1 px-2 tabular-nums lining-nums"
          :class="[
            handler.table.header[i].class || '',
            handler.table.header[i].hidden ? 'hidden' : '',
          ]"
        >
          <span>
            {{ val }}
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
