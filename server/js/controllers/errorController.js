"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const appError_1 = __importDefault(require("../utils/appError"));
const handleCastErrorDB = (err, req, res, next) => {
    const message = `Invalid ${err.path}: ${err.value}.`;
    return new appError_1.default(message, 400);
};
const handleDuplicateFieldsDB = (err, req, res, next) => {
    const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
    const message = `Duplicate field value: ${value}. Please use another value.`;
    return new appError_1.default(message, 400);
};
const handleValidationErrorDB = (err, req, res, next) => {
    const errors = Object.values(err.errors).map((el) => el.message);
    const message = `Invalid input data. ${errors.join(`. `)}`;
    return new appError_1.default(message, 400);
};
const handleJWTError = () => new appError_1.default(`Invalid token. Please log in again.`, 401);
const handleJWTExpiredError = () => new appError_1.default(`Your token has expired. Please log in again.`, 401);
const sendErrorDev = (err, req, res, next) => {
    //1. API
    if (req.originalUrl.startsWith(`/api`)) {
        return res.status(err.statusCode).json({
            status: err.status,
            error: err,
            message: err.message,
            stack: err.stack
        });
    }
    //2. RENDERED WEBSITE
    console.log(`>>>> Error`, err);
    return res.status(err.statusCode).json({
        status: `Something went wrong.`,
        message: err.message
    });
};
const sendErrorProd = (err, req, res, next) => {
    //1. API
    if (req.originalUrl.startsWith(`/api`)) {
        //OPERATIONAL (TRUSTED ERROR) - SEND TO CLIENT
        if (err.isOperational) {
            return res.status(err.statusCode).json({
                status: err.status,
                message: err.message
            });
        }
        //PROGRAMMING OR OTHER ERROR (PROTECT FROM LEAKS)
        console.log(`>>>> Error`, err);
        return res.status(500).json({
            status: `error`,
            message: `Something went wrong.`
        });
    }
    //2. RENDERED WEBSITE
    //OPERATIONAL (TRUSTED ERROR) - SEND TO CLIENT
    if (err.isOperational) {
        return res.status(err.statusCode).render(`error`, {
            title: `Something went wrong.`,
            message: err.message
        });
    }
    //PROGRAMMING OR OTHER ERROR (PROTECT FROM LEAKS)
    console.log(`>>>> Error:`, err);
    return res.status(err.statusCode).render(`error`, {
        title: `Something went wrong.`,
        message: `Please try again later.`
    });
};
const globalErrorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || `error`;
    if (process.env.NODE_ENV === `development`) {
        sendErrorDev(err, req, res, next);
    }
    else if (process.env.NODE_ENV === `production`) {
        let error = Object.assign({}, err);
        error.message = err.message;
        if (error.name === `CastError`)
            error = handleCastErrorDB(error, req, res, next);
        if (error.code === 11000)
            error = handleDuplicateFieldsDB(error, req, res, next);
        if (error.name === `ValidationError`)
            error = handleValidationErrorDB(error, req, res, next);
        if (error.name === `JsonWebTokenError`)
            error = handleJWTError();
        if (error.name === `TokenExpiredError`)
            error = handleJWTExpiredError();
        sendErrorProd(error, req, res, next);
    }
};
exports.default = globalErrorHandler;
