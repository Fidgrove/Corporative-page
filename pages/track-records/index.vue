<script setup lang="ts">
import InfiniteLoading from "v3-infinite-loading";
import { trackRecords } from "public/utils";
import {
  RecordsTableRow,
  RequestParams,
  RequestResponse,
  TableSort,
} from "~/types";
import { useApiRequest, useApiRequestReset } from "~/composables/apiCall";

interface RecordsProps {
  search: string;
  dry: boolean;
  racePaces: boolean;
}
const props = defineProps<RecordsProps>();

const dataOffset: Ref<number> = ref(0);
const dataItemsLimit: Ref<number> = ref(20);
const sortable: Ref<TableSort> = ref({ sort: "createdDate", asc: true });
const dataMetadata: Ref<RequestResponse["metadata"]> = ref(null);
const params = computed<RequestParams>(() => {
  return {
    offset: dataOffset.value,
    limit: dataItemsLimit.value,
    sort: sortable.value.sort,
    direction: sortable.value.asc ? "ASC" : "DESC",
    dry: props.dry,
    search: props.search,
  };
});

const filteredResult: { list: RecordsTableRow[] } = reactive({ list: [] });

const getTrackRecords = (reset = true) => {
  if (reset) {
    const { offset, limit } = useApiRequestReset();
    dataOffset.value = offset;
    dataItemsLimit.value = limit;
  }
  return useApiRequest<RequestResponse>(
    props.racePaces
      ? "support/v1/communities/race-paces"
      : "support/v1/communities/track-records",
    params.value,
    {
      transform: (data: RequestResponse) => {
        dataMetadata.value = data.metadata;
        const newFilteredData = data.results.map((item: RecordsTableRow) =>
          trackRecords.mapResult(item),
        );
        if (reset) {
          dataOffset.value += dataItemsLimit.value;
          filteredResult.list = newFilteredData;
        } else {
          dataOffset.value += dataItemsLimit.value;
          filteredResult.list = [...filteredResult.list, ...newFilteredData];
        }
      },
    },
  );
};

const { pending } = await getTrackRecords();

const onSort = async (sortParams: TableSort) => {
  sortable.value = sortParams;
  pending.value = true;
  const result = await getTrackRecords();
  pending.value = result.pending.value;
};

watch([() => props.dry, () => props.racePaces], async () => {
  pending.value = true;
  const result = await getTrackRecords();
  pending.value = result.pending.value;
});
watch(
  () => props.search,
  async (val) => {
    if (val.length > 2 || !val) {
      pending.value = true;
      const result = await getTrackRecords();
      pending.value = result.pending.value;
    }
  },
);
</script>

<template>
  <section
    class="mt-8 mb-6 lg:mb-16 mx-auto overflow-x-scroll sm:overflow-x-auto"
  >
    <RecordsDataTable
      :list="filteredResult.list"
      :handler="trackRecords"
      :sortable="sortable"
      @sort="onSort"
    />
    <InfiniteLoading @infinite="getTrackRecords(false)" />
  </section>
</template>
