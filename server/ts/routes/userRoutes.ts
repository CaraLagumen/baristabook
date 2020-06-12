import express from "express";

import * as userController from "../controllers/userController";
import * as authController from "../controllers/authController";
import * as contactUs from "../utils/contactUs";

const router = express.Router();

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
router.patch(
  `/updateMe`,
  userController.uploadUserPhoto,
  userController.resizeUserPhoto,
  userController.updateMe
);
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

export = router;
