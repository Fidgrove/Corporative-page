export interface MenuItem {
  name: string;
  link: string;
}

export interface Feature {
  title: string;
  image: string;
  text?: string;
  list?: string[];
}
export interface Plan {
  title: string;
  subtitle?: string;
  items: string[];
  price: { origin?: string; actual: string; period?: string };
  cta?: { text: string; link: string };
}

export interface FaqItem {
  question: string;
  answer: string;
  list?: {
    type: string;
    items: string[];
  };
  addText?: string;
}

interface TableHeader {
  name: string;
  property?: string;
  class?: string;
  hidden?: boolean;
  sortable?: boolean;
  prependIcon?: {
    value: (val: any) => string;
    tooltip: {
      placement?: string;
      content?: string | ((val: any) => string);
      delay?: { show: number; hide: number };
    };
  };
}

export interface Table {
  header: TableHeader[];
  tooltip?: {
    delay?: { show: number; hide: number };
    placement?: string;
    render: (row: any) => string;
  };
}

export interface TableHandler {
  racePaces: boolean;
  wetSession: boolean;
  totalSectors?: number;
  table: Table;
  mapResult: any;
}

export interface TableSort {
  sort: string;
  asc: boolean;
}
export interface RecordsTableRow {
  trackTemperature: number;
  trackName: string;
  carName: string;
  lapTime: number;
  createdDate: string;
  username: string;
  totalSectors: number;
  avgPathWetness: number;
  umbrellaTrackId: string;
  umbrellaCarId: string;
  avgLapTime: number;
  isOfficialCar: boolean;
  isOfficialTrack: boolean;
}
export interface RecordsTrackTableRow {
  carName: string;
  className: string;
  lapTime: number;
  sectorOne: number;
  sectorTwo: number;
  sectorThree: number;
  sectorFour: number;
  sectorFive: number;
  sectorSix: number;
  sectorSeven: number;
  sectorEight: number;
  sectorNine: number;
  sectorTen: number;
  createdDate: string;
  username: string;
  trackTemperature: number;
  avgPathWetness: number;
  trackVersion: string;
  umbrellaCarId: string;
  avgLapTime: number;
  bestLapTime: number;
  isOfficialCar: boolean;
}

export interface RecordsTrackCarTableRow {
  rank: number;
  lapTime: number;
  avgLapTime: number;
  bestLapTime: number;
  bestSectorsLap: number;
  diff: number;
  sectorOne: number;
  sectorTwo: number;
  sectorThree: number;
  sectorFour: number;
  sectorFive: number;
  sectorSix: number;
  sectorSeven: number;
  sectorEight: number;
  sectorNine: number;
  sectorTen: number;
  createdDate: string;
  username: string;
  trackTemperature: number;
  avgPathWetness: number;
  trackVersion: string;
  carVersion: string;
}

export interface RequestParams {
  offset: number;
  limit: number;
  sort: string;
  direction: "ASC" | "DESC";
  search?: string;
  dry: boolean;
  filters?: string[];
}

export interface RequestResponse {
  results: RecordsTableRow[];
  search?: string | null;
  filters?: string[];
  metadata: {
    count: number;
    direction: "ASC" | "DESC";
    limit: number;
    offset: number;
    sort: string;
    total: number;
  } | null;
}
