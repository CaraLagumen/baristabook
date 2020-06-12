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
const starredController = __importStar(require("./../controllers/starredController"));
const authController = __importStar(require("./../controllers/authController"));
const router = express_1.default.Router();
//LOGGED IN USERS ONLY
router.use(authController.protect);
router.get(`/me`, starredController.getAllMyStarredDrinks);
router
    .route(`/me/:id`)
    .get(starredController.getMyStarredDrink)
    .delete(starredController.deleteMyStarredDrink);
//ADMIN ONLY
router.use(authController.restrictTo(`admin`));
router.get(`/`, starredController.getAllStarredDrinks);
router
    .route(`/:id`)
    .get(starredController.getStarredDrink)
    .delete(starredController.deleteStarredDrink);
module.exports = router;
