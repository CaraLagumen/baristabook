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
const starredModel_1 = __importDefault(require("../models/starredModel"));
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const factory = __importStar(require("./handlerFactory"));
const apiFeatures_1 = __importDefault(require("../utils/apiFeatures"));
exports.saveMyStarredDrink = catchAsync_1.default((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const drink = req.params.id;
    const user = req.user.id;
    const doc = yield starredModel_1.default.create({ drink, user });
    res.status(201).json({
        status: `success`,
        doc
    });
}));
exports.getAllMyStarredDrinks = catchAsync_1.default((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //1. ADD SEARCH FUNCTIONALITY
    const features = new apiFeatures_1.default(starredModel_1.default.find({ user: req.user.id }), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();
    //2. SET DATA DEPENDING ON QUERIES
    const doc = yield features.query;
    //3. SEND DATA
    res.status(200).json({
        status: `success`,
        results: doc.length,
        doc
    });
}));
exports.getMyStarredDrink = factory.getOne(starredModel_1.default);
exports.deleteMyStarredDrink = factory.deleteOne(starredModel_1.default);
//ADMIN ONLY
exports.getAllStarredDrinks = factory.getAll(starredModel_1.default);
exports.getStarredDrink = factory.getOne(starredModel_1.default);
exports.deleteStarredDrink = factory.deleteOne(starredModel_1.default);
