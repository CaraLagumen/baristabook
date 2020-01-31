const multer = require(`multer`); //IMG UPLOAD
const sharp = require(`sharp`); //IMG RESIZE

const User = require(`./../models/userModel`);
const catchAsync = require(`./../utils/catchAsync`);
const AppError = require(`./../utils/appError`);
const factory = require(`./handlerFactory`);

//FOR updateMe
const filterObj = (obj, ...allowedFields) => {
   const newObj = {};
   Object.keys(obj).forEach(el => {
      if (allowedFields.includes(el)) newObj[el] = obj[el];
   });
   return newObj;
};

//PHOTOS----------------------------------------------------------

const multerStorage = multer.memoryStorage(); //STORE IN MEMORY

const multerFilter = (req, file, cb) => {
   if (file.mimetype.startsWith(`image`)) {
      cb(null, true);
   } else {
      cb(new AppError(`Not an image.`, 400), false);
   }
};

const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

exports.uploadUserPhoto = upload.single(`photo`);

exports.resizeUserPhoto = catchAsync(async (req, res, next) => {
   if (!req.file) return next();
   req.file.filename = `user-${req.user.id}-${Date.now()}.jpeg`;

   await sharp(req.file.buffer)
      .resize(500, 500)
      .toFormat(`jpeg`)
      .jpeg({ quality: 90 })
      .toFile(`dist/img/users/${req.file.filename}`);

   next();
});

//MAIN----------------------------------------------------------

exports.getAllUsers = factory.getAll(User);
exports.getUser = factory.getOne(User, `starreds`);
exports.updateUser = factory.updateOne(User);
exports.deleteUser = factory.deleteOne(User);

exports.createUser = (req, res) => {
   res.status(500).json({
      status: `error`,
      message: `This route is not defined. Use /signup instead.`
   });
};

exports.getMe = (req, res, next) => {
   req.params.id = req.user.id;
   next();
};

exports.updateMe = catchAsync(async (req, res, next) => {
   //1. CREATE ERROR IF USER POSTS PASSWORD DATA
   if (req.body.password || req.body.passwordConfirm) {
      return next(
         new AppError(
            `This route is not for password updates. Use /updateMyPassword.`,
            400
         )
      );
   }

   //2. FILTER OUT UNWANTED FIELD NAMES THAT ARE NOT ALLOWED TO BE UPDATED
   const filteredBody = filterObj(req.body, `name`, `email`, `location`);
   if (req.file) filteredBody.photo = req.file.filename; //ADD PHOTO PROP

   //3. UPDATE USER DOC
   const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
      new: true,
      runValidators: true
   });

   //4. SEND UPDATED USER
   res.status(200).json({
      status: `success`,
      user: updatedUser
   });
});

exports.deleteMe = catchAsync(async (req, res, next) => {
   //SET USER TO INACTIVE
   await User.findByIdAndUpdate(req.user.id, { active: false });

   res.status(204).json({
      status: `success`,
      user: null
   });
});
