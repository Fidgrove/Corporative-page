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
const dataPage: Ref<RecordsTableRow[]> = ref([]);
const filteredResult: { list: RecordsTableRow[] } = reactive({ list: [] });

const getTrackRecords = (reset = false) => {
  if (reset) {
    const { offset, limit } = useApiRequestReset();
    dataOffset.value = offset;
    dataItemsLimit.value = limit;
  }
  return useApiRequest(
    props.racePaces
      ? "support/v1/communities/race-paces"
      : "support/v1/communities/track-records",
    params.value,
    {
      server: false,
      transform: (data: RequestResponse) => {
        dataMetadata.value = data.metadata;
        dataPage.value = data.results.map((item: RecordsTableRow) =>
          trackRecords.mapResult(item),
        );
      },
    },
  );
};

const loadMore = async ($state: any) => {
  dataOffset.value += dataItemsLimit.value;
  await getTrackRecords();
  try {
    if (dataMetadata.value?.count !== 0) {
      filteredResult.list = [...filteredResult.list, ...dataPage.value];
      $state.loaded();
    } else {
      $state.complete();
    }
  } catch (e) {
    console.log("Error: ", e);
    $state.complete();
  }
};

const onSort = async (sortParams: TableSort) => {
  sortable.value = sortParams;
  await getTrackRecords(true);
  filteredResult.list = dataPage.value;
};

watch([() => props.dry, () => props.racePaces], async () => {
  await getTrackRecords(true);
  filteredResult.list = dataPage.value;
});
watch(
  () => props.search,
  async (val) => {
    if (val.length > 2 || !val) {
      await getTrackRecords(true);
      filteredResult.list = dataPage.value;
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
    <InfiniteLoading class="opacity-0" @infinite="loadMore" />
  </section>
</template>
