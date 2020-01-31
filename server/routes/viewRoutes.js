const express = require(`express`);
const viewsController = require(`../controllers/viewsController`);
const authController = require(`../controllers/authController`);

const router = express.Router();

//ALERTS
// router.use(viewsController.alerts);

//DRINKS
router.get(
   `/`,
   authController.isLoggedIn,
   authController.exposeUser,
   viewsController.getOverview
);
router.get(
   `/drink/:slug`,
   authController.isLoggedIn,
   authController.exposeUser,
   viewsController.getDrink
);

//USERS
router.get(`/signup`, authController.isLoggedIn, viewsController.getSignUpForm);
router.get(`/login`, authController.isLoggedIn, viewsController.getLoginForm);
router.get(`/me`, authController.protect, viewsController.getAccount);

//STARRED
router.get(
   `/star-drink/:slug`,
   authController.protect,
   viewsController.createMyStarred
);
router.get(
   `/delete-starred-drink/:slug`,
   authController.protect,
   viewsController.deleteMyStarred
);
router.get(`/my-starred`, authController.protect, viewsController.getMyStarred);

module.exports = router;
