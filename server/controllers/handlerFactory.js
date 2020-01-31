const catchAsync = require(`./../utils/catchAsync`);
const AppError = require(`./../utils/appError`);
const APIFeatures = require(`./../utils/apiFeatures`);

exports.getAll = Model =>
   catchAsync(async (req, res, next) => {
      //1. ADD SEARCH FUNCTIONALITY
      const features = new APIFeatures(Model.find(), req.query)
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

exports.getOne = (Model, popOptions) =>
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

exports.createOne = Model =>
   catchAsync(async (req, res, next) => {
      const doc = await Model.create(req.body);

      res.status(201).json({
         status: `success`,
         doc
      });
   });

exports.updateOne = Model =>
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

exports.deleteOne = Model =>
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
