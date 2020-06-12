"use strict";
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
const express_1 = __importDefault(require("express"));
const drinkController = __importStar(require("./../controllers/drinkController"));
const authController = __importStar(require("./../controllers/authController"));
const starredController = __importStar(require("./../controllers/starredController"));
const router = express_1.default.Router({ mergeParams: true });
router.route(`/search`).get(drinkController.getSearch);
router.route(`/name/:slug`).get(drinkController.getDrinkSlug);
router
    .route(`/`)
    .get(drinkController.getAllDrinks)
    .post(authController.protect, authController.restrictTo(`admin`, `editor`), drinkController.createDrink);
router
    .route(`/:id`)
    .get(drinkController.getDrink)
    .patch(authController.protect, authController.restrictTo(`admin`, `editor`), drinkController.updateDrink)
    .delete(authController.protect, authController.restrictTo(`admin`), drinkController.deleteDrink);
//SAVE STARRED DRINKS
router.post(`/:id`, authController.protect, starredController.saveMyStarredDrink);
module.exports = router;
