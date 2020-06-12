import Drink from "../models/drinkModel";
import * as factory from "./handlerFactory";
import catchAsync from "../utils/catchAsync";
import AppError from "../utils/appError";

export const getSearch = catchAsync(async (req, res, next) => {
  //FIND DRINK BY NAME OR CODE INCLUDING PARTIAL MATCHES
  const doc = await Drink.find({
    $or: [
      {
        name: { $regex: <string>req.query.drink, $options: `i` }
      },
      {
        code: { $regex: <string>req.query.drink, $options: `i` }
      }
    ]
  });

  res.status(200).json({
    status: `success`,
    doc
  });
});

export const getDrinkSlug = catchAsync(async (req, res, next) => {
  const doc = await Drink.find({ slug: req.params.slug });

  if (!doc) {
    return new AppError(`No document found with that slug.`, 404);
  }

  res.status(200).json({
    status: `success`,
    doc
  });
});

export const getAllDrinks = factory.getAll(Drink);
export const getDrink = factory.getOne(Drink);
export const createDrink = factory.createOne(Drink);
export const updateDrink = factory.updateOne(Drink);
export const deleteDrink = factory.deleteOne(Drink);
