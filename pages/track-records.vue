<script setup lang="ts">
import { trackRecords } from "public/utils";
import { RecordsTableRow } from "~/types";

interface RecordsTableRows {
  results: RecordsTableRow[];
}

const result: RecordsTableRows = reactive({
  results: [
    {
      lapId: "846521686933556595.1.2",
      lapTime: 51.7216796875,
      sectorOne: 17.947998046875,
      sectorTwo: 14.977783203125,
      sectorThree: 18.7958984375,
      umbrellaTrackId: 45157,
      supportedTrackId: 22894,
      trackName: "Malaysia -- North Loop",
      trackVersion: "1.82",
      avgPathWetness: 0,
      trackTemperature: 48.25567,
      umbrellaCarId: 40004,
      supportedCarId: 152751,
      carName: "Formula Pro",
      carVersion: "1.21",
      engineType: "ICE",
      classId: 199,
      className: "Formula Pro",
      userId: 84652,
      username: "Martin Oliver",
      createdDate: "2023-06-16",
      processing: false,
    },
    {
      lapId: "5041685014896647.1.5",
      lapTime: 78.46286010742188,
      sectorOne: 22.35955810546875,
      sectorTwo: 25.522186279296875,
      sectorThree: 30.58111572265625,
      umbrellaTrackId: 45153,
      supportedTrackId: 22890,
      trackName: "Loch Drummond -- Long Layout",
      trackVersion: "1.23",
      avgPathWetness: 0,
      trackTemperature: 25.85,
      umbrellaCarId: 43418,
      supportedCarId: 152785,
      carName: "Porsche 991 RSR GTE",
      carVersion: "3.11",
      engineType: "ICE",
      classId: 166,
      className: "GTE",
      userId: 504,
      username: "Goncalo Luis",
      createdDate: "2023-05-25",
      processing: false,
    },
    {
      lapId: "5041681288969928.1.3",
      lapTime: 36.724327087402344,
      sectorOne: 14.940353393554688,
      sectorTwo: 9.979316711425781,
      sectorThree: 11.804656982421875,
      umbrellaTrackId: 100127,
      supportedTrackId: 100080,
      trackName: "Brands Hatch Indy",
      trackVersion: "1.01",
      avgPathWetness: 0,
      trackTemperature: 30.423359,
      umbrellaCarId: 40004,
      supportedCarId: 152751,
      carName: "Formula Pro",
      carVersion: "1.21",
      engineType: "ICE",
      classId: 199,
      className: "Formula Pro",
      userId: 504,
      username: "Goncalo Luis",
      createdDate: "2023-04-12",
      processing: false,
    },
    {
      lapId: "6521671298824513.1.4",
      lapTime: 80.83843994140625,
      sectorOne: 27.885162353515625,
      sectorTwo: 28.015411376953125,
      sectorThree: 24.9378662109375,
      umbrellaTrackId: 151696,
      supportedTrackId: 151932,
      trackName: "Croft",
      trackVersion: "1.03",
      avgPathWetness: 0,
      trackTemperature: 37.999989413966034,
      umbrellaCarId: 23815,
      supportedCarId: 23765,
      carName: "Radical SR3 XX",
      carVersion: "1.05",
      engineType: "ICE",
      classId: 248,
      className: "RADICAL SR3 XX",
      userId: 652,
      username: "Joe Doe",
      createdDate: "2022-12-17",
      processing: false,
    },
  ],
});
const filteredResult = computed(() => {
  return result.results.map((val: RecordsTableRow) =>
    trackRecords.mapResult(val),
  );
});
</script>

<template>
  <section
    class="mt-8 mb-6 lg:mb-16 mx-auto overflow-x-scroll sm:overflow-x-auto"
  >
    <RecordsDataTable :list="filteredResult" :handler="trackRecords" />
  </section>
</template>
