import { Document } from "mongoose";

import IUser from "./userInterface";
import IDrink from "./drinkInterface";

interface IStarred extends Document {
  id?: string;
  drink: IDrink | string;
  user: IUser | string;
  createdAt?: Date;
}

export default IStarred;
