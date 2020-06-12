import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { promisify } from "util";
import crypto from "crypto";

import User from "../models/userModel";
import catchAsync from "../utils/catchAsync";
import AppError from "../utils/appError";
import Email from "../utils/email";
import IUser from "ts/types/userInterface";

//SETUP SIGN IN TOKEN TO BE ATTACHED
const sessionToken = (id: string) => {
  return jwt.sign({ id }, <jwt.Secret>process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
};

//CREATE COOKIE AND ATTACH TOKEN
const createSendToken = (
  user: IUser,
  statusCode: number,
  req: Request,
  res: Response
) => {
  //1. SETUP COOKIE PARAMS
  const token = sessionToken(user._id);
  const expireTime = process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000;
  const cookieOptions = {
    expires: new Date(Date.now() + expireTime),
    httpOnly: true,
    secure: req.secure || req.headers[`x-forwarded-proto`] === `https`
  };

  //2. SEND COOKIE
  res.cookie(`jwt`, token, cookieOptions);

  //3. REMOVE PASSWORD FROM OUTPUT FOR PRIVACY
  user.password = undefined;

  //4. SEND EMPLOYEE WITH COOKIE AND SESSION TOKEN
  res.status(statusCode).json({
    status: `success`,
    token,
    user,
    expiresIn: 1209600 //DISPLAY FOR ANGULAR
  });
};

//MAIN----------------------------------------------------------

export const signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm
  });

  const url = `${req.protocol}://${req.get(`host`)}/`;

  await new Email(newUser, url).sendWelcome();

  createSendToken(newUser, 201, req, res);
});

export const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  //1. IF EMAIL & PASSWORD DOES NOT EXIST
  if (!email || !password) {
    return next(new AppError(`Please provide an email and password.`, 400));
  }

  //2. CHECK IF USER EXISTS AND PASSWORD CORRECT
  const user = await User.findOne({ email }).select(`+password`);
  if (!user || !(await user.correctPassword(password, <string>user.password))) {
    return next(new AppError(`Incorrect email or password.`, 401));
  }

  //3. SEND USER WITH TOKEN
  createSendToken(user, 200, req, res);
});

export const logout = (req: Request, res: Response) => {
  res.cookie(`jwt`, `loggedout`, {
    //OVERWRITE COOKIE FOR LOGOUT
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true
  });

  res.status(200).json({ status: `success` });
};

//MIDDLEWARES FOR LOGGED IN USERS----------------------------------------------------------

//USER STATE CHECK
export const protect = catchAsync(async (req, res, next) => {
  //1. CHECK IF TOKEN EXISTS
  let token: string | undefined;

  if (
    req.headers.authorization &&
    (<string>req.headers.authorization).startsWith(`Bearer`)
  ) {
    token = (<string>req.headers.authorization).split(` `)[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return next(new AppError(`You are not logged in.`, 401));
  }

  //2. VERIFY TOKEN
  const decoded = await promisify<Function>(<any>jwt.verify)(
    token,
    process.env.JWT_SECRET
  );

  //3. CHECK IF USER STILL EXISTS
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(
      new AppError(`The user with this token no longer exists.`, 401)
    );
  }

  //4. CHECK IF USER CHANGED PASSWORD AFTER JWT ISSUED
  if (currentUser.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError(`User recently changed password. Please log in again.`, 401)
    );
  }

  //5. GRANT ACCESS
  req.user = currentUser;
  res.locals.user = currentUser;
  next();
});

