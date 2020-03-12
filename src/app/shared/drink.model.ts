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
  caffeine2?: string;
  caffeine2Count?: number;
  syrup?: string;
  syrupCount?: number;
  syrup2?: string;
  syrup2Count?: number;
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
