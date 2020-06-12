import mongoose, { Schema, Model } from "mongoose";
import crypto from "crypto";
import bcrypt from "bcryptjs";
import validator from "validator";

import IUser from "../types/userInterface";

const userSchema: Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, `User name required.`]
    },
    email: {
      type: String,
      required: [true, `User email required.`],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, `User email is invalid.`]
    },
    location: {
      type: String
    },
    photo: {
      type: String,
      default: `default.jpg`
    },
    role: {
      type: String,
      enum: [`user`, `editor`, `admin`],
      default: `user`
    },
    password: {
      type: String,
      required: [true, `Password required.`]
    },
    passwordConfirm: {
      type: String,
      required: [true, `Confirm your password.`],
      validate: {
        validator: function(this: IUser, el: string) {
          return el === this.password;
        },
        message: `Passwords are not the same.`
      }
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    active: {
      type: Boolean,
      default: true,
      select: false //HIDDEN
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

//VIRTUAL POPULATE - userController.getUser
userSchema.virtual(`starreds`, {
  ref: `Starred`,
  foreignField: `user`,
  localField: `_id`
});

//MIDDLEWARES----------------------------------------------------------

//ENCRYPT PASSWORD
userSchema.pre(`save`, async function(this: IUser, next) {
  if (!this.isModified(`password`)) return next(); //IF PASSWORD NOT BEING MODIFIED, DO NOT ENCRYPT
  this.password = await bcrypt.hash(<string>this.password, 12);
  this.passwordConfirm = undefined; //DELETE FOR SECURITY
  next();
});

//RESET PASSWORD DATE
userSchema.pre(`save`, async function(this: IUser, next) {
  if (!this.isModified(`password`) || this.isNew) return next(); //IF PASSWORD NOT BEING MODIFIED OR USER IS NEW, DO NOT RESET
  this.passwordChangedAt = Date.now(); //COMPARE TIMESTAMP ON JWT IN authController
  next();
});

//HIDE USER WHEN `DELETED`
userSchema.pre(/^find/, function(this: Model<IUser>, next) {
  this.find({ active: { $ne: false } }); //SET TO INACTIVE
  next();
});

//METHODS----------------------------------------------------------

//FOR authController.login - COMPARE ENTERED PASSWORD TO STORED PASSWORD
userSchema.methods.correctPassword = async function(
  candidatePassword: string,
  userPassword: string
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

//FOR authController.protect - CHECK IF PASSWORD WAS CHANGED
userSchema.methods.changedPasswordAfter = function(
  this: IUser,
  JWTTimestamp: number
) {
  if (this.passwordChangedAt) {
    const passwordChangedAtNumber: string = `${this.passwordChangedAt.getTime() /
      1000}`;
    const changedTimestamp = parseInt(passwordChangedAtNumber, 10);

    return JWTTimestamp < changedTimestamp;
  }
  return false;
};

//FOR authController.forgotPassword - RESET TOKEN AND ITS EXPIRATION DATE
userSchema.methods.createPasswordResetToken = function() {
  const resetToken = crypto.randomBytes(32).toString(`hex`);

  this.passwordResetToken = crypto
    .createHash(`sha256`)
    .update(resetToken)
    .digest(`hex`);

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const User = mongoose.model<IUser>(`User`, userSchema);
export default User;
