"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer")); //IMG UPLOAD
const sharp_1 = __importDefault(require("sharp")); //IMG RESIZE
const userModel_1 = __importDefault(require("./../models/userModel"));
const catchAsync_1 = __importDefault(require("./../utils/catchAsync"));
const appError_1 = __importDefault(require("./../utils/appError"));
const factory = __importStar(require("./handlerFactory"));
//FOR updateMe
const filterObj = (obj, ...allowedFields) => {
    const newObj = {};
    Object.keys(obj).forEach(el => {
        if (allowedFields.includes(el))
            newObj[el] = obj[el];
    });
    return newObj;
};
//PHOTOS----------------------------------------------------------
const multerStorage = multer_1.default.memoryStorage(); //STORE IN MEMORY
const multerFilter = (req, file, cb) => {
    if (file.mimetype.startsWith(`image`)) {
        cb(null, true);
    }
    else {
        cb(new appError_1.default(`Not an image.`, 400), false);
    }
};
const upload = multer_1.default({ storage: multerStorage, fileFilter: multerFilter });
exports.uploadUserPhoto = upload.single(`photo`);
exports.resizeUserPhoto = catchAsync_1.default((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.file)
        return next();
    req.file.filename = `user-${req.user.id}-${Date.now()}.jpeg`;
    yield sharp_1.default(req.file.buffer)
        .resize(500, 500)
        .toFormat(`jpeg`)
        .jpeg({ quality: 90 })
        .toFile(`dist/img/users/${req.file.filename}`);
    next();
}));
//MAIN----------------------------------------------------------
exports.getAllUsers = factory.getAll(userModel_1.default);
exports.getUser = factory.getOne(userModel_1.default, `starreds`);
exports.updateUser = factory.updateOne(userModel_1.default);
exports.deleteUser = factory.deleteOne(userModel_1.default);
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
exports.updateMe = catchAsync_1.default((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //1. CREATE ERROR IF USER POSTS PASSWORD DATA
    if (req.body.password || req.body.passwordConfirm) {
        return next(new appError_1.default(`This route is not for password updates. Use /updateMyPassword.`, 400));
    }
    //2. FILTER OUT UNWANTED FIELD NAMES THAT ARE NOT ALLOWED TO BE UPDATED
    const filteredBody = filterObj(req.body, `name`, `email`, `location`);
    if (req.file)
        filteredBody.photo = req.file.filename; //ADD PHOTO PROP
    //3. UPDATE USER DOC
    const updatedUser = yield userModel_1.default.findByIdAndUpdate(req.user.id, filteredBody, {
        new: true,
        runValidators: true
    });
    //4. SEND UPDATED USER
    res.status(200).json({
        status: `success`,
        user: updatedUser
    });
}));
exports.deleteMe = catchAsync_1.default((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //SET USER TO INACTIVE
    yield userModel_1.default.findByIdAndUpdate(req.user.id, { active: false });
    res.status(204).json({
        status: `success`,
        user: null
    });
}));
