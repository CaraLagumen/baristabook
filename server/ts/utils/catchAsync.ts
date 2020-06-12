import { RequestHandler } from "express";

const catchAsync = (fn: RequestHandler): RequestHandler => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

export default catchAsync;
