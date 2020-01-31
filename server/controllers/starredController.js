const Starred = require(`./../models/starredModel`);
const catchAsync = require(`./../utils/catchAsync`);
const factory = require(`./handlerFactory`);
const APIFeatures = require(`./../utils/apiFeatures`);

exports.saveMyStarredDrink = catchAsync(async (req, res, next) => {
   const drink = req.params.id;
   const user = req.user.id;

   const doc = await Starred.create({ drink, user });

   res.status(201).json({
      status: `success`,
      doc
   });
});

exports.getAllMyStarredDrinks = catchAsync(async (req, res, next) => {
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

exports.getMyStarredDrink = factory.getOne(Starred);
exports.deleteMyStarredDrink = factory.deleteOne(Starred);

//ADMIN ONLY
exports.getAllStarredDrinks = factory.getAll(Starred);
exports.getStarredDrink = factory.getOne(Starred);
exports.deleteStarredDrink = factory.deleteOne(Starred);
