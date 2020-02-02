const express = require(`express`);
const drinkController = require(`./../controllers/drinkController`);
const authController = require(`./../controllers/authController`);
const starredController = require(`./../controllers/starredController`);

const router = express.Router();

router.route(`/search`).get(drinkController.getSearch);

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

module.exports = router;
