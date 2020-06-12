"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const util_1 = require("util");
const crypto_1 = __importDefault(require("crypto"));
const userModel_1 = __importDefault(require("../models/userModel"));
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const appError_1 = __importDefault(require("../utils/appError"));
const email_1 = __importDefault(require("../utils/email"));
//SETUP SIGN IN TOKEN TO BE ATTACHED
const sessionToken = (id) => {
    return jsonwebtoken_1.default.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
};
//CREATE COOKIE AND ATTACH TOKEN
const createSendToken = (user, statusCode, req, res) => {
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
exports.signup = catchAsync_1.default((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = yield userModel_1.default.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm
    });
    const url = `${req.protocol}://${req.get(`host`)}/`;
    yield new email_1.default(newUser, url).sendWelcome();
    createSendToken(newUser, 201, req, res);
}));
exports.login = catchAsync_1.default((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    //1. IF EMAIL & PASSWORD DOES NOT EXIST
    if (!email || !password) {
        return next(new appError_1.default(`Please provide an email and password.`, 400));
    }
    //2. CHECK IF USER EXISTS AND PASSWORD CORRECT
    const user = yield userModel_1.default.findOne({ email }).select(`+password`);
    if (!user || !(yield user.correctPassword(password, user.password))) {
        return next(new appError_1.default(`Incorrect email or password.`, 401));
    }
    //3. SEND USER WITH TOKEN
    createSendToken(user, 200, req, res);
}));
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
exports.protect = catchAsync_1.default((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //1. CHECK IF TOKEN EXISTS
    let token;
    if (req.headers.authorization &&
        req.headers.authorization.startsWith(`Bearer`)) {
        token = req.headers.authorization.split(` `)[1];
    }
    else if (req.cookies.jwt) {
        token = req.cookies.jwt;
    }
    if (!token) {
        return next(new appError_1.default(`You are not logged in.`, 401));
    }
    //2. VERIFY TOKEN
    const decoded = yield util_1.promisify(jsonwebtoken_1.default.verify)(token, process.env.JWT_SECRET);
    //3. CHECK IF USER STILL EXISTS
    const currentUser = yield userModel_1.default.findById(decoded.id);
    if (!currentUser) {
        return next(new appError_1.default(`The user with this token no longer exists.`, 401));
    }
    //4. CHECK IF USER CHANGED PASSWORD AFTER JWT ISSUED
    if (currentUser.changedPasswordAfter(decoded.iat)) {
        return next(new appError_1.default(`User recently changed password. Please log in again.`, 401));
    }
    //5. GRANT ACCESS
    req.user = currentUser;
    res.locals.user = currentUser;
    next();
}));
//FOR PUBLIC VIEW
exports.isLoggedIn = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //1. CHECK IF TOKEN EXISTS
    if (req.cookies.jwt) {
        try {
            //2. VERIFY TOKEN
            const decoded = yield util_1.promisify(jsonwebtoken_1.default.verify)(req.cookies.jwt, process.env.JWT_SECRET); //VERIFY IS AN ASYNC FUNCTION
            //3. CHECK IF USER STILL EXISTS
            const currentUser = yield userModel_1.default.findById(decoded.id);
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
        }
        catch (err) {
            return next();
        }
    }
    next();
});
//APPLY USER ROLES
exports.restrictTo = (...roles) => {
    return (req, res, next) => {
        //IF ROLE NOT INCLUDED, RESTRICT ACCESS
        if (!roles.includes(req.user.role)) {
            return next(new appError_1.default(`You do not have permission to perform this action.`, 403));
        }
        next();
    };
};
exports.forgotPassword = catchAsync_1.default((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //1. GET USER BASED ON POSTED EMAIL
    const user = yield userModel_1.default.findOne({ email: req.body.email });
    if (!user) {
        return next(new appError_1.default(`There is no user with that email address.`, 404));
    }
    //2. GENERATE RANDOM RESET TOKEN
    const resetToken = user.createPasswordResetToken();
    yield user.save({ validateBeforeSave: false });
    try {
        //3. SEND TO USER'S EMAIL
        const resetURL = `${req.protocol}://${req.get(`host`)}/#/auth/reset/${resetToken}`;
        yield new email_1.default(user, resetURL).sendPasswordReset();
        res.status(200).json({
            status: `success`,
            message: `Token sent to email.`
        });
    }
    catch (err) {
        user.passwordResetToken = undefined;
        user.passwordResetExpires = undefined;
        yield user.save({ validateBeforeSave: false });
        return next(new appError_1.default(`There was an error sending the email. Try again later.`, 500));
    }
}));
exports.resetPassword = catchAsync_1.default((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //1. GET USER BASED ON TOKEN
    const hashedToken = crypto_1.default
        .createHash(`sha256`)
        .update(req.params.token)
        .digest(`hex`);
    const user = yield userModel_1.default.findOne({
        passwordResetToken: hashedToken,
        passwordResetExpires: { $gt: Date.now() }
    });
    //2. IF TOKEN NOT EXPIRED AND USER EXISTS, SET NEW PASSWORD
    if (!user) {
        return next(new appError_1.default(`Token is invalid or has expired`, 400));
    }
    user.password = req.body.password;
    user.passwordConfirm = req.body.passwordConfirm;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    //3. UPDATE changedPasswordAt PROP FOR USER
    yield user.save();
    //4. LOG USER IN AND SEND JWT
    createSendToken(user, 200, req, res);
}));
exports.updatePassword = catchAsync_1.default((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //1. GET USER FROM COLLECTION
    const user = (yield userModel_1.default.findById(req.user.id).select(`+password`));
    //2. CHECK IF POSTED CURRENT PASSWORD CORRECT
    if (!(yield user.correctPassword(req.body.passwordCurrent, user.password))) {
        return next(new appError_1.default(`The password entered is incorrect.`, 401));
    }
    //3. IF SO, UPDATE PASSWORD
    user.password = req.body.password;
    user.passwordConfirm = req.body.passwordConfirm;
    yield user.save();
    //4. LOG USER IN AND SEND JWT
    createSendToken(user, 200, req, res);
}));
exports.exposeUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //1. CHECK IF TOKEN EXISTS
        let token;
        if (req.headers.authorization &&
            req.headers.authorization.startsWith(`Bearer`)) {
            token = req.headers.authorization.split(` `)[1];
        }
        else if (req.cookies.jwt) {
            token = req.cookies.jwt;
        }
        else {
            return next();
        }
        if (!token) {
            return next(new appError_1.default(`You are not logged in.`, 401));
        }
        //2. VERIFY TOKEN
        const decoded = yield util_1.promisify(jsonwebtoken_1.default.verify)(token, process.env.JWT_SECRET);
        //3. CHECK IF USER STILL EXISTS
        const currentUser = yield userModel_1.default.findById(decoded.id);
        if (!currentUser) {
            return next(new appError_1.default(`The user with this token no longer exists.`, 401));
        }
        //4. CHECK IF USER CHANGED PASSWORD AFTER JWT ISSUED
        if (currentUser.changedPasswordAfter(decoded.iat)) {
            return next(new appError_1.default(`User recently changed password. Please log in again.`, 401));
        }
        //5. GRANT ACCESS
        req.user = currentUser;
        res.locals.user = currentUser;
        next();
    }
    catch (err) {
        return next();
    }
});
