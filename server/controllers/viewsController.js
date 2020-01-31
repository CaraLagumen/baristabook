const Drink = require(`../models/drinkModel`);
const Starred = require(`../models/starredModel`);
const catchAsync = require(`./../utils/catchAsync`);
const AppError = require(`./../utils/appError`);
const APIFeatures = require(`./../utils/apiFeatures`);

exports.alerts = (req, res, next) => {
   const { alert } = req.query;

   if (alert === `starred`) {
      res.locals.alert = `Starred successfully.`;
   } else if (alert === `deleted`) {
      res.locals.alert = `Deleted star successfully.`;
   }

   next();
};

exports.getOverview = catchAsync(async (req, res, next) => {
   //1. GET DRINKS DATA
   //1.A ADD FEATURES
   const features = new APIFeatures(Drink.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
   //1.B SET DATA DEPENDING ON QUERIES
   const drinks = await features.query;

   //2. IF USER, SHARE STARRED
   if (req.user) {
      //2.A FIND STARRED BY COMPARING TO USER ID
      const starred = (await Starred.find({ user: req.user.id })).map(
         el => el.drink
      );
      //2.B EXPOSE STARRED TO RES
      res.status(200).render(`overview`, {
         title: `All drinks`,
         drinks,
         //INCLUDED FOR PUG ACCESS
         url: req.url,
         starred
      });
   } else {
      //3. BUILD TEMP (overview.pug)
      //4. RENDER TEMP WTIH DRINKS DATA
      res.status(200).render(`overview`, {
         title: `All drinks`,
         drinks,
         //INCLUDED FOR PUG ACCESS
         url: req.url
      });
   }
});

exports.getDrink = catchAsync(async (req, res, next) => {
   //1. GET DRINK DATA
   const drink = await Drink.findOne({ slug: req.params.slug });

   if (!drink) {
      return new AppError(`There is no drink with that name.`, 404);
   }

   //2. IF USER, SHARE STARRED
   if (req.user) {
      //2.A FIND STARRED BY COMPARING TO USER ID
      const starred = (await Starred.find({ user: req.user.id })).map(
         el => el.drink
      );
      //2.B EXPOSE STARRED TO RES
      res.status(200).render(`drink`, {
         title: `${drink.name}`,
         drink,
         //INCLUDED FOR PUG ACCESS
         url: req.url,
         starred
      });
   } else {
      //3. BUILD TEMP (drink.pug)
      //4. RENDER TEMP WTIH DRINK DATA
      res.status(200).render(`drink`, {
         title: `${drink.name}`,
         drink,
         //INCLUDED FOR PUG ACCESS
         url: req.url
      });
   }
});

exports.getSignUpForm = (req, res) => {
   res.status(200).render(`signup`, {
      title: `Create an account`
   });
};

exports.getLoginForm = (req, res) => {
   res.status(200).render(`login`, {
      title: `Log into your account`
   });
};

exports.getAccount = (req, res) => {
   res.status(200).render(`account`, {
      title: `Your account`
   });
};

//USERS----------------------------------------------------------

exports.createMyStarred = catchAsync(async (req, res, next) => {
   //1. FIND DRINK WITH MATCHING SLUG
   const drink = await Drink.findOne({ slug: req.params.slug });

   if (!drink) {
      return new AppError(`There is no drink with that name.`, 404);
   }

   //2. ADD DRINK TO STARRED
   await Starred.create({ drink, user: req.user.id });

   //3. REDIRECT TO STARRED PAGE
   res.status(201).redirect(`back`); //`${req.get(`referer`)}?alert=starred`
});

exports.deleteMyStarred = catchAsync(async (req, res, next) => {
   //1. FIND ID OF DRINK WITH MATCHING SLUG
   const drink = await Drink.findOne({ slug: req.params.slug });

   if (!drink) {
      return new AppError(`There is no drink with that name.`, 404);
   }

   //2. DELETE DRINK FROM STARRED
   await Starred.findOneAndDelete({
      drink,
      user: req.user.id
   });

   //3. REDIRECT TO RELOADED PAGE
   res.status(204).redirect(`back`); //`${req.get(`referer`)}?alert=deleted`
});

exports.getMyStarred = catchAsync(async (req, res, next) => {
   //1. GET MY DRINKS DATA BY CREATING NEW ARR OF DRINKS FROM STARRED
   const drinks = (await Starred.find({ user: req.user.id })).map(
      el => el.drink
   );

   if (!drinks) {
      return new AppError(
         `Cannot find starred drinks under this account.`,
         404
      );
   }

   //1.A SORT ALPHABETICALLY
   if (req.query.sort === `name`) {
      const sortedDrinks = drinks.sort((x, y) => x.name > y.name);

      res.status(200).render(`overview`, {
         title: `Starred`,
         drinks: sortedDrinks,
         url: req.url //INCLUDED FOR PUG ACCESS
      });
   } else {
      //2. BUILD TEMP (overview.pug)
      //3. RENDER TEMP WTIH DRINK DATA
      res.status(200).render(`overview`, {
         title: `Starred`,
         drinks,
         url: req.url //INCLUDED FOR PUG ACCESS
      });
   }
});
