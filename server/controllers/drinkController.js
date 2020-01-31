const Drink = require(`./../models/drinkModel`);
const factory = require(`./../controllers/handlerFactory`);

exports.getAllDrinks = factory.getAll(Drink);
exports.getDrink = factory.getOne(Drink);
exports.createDrink = factory.createOne(Drink);
exports.updateDrink = factory.updateOne(Drink);
exports.deleteDrink = factory.deleteOne(Drink);
