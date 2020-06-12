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
const userController = __importStar(require("../controllers/userController"));
const authController = __importStar(require("../controllers/authController"));
const contactUs = __importStar(require("../utils/contactUs"));
const router = express_1.default.Router();
router.post(`/signup`, authController.signup);
router.post(`/login`, authController.login);
router.get(`/logout`, authController.logout);
router.post(`/send`, contactUs.contactUs);
router.post(`/forgotPassword`, authController.forgotPassword);
router.patch(`/resetPassword/:token`, authController.resetPassword);
//PROTECT ALL ROUTES FROM HERE
router.use(authController.protect);
router.patch(`/updateMyPassword`, authController.updatePassword);
router.get(`/me`, userController.getMe, userController.getUser);
router.patch(`/updateMe`, userController.uploadUserPhoto, userController.resizeUserPhoto, userController.updateMe);
router.delete(`/deleteMe`, userController.deleteMe);
//PROTECT ADMIN ROUTES FROM HERE
router.use(authController.restrictTo(`admin`));
router
    .route(`/`)
    .get(userController.getAllUsers)
    .post(userController.createUser);
router
    .route(`/:id`)
    .get(userController.getUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser);
module.exports = router;
