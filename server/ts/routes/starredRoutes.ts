import express from "express";

import * as starredController from "./../controllers/starredController";
import * as authController from "./../controllers/authController";

const router = express.Router();

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

export = router;
