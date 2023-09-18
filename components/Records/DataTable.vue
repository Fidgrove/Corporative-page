<script setup lang="ts">
import InfiniteLoading from "v3-infinite-loading";
import { trackRecords } from "public/utils";
import { TableHandler, RecordsTableRow, TableSort } from "~/types";
import { useScrollHandler } from "~/composables/eventsHandler";

interface TableProps {
  list: RecordsTableRow[];
  handler: TableHandler;
  sortable: TableSort;
  loading: boolean;
  clickableRow?: boolean;
}
const props = defineProps<TableProps>();

const infiniteId: Ref<number> = ref(+new Date());
const table: Ref<HTMLTableElement | null> = ref(null);

const emit = defineEmits(["sort", "row-click", "infinite-loading"]);
const checkSortedParams = (
  property: string | undefined,
  condition: boolean,
) => {
  return props.sortable.asc === condition && props.sortable.sort === property;
};

const sortColumn = (sort: string | undefined, asc: boolean) => {
  emit("sort", { sort, asc });
};

const formattedList = computed<RecordsTableRow[]>(() =>
  props.list.map((item: RecordsTableRow) => props.handler.mapResult(item)),
);

defineExpose({ infiniteId });

const { isHeaderOnTop } = useScrollHandler(table);
</script>

<template>
  <section class="overflow-x-scroll md:overflow-x-visible">
    <template v-if="loading">
      <AppLoadingPlaceholder
        type="table"
        :columns="trackRecords.table.header"
      />
    </template>
    <template v-else-if="!loading && formattedList.length">
      <table
        ref="table"
        class="mx-auto w-full divide-y divide-darkBlue text-darkBlue"
      >
        <thead>
          <tr class="border-solid border-b border-neutral-300">
            <th
              v-for="header in handler.table.header"
              :key="header.property"
              class="font-medium py-1 px-2"
              :class="[
                header.hidden && 'hidden',
                isHeaderOnTop && 'sticky top-0 bg-bckg',
              ]"
            >
              <div
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
                      checkSortedParams(header.property, true)
                        ? ''
                        : 'opacity-30',
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
                      checkSortedParams(header.property, false)
                        ? ''
                        : 'opacity-30',
                    ]"
                    @click="sortColumn(header.property, false)"
                  >
                    <span class="w-full h-full"><svg-icon name="arrow" /></span>
                  </button>
                </span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody class="text-center font-light">
          <tr
            v-for="(row, idx) in formattedList"
            :key="idx"
            v-tooltip="
              handler.table.tooltip && {
                html: true,
                delay: handler.table.tooltip.delay || {
                  show: 500,
                  hide: 200,
                },
                placement: handler.table.tooltip.placement || 'bottom-end',
                content: handler.table.tooltip.render(row),
              }
            "
            class="hover:bg-blue hover:text-white group"
            :class="{ 'cursor-pointer': clickableRow }"
            @click="clickableRow ? $emit('row-click', row) : null"
          >
            <td
              v-for="(val, key, i) in row"
              :key="`${val}${key}${i}`"
              class="py-1 px-2 tabular-nums lining-nums"
              :class="[handler.table.header[i].hidden ? 'hidden' : '']"
            >
              <div
                :class="[
                  'flex items-center',
                  handler.table.header[i].class || 'justify-end',
                ]"
              >
                <template v-if="handler.table.header[i].prependIcon">
                  <span
                    class="shrink-0"
                    :class="{
                      'pl-8': !handler.table.header[i].prependIcon(row),
                    }"
                  >
                    <template v-if="handler.table.header[i].prependIcon(row)">
                      <img
                        :alt="val.toString()"
                        :src="`/img/${handler.table.header[i].prependIcon(
                          row,
                        )}`"
                        class="w-6 object-contain mr-2"
                      />
                    </template>
                  </span>
                </template>
                {{ val }}
              </div>
            </td>
            <template v-if="clickableRow">
              <td class="py-1 px-2 invisible group-hover:visible">
                <span class="w-6 h-6 block -rotate-90"
                  ><svg-icon name="arrow"
                /></span>
              </td>
            </template>
          </tr>
        </tbody>
      </table>
      <InfiniteLoading
        class="opacity-0"
        :identifier="infiniteId"
        @infinite="$emit('infinite-loading', $event)"
      />
    </template>
    <template v-else>
      <div class="mt-20 flex flex-col items-center justify-center">
        <span
          class="h-12 w-12 p-2 bg-neutral-300 flex items-center justify-center"
        >
          <svg-icon name="search" />
        </span>
        <h2
          class="text-2xl font-semibold mt-5"
          v-text="'No track records found'"
        />
      </div>
    </template>
  </section>
</template>
