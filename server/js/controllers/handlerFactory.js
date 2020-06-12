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
Object.defineProperty(exports, "__esModule", { value: true });
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const apiFeatures_1 = __importDefault(require("../utils/apiFeatures"));
const appError_1 = __importDefault(require("../utils/appError"));
//HANDLES PARAM ID ONLY
exports.getRawAll = (Model) => catchAsync_1.default((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //ALLOWS FOR SEARCH OF ALL DOC (NOT LIMITED TO 100)
    const doc = yield Model.find();
    res.status(200).json({
        status: `success`,
        results: doc.length,
        doc
    });
}));
exports.getAll = (Model) => catchAsync_1.default((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //1. ADD SEARCH FUNCTIONALITY (LIMITED TO 100)
    const features = new apiFeatures_1.default(Model.find(), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();
    //2. SET DATA DEPENDING ON QUERIES
    const doc = yield features.query;
    //3.SEND DATA
    res.status(200).json({
        status: `success`,
        results: doc.length,
        doc
    });
}));
exports.getOne = (Model, popOptions) => catchAsync_1.default((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let query = Model.findById(req.params.id);
    //CHECK IF QUERY IS MODIFIED WITH POPULATE
    if (popOptions)
        query = query.populate(popOptions);
    const doc = yield query;
    if (!doc) {
        return new appError_1.default(`No document found with that ID.`, 404);
    }
    res.status(200).json({
        status: `success`,
        doc
    });
}));
exports.createOne = (Model) => catchAsync_1.default((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const doc = yield Model.create(req.body);
    res.status(201).json({
        status: `success`,
        doc
    });
}));
exports.updateOne = (Model) => catchAsync_1.default((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const doc = yield Model.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    if (!doc) {
        return next(new appError_1.default(`No document found with that ID.`, 404));
    }
    res.status(200).json({
        status: `success`,
        doc
    });
}));
exports.deleteOne = (Model) => catchAsync_1.default((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const doc = yield Model.findByIdAndDelete(req.params.id);
    if (!doc) {
        return next(new appError_1.default(`No document found with that ID.`, 404));
    }
    res.status(204).json({
        status: `success`,
        doc: null
    });
}));
