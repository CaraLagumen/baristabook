import { Document } from "mongoose";

interface IDrink extends Document {
  id?: string;
  slug: string;
  createdAt?: Date;
  name: string;
  code: string;
  form: `Hot` | `Iced` | `Frozen`;
  season:
    | `Year round`
    | `Winter`
    | `Spring`
    | `Summer`
    | `Fall`
    | `Special`
    | `Secret`
    | `Discontinued`;
  size: string[];
  caffeine?:
    | `Espresso`
    | `Blonde espresso`
    | `Decaf espresso`
    | `Half caf espresso`
    | `Frappuccino roast`;
  caffeineCount?: number[];
  caffeine2?:
    | `Espresso`
    | `Blonde espresso`
    | `Decaf espresso`
    | `Half caf espresso`
    | `Frappuccino roast`;
  caffeine2Count?: number[];
  syrup?: string;
  syrupCount?: number[];
  syrup2?: string;
  syrup2Count?: number[];
  syrup3?: string;
  syrup3Count?: number[];
  tea?:
    | `Royal english breakfast`
    | `Emperor's cloud`
    | `Earl grey`
    | `Jade citrus mint`
    | `Mint majesty`
    | `Peach tranquility`
    | `Comfort`
    | `Defense`
    | `Rev up`
    | `Peach tranquility & jade citrus mint`
    | `Assorted`;
  teaCount?: number[];
  base?: `Coffee base` | `Creme base`;
  baseCount?: number[];
  body?: string;
  whippedCream?: boolean;
  topping?: string;
  shaker?:
    | `Black tea`
    | `Green tea`
    | `Passion tea`
    | `White tea`
    | `Strawberry acai base`
    | `Very berry hibiscus base`
    | `Mango dragon base`;
  shakerAddition?:
    | `Water`
    | `Lemonade`
    | `Coconutmilk`
    | `Blueberry infusion`
    | `Peach infusion`
    | `Guava infusion`;
  shakerAddition2?:
    | `Water`
    | `Lemonade`
    | `Coconutmilk`
    | `Blueberry infusion`
    | `Peach infusion`
    | `Guava infusion`;
  driedFruit?: `Strawberries` | `Blackberries` | `Dragon fruits`;
}

export default IDrink;
