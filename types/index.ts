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
  cta: { text: string; link: string };
}

interface TableHeader {
  name: string;
  property?: string;
  class?: string;
  hidden?: boolean;
  sortable?: boolean;
}

export interface Table {
  header: TableHeader[];
}

export interface TableHandler {
  racePaces: boolean;
  table: Table;
  mapResult: any;
}

export interface TableSort {
  sort: string;
  asc: boolean;
}
export interface RecordsTableRow {
  trackName: string;
  carName: string;
  lapTime: number;
  createdDate: string;
  username: string;
  trackTemperature: number;
  avgPathWetness: number;
  umbrellaTrackId: string;
  avgLapTime: number;
}
export interface RecordsTrackTableRow {
  carName: string;
  className: string;
  lapTime: number;
  sectorOne: number;
  sectorTwo: number;
  sectorThree: number;
  createdDate: string;
  username: string;
  trackTemperature: number;
  avgPathWetness: number;
  trackVersion: string;
  umbrellaCarId: string;
  avgLapTime: number;
  bestLapTime: number;
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
