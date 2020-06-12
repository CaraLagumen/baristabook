import { ErrorRequestHandler } from "express";

import AppError from "../utils/appError";

const handleCastErrorDB: ErrorRequestHandler = (err, req, res, next) => {
  const message = `Invalid ${err.path}: ${err.value}.`;

  return new AppError(message, 400);
};

const handleDuplicateFieldsDB: ErrorRequestHandler = (err, req, res, next) => {
  const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];

  const message = `Duplicate field value: ${value}. Please use another value.`;

  return new AppError(message, 400);
};

const handleValidationErrorDB: ErrorRequestHandler = (err, req, res, next) => {
  const errors = Object.values(err.errors).map((el: any) => el.message);

  const message = `Invalid input data. ${errors.join(`. `)}`;

  return new AppError(message, 400);
};

const handleJWTError = () =>
  new AppError(`Invalid token. Please log in again.`, 401);

const handleJWTExpiredError = () =>
  new AppError(`Your token has expired. Please log in again.`, 401);

const sendErrorDev: ErrorRequestHandler = (err, req, res, next) => {
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

const sendErrorProd: ErrorRequestHandler = (err, req, res, next) => {
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

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || `error`;

  if (process.env.NODE_ENV === `development`) {
    sendErrorDev(err, req, res, next);
  } else if (process.env.NODE_ENV === `production`) {
    let error = { ...err };
    error.message = err.message;

    if (error.name === `CastError`)
      error = handleCastErrorDB(error, req, res, next);
    if (error.code === 11000)
      error = handleDuplicateFieldsDB(error, req, res, next);
    if (error.name === `ValidationError`)
      error = handleValidationErrorDB(error, req, res, next);
    if (error.name === `JsonWebTokenError`) error = handleJWTError();
    if (error.name === `TokenExpiredError`) error = handleJWTExpiredError();

    sendErrorProd(error, req, res, next);
  }
};

export default globalErrorHandler;
