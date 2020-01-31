const mongoose = require(`mongoose`);

const starredSchema = new mongoose.Schema(
   {
      drink: {
         type: mongoose.Schema.ObjectId,
         ref: `Drink`, //CHILD REF => DRINKS
         required: [true, `Starred drink must be a valid drink.`]
      },
      user: {
         type: mongoose.Schema.ObjectId,
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
starredSchema.pre(/^find/, function(next) {
   this.populate(`drink`).populate(`user`);
   next();
});

const Starred = mongoose.model(`Starred`, starredSchema);
module.exports = Starred;
