import { RequestHandler } from "express";
import multer from "multer"; //IMG UPLOAD
import sharp from "sharp"; //IMG RESIZE

import User from "./../models/userModel";
import catchAsync from "./../utils/catchAsync";
import AppError from "./../utils/appError";
import * as factory from "./handlerFactory";

//FOR updateMe
const filterObj = (
  obj: { [key: string]: string },
  ...allowedFields: string[]
) => {
  const newObj: { [key: string]: string } = {};
  Object.keys(obj).forEach(el => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

//PHOTOS----------------------------------------------------------

const multerStorage = multer.memoryStorage(); //STORE IN MEMORY

const multerFilter = (req: any, file: any, cb: any) => {
  if (file.mimetype.startsWith(`image`)) {
    cb(null, true);
  } else {
    cb(new AppError(`Not an image.`, 400), false);
  }
};

const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

export const uploadUserPhoto = upload.single(`photo`);

export const resizeUserPhoto = catchAsync(async (req, res, next) => {
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

export const getAllUsers = factory.getAll(User);
export const getUser = factory.getOne(User, `starreds`);
export const updateUser = factory.updateOne(User);
export const deleteUser = factory.deleteOne(User);

export const createUser: RequestHandler = (req, res) => {
  res.status(500).json({
    status: `error`,
    message: `This route is not defined. Use /signup instead.`
  });
};

export const getMe: RequestHandler = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

export const updateMe = catchAsync(async (req, res, next) => {
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

export const deleteMe = catchAsync(async (req, res, next) => {
  //SET USER TO INACTIVE
  await User.findByIdAndUpdate(req.user.id, { active: false });

  res.status(204).json({
    status: `success`,
    user: null
  });
});
