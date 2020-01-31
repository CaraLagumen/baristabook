const express = require(`express`);
const starredController = require(`./../controllers/starredController`);
const authController = require(`./../controllers/authController`);

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

module.exports = router;
