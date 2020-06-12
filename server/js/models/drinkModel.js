"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const slugify_1 = __importDefault(require("slugify"));
const drinkSchema = new mongoose_1.default.Schema({
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
        maxlength: [50, `Drink name can't have more than 50 characters.`],
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
        enum: [
            `Espresso`,
            `Blonde espresso`,
            `Decaf espresso`,
            `Half caf espresso`,
            `Frappuccino roast`
        ]
    },
    caffeineCount: { type: [Number], default: undefined },
    caffeine2: {
        type: String,
        enum: [
            `Espresso`,
            `Blonde espresso`,
            `Decaf espresso`,
            `Half caf espresso`,
            `Frappuccino roast`
        ]
    },
    caffeine2Count: { type: [Number], default: undefined },
    syrup: {
        type: String,
        trim: true,
        maxlength: [40, `Drink syrup can't have more than 40 characters.`],
        minlength: [3, `Drink syrup can't have less than 3 characters.`]
    },
    syrupCount: { type: [Number], default: undefined },
    syrup2: {
        type: String,
        trim: true,
        maxlength: [40, `Drink syrup can't have more than 40 characters.`],
        minlength: [3, `Drink syrup can't have less than 3 characters.`]
    },
    syrup2Count: { type: [Number], default: undefined },
    syrup3: {
        type: String,
        trim: true,
        maxlength: [40, `Drink syrup can't have more than 40 characters.`],
        minlength: [3, `Drink syrup can't have less than 3 characters.`]
    },
    syrup3Count: { type: [Number], default: undefined },
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
            `Peach tranquility & jade citrus mint`,
            `Assorted`
        ]
    },
    teaCount: { type: [Number], default: undefined },
    base: {
        type: String,
        enum: [`Coffee base`, `Creme base`]
    },
    baseCount: { type: [Number], default: undefined },
    body: {
        type: String,
        trim: true,
        maxlength: [40, `Drink body can't have more than 40 characters.`],
        minlength: [5, `Drink body can't have less than 5 characters.`]
    },
    whippedCream: Boolean,
    topping: {
        type: String,
        trim: true,
        maxlength: [50, `Drink topping can't have more than 50 characters.`],
        minlength: [3, `Drink topping can't have less than 3 characters.`]
    },
    shaker: {
        type: String,
        enum: [
            `Black tea`,
            `Green tea`,
            `Passion tea`,
            `White tea`,
            `Strawberry acai base`,
            `Very berry hibiscus base`,
            `Mango dragon base`
        ]
    },
    shakerAddition: {
        type: String,
        enum: [
            `Water`,
            `Lemonade`,
            `Coconutmilk`,
            `Blueberry infusion`,
            `Peach infusion`,
            `Guava infusion`
        ]
    },
    shakerAddition2: {
        type: String,
        enum: [
            `Water`,
            `Lemonade`,
            `Coconutmilk`,
            `Blueberry infusion`,
            `Peach infusion`,
            `Guava infusion`
        ]
    },
    driedFruit: {
        type: String,
        enum: [`Strawberries`, `Blackberries`, `Dragon fruits`]
    },
    driedFruitCount: { type: [Number], default: undefined },
    custom: {
        type: String,
        trim: true,
        maxlength: [200, `Drink custom can't have more than 200 characters.`],
        minlength: [5, `Drink custom can't have less than 5 characters.`]
    }
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});
//VIRTUAL POPULATE
drinkSchema.virtual(`starreds`, {
    ref: `Starred`,
    foreignField: `drink`,
    localField: `_id`
});
//BEFORE SAVE AND CREATE, SLUGIFY NAME TO CREATE SLUG FOR URL
drinkSchema.pre(`save`, function (next) {
    this.slug = slugify_1.default(this.name, { lower: true });
    next();
});
const Drink = mongoose_1.default.model(`Drink`, drinkSchema);
exports.default = Drink;
