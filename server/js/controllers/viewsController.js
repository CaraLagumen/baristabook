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
const drinkModel_1 = __importDefault(require("../models/drinkModel"));
const starredModel_1 = __importDefault(require("../models/starredModel"));
const catchAsync_1 = __importDefault(require("./../utils/catchAsync"));
const appError_1 = __importDefault(require("./../utils/appError"));
const apiFeatures_1 = __importDefault(require("./../utils/apiFeatures"));
exports.alerts = (req, res, next) => {
    const { alert } = req.query;
    if (alert === `starred`) {
        res.locals.alert = `Starred successfully.`;
    }
    else if (alert === `deleted`) {
        res.locals.alert = `Deleted star successfully.`;
    }
    next();
};
exports.getOverview = catchAsync_1.default((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //1. GET DRINKS DATA
    //1.A ADD FEATURES
    const features = new apiFeatures_1.default(drinkModel_1.default.find(), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();
    //1.B SET DATA DEPENDING ON QUERIES
    const drinks = yield features.query;
    //2. IF USER, SHARE STARRED
    if (req.user) {
        //2.A FIND STARRED BY COMPARING TO USER ID
        const starred = (yield starredModel_1.default.find({ user: req.user.id })).map(el => el.drink);
        //2.B EXPOSE STARRED TO RES
        res.status(200).render(`overview`, {
            title: `All drinks`,
            drinks,
            //INCLUDED FOR PUG ACCESS
            url: req.url,
            starred
        });
    }
    else {
        //3. BUILD TEMP (overview.pug)
        //4. RENDER TEMP WTIH DRINKS DATA
        res.status(200).render(`overview`, {
            title: `All drinks`,
            drinks,
            //INCLUDED FOR PUG ACCESS
            url: req.url
        });
    }
}));
exports.getDrink = catchAsync_1.default((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //1. GET DRINK DATA
    const drink = yield drinkModel_1.default.findOne({ slug: req.params.slug });
    if (!drink) {
        return new appError_1.default(`There is no drink with that name.`, 404);
    }
    //2. IF USER, SHARE STARRED
    if (req.user) {
        //2.A FIND STARRED BY COMPARING TO USER ID
        const starred = (yield starredModel_1.default.find({ user: req.user.id })).map(el => el.drink);
        //2.B EXPOSE STARRED TO RES
        res.status(200).render(`drink`, {
            title: `${drink.name}`,
            drink,
            //INCLUDED FOR PUG ACCESS
            url: req.url,
            starred
        });
    }
    else {
        //3. BUILD TEMP (drink.pug)
        //4. RENDER TEMP WTIH DRINK DATA
        res.status(200).render(`drink`, {
            title: `${drink.name}`,
            drink,
            //INCLUDED FOR PUG ACCESS
            url: req.url
        });
    }
}));
exports.getSignUpForm = (req, res) => {
    res.status(200).render(`signup`, {
        title: `Create an account`
    });
};
exports.getLoginForm = (req, res) => {
    res.status(200).render(`login`, {
        title: `Log into your account`
    });
};
exports.getAccount = (req, res) => {
    res.status(200).render(`account`, {
        title: `Your account`
    });
};
//USERS----------------------------------------------------------
exports.createMyStarred = catchAsync_1.default((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //1. FIND DRINK WITH MATCHING SLUG
    const drink = yield drinkModel_1.default.findOne({ slug: req.params.slug });
    if (!drink) {
        return new appError_1.default(`There is no drink with that name.`, 404);
    }
    //2. ADD DRINK TO STARRED
    yield starredModel_1.default.create({ drink, user: req.user.id });
    //3. REDIRECT TO STARRED PAGE
    res.status(201).redirect(`back`); //`${req.get(`referer`)}?alert=starred`
}));
exports.deleteMyStarred = catchAsync_1.default((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //1. FIND ID OF DRINK WITH MATCHING SLUG
    const drink = yield drinkModel_1.default.findOne({ slug: req.params.slug });
    if (!drink) {
        return new appError_1.default(`There is no drink with that name.`, 404);
    }
    //2. DELETE DRINK FROM STARRED
    yield starredModel_1.default.findOneAndDelete({
        drink,
        user: req.user.id
    });
    //3. REDIRECT TO RELOADED PAGE
    res.status(204).redirect(`back`); //`${req.get(`referer`)}?alert=deleted`
}));
exports.getMyStarred = catchAsync_1.default((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //1. GET MY DRINKS DATA BY CREATING NEW ARR OF DRINKS FROM STARRED
    const drinks = (yield starredModel_1.default.find({ user: req.user.id })).map(el => el.drink);
    if (!drinks) {
        return new appError_1.default(`Cannot find starred drinks under this account.`, 404);
    }
    //1.A SORT ALPHABETICALLY
    if (req.query.sort === `name`) {
        //@ts-ignore
        const sortedDrinks = drinks.sort((x, y) => x.name > y.name);
        res.status(200).render(`overview`, {
            title: `Starred`,
            drinks: sortedDrinks,
            url: req.url //INCLUDED FOR PUG ACCESS
        });
    }
    else {
        //2. BUILD TEMP (overview.pug)
        //3. RENDER TEMP WTIH DRINK DATA
        res.status(200).render(`overview`, {
            title: `Starred`,
            drinks,
            url: req.url //INCLUDED FOR PUG ACCESS
        });
    }
}));
