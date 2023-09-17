<script setup lang="ts">
import { trackRecords, trackRecordsTrackCar } from "public/utils";
import { RequestParams, RequestResponse, TableSort } from "~/types";
import { useApiRequest, useApiRequestReset } from "~/composables/apiCall";
import DataTable from "~/components/Records/DataTable.vue";

interface RecordsProps {
  search: string;
  dry: boolean;
  racePaces: boolean;
}
const props = defineProps<RecordsProps>();

const carId = useCookie("carId");
const trackId = useCookie("trackId");

const dataOffset: Ref<number> = ref(0);
const dataItemsLimit: Ref<number> = ref(20);
const sortable: Ref<TableSort> = ref({
  sort: props.racePaces ? "avgLapTime" : "lapTime",
  asc: true,
});
const loading: Ref<boolean> = ref(false);
const table: Ref<typeof DataTable> = ref(DataTable);

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

const getTrackRecords = (reset = false): any => {
  if (reset) {
    const { offset, limit } = useApiRequestReset();
    dataOffset.value = offset;
    dataItemsLimit.value = limit;
  }
  return useApiRequest(
    props.racePaces
      ? `support/v1/communities/race-paces/${trackId.value}/${carId.value}`
      : `support/v1/communities/track-records/${trackId.value}/${carId.value}`,
    params.value,
  );
};

const { data }: { data: Ref<RequestResponse> } = await getTrackRecords();
trackRecordsTrackCar.wetSession = !props.dry;
trackRecordsTrackCar.racePaces = props.racePaces;

const loadMore = async ($state: any) => {
  dataOffset.value += dataItemsLimit.value;
  const { data: dataPage }: { data: Ref<RequestResponse> } =
    await getTrackRecords();
  try {
    if (dataPage.value.metadata?.count !== 0 && dataPage.value.results.length) {
      data.value.results = [...data.value.results, ...dataPage.value.results];
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
  loading.value = true;
  sortable.value = sortParams;
  const {
    data: dataPage,
    pending,
  }: { data: Ref<RequestResponse>; pending: Ref<boolean> } =
    await getTrackRecords(true);
  if (table.value) {
    table.value.infiniteId++;
  }
  data.value.results = dataPage.value.results;
  loading.value = pending.value;
};

watch(
  () => props.dry,
  async (val) => {
    loading.value = true;
    trackRecordsTrackCar.wetSession = !val;
    const {
      data: dataPage,
      pending,
    }: { data: Ref<RequestResponse>; pending: Ref<boolean> } =
      await getTrackRecords(true);
    if (table.value) {
      table.value.infiniteId++;
    }
    data.value.results = dataPage.value.results;
    loading.value = pending.value;
  },
);
watch(
  () => props.racePaces,
  async (val) => {
    loading.value = true;
    trackRecordsTrackCar.racePaces = val;
    if (sortable.value.sort === "lapTime" && val) {
      sortable.value.sort = "avgLapTime";
    } else if (sortable.value.sort === "avgLapTime" && !val) {
      sortable.value.sort = "lapTime";
    }
    const {
      data: dataPage,
      pending,
    }: { data: Ref<RequestResponse>; pending: Ref<boolean> } =
      await getTrackRecords(true);
    if (table.value) {
      table.value.infiniteId++;
    }
    data.value.results = dataPage.value.results;
    loading.value = pending.value;
  },
);
watch(
  () => props.search,
  async (val) => {
    if (val.length > 2 || !val) {
      loading.value = true;
      const {
        data: dataPage,
        pending,
      }: { data: Ref<RequestResponse>; pending: Ref<boolean> } =
        await getTrackRecords(true);
      if (table.value) {
        table.value.infiniteId++;
      }
      data.value.results = dataPage.value.results;
      loading.value = pending.value;
    }
  },
);
</script>

<template>
  <section class="mt-8 mb-6 lg:mb-16 mx-auto">
    <template v-if="loading">
      <AppLoadingPlaceholder
        type="table"
        :columns="trackRecordsTrackCar.table.header"
      />
    </template>
    <template v-else-if="!loading && data.results.length">
      <RecordsDataTable
        ref="table"
        :handler="trackRecordsTrackCar"
        :sortable="sortable"
        :list="data.results"
        @sort="onSort"
        @infinite-loading="loadMore"
      />
    </template>
    <template v-else>No Data</template>
  </section>
</template>
