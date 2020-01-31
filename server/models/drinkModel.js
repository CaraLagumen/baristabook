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
         unique: true,
         trim: true,
         maxlength: [20, `Drink name can't have more than 20 characters.`],
         minlength: [5, `Drink name can't have less than 5 characters.`]
      },
      code: {
         type: String,
         required: [true, `Drink code required.`],
         maxlength: [8, `Drink code can't have more than 8 characters.`]
      },
      form: {
         type: String,
         required: [true, `Drink form required.`],
         enum: [`Hot`, `Iced`, `Blended`]
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
         enum: [`Short`, `Mini`, `Tall`, `Grande`, `Venti`, `Trenta`]
      },
      caffeine: {
         type: String,
         enum: [`Espresso`, `Frappuccino roast`]
      },
      caffeineCount: { type: [Number], default: undefined },
      syrup: {
         type: String,
         trim: true,
         maxlength: [10, `Drink syrup can't have more than 10 characters.`],
         minlength: [5, `Drink syrup can't have less than 5 characters.`]
      },
      syrupCount: { type: [Number], default: undefined },
      body: {
         type: String,
         trim: true,
         maxlength: [10, `Drink body can't have more than 10 characters.`],
         minlength: [5, `Drink body can't have less than 5 characters.`]
      },
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
