export interface Drink {
  id: string;
  slug: string;
  name: string;
  code: string;
  form: string;
  season: string;
  size: string;
  caffeine?: string;
  caffeineCount?: number;
  syrup?: string;
  syrupCount?: number;
  body?: string;
  base?: string;
  baseCount?: number;
  whippedCream?: boolean;
  topping?: string;
  shaker?: string;
  shakerAddition?: string;
  driedFruit?: string;
  tea: string;
  teaCount: number;
  custom?: string;
}