//FOR PUBLIC VIEW
export const isLoggedIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //1. CHECK IF TOKEN EXISTS
  if (req.cookies.jwt) {
    try {
      //2. VERIFY TOKEN
      const decoded = await promisify<Function>(<any>jwt.verify)(
        req.cookies.jwt,
        process.env.JWT_SECRET
      ); //VERIFY IS AN ASYNC FUNCTION

      //3. CHECK IF USER STILL EXISTS
      const currentUser = await User.findById(decoded.id);
      if (!currentUser) {
        return next();
      }

      //4. CHECK IF USER CHANGED PASSWORD AFTER JWT ISSUED
      if (currentUser.changedPasswordAfter(decoded.iat)) {
        return next();
      }

      //THERE IS A LOGGED IN USER
      res.locals.user = currentUser;
      return next();
    } catch (err) {
      return next();
    }
  }
  next();
};

//APPLY USER ROLES
export const restrictTo = (...roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    //IF ROLE NOT INCLUDED, RESTRICT ACCESS
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError(`You do not have permission to perform this action.`, 403)
      );
    }
    next();
  };
};

export const forgotPassword = catchAsync(async (req, res, next) => {
  //1. GET USER BASED ON POSTED EMAIL
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new AppError(`There is no user with that email address.`, 404));
  }

  //2. GENERATE RANDOM RESET TOKEN
  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  try {
    //3. SEND TO USER'S EMAIL
    const resetURL = `${req.protocol}://${req.get(
      `host`
    )}/#/auth/reset/${resetToken}`;

    await new Email(user, resetURL).sendPasswordReset();

    res.status(200).json({
      status: `success`,
      message: `Token sent to email.`
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;

    await user.save({ validateBeforeSave: false });

    return next(
      new AppError(
        `There was an error sending the email. Try again later.`,
        500
      )
    );
  }
});

export const resetPassword = catchAsync(async (req, res, next) => {
  //1. GET USER BASED ON TOKEN
  const hashedToken = crypto
    .createHash(`sha256`)
    .update(req.params.token)
    .digest(`hex`);

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() }
  });

  //2. IF TOKEN NOT EXPIRED AND USER EXISTS, SET NEW PASSWORD
  if (!user) {
    return next(new AppError(`Token is invalid or has expired`, 400));
  }

  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;

  //3. UPDATE changedPasswordAt PROP FOR USER
  await user.save();

  //4. LOG USER IN AND SEND JWT
  createSendToken(user, 200, req, res);
});

export const updatePassword = catchAsync(async (req, res, next) => {
  //1. GET USER FROM COLLECTION
  const user = (await User.findById(req.user.id).select(`+password`)) as IUser;

  //2. CHECK IF POSTED CURRENT PASSWORD CORRECT
  if (
    !(await user.correctPassword(
      req.body.passwordCurrent,
      user.password as string
    ))
  ) {
    return next(new AppError(`The password entered is incorrect.`, 401));
  }

  //3. IF SO, UPDATE PASSWORD
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;

  await user.save();

  //4. LOG USER IN AND SEND JWT
  createSendToken(user, 200, req, res);
});

export const exposeUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //1. CHECK IF TOKEN EXISTS
    let token: string | undefined;
    if (
      req.headers.authorization &&
      (<string>req.headers.authorization).startsWith(`Bearer`)
    ) {
      token = (<string>req.headers.authorization).split(` `)[1];
    } else if (req.cookies.jwt) {
      token = req.cookies.jwt;
    } else {
      return next();
    }

    if (!token) {
      return next(new AppError(`You are not logged in.`, 401));
    }

    //2. VERIFY TOKEN
    const decoded = await promisify<Function>(<any>jwt.verify)(
      token,
      process.env.JWT_SECRET
    );

    //3. CHECK IF USER STILL EXISTS
    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
      return next(
        new AppError(`The user with this token no longer exists.`, 401)
      );
    }

    //4. CHECK IF USER CHANGED PASSWORD AFTER JWT ISSUED
    if (currentUser.changedPasswordAfter(decoded.iat)) {
      return next(
        new AppError(
          `User recently changed password. Please log in again.`,
          401
        )
      );
    }

    //5. GRANT ACCESS
    req.user = currentUser;
    res.locals.user = currentUser;
    next();
  } catch (err) {
    return next();
  }
};
