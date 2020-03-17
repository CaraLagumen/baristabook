const Drink = require(`./../models/drinkModel`);
const factory = require(`./../controllers/handlerFactory`);
const catchAsync = require(`./../utils/catchAsync`);

exports.getSearch = catchAsync(async (req, res, next) => {
  //FIND DRINK BY NAME OR CODE INCLUDING PARTIAL MATCHES
  const doc = await Drink.find({
    $or: [
      {
        name: { $regex: req.query.drink, $options: `i` }
      },
      {
        code: { $regex: req.query.drink, $options: `i` }
      }
    ]
  });

  res.status(200).json({
    status: `success`,
    doc
  });
});

exports.getDrinkSlug = catchAsync(async (req, res, next) => {
  const doc = await Drink.find({ slug: req.params.slug });

  if (!doc) {
    return new AppError(`No document found with that slug.`, 404);
  }

  res.status(200).json({
    status: `success`,
    doc
  });
});

exports.getAllDrinks = factory.getAll(Drink);
exports.getDrink = factory.getOne(Drink);
exports.createDrink = factory.createOne(Drink);
exports.updateDrink = factory.updateOne(Drink);
exports.deleteDrink = factory.deleteOne(Drink);
