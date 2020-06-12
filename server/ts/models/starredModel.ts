import mongoose, { Schema } from "mongoose";

import IStarred from "../types/starredInterface";

const starredSchema: Schema = new mongoose.Schema(
  {
    drink: {
      type: mongoose.Schema.Types.ObjectId,
      ref: `Drink`, //CHILD REF => DRINKS
      required: [true, `Starred drink must be a valid drink.`]
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: `User`, //CHILD REF => USERS
      required: [true, `Starred drink must belong to a user.`]
    },
    createdAt: {
      type: Date,
      default: Date.now()
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

//COMPOUND INDEX TO FIND IF DRINK AND USER IS UNIQUE
starredSchema.index({ drink: 1, user: 1 }, { unique: true });

//SHOW USER AND DRINK
starredSchema.pre(/^find/, function(this: any, next) {
  this.populate(`drink`).populate(`user`);
  next();
});

const Starred = mongoose.model<IStarred>(`Starred`, starredSchema);
export default Starred;
