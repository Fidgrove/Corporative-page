<script setup lang="ts">
import { trackRecordsTrack } from "public/utils";
import {
  RecordsTableRow,
  RequestParams,
  RequestResponse,
  TableSort,
} from "~/types";
import { useApiRequest, useApiRequestReset } from "~/composables/apiCall";
import DataTable from "~/components/Records/DataTable.vue";

interface RecordsProps {
  search: string;
  dry: boolean;
  racePaces: boolean;
}
const props = defineProps<RecordsProps>();

const trackId = useCookie("trackId");

const dataOffset: Ref<number> = ref(0);
const dataItemsLimit: Ref<number> = ref(20);
const sortable: Ref<TableSort> = ref({
  sort: props.racePaces ? "avgLapTime" : "lapTime",
  asc: true,
});
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
      ? `support/v1/communities/race-paces/${trackId.value}`
      : `support/v1/communities/track-records/${trackId.value}`,
    params.value,
  );
};

const { data, pending }: { data: Ref<RequestResponse>; pending: boolean } =
  await getTrackRecords();

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

const linkToNextLevel = (val: RecordsTableRow) => {
  const { carName, umbrellaCarId } = val;
  const carId = useCookie("carId");
  carId.value = umbrellaCarId;
  navigateTo({
    name: "track-records-trackName-carName",
    params: { carName },
  });
};

const onSort = async (sortParams: TableSort) => {
  sortable.value = sortParams;
  const { data: dataPage }: { data: Ref<RequestResponse> } =
    await getTrackRecords(true);
  if (table.value) {
    table.value.infiniteId++;
  }
  data.value.results = dataPage.value.results;
};

watch(
  () => props.dry,
  async (val) => {
    trackRecordsTrack.wetSession = !val;
    const { data: dataPage }: { data: Ref<RequestResponse> } =
      await getTrackRecords(true);
    if (table.value) {
      table.value.infiniteId++;
    }
    data.value.results = dataPage.value.results;
  },
);

watch(
  () => props.racePaces,
  async (val) => {
    trackRecordsTrack.racePaces = val;
    if (sortable.value.sort === "lapTime" && val) {
      sortable.value.sort = "avgLapTime";
    } else if (sortable.value.sort === "avgLapTime" && !val) {
      sortable.value.sort = "lapTime";
    }
    const { data: dataPage }: { data: Ref<RequestResponse> } =
      await getTrackRecords(true);
    if (table.value) {
      table.value.infiniteId++;
    }
    data.value.results = dataPage.value.results;
  },
);

watch(
  () => props.search,
  async (val) => {
    if (val.length > 2 || !val) {
      const { data: dataPage }: { data: Ref<RequestResponse> } =
        await getTrackRecords(true);
      if (table.value) {
        table.value.infiniteId++;
      }
      data.value.results = dataPage.value.results;
    }
  },
);
</script>

<template>
  <section class="mt-8 mb-6 lg:mb-16 mx-auto">
    <template v-if="data.results.length">
      <RecordsDataTable
        ref="table"
        :handler="trackRecordsTrack"
        :sortable="sortable"
        clickable-row
        :list="data.results"
        @sort="onSort"
        @row-click="linkToNextLevel"
        @infinite-loading="loadMore"
      />
    </template>
    <template v-else>No Data</template>
  </section>
</template>
