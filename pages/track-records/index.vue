<script setup lang="ts">
import { trackRecords } from "public/utils";
import {
  RecordsTableRow,
  RequestParams,
  RequestResponse,
  TableSort,
} from "~/types";
import { useApiRequest } from "~/composables/apiCall";

interface RecordsProps {
  search: string;
  dry: boolean;
  racePaces: boolean;
}
const props = defineProps<RecordsProps>();

const sortable: Ref<TableSort> = ref({ sort: "createdDate", asc: true });
const params = computed<RequestParams>(() => {
  return {
    offset: 0,
    limit: 20,
    sort: sortable.value.sort,
    direction: sortable.value.asc ? "ASC" : "DESC",
    dry: props.dry,
    search: props.search,
  };
});

const filteredResult: { list: RecordsTableRow[] } = reactive({ list: [] });

const getTrackRecords = () =>
  useApiRequest<RequestResponse>(
    props.racePaces
      ? "support/v1/communities/race-paces"
      : "support/v1/communities/track-records",
    params.value,
    {
      transform: (data: RequestResponse) => {
        filteredResult.list = data.results.map((item: RecordsTableRow) =>
          trackRecords.mapResult(item),
        );
      },
    },
  );

defineExpose({ sortable });

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
