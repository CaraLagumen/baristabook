import Starred from "../models/starredModel";
import catchAsync from "../utils/catchAsync";
import * as factory from "./handlerFactory";
import APIFeatures from "../utils/apiFeatures";

export const saveMyStarredDrink = catchAsync(async (req, res, next) => {
  const drink = req.params.id as string;
  const user = req.user.id as string;

  const doc = await Starred.create({ drink, user });

  res.status(201).json({
    status: `success`,
    doc
  });
});

export const getAllMyStarredDrinks = catchAsync(async (req, res, next) => {
  //1. ADD SEARCH FUNCTIONALITY
  const features = new APIFeatures(
    Starred.find({ user: req.user.id }),
    req.query
  )
    .filter()
    .sort()
    .limitFields()
    .paginate();

  //2. SET DATA DEPENDING ON QUERIES
  const doc = await features.query;

  //3. SEND DATA
  res.status(200).json({
    status: `success`,
    results: doc.length,
    doc
  });
});

export const getMyStarredDrink = factory.getOne(Starred);
export const deleteMyStarredDrink = factory.deleteOne(Starred);

//ADMIN ONLY
export const getAllStarredDrinks = factory.getAll(Starred);
export const getStarredDrink = factory.getOne(Starred);
export const deleteStarredDrink = factory.deleteOne(Starred);
