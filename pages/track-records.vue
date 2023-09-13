<script setup lang="ts">
import { trackRecords } from "public/utils";
import {
  RecordsTableRow,
  RequestParams,
  RequestResponse,
  TableSort,
} from "~/types";
import { useApiRequest } from "~/composables/apiCall";

const sortable: Ref<TableSort> = ref({ sort: "createdDate", asc: true });
const params: RequestParams = reactive({
  offset: 0,
  limit: 20,
  sort: "createdDate",
  direction: "DESC",
  dry: true,
});

const filteredResult: { list: RecordsTableRow[] } = reactive({ list: [] });

const getTrackRecords = () =>
  useApiRequest<RequestResponse>(
    "support/v1/communities/track-records",
    params,
    {
      transform: (data: RequestResponse) => {
        filteredResult.list = data.results.map((item: RecordsTableRow) =>
          trackRecords.mapResult(item),
        );
      },
    },
  );

const { pending } = await getTrackRecords();

const onSort = async (sortParams: TableSort) => {
  sortable.value = sortParams;
  params.sort = sortParams.sort;
  params.direction = sortParams.asc ? "ASC" : "DESC";
  pending.value = true;
  const result = await getTrackRecords();
  pending.value = result.pending.value;
};

watch(
  () => params.dry,
  async () => {
    pending.value = true;
    const result = await getTrackRecords();
    pending.value = result.pending.value;
  },
);
</script>

<template>
  <section
    class="mt-8 mb-6 lg:mb-16 mx-auto overflow-x-scroll sm:overflow-x-auto"
  >
    <div class="flex justify-between">
      <BaseToggler
        label="Dry"
        right-label="Wet"
        :value="params.dry"
        @toggle="params.dry = !params.dry"
      />
    </div>
    <template v-if="pending">
      <span>Loading...</span>
    </template>
    <template v-else-if="filteredResult.list.length">
      <RecordsDataTable
        :list="filteredResult.list"
        :handler="trackRecords"
        :sortable="sortable"
        @sort="onSort"
      />
    </template>
    <template v-else>
      <span>Sth went wrong</span>
    </template>
  </section>
</template>
