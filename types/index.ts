export interface Feature {
  title: string;
  image: string;
  text?: string;
  list?: string[];
}
export interface Plan {
  title: string;
  subtitle?: string;
  accentItem?: {
    idx: number;
    class: string;
  };
  items: string[];
  price: { origin?: string; actual: string; period?: string };
  cta: { text: string; link: string };
}