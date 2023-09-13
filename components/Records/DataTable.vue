<script setup lang="ts">
import { TableHandler, RecordsTableRow, TableSort } from "~/types";

interface TableProps {
  list: RecordsTableRow[];
  handler: TableHandler;
  sortable: TableSort;
}
const props = defineProps<TableProps>();

const emit = defineEmits(["sort"]);
const checkSortedParams = (
  property: string | undefined,
  condition: boolean,
) => {
  return props.sortable.asc === condition && props.sortable.sort === property;
};

const sortColumn = (sort: string | undefined, asc: boolean) => {
  emit("sort", { sort, asc });
};
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
          :class="[header.hidden ? 'hidden' : '']"
        >
          <span
            class="flex items-center"
            :class="[header.class || 'justify-end']"
          >
            <abbr class="no-underline" :title="header.name">
              {{ header.name }}
            </abbr>
            <span v-if="header.sortable" class="flex flex-col pl-2">
              <button
                class="w-4 h-4"
                :class="[
                  checkSortedParams(header.property, true) ? '' : 'opacity-30',
                ]"
                @click="sortColumn(header.property, true)"
              >
                <span class="w-full h-full block rotate-180"
                  ><svg-icon name="arrow"
                /></span>
              </button>
              <button
                class="w-4 h-4"
                :class="[
                  checkSortedParams(header.property, false) ? '' : 'opacity-30',
                ]"
                @click="sortColumn(header.property, false)"
              >
                <span class="w-full h-full"><svg-icon name="arrow" /></span>
              </button>
            </span>
          </span>
        </th>
      </tr>
    </thead>
    <tbody class="text-center font-light">
      <tr
        v-for="(row, idx) in list"
        :key="idx"
        class="cursor-pointer hover:bg-blue hover:text-white"
      >
        <td
          v-for="(val, key, i) in row"
          :key="`support_${val}`"
          class="py-1 px-2 tabular-nums lining-nums"
          :class="[handler.table.header[i].hidden ? 'hidden' : '']"
        >
          <span
            :class="['flex', handler.table.header[i].class || 'justify-end']"
          >
            {{ val }}
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>