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
}

export interface Table {
  isLink?: boolean;
  header: TableHeader[];
}

export interface TableHandler {
  table: Table;
  mapResult: any;
}
export interface RecordsTableRow {
  trackName: string;
  carName: string;
  lapTime: number;
  createdDate: string;
  username: string;
  trackTemperature: number;
  avgPathWetness: number;
  umbrellaTrackId: number;
}
