const mongoose = require(`mongoose`);
const slugify = require(`slugify`);

const drinkSchema = new mongoose.Schema(
  {
    slug: String,
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false
    },
    name: {
      type: String,
      required: [true, `Drink name required.`],
      trim: true,
      maxlength: [40, `Drink name can't have more than 40 characters.`],
      minlength: [3, `Drink name can't have less than 3 characters.`]
    },
    code: {
      type: String,
      required: [true, `Drink code required.`],
      maxlength: [8, `Drink code can't have more than 8 characters.`]
    },
    form: {
      type: String,
      required: [true, `Drink form required.`],
      enum: [`Hot`, `Iced`, `Frozen`]
    },
    season: {
      type: String,
      required: [true, `Drink season required.`],
      enum: [
        `Year round`,
        `Winter`,
        `Spring`,
        `Summer`,
        `Fall`,
        `Special`,
        `Secret`,
        `Discontinued`
      ],
      default: `Year round`
    },
    size: {
      type: [String],
      required: [true, `Drink size required.`],
      enum: [`S`, `M`, `T`, `G`, `V`, `TR`]
    },
    caffeine: {
      type: String,
      enum: [`Espresso`, `Blonde espresso`, `Frappuccino roast`]
    },
    caffeineCount: { type: [Number], default: undefined },
    syrup: {
      type: String,
      trim: true,
      maxlength: [20, `Drink syrup can't have more than 20 characters.`],
      minlength: [3, `Drink syrup can't have less than 3 characters.`]
    },
    syrupCount: { type: [Number], default: undefined },
    tea: {
      type: String,
      enum: [
        `Royal english breakfast`,
        `Emperor's cloud`,
        `Earl grey`,
        `Jade citrus mint`,
        `Mint majesty`,
        `Peach tranquility`,
        `Comfort`,
        `Defense`,
        `Rev up`,
        `Peach tranquility and jade citrus mint`,
        `Assorted`
      ]
    },
    teaCount: { type: [Number], default: undefined },
    body: {
      type: String,
      trim: true,
      maxlength: [10, `Drink body can't have more than 10 characters.`],
      minlength: [5, `Drink body can't have less than 5 characters.`]
    },
    base: {
      type: String,
      enum: [`Coffee base`, `Creme base`]
    },
    baseCount: { type: [Number], default: undefined },
    whippedCream: Boolean,
    topping: {
      type: String,
      trim: true,
      maxlength: [10, `Drink topping can't have more than 10 characters.`],
      minlength: [5, `Drink topping can't have less than 5 characters.`]
    },
    shaker: {
      type: String,
      enum: [
        `Black tea`,
        `Green tea`,
        `Passion tea`,
        `White tea`,
        `Strawberry acai refresher`,
        `Very berry hibiscus refresher`,
        `Mango dragon refresher`
      ]
    },
    shakerAddition: {
      type: String,
      enum: [
        `Water`,
        `Lemonade`,
        `Blueberry infusion`,
        `Peach infusion`,
        `Guava infusion`
      ]
    },
    driedFruit: {
      type: String,
      enum: [`Strawberries`, `Blackberries`, `Dragon fruits`]
    },
    custom: {
      type: String,
      trim: true,
      maxlength: [100, `Drink custom can't have more than 100 characters.`],
      minlength: [5, `Drink custom can't have less than 5 characters.`]
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

//VIRTUAL POPULATE
drinkSchema.virtual(`starreds`, {
  ref: `Starred`,
  foreignField: `drink`,
  localField: `_id`
});

//BEFORE SAVE AND CREATE, SLUGIFY NAME TO CREATE SLUG FOR URL
drinkSchema.pre(`save`, function(next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const Drink = mongoose.model(`Drink`, drinkSchema);
module.exports = Drink;
