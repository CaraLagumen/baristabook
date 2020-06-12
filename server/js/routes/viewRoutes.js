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
const viewsController = __importStar(require("../controllers/viewsController"));
const authController = __importStar(require("../controllers/authController"));
const router = express_1.default.Router();
//ALERTS
// router.use(viewsController.alerts);
//DRINKS
router.get(`/`, authController.isLoggedIn, authController.exposeUser, viewsController.getOverview);
router.get(`/drink/:slug`, authController.isLoggedIn, authController.exposeUser, viewsController.getDrink);
//USERS
router.get(`/signup`, authController.isLoggedIn, viewsController.getSignUpForm);
router.get(`/login`, authController.isLoggedIn, viewsController.getLoginForm);
router.get(`/me`, authController.protect, viewsController.getAccount);
//STARRED
router.get(`/star-drink/:slug`, authController.protect, viewsController.createMyStarred);
router.get(`/delete-starred-drink/:slug`, authController.protect, viewsController.deleteMyStarred);
router.get(`/my-starred`, authController.protect, viewsController.getMyStarred);
module.exports = router;
