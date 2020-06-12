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
const drinkModel_1 = __importDefault(require("../models/drinkModel"));
const factory = __importStar(require("./handlerFactory"));
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const appError_1 = __importDefault(require("../utils/appError"));
exports.getSearch = catchAsync_1.default((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //FIND DRINK BY NAME OR CODE INCLUDING PARTIAL MATCHES
    const doc = yield drinkModel_1.default.find({
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
}));
exports.getDrinkSlug = catchAsync_1.default((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const doc = yield drinkModel_1.default.find({ slug: req.params.slug });
    if (!doc) {
        return new appError_1.default(`No document found with that slug.`, 404);
    }
    res.status(200).json({
        status: `success`,
        doc
    });
}));
exports.getAllDrinks = factory.getAll(drinkModel_1.default);
exports.getDrink = factory.getOne(drinkModel_1.default);
exports.createDrink = factory.createOne(drinkModel_1.default);
exports.updateDrink = factory.updateOne(drinkModel_1.default);
exports.deleteDrink = factory.deleteOne(drinkModel_1.default);
