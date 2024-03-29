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
const route = useRoute();

const dataOffset: Ref<number> = ref(0);
const dataItemsLimit: Ref<number> = ref(40);
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

const totalSectors = computed<number>(() =>
  data.value && data.value.results.length
    ? data.value.results[0].totalSectors
    : 3,
);

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

const { data }: { data: Ref<RequestResponse> } = await getTrackRecords();
trackRecordsTrack.wetSession = !props.dry;
trackRecordsTrack.racePaces = props.racePaces;
trackRecordsTrack.totalSectors = totalSectors.value;

const loadMore = async ($state: any) => {
  dataOffset.value += dataItemsLimit.value;
  const { data: dataPage }: { data: Ref<RequestResponse> } =
    await getTrackRecords();
  try {
    if (
      dataPage.value?.metadata?.count !== 0 &&
      dataPage.value?.results.length
    ) {
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
  data.value.results = dataPage.value?.results;
  loading.value = pending.value;
};

watch(
  () => props.dry,
  async (val) => {
    loading.value = true;
    trackRecordsTrack.wetSession = !val;
    const {
      data: dataPage,
      pending,
    }: { data: Ref<RequestResponse>; pending: Ref<boolean> } =
      await getTrackRecords(true);
    if (table.value) {
      table.value.infiniteId++;
    }
    data.value.results = dataPage.value?.results;
    loading.value = pending.value;
  },
);

watch(
  () => props.racePaces,
  async (val) => {
    loading.value = true;
    trackRecordsTrack.racePaces = val;
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
    data.value.results = dataPage.value?.results;
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
      data.value.results = dataPage.value?.results;
      loading.value = pending.value;
    }
  },
);

watch(totalSectors, (val) => (trackRecordsTrack.totalSectors = val));
</script>

<template>
  <section class="mt-8 mb-6 lg:mb-16 mx-auto space-y-4">
    <BaseTag title="Track" :value="route.params.trackName" />
    <ClientOnly>
      <template #fallback>
        <AppLoadingPlaceholder
          type="table"
          :columns="trackRecordsTrack.table.header"
        />
      </template>
      <RecordsDataTable
        ref="table"
        :list="data?.results || []"
        :handler="trackRecordsTrack"
        :sortable="sortable"
        :loading="loading"
        clickable-row
        @infinite-loading="loadMore"
        @sort="onSort"
        @row-click="linkToNextLevel"
      />
    </ClientOnly>
  </section>
</template>
