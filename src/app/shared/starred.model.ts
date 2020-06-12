import { Drink } from "./drink.model";
import { User } from "./user.model";

export interface Starred {
  id?: string;
  drink: Drink | string;
  user: User | string;
  createdAt?: Date;
}
