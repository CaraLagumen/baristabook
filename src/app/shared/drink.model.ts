export interface Drink {
   id: string;
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
   whippedCream?: boolean;
   topping?: string;
   shaker?: string;
   shakerAddition?: string;
   driedFruit?: string;
   custom?: string;
}