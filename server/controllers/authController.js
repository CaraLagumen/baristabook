const { promisify } = require(`util`);
const jwt = require(`jsonwebtoken`);
const crypto = require(`crypto`);

const User = require(`./../models/userModel`);
const catchAsync = require(`./../utils/catchAsync`);
const AppError = require(`./../utils/appError`);
const Email = require(`./../utils/email`);

//SETUP SIGN IN TOKEN TO BE ATTACHED
const signToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
};

//CREATE COOKIE AND ATTACH TOKEN
const createSendToken = (user, statusCode, req, res) => {
  //1. SETUP COOKIE PARAMS
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true, //COOKIE INACCESSIBLE BY BROWSER
    secure: req.secure || req.headers[`x-forwarded-proto`] === `https`
  };

  //2. SEND COOKIE
  res.cookie(`jwt`, token, cookieOptions);

  //3. REMOVE PASSWORD FROM OUTPUT
  user.password = undefined;

  //4. SEND USER WITH COOKIE AND TOKEN
  res.status(statusCode).json({
    status: `success`,
    token,
    user,
    expiresIn: 1209600 //EXPOSE TO ANGULAR
  });
};

//MAIN----------------------------------------------------------

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm
  });

  const url = `${req.protocol}://${req.get(`host`)}/me`;

  await new Email(newUser, url).sendWelcome();

  createSendToken(newUser, 201, req, res);
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  //1. IF EMAIL & PASSWORD DOES NOT EXIST
  if (!email || !password) {
    return next(new AppError(`Please provide an email and password.`, 400));
  }

  //2. CHECK IF USER EXISTS AND PASSWORD CORRECT
  const user = await User.findOne({ email }).select(`+password`);
  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError(`Incorrect email or password.`, 401));
  }

  //3. SEND USER WITH TOKEN
  createSendToken(user, 200, req, res);
});

exports.logout = (req, res) => {
  res.cookie(`jwt`, `loggedout`, {
    //OVERWRITE COOKIE FOR LOGOUT
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true
  });

  res.status(200).json({ status: `success` });
};

//MIDDLEWARES FOR LOGGED IN USERS----------------------------------------------------------

//USER STATE CHECK
exports.protect = catchAsync(async (req, res, next) => {
  //1. CHECK IF TOKEN EXISTS
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith(`Bearer`)
  ) {
    token = req.headers.authorization.split(` `)[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return next(new AppError(`You are not logged in.`, 401));
  }

  //2. VERIFY TOKEN
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

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
exports.isLoggedIn = async (req, res, next) => {
  //1. CHECK IF TOKEN EXISTS
  if (req.cookies.jwt) {
    try {
      //2. VERIFY TOKEN
      const decoded = await promisify(jwt.verify)(
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
exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    //IF ROLE NOT INCLUDED, RESTRICT ACCESS
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError(`You do not have permission to perform this action.`, 403)
      );
    }
    next();
  };
};

exports.forgotPassword = catchAsync(async (req, res, next) => {
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
    )}/auth/reset/${resetToken}`;

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
      new AppError(`There was an error sending the email. Try again later.`),
      500
    );
  }
});

exports.resetPassword = catchAsync(async (req, res, next) => {
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

exports.updatePassword = catchAsync(async (req, res, next) => {
  //1. GET USER FROM COLLECTION
  const user = await User.findById(req.user.id).select(`+password`);

  //2. CHECK IF POSTED CURRENT PASSWORD CORRECT
  if (!(await user.correctPassword(req.body.passwordCurrent, user.password))) {
    return next(new AppError(`The password entered is incorrect.`, 401));
  }

  //3. IF SO, UPDATE PASSWORD
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;

  await user.save();

  //4. LOG USER IN AND SEND JWT
  createSendToken(user, 200, req, res);
});

exports.exposeUser = async (req, res, next) => {
  try {
    //1. CHECK IF TOKEN EXISTS
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith(`Bearer`)
    ) {
      token = req.headers.authorization.split(` `)[1];
    } else if (req.cookies.jwt) {
      token = req.cookies.jwt;
    } else {
      return next();
    }

    if (!token) {
      return next(new AppError(`You are not logged in.`, 401));
    }

    //2. VERIFY TOKEN
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

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
