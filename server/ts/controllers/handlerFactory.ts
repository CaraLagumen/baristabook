import { Model } from "mongoose";

import catchAsync from "../utils/catchAsync";
import APIFeatures from "../utils/apiFeatures";
import AppError from "../utils/appError";

//HANDLES PARAM ID ONLY

export const getRawAll = (Model: Model<any>) =>
  catchAsync(async (req, res, next) => {
    //ALLOWS FOR SEARCH OF ALL DOC (NOT LIMITED TO 100)
    const doc = await Model.find();

    res.status(200).json({
      status: `success`,
      results: doc.length,
      doc
    });
  });

export const getAll = (Model: Model<any>) =>
  catchAsync(async (req, res, next) => {
    //1. ADD SEARCH FUNCTIONALITY (LIMITED TO 100)
    const features = new APIFeatures(Model.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    //2. SET DATA DEPENDING ON QUERIES
    const doc = await features.query;

    //3.SEND DATA
    res.status(200).json({
      status: `success`,
      results: doc.length,
      doc
    });
  });

export const getOne = (Model: Model<any>, popOptions?: any) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    //CHECK IF QUERY IS MODIFIED WITH POPULATE
    if (popOptions) query = query.populate(popOptions);
    const doc = await query;

    if (!doc) {
      return new AppError(`No document found with that ID.`, 404);
    }

    res.status(200).json({
      status: `success`,
      doc
    });
  });

export const createOne = (Model: Model<any>) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);

    res.status(201).json({
      status: `success`,
      doc
    });
  });

export const updateOne = (Model: Model<any>) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!doc) {
      return next(new AppError(`No document found with that ID.`, 404));
    }

    res.status(200).json({
      status: `success`,
      doc
    });
  });

export const deleteOne = (Model: Model<any>) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(new AppError(`No document found with that ID.`, 404));
    }

    res.status(204).json({
      status: `success`,
      doc: null
    });
  });
