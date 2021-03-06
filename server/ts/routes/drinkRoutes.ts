import express from "express";

import * as drinkController from "./../controllers/drinkController";
import * as authController from "./../controllers/authController";
import * as starredController from "./../controllers/starredController";

const router = express.Router({ mergeParams: true });

router.route(`/search`).get(drinkController.getSearch);
router.route(`/name/:slug`).get(drinkController.getDrinkSlug);

router
  .route(`/`)
  .get(drinkController.getAllDrinks)
  .post(
    authController.protect,
    authController.restrictTo(`admin`, `editor`),
    drinkController.createDrink
  );

router
  .route(`/:id`)
  .get(drinkController.getDrink)
  .patch(
    authController.protect,
    authController.restrictTo(`admin`, `editor`),
    drinkController.updateDrink
  )
  .delete(
    authController.protect,
    authController.restrictTo(`admin`),
    drinkController.deleteDrink
  );

//SAVE STARRED DRINKS
router.post(
  `/:id`,
  authController.protect,
  starredController.saveMyStarredDrink
);

export = router;
